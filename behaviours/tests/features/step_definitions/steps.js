'use strict';

const {
    Given,
    When,
    Then,
    Before,
    After,
    BeforeAll,
    AfterAll,
    setDefaultTimeout,
    defineParameterType
} = require('@cucumber/cucumber');
const templates = require('../utils/templates');
const answerFormatter = require('../utils/answerFormatter');
const {createStateTracker, getUnvisitedPaths, writePathsToFile} = require('../utils/stateTracker');
const routerSteps = require('./routerStepFunctions');
const dcsSteps = require('./dcsStepFunctions');
const cwSteps = require('./cwStepFunctions');
const {
    writeQuestionnaireToFile,
    compareFixtures,
    deleteFixtures
} = require('../utils/fixtureComparer');

const secrets = require('../../../env/default/test.secrets');

let testObject;
let target;

//Set default timeout
setDefaultTimeout(60 * 1000);

//Set custom parameters
//Custom parameters are defined using regexps, but cucumber always takes the match for the first group
//Unless we enforce either "" or '' we therefore have to match both and remove both

const stringRegex = /("([^"]*)"|'([^']*)')/;
function stringTransformer(s) {
    return s.replaceAll('"', '').replaceAll("'", '');
}

defineParameterType({name: 'answer', regexp: stringRegex, transformer: stringTransformer});
defineParameterType({name: 'page', regexp: stringRegex, transformer: stringTransformer});
defineParameterType({name: 'context', regexp: /.+/});
defineParameterType({name: 'question', regexp: stringRegex, transformer: stringTransformer});
defineParameterType({name: 'postcode', regexp: stringRegex, transformer: stringTransformer});
defineParameterType({name: 'task', regexp: stringRegex, transformer: stringTransformer});
defineParameterType({name: 'status', regexp: stringRegex, transformer: stringTransformer});

BeforeAll(async function() {
    target = this.parameters.target;
    console.log(`Running against ${target}...`);
    if (target === 'router') {
        testObject = {
            answers: {},
            questionnaire: undefined,
            qRouter: undefined,
            saveFixtures: this.parameters.saveFixtures,
            compareFixtureFiles: this.parameters.compareFixtures,
            fullFixtureComparison: this.parameters.fullFixtureComparison,
            stateTracker: createStateTracker(
                templates['sexual-assault']('4187989b-4af8-415e-9715-3912f9c8918c')
            )
        };
        deleteFixtures();
    } else if (target === 'dcs') {
        testObject = {
            answers: {},
            questionnaireId: '',
            currentSectionId: '',
            DCS_URL: this.parameters.DCS_URL,
            DCS_JWT: this.parameters.DCS_JWT,
            ownerId: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
            externalId: 'urn:uuid:f81d4fae-7dec-11d0-a765-123456781234',
            isAuthenticated: false,
            origin: 'web'
        };
    } else if (target === 'cw') {
        testObject = {
            environment: this.parameters.environment,
            one_login_environment: this.parameters.one_login_environment,
            headless: this.parameters.headless,
            windowSizeWidth: this.parameters.window_size_width,
            windowSizeHeight: this.parameters.window_size_height,
            entryPoint: this.parameters.entryPoint,
            templateSections: templates['sexual-assault']('test-id').sections,
            secrets: secrets(this.parameters.environment),
            templateVersion: this.parameters.templateVersion
        };
        console.log(`Running in headless mode: ${this.parameters.headless}`);
        await cwSteps.before(testObject);
    }
    testObject.emailAddress = this.parameters.emailAddress;
    testObject.telephoneNumber = this.parameters.telephoneNumber;
});

AfterAll(() => {
    if (target === 'cw') {
        cwSteps.after(testObject);
    } else if (target === 'router') {
        if (testObject.compareFixtureFiles) {
            let fixtureTarget = 'partialFixture.json';
            if (testObject.fullFixtureComparison) {
                fixtureTarget = 'fullFixture.json';
            }
            writeQuestionnaireToFile(testObject.questionnaire, fixtureTarget);
            compareFixtures(fixtureTarget);
            if (!testObject.saveFixtures) {
                deleteFixtures();
            }
        }
        const unvisitedPaths = getUnvisitedPaths(
            templates['sexual-assault']('bb6c1992-f935-412a-9c96-aadd48ef4b6a'),
            testObject.stateTracker
        );

        writePathsToFile(unvisitedPaths, target);

        const visitedCount = testObject.stateTracker.allPairsCount - unvisitedPaths.length;
        const visitedPercentage = Math.round(
            (visitedCount / testObject.stateTracker.allPairsCount) * 100
        );

        console.log(`\n\n########################################`);
        console.log(`Total source/target pairs count: ${testObject.stateTracker.allPairsCount}`);
        console.log(`Unvisited source/target pairs count: ${unvisitedPaths.length}`);
        console.log(`Visited source/target pairs count: ${visitedCount}`);
        console.log(`Coverage: ${visitedPercentage}%`);
        console.log(`########################################\n\n`);
    }
});

