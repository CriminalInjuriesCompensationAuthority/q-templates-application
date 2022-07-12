'use strict';

const fs = require('fs');
const template = require('./template');
const deleteKeys = require('./lib/deleteKeys');
const replaceKeys = require('./lib/replaceKeys');

// ToDo: Parameterise this!
// deleteKeys(template, process.argv[2]);
const trimmedTemplate = deleteKeys(template, ['examples', 'invalidExamples']);
const correctedTemplate = replaceKeys(trimmedTemplate, {
    '~_title_~': 'title',
    '~_errorMessage_~': 'errorMessage'
});

fs.mkdir('./dist', {recursive: true}, makeDirErr => {
    if (makeDirErr) {
        throw makeDirErr;
    }

    fs.writeFile('./dist/template.json', JSON.stringify(correctedTemplate), {}, writeFileErr => {
        if (writeFileErr) {
            throw writeFileErr;
        }
    });
});
