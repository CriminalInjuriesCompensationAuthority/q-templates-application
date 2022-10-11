'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-capable'],
            additionalProperties: false,
            properties: {
                'q-applicant-capable': {
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
                    'q-applicant-capable': 'Select yes if they are able to handle their affairs'
                }
            },
            examples: [
                {
                    'q-applicant-capable': true
                },
                {
                    'q-applicant-capable': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-capable': 'foo'
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
