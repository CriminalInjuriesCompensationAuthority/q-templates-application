'use strict';

const Ajv = require('ajv');
const AjvErrors = require('ajv-errors');
const jp = require('jsonpath');
const createQRouter = require('q-router');
const {getSection} = require('./getSection');
const logger = require('../logger');

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

function anyOfSingleAnswerResolver(section, questionId, answer, answerObj) {
    const lookup = jp.query(
        section,
        `$..properties["${questionId}"].items.anyOf[?(@.title == "${answer}")]`
    )[0].const;

    answerObj[questionId] = [lookup];
}

function mapAnswersToLookupConstants(answer) {
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
    return answerArray;
}

function anyOfArrayAnswerResolver(answer, section, questionId, answerObj) {
    const answerArray = mapAnswersToLookupConstants(answer);

    const newArray = answerArray.map(function(selection) {
        return jp.query(
            section,
            `$..properties["${questionId}"].items.anyOf[?(@.title == "${selection}")]`
        )[0].const;
    });
    answerObj[questionId] = newArray;
}

function anyOfAnswerResolver(answer, section, questionId, answerObj) {
    if (answerIsAnArrayRegex.test(answer)) {
        anyOfArrayAnswerResolver(answer, section, questionId, answerObj);
    } else {
        anyOfSingleAnswerResolver(section, questionId, answer, answerObj);
    }

    return answerObj;
}

function resultFound(queryResultArray) {
    return queryResultArray.length !== 0;
}

function isQuestionAnAnyOf(section, questionId) {
    const queryResultArray = jp.query(section, `$..properties["${questionId}"].items.anyOf`);
    if (resultFound(queryResultArray)) {
        return true;
    }
    return false;
}

function answerResolver(section, questionId, answer) {
    const answerObj = {};

    if (isQuestionAnAnyOf(section, questionId)) {
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
    logger.debug(questionnaire.answers[pageId]);
}
exports.answerQuestion = answerQuestion;
