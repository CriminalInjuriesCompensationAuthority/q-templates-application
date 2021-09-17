'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            required: ['q-applicant-has-a-decision-been-made'],
            properties: {
                'q-applicant-has-a-decision-been-made': {
                    title: 'Have they made a decision about your claim?',
                    type: 'boolean',
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
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: 'Have they made a decision?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-has-a-decision-been-made':
                        'Select yes if you have received a decision about the other compensation claim'
                }
            },
            examples: [
                {
                    'q-applicant-has-a-decision-been-made': true
                },
                {
                    'q-applicant-has-a-decision-been-made': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-has-a-decision-been-made': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-how-much-was-award',
                    cond: [
                        '==',
                        '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                        true
                    ]
                },
                {
                    target: 'p-applicant-when-will-you-find-out',
                    cond: [
                        '==',
                        '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                        false
                    ]
                }
            ]
        }
    }
};
