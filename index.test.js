'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const template = require('./index');

console.log('1111111111111111111111111111111111111');
describe('application template', () => {
    console.log('22222222222222222222222222222222222222');
    it('should be valid', () => {
        console.log('3333333333333333333333333333333');
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template,
            customSchemaFormats: {
                'mobile-uk': ajvFormatsMobileUk
            }
        });
        console.log('444444444444444444444444444444444444');
        const valid = qTemplateValidator.validateTemplate();
        console.log('55555555555555555555555555555555555555555');

        expect(valid).toEqual(true);
    });
});
