'use strict';

const {
    writeQuestionnaireToFile,
    compareFixtures,
    deleteFixtures
} = require('../utils/fixtureComparer');

const fs = require('fs');
const path = require('path');

const testQuestionnaire = {answers: {'q-1': true}, progress: ['q-1'], currentSectionId: 'q-1'};
const testFixture = {
    'q-1': true,
    progress: ['q-1'],
    currentSectionId: 'q-1',
    oldFixture: {}
};
const testFile = 'test.json';

const fixtureDirectory = `../../../reports/fixtures`;

afterEach(() => {
    deleteFixtures();
});
describe('fixtureComparer', () => {
    describe('Writing to files', () => {
        it('Should write questionnaire to a temp file if the temp file does not exist', () => {
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            const tempFixturePath = path.resolve(__dirname, `${fixtureDirectory}/temp/${testFile}`);
            expect(fs.existsSync(tempFixturePath)).toBe(true);
            expect(JSON.parse(fs.readFileSync(tempFixturePath))).toEqual(testFixture);
        });
        it('Should append questionnaires to file if the target file already exists', () => {
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            const tempFixturePath = path.resolve(__dirname, `${fixtureDirectory}/temp/${testFile}`);
            expect(fs.existsSync(tempFixturePath)).toBe(true);
            expect(JSON.parse(fs.readFileSync(tempFixturePath))).toEqual({
                'q-1': true,
                progress: ['q-1'],
                currentSectionId: 'q-1',
                oldFixture: testFixture
            });
        });
        it('Should not write undefined questionnaires to file', () => {
            writeQuestionnaireToFile(undefined, testFile);
            const tempFixturePath = path.resolve(__dirname, `${fixtureDirectory}/temp/${testFile}`);
            expect(fs.existsSync(tempFixturePath)).toBe(false);
        });
    });
    describe('Comparing files', () => {
        console.log = jest.fn();

        it('Should log if the file contents match', () => {
            fs.writeFileSync(
                path.resolve(__dirname, `${fixtureDirectory}/${testFile}`),
                JSON.stringify(testFixture)
            );
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            compareFixtures(testFile);
            expect(console.log).toHaveBeenCalledWith(
                'Output dataset consistent with previous version'
            );
            const dirpath = path.resolve(__dirname, `${fixtureDirectory}/${testFile}`);
            fs.rmSync(dirpath, {recursive: true});
        });
        it('Should throw an error if the file contents do not match', () => {
            fs.writeFileSync(
                path.resolve(__dirname, `${fixtureDirectory}/${testFile}`),
                JSON.stringify({foo: 'bar'})
            );
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            expect(() => {
                compareFixtures(testFile);
            }).toThrow('Output dataset is different to previous version');
            const dirpath = path.resolve(__dirname, `${fixtureDirectory}/${testFile}`);
            fs.rmSync(dirpath, {recursive: true});
        });
        it('Should log a message if the fixture file to compare against does not exist', () => {
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            compareFixtures(testFile);
            expect(console.log).toHaveBeenCalledWith(
                'No fixture file found. Move the newly generated file from /temp to compare.'
            );
        });
    });
    describe('Deleting files', () => {
        it('Should delete a newly generated fixture file', () => {
            writeQuestionnaireToFile(testQuestionnaire, testFile);
            deleteFixtures();
            const tempDirectory = path.resolve(__dirname, `${fixtureDirectory}/temp`);
            expect(fs.existsSync(tempDirectory)).toBe(false);
        });
    });
});
