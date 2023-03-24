'use strict';

const jp = require('jsonpath');
const {
    click,
    write,
    // text,
    into,
    textBox
} = require('taiko');

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

// TODO duplicate functionlaity refactor and rename
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

async function enterAnswerBrowserTests(questionnaire, pageId, questionId, answer) {
    // hardcoding here to handle drop down selection
    if (questionId === 'q-police-force-id') {
        // we use Greater Manchester Police as our standard search
        await write('Manc', into(textBox('Which')));
    }

    const section = questionnaire.sections[pageId];
    if (isDateQuestion(questionId, section)) {
        await enterDateComponentsIntoTextBoxes(section, answer);
        return;
    }

    const isMultiSelectable =
        jp.query(section, `$..properties["${questionId}"].items.anyOf`).length === 1;

    if (isMultiSelectable) {
        const selections = await mapAnyOfAnswersToLookupConstants(answer);

        /* eslint-disable */
        for (const selection of selections) {
            await click(selection);
        }
        /* eslint-enable */
        return;
    }

    const isSelectable = jp.query(section, `$..properties["${questionId}"].oneOf`).length === 1;

    if (isSelectable) {
        await click(answer);
    } else {
        const questionTitle = jp.query(section, `$..properties["${questionId}"].title`);
        if (l10nPrefixRegex.test(questionTitle[0])) {
            questionTitle[0] = jsonTranslator(section, questionnaire.answers);
        }
        await write(answer, into(textBox(questionTitle[0])));
    }
}
exports.enterAnswerBrowserTests = enterAnswerBrowserTests;
