'use strict';

function isDate(dateStr) {
    return isNaN(dateStr) && !isNaN(Date.parse(dateStr))
}

function isBooleanString(answer) {
    return answer === 'true' || answer === 'false'
}

function isOpenQuestion(tags){
    if(tags) {
        return tags.includes('@openQuestion')
    }
    return false;
}

function format(answerString, tags){
    if (isOpenQuestion(tags)) {
        if (isDate(answerString)) {
            return new Date(Date.parse(answerString));
        }
    } else {
        if (isBooleanString(answerString)){
            return answerString === 'true';
        }
    }
    return answerString;
}

module.exports = format;