'use strict';

const { loadConfiguration, runCucumber } = require('@cucumber/cucumber/api');

function createCucumberTester({
  featureFilePath = "../features/**/*.feature",
  stepsFilePath = "../features/step_definitions/steps-router.js"
} = {}) {
    async function run(tagExpression){
        const { runConfiguration } = await loadConfiguration();
        runConfiguration.sources.paths = [
            ...featureFilePath
        ];
        runConfiguration.sources.tagExpression = tagExpression;
        runConfiguration.support.importPaths = [
            ...stepsFilePath
        ];

        return await runCucumber({
            ...runConfiguration
        });
    }

    return Object.freeze({
        run
    });
}

module.exports = createCucumberTester;
