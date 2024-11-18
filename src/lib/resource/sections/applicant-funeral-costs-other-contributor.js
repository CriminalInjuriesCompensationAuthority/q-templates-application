'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-funeral-costs-other-contributor'],
            additionalProperties: false,
            properties: {
                'q-applicant-funeral-costs-other-contributor': {
                    type: 'boolean',
                    title: 'Is anyone else contributing to the funeral costs?',
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
                            title: 'Is anyone else contributing to the funeral costs?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-funeral-costs-other-contributor':
                        'Select yes if anyone else is contributing to the funeral costs'
                }
            },
            examples: [
                {
                    'q-applicant-funeral-costs-other-contributor': true
                },
                {
                    'q-applicant-funeral-costs-other-contributor': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-funeral-costs-other-contributor': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-funeral-costs-who-contributed',
                    cond: [
                        '==',
                        '$.answers.p-applicant-funeral-costs-other-contributor.q-applicant-funeral-costs-other-contributor',
                        true
                    ]
                },
                {
                    target: 'p-applicant-funeral-costs-total',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-funeral-costs-other-contributor.q-applicant-funeral-costs-other-contributor',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid',
                            true
                        ]
                    ]
                },
                {
                    target: 'p--before-you-continue',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-funeral-costs-other-contributor.q-applicant-funeral-costs-other-contributor',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid',
                            false
                        ]
                    ]
                }
            ]
        }
    }
};
