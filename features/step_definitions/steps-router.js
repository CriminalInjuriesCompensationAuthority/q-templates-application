'use strict';

const {
    Given,
    When,
    Then,
    Before,
    BeforeAll,
    setDefaultTimeout
} = require('@cucumber/cucumber');
const assert = require('assert');
const router = require('q-router');
const qExpression = require('q-expressions');
const templates = require('../utils/templates');
const answerFormatter = require('../utils/answerFormatter');

let questionnaire = undefined;
let qRouter = undefined;
let answers = {};
let currentQuestionId;
let assignedRoles = [];

//Set default timeout
setDefaultTimeout(60 * 1000);

BeforeAll(() => {
    console.log(`Running against q-router...`);
});

Before((testCase) => {
    // Make scenario tags available thru this.tags
    this.tags = testCase.pickle.tags.map((tag) => tag.name);

    // Re-initialise qRouter for each scenario
    if (questionnaire) {
        qRouter = router(questionnaire);
    }
    assignedRoles = [];
});

Given('the user creates an application for compensation', function () {
    questionnaire = templates['sexual-assault']('test-id');
    // ToDo: qRouter does not return an answers object if the initial spec doesn't have one.
    questionnaire.answers = {};
    qRouter = router(questionnaire);
    const questionnaireType = qRouter.current().context.type;
    assert.ok(questionnaireType === 'apply-for-compensation');
});

Given('the application is in the state {string}', function (pageId) {
    const currentState = qRouter.current().id;
    assert.ok(currentState === pageId);
});

When(
    'the user answers {string} to the question {string}',
    async function (answer, questionId) {
        if (answers && questionId in answers) {
            const multipleAnswers =
                typeof answers[questionId] === 'object'
                    ? [...answers[questionId], answerFormatter(answer)]
                    : [answers[questionId], answerFormatter(answer)];
            answers[questionId] = multipleAnswers;
        } else if (
            questionId.includes('q-applicant-physical-injury') ||
            questionId.includes('q-applicant-incident-type')
        ) {
            answers[questionId] = [answer];
        } else {
            answers[questionId] = answerFormatter(answer);
        }
        currentQuestionId = questionId;
        assert.ok(questionId in answers);
    }
);

When('the user answers the question', async function () {
    // Some legacy tests check for errors when an answer which is too long is inputted. The router cannot do that so this emulates it
    if (
        qRouter.current().context.sections[qRouter.current().id].schema
            ?.properties?.[currentQuestionId]?.maxLength <
        answers[currentQuestionId].length
    ) {
        return;
    }

    const currentState = qRouter.current().id;
    const nextState = qRouter.next(answers, currentState);
    questionnaire = nextState.context;
    answers = {};
    assert.ok(currentState in nextState.context.answers);
});

When('the user advances the application', async function () {
    const currentState = qRouter.current().id;
    if (
        currentState !== 'p--check-your-answers' &&
        currentState !== 'p--download-your-answers' &&
        qRouter.current().context.sections[currentState].schema?.meta
            ?.pageType !== 'context'
    ) {
        // Some legacy tests submit a page without doing anything. This ignores such cases
        if (qRouter.current().context.answers[currentState] === undefined) {
            return;
        }
    }
    let tempAnswers = {};
    // Re-submit previously submitted answers if no new answers are provided
    if (qRouter.current().context.answers[currentState] !== undefined) {
        tempAnswers = qRouter.current().context.answers[currentState];
    }
    const nextState = qRouter.next(tempAnswers, currentState);
    questionnaire = nextState.context;
    assert.ok(currentState in nextState.context.answers);
});

When('the user selects previous page', async function () {
    const currentState = qRouter.current().id;
    const previousState = qRouter.previous(currentState);
    questionnaire = previousState.context;
    assert.ok(qRouter.current().id in previousState.context.answers);
});

When('the user selects "Agree and submit"', async function () {
    // TODO: make this do something
    return 'ok';
});

When('the user has completed the application', async function () {
    // TODO: make this do something
    return 'ok';
});

When('the user initialises the {string} state', async function (task) {
    // ToDo: qRouter should really cope with this
    const target = task; // #t_applicant_personal-details
    const taskName = task.substring(1); // t_applicant_personal-details

    const nextState = qRouter.current(target);
    questionnaire = nextState.context;
    assert.ok(
        nextState.id === nextState.context.routes.states[taskName].initial
    );
});

Then('the status of {string} is {string}', async function (machineId, status) {
    const currentStatuses = qRouter.current().value;
    assert.ok(machineId in currentStatuses);
    assert.ok(status === currentStatuses[machineId]);
});

Then(
    'the {string} role should evaluate to be {string}',
    async function (roleName, roleState) {
        const condition = roleState === 'true'
            ? ['|role.all', roleName]
            : ['==', ['|role.all', roleName], false];
        const actual = qExpression.evaluate(condition, questionnaire);

        assert.ok(actual);
        if (roleState === 'true') {
            assignedRoles.push(roleName);
        } else if (assignedRoles.includes(roleName)) {
            assignedRoles.splice(assignedRoles.indexOf(roleName), 1);
        }
        const allRoles = Object.keys(
            qRouter.current().context.attributes.q__roles
        );
        allRoles.forEach((role) => {
            if (!assignedRoles.includes(role)) {
                assert.ok(
                    qExpression.evaluate(
                        ['==', ['|role.all', role], false],
                        questionnaire
                    )
                );
            }
        });
    }
);

Then(
    'the following roles should all evaluate to be {string}',
    async function (roleState, roleTable) {
        roleTable.rawTable.forEach((row) => {
            const roleName = row[0];
            const condition = roleState === 'true'
                ? ['|role.all', roleName]
                : ['==', ['|role.all', roleName], false];
            const actual = qExpression.evaluate(condition, questionnaire);

            assert.ok(actual);
            if (roleState === 'true') {
                assignedRoles.push(roleName);
            } else if (assignedRoles.includes(roleName)) {
                assignedRoles.splice(assignedRoles.indexOf(roleName), 1);
            }
        });
        const allRoles = Object.keys(
            qRouter.current().context.attributes.q__roles
        );
        allRoles.forEach((role) => {
            if (!assignedRoles.includes(role)) {
                assert.ok(
                    qExpression.evaluate(
                        ['==', ['|role.all', role], false],
                        questionnaire
                    )
                );
            }
        });
    }
);
