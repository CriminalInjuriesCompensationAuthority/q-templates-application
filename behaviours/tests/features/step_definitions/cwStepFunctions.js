'use strict';
const assert = require('assert');
const {generateToken} = require('authenticator');

const {chromium} = require('playwright');

const screenshotRegistry = [];

function removeSectionIdPrefix(sectionId) {
    if (sectionId.startsWith('p--')) {
        return sectionId.replace(/^p--/, 'info-');
    }
    return sectionId.replace(/^p-/, '');
}

async function authenticateToOIDCProvider(testObject) {
    testObject.authenticationPage = await testObject.context.newPage();
    if (testObject.environment !== 'prod') {
        try {
            await testObject.authenticationPage.goto(testObject.secrets.ONE_LOGIN_BASIC_AUTH_URL);
        } catch (err) {
            // console.log({err});
        }
    } else {
        console.log(`Ignoring basic authentication to OIDC provider for "${environment}"`);
    }
    await logOutOfOneLogin(testObject);
}

async function logOutOfOneLogin(testObject) {
    await testObject.page.goto(testObject.secrets.ONE_LOGIN_LOGOUT_URL);
}

async function signIn(testObject) {
    await testObject.page
        .getByRole('button')
        .filter({hasText: 'Sign in'})
        .click({timeout: 3000});
}

async function enterOneLoginEmail(testObject) {
    await testObject.page.waitForTimeout(200);
    await testObject.page.locator(`#email`).clear();
    await testObject.page
        .locator(`#email`)
        .fill(testObject.secrets.ONE_LOGIN_ACCOUNT_EMAIL_ADDRESS);
}

async function enterOneLoginPassword(testObject) {
    await testObject.page.waitForTimeout(200);
    await testObject.page.locator(`#password`).clear();
    await testObject.page.locator(`#password`).fill(testObject.secrets.ONE_LOGIN_ACCOUNT_PASSWORD);
}

async function enterSecurityCode(testObject) {
    await isOnPage(testObject, 'enter-authenticator-app-code');
    await testObject.page.waitForTimeout(200);
    const otp = generateToken(testObject.secrets.FORMATED_2FA_KEY);
    await testObject.page.locator(`#code`).clear();
    await testObject.page.locator(`#code`).fill(otp);
}

async function isOnOptionalPage(testObject, page) {
    return true;
}

async function continueFromOptionalPage(testObject, page) {
    if (testObject.page.url().includes(page)) {
        await continues(testObject);
    }
    return true;
}

async function navigateToPage(testObject, page) {
    await testObject.page.goto(`${testObject.entryPoint}${page}`);
}

async function answerIsUnchecked(testObject, answer) {
    const checked = await testObject.page.locator(`[value="${answer}"]`).isChecked();
    assert.ok(checked === false);
}

async function acceptCookies(testObject) {
    await testObject.page
        .getByRole('button')
        .filter({hasText: 'Accept all cookies'})
        .click();
}

async function acceptAnalyticsCookies(testObject) {
    await testObject.page
        .getByRole('button')
        .filter({hasText: 'Accept analytics cookies'})
        .click();
}

async function openDetailsComponent(page) {
    // select any details components if any
    try {
        await page.locator('.govuk-details').click({timeout: 500});
    } catch (error) {
        // do nothing there is no details component
    }
}

async function takeScreenshot(page, name) {
    let path = `./behaviours/reports/cucumber/${name}.png`;
    if (name.at(-1) === '.') {
        path = `./behaviours/reports/cucumber/${name}png`;
    }
    await openDetailsComponent(page);
    await page.screenshot({fullPage: true, path: path.replaceAll('"', '')});
}

async function before(testObject) {
    testObject.browser = await chromium.launch({headless: testObject.headless});
    testObject.context = await testObject.browser.newContext();
    testObject.page = await testObject.context.newPage();
}

async function after(testObject) {
    await testObject.browser.close();
}

async function createsApplication(testObject) {
    await testObject.page.goto(`${testObject.entryPoint}/apply/start-or-resume`);
    let domain = testObject.entryPoint;
    if (domain.includes('https://')) {
        domain = domain.replace('https://', '');
    }
    if (testObject.templateVersion !== 'latest') {
        await testObject.context.addCookies([
            {
                name: 'featureFlags',
                value: `{"templateName": "sexual-assault", "templateVersion": "${testObject.templateVersion}", "bearerAuth": "${testObject.secrets.FEATURE_FLAGS_TOKEN}"}`,
                domain,
                path: '/'
            }
        ]);
    }
    await testObject.page.getByLabel(`Start a new application`).check();
    await testObject.page
        .getByRole('button')
        .filter({hasText: 'continue'})
        .click();
}

