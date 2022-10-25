'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-enter-your-date-of-birth'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-enter-your-date-of-birth',
                    resources: {
                        'q-applicant-enter-your-date-of-birth': {
                            title: 'Enter your date of birth',
                            'title_someone-else': 'Enter their date of birth',
                            error: {
                                required:
                                    'Enter your date of birth and include a day, month and year',
                                format:
                                    'Enter your date of birth and include a day, month and year',
                                'required_someone-else':
                                    'Enter their date of birth and include a day, month and year',
                                'format_someone-else':
                                    'Enter their date of birth and include a day, month and year'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-enter-your-date-of-birth'],
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-date-of-birth': {
                    title: 'l10nt:q-applicant-enter-your-date-of-birth.title{?lng,context,ns}',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM-DD'
                            }
                        },
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Date of birth'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 31 12 1989.',
                    errorMessage: {
                        format:
                            'l10nt:q-applicant-enter-your-date-of-birth.error.format{?lng,context,ns}'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-enter-your-date-of-birth':
                        'l10nt:q-applicant-enter-your-date-of-birth.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-enter-your-date-of-birth': '1970-01-01T00:00:00.000Z'
                },
                {
                    'q-applicant-enter-your-date-of-birth': '2019-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-enter-your-date-of-birth': 12345
                },
                {
                    'q-applicant-enter-your-date-of-birth': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition',
                    cond: [
                        'and',
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '<', // is less than ...
                            '-18', // 18 ...
                            'years' // years (before, due to the negative (-18) ...
                            // today's date (no second date given. defaults to today's date).
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                            'myself'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-can-handle-affairs',
                    cond: [
                        'and',
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>=', // is more than or equal to ...
                            '-18', // 18 ...
                            'years' // years (before, due to the negative (-18) ...
                            // today's date (no second date given. defaults to today's date).
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                            'someone-else'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-enter-your-address'
                }
            ]
        }
    }
};
