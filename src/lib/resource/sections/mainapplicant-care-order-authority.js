'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-care-order-authority'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-care-order-authority': {
                    type: 'string',
                    title: 'What local authority is this with?',
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-care-order-authority': 'Enter the local authority this is with'
                }
            },
            examples: [
                {
                    'q-mainapplicant-care-order-authority': 'local authority'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-care-order-authority': 123
                },
                {
                    'q-mainapplicant-care-order-authority': true
                },
                {
                    'q-mainapplicant-care-order-authority': ['local authority']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-relationship-to-deceased',
                    cond: [
                        'and',
                        [
                            'or',
                            ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
                        ],
                        ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                    ]
                },
                {
                    target: 'p--before-you-continue'
                    // Main Applicant role
                }
            ]
        }
    }
};
