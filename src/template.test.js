'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const template = require('./template');

describe('application template', () => {
    it('should be valid', () => {
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template,
            customSchemaFormats: {
                'mobile-uk': ajvFormatsMobileUk
            }
        });
        const valid = qTemplateValidator.validateTemplate();

        expect(valid).toEqual(true);
    });
});
