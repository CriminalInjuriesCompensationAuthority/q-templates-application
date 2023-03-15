'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-living-together-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-living-together-duration': {
                    type: 'boolean',
                    title:
                        'When your partner died had you been living together for 2 years or more?',
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
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title:
                                'When your partner died had you been living together for 2 years or more?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-living-together-duration':
                        ' Select yes if when your partner died you had been living together for two years or more'
                }
            },
            examples: [
                {
                    'q-applicant-living-together-duration': true
                },
                {
                    'q-applicant-living-together-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-living-together-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-living-together-duration.q-applicant-living-together-duration',
                        true
                    ]
                },
                {
                    target: 'p-other-claimants',
                    cond: [
                        '==',
                        '$.answers.p-applicant-living-together-duration.q-applicant-living-together-duration',
                        false
                    ]
                }
            ]
        }
    }
};
