'use strict';

const fs = require('fs');
const path = require('path');

function writeQuestionnaireToFile(questionnaire, filename) {
    if (questionnaire === undefined) {
        return;
    }

    const dirpath = path.resolve(__dirname, `../../../reports/fixtures/temp`);
    const filepath = path.join(dirpath, filename);
    fs.mkdirSync(dirpath, {recursive: true});

    let oldFixture = {};
    if (fs.existsSync(filepath)) {
        oldFixture = fs.readFileSync(filepath, {encoding: 'utf-8'});
        if (oldFixture) {
            oldFixture = JSON.parse(oldFixture);
        }
    }
    const result = {
        ...questionnaire.answers,
        progress: questionnaire.progress,
        currentSectionId: questionnaire.currentSectionId,
        oldFixture
    };

    fs.writeFileSync(filepath, JSON.stringify(result));
}

function compareFixtures(filename) {
    const dirpath = path.resolve(__dirname, `../../../reports/fixtures`);
    const oldPath = path.join(dirpath, filename);
    const newPath = path.join(dirpath, `/temp/${filename}`);
    if (!fs.existsSync(oldPath)) {
        console.log('No fixture file found. Move the newly generated file from /temp to compare.');
        return;
    }
    const oldFixture = fs.readFileSync(oldPath);
    const newFixture = fs.readFileSync(newPath);
    const unchanged =
        JSON.stringify(JSON.parse(oldFixture)) === JSON.stringify(JSON.parse(newFixture));
    if (unchanged) {
        console.log('Output dataset consistent with previous version');
    } else {
        console.warn('Warning: output dataset is different to previous version');
        throw new Error('Output dataset is different to previous version');
    }
}

function deleteFixtures() {
    const dirpath = path.resolve(__dirname, `../../../reports/fixtures/temp`);
    if (fs.existsSync(dirpath)) {
        fs.rmSync(dirpath, {recursive: true});
    }
}
module.exports = {writeQuestionnaireToFile, compareFixtures, deleteFixtures};
