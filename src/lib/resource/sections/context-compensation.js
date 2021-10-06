'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'compensation-context': {
                    title: 'Other compensation',
                    description:
                        '<p class="govuk-body">We\'re going to ask about any other compensation you\'ve been paid for your injuries.</p><p class="govuk-body">This is so we can work out how much compensation you can get.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-have-you-applied-to-us-before'}]}}
};
