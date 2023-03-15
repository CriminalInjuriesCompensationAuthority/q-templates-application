'use strict';

/* global beforeSpec, afterSpec, beforeScenario, afterScenario, gauge, step */
/* eslint no-undef: "error" */

const Ajv = require('ajv');
const AjvErrors = require('ajv-errors');
const path = require('path');
const {v4: uuidv4} = require('uuid');
const assert = require('assert');
const jp = require('jsonpath');
const createQRouter = require('q-router');

const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    screenshot,
    click,
    // text,
    into,
    textBox,
    currentURL,
    resizeWindow
    // dropDown
} = require('taiko');
const templates = require('./templateFactory');

const applicationEntryPointUrl = process.env.application_entry_point_url;
const windowSizeWidth = process.env.window_size_width;
const windowSizeHeight = process.env.window_size_height;
const headless = process.env.headless_chrome === 'true';
const runBrowserTests = process.env.run_ui_tests === 'true';
const pageIdPrefixRegex = /^p-{1,2}/;

// const browserTestsHelper = require('./browser/browserTestsHelper');

let questionnaire;
let currentBrowserTestPageId;

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

AjvErrors(ajv);
// ajv.addFormat('mobile-uk', ajvFormatsMobileUk);

beforeSpec(async () => {
    const uuidV4 = uuidv4();
    questionnaire = templates['sexual-assault'](uuidV4);
    questionnaire.currentSectionId = questionnaire.routes.initial;
});

afterSpec(async () => {});

beforeScenario(async () => {
    if (runBrowserTests) {
        console.log(`Running browser tests: ${runBrowserTests}`);
        console.log(`Running in headless mode: ${headless}`);
        console.log(`Application entry point url: ${applicationEntryPointUrl}`);
        await openBrowser({
            headless,
            args: [
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-first-run',
                '--no-sandbox',
                '--no-zygote',
                `--window-size=${windowSizeWidth},${windowSizeHeight}`,
                `--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61`
            ]
        });
        await goto(applicationEntryPointUrl);
        await click('Accept all cookies');
    }
});

afterScenario(async () => {
    if (runBrowserTests) {
        await closeBrowser();
    }
});

/* eslint func-names: ["error", "never"] */
gauge.customScreenshotWriter = async function() {
    const screenshotFilePath = path.join(
        process.env.gauge_screenshots_dir,
        `screenshot-${process.hrtime.bigint()}.png`
    );
    await screenshot({path: screenshotFilePath});
    return path.basename(screenshotFilePath);
};

function getSection(sectionId, qRouter) {
    let section;
    if (sectionId === 'system') {
        const currentSection = qRouter.current();
        section = {
            id: 'system',
            // Get the context (questionnaire) from the current section
            context: currentSection.context
        };
    } else {
        // Ensure the requested sectionId is available
        section = qRouter.current(sectionId);
        if (!section) {
            throw new Error(`Section "${sectionId}" not found`);
        }
    }
    return section;
}

function isDateQuestion(questionId, section) {
    const format = jp.query(section, `$..properties["${questionId}"].format`);
    if (format.length !== 0 && format[0] === 'date-time') {
        return true;
    }
    return false;
}
async function enterDateComponentsIntoTextBoxes(section, answer) {
    const precision = jp.query(section, `$..precision`)[0];
    // date is in ISO 8601 format
    const d = new Date(answer);
    if (precision.includes('DD')) {
        await write(d.getDay(), into(textBox('Day')));
    }
    await write(d.getMonth(), into(textBox('Month')));
    await write(d.getFullYear(), into(textBox('Year')));
}
async function enterAnswerBrowserTests(questionId, answer) {
    const section = questionnaire.sections[currentBrowserTestPageId];
    if (isDateQuestion(questionId, section)) {
        await enterDateComponentsIntoTextBoxes(section, answer);
    } else {
        const questionTitle = jp.query(section, `$..properties["${questionId}"].title`);
        await write(answer, into(textBox(questionTitle[0])));
    }
}

function pageContainsAnsweredQuestions(pageId) {
    return questionnaire.answers[pageId] !== undefined;
}

