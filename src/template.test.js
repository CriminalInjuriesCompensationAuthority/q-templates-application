'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const template = require('./template');
const createCucumberTester = require('./runCucumber');

describe('application template', () => {
    it('should be valid', () => {
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template,
            customSchemaFormats: {
                'mobile-uk': ajvFormatsMobileUk,
                'global-mobile': '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$'
            }
        });
        const valid = qTemplateValidator.validateTemplate();

        expect(valid).toEqual(true);
    });

    it('should route as per the described behaviours', async () => {
        const cucumberRunner = createCucumberTester({});
        const result = await cucumberRunner.run('@roles and @proxy');

        expect(result.success).toEqual(true);
    });
});
