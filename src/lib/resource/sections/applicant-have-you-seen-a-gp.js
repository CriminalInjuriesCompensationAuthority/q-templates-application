'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-seen-a-gp'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-seen-a-gp': {
                    description: 'This includes your mental health.',
                    title: 'Have you seen a GP about your injuries?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'treatment'
                        },
                        summary: {
                            title: 'Have you seen a GP?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-seen-a-gp':
                        'Select yes if you have seen a GP about your injuries'
                }
            },
            examples: [
                {'q-applicant-have-you-seen-a-gp': true},
                {'q-applicant-have-you-seen-a-gp': false}
            ],
            invalidExamples: [{'q-applicant-have-you-seen-a-gp': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-gp-enter-your-address',
                    cond: [
                        'or',
                        [
                            '==',
                            '$.answers.p-applicant-are-you-registered-with-gp.q-applicant-are-you-registered-with-gp',
                            true
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                            true
                        ]
                    ]
                },
                {
                    target: 'p-applicant-dentist-visited',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'upper'
                    ]
                },
                {target: 'p-applicant-medical-help'}
            ]
        }
    }
};
