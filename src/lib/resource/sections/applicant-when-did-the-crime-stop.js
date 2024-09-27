'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-stop'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-stop': {
                    title: 'When did it stop?',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM',
                                defaults: {
                                    DD: '01'
                                }
                            }
                        },
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 12 2022. You can enter an approximate date.',
                    errorMessage: {
                        format: 'Enter the date the crime stopped and include a month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-stop':
                        'Enter the date the crime stopped and include a month and year'
                }
            },
            examples: [
                {
                    'q-applicant-when-did-the-crime-stop': '2020-01-10T00:00:00.000Z'
                },
                {
                    'q-applicant-when-did-the-crime-stop': '2010-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-when-did-the-crime-stop': 12345
                },
                {
                    'q-applicant-when-did-the-crime-stop': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                    cond: [
                        'dateCompare',
                        '$.answers.p-applicant-when-did-the-crime-start.q-applicant-when-did-the-crime-start',
                        '>=',
                        '-2',
                        'years'
                    ]
                },
                {
                    target: 'p-applicant-where-did-the-crime-happen'
                }
            ]
        }
    }
};
