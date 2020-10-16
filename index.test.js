'use strict';

const createTemplateValidator = require('q-template-validator');
const templateConfig = require('./index')();

describe('application template', () => {
    it('should be valid', () => {
        const template = templateConfig.template('285cb104-0c15-4a9c-9840-cb1007f098fb');
        delete template.id;
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template,
            validatorInstance: templateConfig.validatorInstance,
            validate: templateConfig.validate
        });
        const valid = qTemplateValidator.validateTemplate();

        expect(valid).toEqual(true);
    });
});
