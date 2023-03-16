'use strict';

const jp = require('jsonpath');
const {
    write,
    // text,
    into,
    textBox
} = require('taiko');

function isDateQuestion(questionId, section) {
    const format = jp.query(section, `$..properties["${questionId}"].format`);
    if (format.length !== 0 && format[0] === 'date-time') {
        return true;
    }
    return false;
}
exports.isDateQuestion = isDateQuestion;
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
exports.enterDateComponentsIntoTextBoxes = enterDateComponentsIntoTextBoxes;
async function enterAnswerBrowserTests(questionnaire, pageId, questionId, answer) {
    const section = questionnaire.sections[pageId];
    if (isDateQuestion(questionId, section)) {
        await enterDateComponentsIntoTextBoxes(section, answer);
    } else {
        const questionTitle = jp.query(section, `$..properties["${questionId}"].title`);
        await write(answer, into(textBox(questionTitle[0])));
    }
}
exports.enterAnswerBrowserTests = enterAnswerBrowserTests;