Before(async function(testCase) {
    // Make scenario tags available through this.tags
    this.tags = testCase.pickle.tags.map(tag => tag.name);

    if (target === 'router') {
        routerSteps.before(testObject);
    }
});

After(async function(testCase) {
    if (target === 'cw') {
        if (testCase.result.status === 'FAILED') {
            const pageName = testCase.pickle.name.split(' ').at(-1);
            await cwSteps.takeScreenshot(testObject.page, pageName);
        }
    }
});

Given('the user authenticates with OIDC', async function() {
    await cwSteps.authenticateToOIDCProvider(testObject);
});

Given('the user creates an application for compensation', async function() {
    if (target === 'router') {
        routerSteps.createsApplication(testObject);
    } else if (target === 'dcs') {
        await dcsSteps.createsApplication(testObject);
    } else if (target === 'cw') {
        await cwSteps.createsApplication(testObject);
    }
});

Given('the user is on page {page}', async function(pageId) {
    if (target === 'router') {
        routerSteps.isOnPage(testObject, pageId);
    } else if (target === 'dcs') {
        await dcsSteps.isOnPage(testObject, pageId);
    } else if (target === 'cw') {
        await cwSteps.isOnPage(testObject, pageId);
    }
});

When('the user answers {answer} to the question {question}', async function(answer, questionId) {
    if (target === 'router') {
        routerSteps.answersQuestion(testObject, answerFormatter(answer), questionId);
    } else if (target === 'dcs') {
        await dcsSteps.answersQuestion(testObject, answerFormatter(answer), questionId);
    } else if (target === 'cw') {
        await cwSteps.answersQuestion(testObject, answerFormatter(answer), questionId);
    }
});

When('the user answers {answer} \\({context}\\) to the question {question}', async function(
    answer,
    context,
    questionId
) {
    if (target === 'router') {
        routerSteps.answersQuestion(testObject, answerFormatter(answer), questionId);
    } else if (target === 'dcs') {
        await dcsSteps.answersQuestion(testObject, answerFormatter(answer), questionId);
    } else if (target === 'cw') {
        await cwSteps.answersQuestion(testObject, answerFormatter(answer), questionId);
    }
});

When('the user inputs their telephone number to the question {question}', async function(
    questionId
) {
    if (target === 'router') {
        routerSteps.answersQuestion(
            testObject,
            answerFormatter(testObject.telephoneNumber),
            questionId
        );
    } else if (target === 'dcs') {
        await dcsSteps.answersQuestion(
            testObject,
            answerFormatter(testObject.telephoneNumber),
            questionId
        );
    } else if (target === 'cw') {
        await cwSteps.answersQuestion(
            testObject,
            answerFormatter(testObject.telephoneNumber),
            questionId
        );
    }
});

When('the user inputs their email address to the question {question}', async function(questionId) {
    if (target === 'router') {
        routerSteps.answersQuestion(
            testObject,
            answerFormatter(testObject.emailAddress),
            questionId
        );
    } else if (target === 'dcs') {
        await dcsSteps.answersQuestion(
            testObject,
            answerFormatter(testObject.emailAddress),
            questionId
        );
    } else if (target === 'cw') {
        await cwSteps.answersQuestion(
            testObject,
            answerFormatter(testObject.emailAddress),
            questionId
        );
    }
});

When('the user enters {postcode} into the postcode lookup', async function(postcode) {
    if (target === 'cw') {
        await cwSteps.enterPostcodeLookup(testObject, postcode);
    } else {
        throw new Error('Postcode lookup can only be used when running against cica web');
    }
});
When('the user selects find address', async function() {
    if (target === 'cw') {
        await cwSteps.findAddress(testObject);
    } else {
        throw new Error('Postcode lookup can only be used when running against cica web');
    }
});
When('the user selects {answer} from the found addresses', async function(address) {
    if (target === 'cw') {
        await cwSteps.selectAddress(testObject, address);
    } else {
        throw new Error('Postcode lookup can only be used when running against cica web');
    }
});
When('the user continues', async function() {
    if (target === 'router') {
        routerSteps.continues(testObject);
    } else if (target === 'dcs') {
        await dcsSteps.continues(testObject);
    } else if (target === 'cw') {
        await cwSteps.continues(testObject);
    }
});

