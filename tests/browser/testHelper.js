'use strict';

const jp = require('jsonpath');
const {click, write, into, textBox} = require('taiko');

const jsonTranslator = require('./getValueContextualiser');

const l10nPrefixRegex = /^l10nt/;
const answerIsAnArrayRegex = /^\{.*\}$/;

function isDateQuestion(questionId, section) {
    const format = jp.query(section, `$..properties["${questionId}"].format`);
    if (format.length !== 0 && format[0] === 'date-time') {
        return true;
    }
    return false;
}

async function enterDateAnswerIntoTextBoxes(section, answer) {
    const precision = jp.query(section, `$..precision`)[0];
    // date is in ISO 8601 format
    const d = new Date(answer);
    if (precision.includes('DD')) {
        await write(d.getDay(), into(textBox('Day')));
    }
    await write(d.getMonth(), into(textBox('Month')));
    await write(d.getFullYear(), into(textBox('Year')));
}

// TODO duplicate functionlaity refactor and rename, see routing/testHelper.js
async function mapAnyOfAnswersToLookupConstants(answer) {
    const answerArray = [];
    if (!answerIsAnArrayRegex.test(answer)) {
        answerArray.push(answer);
        return answerArray;
    }

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

async function selectOptions(answer) {
    const selections = await mapAnyOfAnswersToLookupConstants(answer);
    /* eslint-disable */
    for (const selection of selections) {
        await click(selection);
    }
    /* eslint-enable */
}

function isMultipleSelectionQuestion(section, questionId) {
    return jp.query(section, `$..properties["${questionId}"].items.anyOf`).length === 1;
}

async function enterAnswerIntoTextBox(section, questionId, questionnaire, answer) {
    const questionTitle = jp.query(section, `$..properties["${questionId}"].title`);
    if (l10nPrefixRegex.test(questionTitle[0])) {
        questionTitle[0] = jsonTranslator(section, questionnaire.answers);
    }
    await write(answer, into(textBox(questionTitle[0])));
}

async function selectOption(questionId, answer) {
    // hardcoding here to handle drop down selection
    if (questionId === 'q-police-force-id') {
        // we use Greater Manchester Police as our standard search
        await write('Manc', into(textBox('Which')));
    }
    await click(answer);
}

function isSingleSelectionQuestion(section, questionId) {
    return (
        jp.query(section, `$..properties["${questionId}"].oneOf`).length === 1 ||
        jp.query(section, `$..properties["${questionId}"].const`).length === 1
    );
}

async function enterAnswerBrowserTests(questionnaire, pageId, questionId, answer) {
    const section = questionnaire.sections[pageId];
    if (isDateQuestion(questionId, section)) {
        await enterDateAnswerIntoTextBoxes(section, answer);
        return;
    }

    if (isMultipleSelectionQuestion(section, questionId)) {
        await selectOptions(answer);
        return;
    }

    if (isSingleSelectionQuestion(section, questionId)) {
        await selectOption(questionId, answer);
    } else {
        await enterAnswerIntoTextBox(section, questionId, questionnaire, answer);
    }
}
exports.enterAnswerBrowserTests = enterAnswerBrowserTests;
