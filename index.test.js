'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const ajvFormatsDateComparison = require('ajv-formats-date-comparison');

const template = require('./index');

describe('application template', () => {
    it('should be valid', () => {
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template,
            customSchemaFormats: {
                'mobile-uk': ajvFormatsMobileUk,
                'date-time': ajvFormatsDateComparison.compareDates
            }
        });
        const valid = qTemplateValidator.validateTemplate();

        expect(valid).toEqual(true);
    });
});
