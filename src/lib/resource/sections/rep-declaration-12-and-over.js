'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Declaration',
            required: ['q-rep-declaration'],
            propertyNames: {
                enum: ['q-rep-declaration']
            },
            allOf: [
                {
                    properties: {
                        'rep-declaration': {
                            description:
                                '<div id="declaration"> <p class="govuk-body">You\'ve told us that:</p> <ul class="govuk-list govuk-list--bullet"><li>your name is ||/answers/p-rep-name/q-rep-title|| ||/answers/p-rep-name/q-rep-first-name|| ||/answers/p-rep-name/q-rep-last-name||</li><li>you\'re applying on behalf of ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||</li></ul><p class="govuk-body">By submitting this application, you\'re confirming that:</p><ul class="govuk-list govuk-list--bullet"><li>the information you\'ve given is true, as far as you know. ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| could lose any compensation if you deliberately give us wrong or misleading information. You could also be prosecuted.</li><li>you\'ll provide us with any more information we need</li><li>you\'ll tell us as soon as you can if any contact details change</li><li>you\'ll tell us as soon as you can about any other claim or proceedings that might lead to a payment for their injuries</li><li>you understand how we\'ll share and receive data - read our privacy notice at <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a></li><li>you and ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| have read and understood this declaration</li></ul>'
                        }
                    }
                },
                {
                    properties: {
                        'q-rep-declaration': {
                            type: 'string',
                            title: 'I have read and understood the declaration',
                            const: 'i-agree-12-and-over'
                        }
                    }
                }
            ],
            errorMessage: {
                required: {
                    'q-rep-declaration': 'Select that you have read and understood'
                }
            },
            examples: [
                {
                    'q-rep-declaration': 'i-agree-12-and-over'
                }
            ],
            invalidExamples: [
                {},
                {
                    foo: 'bar'
                },
                {
                    'q-rep-declaration': true
                },
                {
                    'q-rep-declaration': 'false'
                },
                {
                    'q-rep-declaration': 123
                },
                {
                    'q-rep-declaration': [123]
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
