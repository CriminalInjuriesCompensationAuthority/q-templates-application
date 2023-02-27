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
                    title: 'Did anyone else contribute to the funeral costs?',
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
                            title: 'Funeral costs'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-funeral-costs-other-contributor':
                        'Select yes if anyone else contributed to the funeral costs'
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
                        '==',
                        '$.answers.p-applicant-funeral-costs-other-contributor.q-applicant-funeral-costs-other-contributor',
                        false
                    ]
                }
            ]
        }
    }
};