function answerQuestion(questionId, answer) {
    const pageId = questionnaire.currentSectionId;
    const section = questionnaire.sections[pageId];
    const node = jp.query(
        section,
        `$..properties["${questionId}"].oneOf[?(@.title == "${answer}")]`
    );

    const answerObj = {};
    if (node.length !== 0) {
        answerObj[questionId] = node[0].const;
    } else {
        answerObj[questionId] = answer;
    }

    const questionAnswer = JSON.parse(JSON.stringify(answerObj));
    const questionnaireDefinition = questionnaire;
    const qRouter = createQRouter(questionnaireDefinition);
    const sectionDetails = getSection(pageId, qRouter);

    const validate = ajv.compile(section);
    // The AJV validate function coerces the answers and mutates the answers object
    const valid = validate(questionAnswer);
    const coercedAnswers = questionAnswer;

    if (!valid) {
        const validationError = new Error({
            name: 'JSONSchemaValidationError',
            info: {
                schema: sectionDetails,
                answers: answerObj,
                coercedAnswers,
                schemaErrors: validate.errors
            }
        });

        throw validationError;
    }

    let answeredQuestionnaire;
    if (sectionDetails.id === 'system') {
        const currentSection = qRouter.current();
        currentSection.context.answers.system = coercedAnswers;
        answeredQuestionnaire = currentSection.context;
        questionnaire = answeredQuestionnaire;
    } else if (pageContainsAnsweredQuestions(pageId)) {
        const mergeAnswers = Object.assign(questionnaire.answers[pageId], coercedAnswers);
        questionnaire.answers[pageId] = mergeAnswers;
        console.log(questionnaire.answers[pageId]);
    } else {
        questionnaire.answers[pageId] = coercedAnswers;
        console.log(questionnaire.answers[pageId]);
    }
}
/* eslint func-names: ["error", "never"] */
step('Given the user is on page <pageId>', async function(pageId) {
    if (runBrowserTests) {
        const page = await currentURL();
        assert.ok(page.includes(pageId.replace(pageIdPrefixRegex, '')));
        if (page.includes('check-your-answers')) {
            await resizeWindow({width: 1440, height: 7680});
            await gauge.screenshot();
        }
        currentBrowserTestPageId = pageId;
    } else {
        console.log(questionnaire.id);
        assert.equal(pageId, questionnaire.currentSectionId);
    }
});

/* eslint func-names: ["error", "never"] */
step('Then the user is on page <pageId>', async function(pageId) {
    if (runBrowserTests) {
        const page = await currentURL();
        assert.ok(page.includes(pageId.replace(pageIdPrefixRegex, '')));
        currentBrowserTestPageId = pageId;
    } else {
        assert.equal(pageId, questionnaire.currentSectionId);
    }
});

/* eslint func-names: ["error", "never"] */
step('When they answer <answer> to question <questionId>', async function(answer, questionId) {
    if (runBrowserTests) {
        const section = questionnaire.sections[currentBrowserTestPageId];
        if (isDateQuestion(questionId, section)) {
            await enterDateComponentsIntoTextBoxes(section, answer);
        } else {
            await click(answer);
        }
    } else {
        answerQuestion(questionId, answer);
    }
});

/* eslint func-names: ["error", "never"] */
step('And they <buttonName>', async function(buttonName) {
    if (runBrowserTests) {
        await click(buttonName);
    } else {
        const qRouter = createQRouter(questionnaire);
        const nextSection = qRouter.next(
            questionnaire.answers[qRouter.current().id],
            qRouter.current().id
        );
        const answeredQuestionnaire = nextSection.context;
        questionnaire = answeredQuestionnaire;
    }
});

/* eslint func-names: ["error", "never"] */
step('And they enter <answer> into question <questionId>', async function(answer, questionId) {
    if (runBrowserTests) {
        await enterAnswerBrowserTests(questionId, answer);
    } else {
        answerQuestion(questionId, answer);
    }
});

/* eslint func-names: ["error", "never"] */
step('When they enter <answer> into question <questionId>', async function(answer, questionId) {
    if (runBrowserTests) {
        await enterAnswerBrowserTests(questionId, answer);
    } else {
        answerQuestion(questionId, answer);
    }
});

/// ////////////////////////////////////////////////////////////////////
