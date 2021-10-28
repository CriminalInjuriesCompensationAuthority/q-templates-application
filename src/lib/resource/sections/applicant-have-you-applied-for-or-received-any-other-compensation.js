'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-applied-for-or-received-any-other-compensation'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                    title: 'Have you applied for or received any other form of compensation?',
                    description:
                        'For example, if you sought civil damages or a court decided you should get compensation.',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation':
                        'Select yes if you have applied for any other form of compensation'
                }
            },
            examples: [
                {'q-applicant-have-you-applied-for-or-received-any-other-compensation': true},
                {'q-applicant-have-you-applied-for-or-received-any-other-compensation': false}
            ],
            invalidExamples: [
                {'q-applicant-have-you-applied-for-or-received-any-other-compensation': 'foo'}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-who-did-you-apply-to',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                        true
                    ]
                },
                {
                    target: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                        false
                    ]
                }
            ]
        }
    }
};
