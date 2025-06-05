'use strict';
const assert = require('assert');
const router = require('q-router');
const templates = require('../utils/templates');
const {writeQuestionnaireToFile} = require('../utils/fixtureComparer');

function before(testObject) {
    if (testObject.questionnaire) {
        testObject.qRouter = router(testObject.questionnaire);
    }
}

function createsApplication(testObject) {
    if (testObject.compareFixtureFiles) {
        let fixtureTarget = 'partialFixture.json';
        if (testObject.fullFixtureComparison) {
            fixtureTarget = 'fullFixture.json';
        }
        writeQuestionnaireToFile(testObject.questionnaire, fixtureTarget);
    }
    testObject.questionnaire = templates['sexual-assault']('8a7e1a1e-8d81-45ab-8f4e-b6b493103b99');
    testObject.questionnaire.answers = {};
    testObject.qRouter = router(testObject.questionnaire);
    const questionnaireType = testObject.qRouter.current().context.type;
    assert.ok(questionnaireType === 'apply-for-compensation');
}

function isOnPage(testObject, pageId) {
    const currentState = testObject.questionnaire.currentSectionId;
    assert.ok(currentState === pageId);
}

function answersQuestion(testObject, answer, questionId) {
    // If the question being answered expects an array
    const schemaExpectsArray =
        testObject.qRouter.current().context.sections[testObject.qRouter.current().id].schema
            ?.properties?.[questionId]?.type === 'array';

    if (schemaExpectsArray) {
        if (!(questionId in testObject.answers)) {
            testObject.answers[questionId] = [];
        }
        testObject.answers[questionId].push(answer);
    } else {
        testObject.answers[questionId] = answer;
    }
    assert.ok(questionId in testObject.answers);
}

function continues(testObject) {
    const currentState = testObject.qRouter.current().id;
    const nextState = testObject.qRouter.next(testObject.answers, currentState);

    // ############ stateTracker
    if (testObject.stateTracker) {
        testObject.stateTracker.stateTargetIds.get(currentState).delete(nextState.id);
    }

    testObject.questionnaire = nextState.context;
    testObject.answers = {};
    assert.ok(currentState in nextState.context.answers);
}

function advances(testObject) {
    const currentState = testObject.qRouter.current().id;
    let tempAnswers = {};
    // Re-submit previously submitted answers if no new answers are provided
    if (testObject.qRouter.current().context.answers[currentState] !== undefined) {
        tempAnswers = testObject.qRouter.current().context.answers[currentState];
    }
    const nextState = testObject.qRouter.next(tempAnswers, currentState);

    // ############ stateTracker
    if (testObject.stateTracker) {
        testObject.stateTracker.stateTargetIds.get(currentState).delete(nextState.id);
    }

    testObject.questionnaire = nextState.context;
    assert.ok(currentState in nextState.context.answers);
}

function selectsPreviousPage(testObject) {
    const currentState = testObject.qRouter.current().id;
    const previousState = testObject.qRouter.previous(currentState);
    testObject.questionnaire = previousState.context;
}

async function checkTaskStatus(testObject, task, status) {
    function convertToCamelCase(str) {
        return str
            .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            })
            .replace(/\s+/g, '');
    }
    assert.ok(
        testObject.questionnaire.attributes.q__statuses[`${task}__completion-status`] ===
            convertToCamelCase(status)
    );
}

async function selectTask(testObject, task) {
    const nextSectionId = testObject.questionnaire.routes.states[task].initial;
    const nextState = testObject.qRouter.current(nextSectionId);
    testObject.questionnaire = nextState.context;
}

module.exports = {
    before,
    createsApplication,
    isOnPage,
    answersQuestion,
    continues,
    advances,
    selectsPreviousPage,
    checkTaskStatus,
    selectTask
};
