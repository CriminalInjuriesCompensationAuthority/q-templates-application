'use strict';

/* global beforeScenario, afterScenario, gauge, step */
/* eslint no-undef: "error" */

const path = require('path');
const {v4: uuidv4} = require('uuid');
const assert = require('assert');
const createQRouter = require('q-router');

const {
    openBrowser,
    closeBrowser,
    goto,
    screenshot,
    click,
    currentURL,
    resizeWindow,
    text
} = require('taiko');
const templates = require('./templateFactory');
const {answerQuestion} = require('./routing/testHelper');
const {enterAnswerBrowserTests} = require('./browser/testHelper');

const {environment} = process.env;
const applicationEntryPointUrl = process.env.application_entry_point_url;
const windowSizeWidth = process.env.window_size_width;
const windowSizeHeight = process.env.window_size_height;
const headless = process.env.headless_chrome === 'true';
const runBrowserTests = process.env.run_ui_tests === 'true';
const pageIdPrefixRegex = /^p-{1,2}/;

let questionnaire;
let currentBrowserTestPageId;

beforeScenario(async () => {
    const uuidV4 = uuidv4();
    questionnaire = templates['sexual-assault'](uuidV4);
    questionnaire.currentSectionId = questionnaire.routes.initial;
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
        try {
            const page = await currentURL();
            assert.ok(page.includes(pageId.replace(pageIdPrefixRegex, '')));
            currentBrowserTestPageId = pageId;
            if (page.includes('check-your-answers')) {
                await resizeWindow({width: 1440, height: 7680});
                await gauge.screenshot();
            }
        } catch (error) {
            if (pageId === 'p--confirmation' && environment === 'local') {
                console.log('\nIS YOUR VPN ENABLED? p--confirmation page check will fail !!');
            }
            throw error;
        }
    } else {
        assert.equal(pageId, questionnaire.currentSectionId);
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
step('When they answer <answer> to question <questionId>', async function(answer, questionId) {
    if (runBrowserTests) {
        await enterAnswerBrowserTests(questionnaire, currentBrowserTestPageId, questionId, answer);
    } else {
        answerQuestion(questionnaire, questionId, answer);
    }
});

/* eslint func-names: ["error", "never"] */
step('And they answer <answer> to question <questionId>', async function(answer, questionId) {
    if (runBrowserTests) {
        await enterAnswerBrowserTests(questionnaire, currentBrowserTestPageId, questionId, answer);
    } else {
        answerQuestion(questionnaire, questionId, answer);
    }
});

/* eslint func-names: ["error", "never"] */
step('Assert page content contains <content>', async function(content) {
    if (runBrowserTests) {
        try {
            assert.ok(await text(content).exists(0, 0));
            await resizeWindow({width: 1440, height: 3456});
            await gauge.screenshot();
        } catch (error) {
            if (environment === 'local') {
                console.log(
                    '\nIS YOUR VPN ENABLED? THE CHECK CONTENT OF CONFIRMATION STEP WILL FAIL !'
                );
            }
            throw error;
        }
    }
});

step('Assert page content contains a valid CRN', async function() {
    if (!runBrowserTests) {
        gauge.message(`Ignoring CRN check for low level routign tests: ${environment}`);
        return;
    }

    if (environment !== 'local') {
        assert.ok(await text(/\d{2}\\\d{6}/).exists());
    } else {
        gauge.message(`Ignoring CRN check for this environment: ${environment}`);
    }
});
