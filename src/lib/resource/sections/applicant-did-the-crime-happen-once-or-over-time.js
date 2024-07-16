'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-did-the-crime-happen-once-or-over-time'],
            additionalProperties: false,
            properties: {
                'q-applicant-did-the-crime-happen-once-or-over-time': {
                    title: 'Did the crime happen once or over a period of time?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Once',
                            const: 'once'
                        },
                        {
                            title: 'Over a period of time',
                            const: 'over-a-period-of-time'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'crime'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-did-the-crime-happen-once-or-over-time':
                        'Select Once or Over a period of time'
                }
            },
            examples: [
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 'once'
                },
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 'over-a-period-of-time'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 'never'
                },
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 12345
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-DID-THE-CRIME-HAPPEN-ONCE-OR-OVER-TIME': [
                {
                    target: 'p-applicant-when-did-the-crime-happen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                        'once'
                    ]
                },
                {
                    target: 'p-applicant-when-did-the-crime-start',
                    cond: [
                        '==',
                        '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                        'over-a-period-of-time'
                    ]
                }
            ]
        }
    }
};
