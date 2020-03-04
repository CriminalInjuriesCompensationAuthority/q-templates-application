'use strict';

const createTemplateValidator = require('q-template-validator');
const template = require('./index');

describe('application template', () => {
    it('should be valid', () => {
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template
        });
        const errors = qTemplateValidator.validateTemplate();

        expect(errors.length).toEqual(0);
    });
});