When('the user advances the application', async function() {
    if (target === 'router') {
        routerSteps.advances(testObject);
    } else if (target === 'dcs') {
        await dcsSteps.advances(testObject);
    } else if (target === 'cw') {
        await cwSteps.advances(testObject);
    }
});

When('the user selects previous page', async function() {
    if (target === 'router') {
        routerSteps.selectsPreviousPage(testObject);
    } else if (target === 'dcs') {
        await dcsSteps.selectsPreviousPage(testObject);
    } else if (target === 'cw') {
        await cwSteps.selectsPreviousPage(testObject);
    }
});

When('the user selects "Agree and submit"', async function() {
    if (target === 'router') {
        return 'ok';
    } else if (target === 'dcs') {
        return 'ok';
    } else if (target === 'cw') {
        return 'ok';
    }
});

When('the user has completed the application', async function() {
    if (target === 'router') {
        return 'ok';
    } else if (target === 'dcs') {
        await dcsSteps.completedApplication(testObject);
    } else if (target === 'cw') {
        await cwSteps.completedApplication(testObject);
    }
});

Then('the {task} task status will be marked as {status}', async function(task, status) {
    if (task === 't-check-your-answers') {
        console.log('Skipping confirmation task completion check');
        return;
    }
    if (target === 'router') {
        await routerSteps.checkTaskStatus(testObject, task, status);
    } else if (target === 'dcs') {
        return 'ok';
    } else if (target === 'cw') {
        await cwSteps.checkTaskStatus(testObject, task, status);
    }
});

When('the user selects the task {task}', async function(task) {
    if (target === 'router') {
        await routerSteps.selectTask(testObject, task);
    } else if (target === 'dcs') {
        return 'ok';
    } else if (target === 'cw') {
        await cwSteps.selectTask(testObject, task);
    }
});

When('the user accepts all cookies', async function() {
    if (target === 'cw') {
        await cwSteps.acceptCookies(testObject);
    } else {
        throw new Error('Accept cookies can only be used when running against cica web');
    }
});

When('the user navigates to page {page}', async function(page) {
    if (target === 'cw') {
        await cwSteps.navigateToPage(testObject, page);
    } else {
        throw new Error('Browser navigation can only be used when running against cica web');
    }
});

When('the user selects sign in', async function() {
    if (target === 'cw') {
        await cwSteps.signIn(testObject);
    } else {
        throw new Error('One login can only be used when running against cica web');
    }
});

When('the user enters their one-login email', async function() {
    if (target === 'cw') {
        await cwSteps.enterOneLoginEmail(testObject);
    } else {
        throw new Error('One login can only be used when running against cica web');
    }
});

When('the user enters their one-login password', async function() {
    if (target === 'cw') {
        await cwSteps.enterOneLoginPassword(testObject);
    } else {
        throw new Error('One login can only be used when running against cica web');
    }
});

When('the user enters their security code', async function() {
    if (target === 'cw') {
        await cwSteps.enterSecurityCode(testObject);
    } else {
        throw new Error('One login can only be used when running against cica web');
    }
});

Given('the user is on optional page {page}', async function(page) {
    if (target === 'cw') {
        await cwSteps.isOnOptionalPage(testObject, page);
    } else {
        throw new Error('One login can only be used when running against cica web');
    }
});

When('the user continues from the optional page {page}', async function(page) {
    if (target === 'cw') {
        await cwSteps.continueFromOptionalPage(testObject, page);
    } else {
        throw new Error('Browser navigation can only be used when running against cica web');
    }
});

When('the answer {answer} is unchecked', async function(answer) {
    if (target === 'cw') {
        await cwSteps.answerIsUnchecked(testObject, answer);
    } else {
        throw new Error('Browser interaction can only be used when running against cica web');
    }
});

When('the user accepts analytics cookies', async function() {
    if (target === 'cw') {
        await cwSteps.acceptAnalyticsCookies(testObject);
    } else {
        throw new Error('Accept cookies can only be used when running against cica web');
    }
});

When('the user clicks the sign in link', async function() {
    if (target === 'cw') {
        await cwSteps.clickSigninLink(testObject);
    } else {
        throw new Error('One login can only be used when running against cica web');
    }
});

When('the user clicks the browser back button', async function() {
    if (target === 'cw') {
        await cwSteps.clickBackButton(testObject);
    } else {
        throw new Error('Browser back button can only be used when running against cica web');
    }
});
