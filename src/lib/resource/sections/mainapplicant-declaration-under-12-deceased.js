'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Declaration',
            required: ['q-mainapplicant-declaration'],
            propertyNames: {
                enum: ['q-mainapplicant-declaration']
            },
            allOf: [
                {
                    properties: {
                        'mainapplicant-declaration': {
                            description:
                                '<div id="declaration"> <p class="govuk-body">You\'ve told us that:</p> <ul class="govuk-list govuk-list--bullet"><li>your name is ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-title|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-first-name|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-last-name||</li><li>you\'re applying on behalf of ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||</li></ul><p class="govuk-body">By submitting this application, you\'re confirming that:</p><ul class="govuk-list govuk-list--bullet"><li>the information you\'ve given is true, as far as you know. ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| could lose any compensation if you deliberately give us wrong or misleading information. You could also be prosecuted.</li><li>you\'ll provide us with any more information we need</li><li>you\'ll tell us as soon as you can if any contact details change</li><li>you\'ll tell us as soon as you can about any other claim or proceedings that might lead to a payment</li><li>you understand how we\'ll share and receive data - read our privacy notice at <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a></li><li>you\'ve read and understood this declaration</li></ul>'
                        }
                    }
                },
                {
                    properties: {
                        'q-mainapplicant-declaration': {
                            type: 'string',
                            title: 'I have read and understood the declaration',
                            const: 'i-agree-under-12'
                        }
                    }
                }
            ],
            errorMessage: {
                required: {
                    'q-mainapplicant-declaration': 'Select that you have read and understood'
                }
            },
            examples: [
                {
                    'q-mainapplicant-declaration': 'i-agree-under-12'
                }
            ],
            invalidExamples: [
                {},
                {
                    foo: 'bar'
                },
                {
                    'q-mainapplicant-declaration': true
                },
                {
                    'q-mainapplicant-declaration': 'false'
                },
                {
                    'q-mainapplicant-declaration': 123
                },
                {
                    'q-mainapplicant-declaration': [123]
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--confirmation'
                }
            ]
        }
    }
};
