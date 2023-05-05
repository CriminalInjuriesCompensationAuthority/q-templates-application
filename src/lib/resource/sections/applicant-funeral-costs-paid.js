'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-funeral-costs-paid'],
            additionalProperties: false,
            properties: {
                'q-applicant-funeral-costs-paid': {
                    type: 'boolean',
                    title: 'Are you paying for any of the funeral costs?',
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
                            theme: 'funeral-costs'
                        },
                        summary: {
                            title: 'Are you paying for any of the funeral costs?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-funeral-costs-paid':
                        'Select yes if you paid for any of the funeral costs'
                }
            },
            examples: [
                {
                    'q-applicant-funeral-costs-paid': true
                },
                {
                    'q-applicant-funeral-costs-paid': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-funeral-costs-paid': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-funeral-costs-other-contributor'
                }
            ]
        }
    }
};
