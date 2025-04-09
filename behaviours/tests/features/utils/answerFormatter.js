'use strict';

function isDate(dateStr) {
    return dateStr.match(/^\d{2} \d{2} \d{4}$/);
}

function formatDate(dateStr) {
    // Dates are of the format dd mm yyyy
    const splitDate = dateStr.split(' ');
    const day = splitDate[0];
    const month = splitDate[1];
    const year = splitDate[2];
    return `${year}-${month}-${day}T00:00:00.000Z`;
}

function isBooleanString(answer) {
    return answer === 'true' || answer === 'false';
}

function format(answerString) {
    if (isDate(answerString)) {
        return formatDate(answerString);
    } else if (isDate('01 ' + answerString)) {
        return formatDate('01 ' + answerString);
    } else if (isBooleanString(answerString)) {
        return answerString === 'true';
    }

    return answerString;
}

module.exports = format;