async function isOnPage(testObject, pageId) {
    if (pageId === 'p--confirmation' && testObject.environment === 'local') {
        console.log('Skipping confirmation check for local');
        return;
    }
    const pageUrl = await testObject.page.url();
    const pageName = removeSectionIdPrefix(pageId);
    if (screenshotRegistry.includes(pageName)) {
        await takeScreenshot(testObject.page, pageName);
    }
    assert.ok(pageUrl.includes(pageName));
}

async function answersQuestion(testObject, answer, questionId) {
    // PlayWright sometimes tries to fill textboxes before they have rendered on a page (this is most commonly the case for hidden questions).
    // We therefore wait a small amount of time before inputting each answer.
    await testObject.page.waitForTimeout(200);

    if (questionId === 'q-police-force-id') {
        // Police force question
        const policeForceName = testObject.templateSections[
            'p--which-police-force-is-investigating-the-crime'
        ].schema.properties[questionId].oneOf.filter(force => force.const === parseInt(answer))[0]
            .title;
        await testObject.page.locator(`#${questionId}`).clear();
        await testObject.page.locator(`#${questionId}`).fill(policeForceName.substring(1));
        await testObject.page.getByRole('option', {name: policeForceName}).click();
    } else if (typeof answer === 'string' && answer.includes('T00:00:00.000Z')) {
        // Dates - including check for partial dates
        const [year, month, day] = answer.substring(0, 10).split('-');
        await testObject.page.locator(`#${questionId}\\[year\\]`).clear();
        await testObject.page.locator(`#${questionId}\\[year\\]`).fill(year);

        await testObject.page.locator(`#${questionId}\\[month\\]`).clear();
        await testObject.page.locator(`#${questionId}\\[month\\]`).fill(month);

        if (await testObject.page.locator(`#${questionId}\\[day\\]`).isVisible()) {
            await testObject.page.locator(`#${questionId}\\[day\\]`).clear();
            await testObject.page.locator(`#${questionId}\\[day\\]`).fill(day);
        }
    } else if (
        (await testObject.page
            .getByRole('textbox')
            .and(testObject.page.locator(`#${questionId}`))
            .count()) > 0
    ) {
        // Text boxes
        await testObject.page.locator(`#${questionId}`).clear();
        await testObject.page.locator(`#${questionId}`).fill(answer);
    } else {
        // Radio buttons and check boxes
        await testObject.page.locator(`[value="${answer}"]`).check();
    }
}
async function enterPostcodeLookup(testObject, postcode) {
    await testObject.page.waitForTimeout(200);
    await testObject.page.locator(`#address-search-input`).clear();
    await testObject.page.locator(`#address-search-input`).fill(postcode);
}
async function findAddress(testObject) {
    await testObject.page.waitForTimeout(200);
    await testObject.page
        .getByRole('button')
        .filter({hasText: 'Find address'})
        .click();
}
async function selectAddress(testObject, address) {
    await testObject.page.waitForTimeout(200);
    await testObject.page
        .locator('#address-search-results-dropdown')
        .selectOption({label: address});
}
async function continues(testObject) {
    if (
        (await testObject.page
            .getByRole('button')
            .filter({hasText: 'agree and submit'})
            .count()) > 0
    ) {
        await testObject.page
            .getByRole('button')
            .filter({hasText: 'agree and submit'})
            .click();
    } else {
        await testObject.page
            .getByRole('button')
            .filter({hasText: 'continue'})
            .click();
    }
}

function advances(testObject) {
    return continues(testObject);
}

async function selectsPreviousPage(testObject) {
    await testObject.page.getByText('Previous page').click();
}

async function completedApplication(testObject) {
    if (testObject.environment !== 'local') {
        assert.ok(await testObject.page.getByText(/\d{2}\\\d{6}/).toBeVisible());
    }
}

async function clickSigninLink(testObject) {
    await testObject.page.getByText(' Create a GOV.UK One Login to save your progress').click();
}

async function checkTaskStatus(testObject, task, status) {
    const statusOnPage = await testObject.page.locator(`.${task}`).textContent();
    assert.ok(statusOnPage.trim() === status);
}

async function selectTask(testObject, task) {
    await testObject.page
        .locator('.govuk-task-list__item', {has: testObject.page.locator(`.${task}`)})
        .click();
}

async function clickBackButton(testObject) {
    await testObject.page.goBack();
}

module.exports = {
    before,
    after,
    createsApplication,
    isOnPage,
    answersQuestion,
    continues,
    advances,
    selectsPreviousPage,
    completedApplication,
    takeScreenshot,
    enterPostcodeLookup,
    findAddress,
    selectAddress,
    authenticateToOIDCProvider,
    acceptCookies,
    acceptAnalyticsCookies,
    navigateToPage,
    signIn,
    enterOneLoginEmail,
    enterOneLoginPassword,
    enterSecurityCode,
    isOnOptionalPage,
    continueFromOptionalPage,
    answerIsUnchecked,
    clickSigninLink,
    checkTaskStatus,
    selectTask,
    clickBackButton
};
