'use strict';

const Ajv = require('ajv');
const AjvErrors = require('ajv-errors');
const jp = require('jsonpath');
const createQRouter = require('q-router');
const {getSection} = require('./getSection');

const answerIsAnArrayRegex = /^\{.*\}$/;

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

AjvErrors(ajv);

// ajv.addFormat('mobile-uk', ajvFormatsMobileUk);

function pageContainsAnsweredQuestions(questionnaire, pageId) {
    return questionnaire.answers[pageId] !== undefined;
}

function anyOfAnswerResolver(answer, section, questionId, answerObj) {
    const answerArray = [];
    let selectableElement = '';
    Array.from(answer).forEach(char => {
        if (char === ',' && selectableElement === '') {
            return;
        }
        if (char !== '{') {
            if (char === '}') {
                answerArray.push(selectableElement.trim());
                selectableElement = '';
            } else {
                selectableElement = selectableElement.concat(char);
            }
        }
    });

    const newArray = answerArray.map(function(selection) {
        return jp.query(
            section,
            `$..properties["${questionId}"].items.anyOf[?(@.title == "${selection}")]`
        )[0].const;
    });
    answerObj[questionId] = newArray;
    return answerObj;
}

function resultFound(queryResultArray) {
    return queryResultArray.length !== 0;
}

function answerResolver(section, questionId, answer) {
    const answerObj = {};
    // TODO more to do here, change to answer is for anyOf
    // then work out whether it's an array.
    if (answerIsAnArrayRegex.test(answer)) {
        // extract to new function
        return anyOfAnswerResolver(answer, section, questionId, answerObj);
    }

    let queryResultArray = jp.query(
        section,
        `$..properties["${questionId}"].items.anyOf[?(@.title == "${answer}")]`
    );

    if (resultFound(queryResultArray)) {
        answerObj[questionId] = [queryResultArray[0].const];
        return answerObj;
    }

    queryResultArray = jp.query(
        section,
        `$..properties["${questionId}"].oneOf[?(@.title == "${answer}")]`
    );

    if (resultFound(queryResultArray)) {
        answerObj[questionId] = queryResultArray[0].const;
    } else {
        answerObj[questionId] = answer;
    }
    return answerObj;
}

function answerQuestion(questionnaire, questionId, answer) {
    const pageId = questionnaire.currentSectionId;
    const section = questionnaire.sections[pageId];

    const answerObj = answerResolver(section, questionId, answer);

    const jsonAnswer = JSON.parse(JSON.stringify(answerObj));
    const questionnaireDefinition = questionnaire;
    const qRouter = createQRouter(questionnaireDefinition);
    const sectionDetails = getSection(pageId, qRouter);

    const validate = ajv.compile(section);
    // The AJV validate function coerces the answers and mutates the answers object
    const valid = validate(jsonAnswer);
    const coercedAnswers = jsonAnswer;

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
        /* eslint-disable no-param-reassign */
        questionnaire = answeredQuestionnaire;
        /* eslint-enable no-param-reassign */
        return;
    }

    let answers;
    if (pageContainsAnsweredQuestions(questionnaire, pageId)) {
        answers = Object.assign(questionnaire.answers[pageId], coercedAnswers);
    } else {
        answers = coercedAnswers;
    }

    /* eslint no-param-reassign: ["error", { "props": false }] */
    questionnaire.answers[pageId] = answers;
    console.log(questionnaire.answers[pageId]);
}
exports.answerQuestion = answerQuestion;
