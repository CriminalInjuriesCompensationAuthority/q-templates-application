'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-can-handle-affairs'],
            additionalProperties: false,
            properties: {
                'q-applicant-can-handle-affairs': {
                    type: 'boolean',
                    title: 'Are they able to handle their affairs?',
                    description:
                        "This means they have the capacity to make decisions for themselves when they're required to do so",
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Are they able to handle their affairs?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-can-handle-affairs':
                        'Select yes if they are able to handle their affairs'
                }
            },
            examples: [
                {
                    'q-applicant-can-handle-affairs': true
                },
                {
                    'q-applicant-can-handle-affairs': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-can-handle-affairs': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-enter-your-address'
                }
            ]
        }
    }
};
