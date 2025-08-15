'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-happen'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-happen': {
                    title: 'When did the crime happen?',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM-DD'
                            }
                        },
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 31 12 2022. You can enter an approximate date.',
                    errorMessage: {
                        format:
                            'Enter the date the crime happened and include a day, month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-happen':
                        'Enter the date the crime happened and include a day, month and year'
                }
            },
            examples: [
                {
                    'q-applicant-when-did-the-crime-happen': '2020-01-01T00:00:00.000Z'
                },
                {
                    'q-applicant-when-did-the-crime-happen': '2010-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-when-did-the-crime-happen': 12345
                },
                {
                    'q-applicant-when-did-the-crime-happen': 'not a date'
                }
            ],
            options: {
                outputOrder: ['q-applicant-when-did-the-crime-happen']
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                    cond: [
                        'and',
                        [
                            'dateCompare',
                            '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen',
                            '>=',
                            '-2',
                            'years'
                        ],
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth',
                            '>=',
                            '-20',
                            'years'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-where-did-the-crime-happen'
                }
            ]
        }
    }
};
