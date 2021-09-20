'use strict';

const fs = require('fs');
const template = require('./template');
const deleteKeys = require('./lib/deleteKeys');

// ToDo: Parameterise this!
// deleteKeys(template, process.argv[2]);
const trimmedTemplate = deleteKeys(template, ['examples', 'invalidExamples']);

fs.mkdir('./dist', {recursive: true}, makeDirErr => {
    if (makeDirErr) {
        throw makeDirErr;
    }

    fs.writeFile('./dist/template.json', JSON.stringify(trimmedTemplate), {}, writeFileErr => {
        if (writeFileErr) {
            throw writeFileErr;
        }
    });
});
