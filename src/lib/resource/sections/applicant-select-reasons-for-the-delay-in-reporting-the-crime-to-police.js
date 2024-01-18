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
                ns: 'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
            },
            translations: [
                {
                    language: 'en',
                    namespace:
                        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                    resources: {
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                            error: {
                                required:
                                    'Select if you were under 18, unable to report the crime or other reasons',
                                'required_someone-else':
                                    'Select if they were under 18, unable to report the crime or other reasons'
                            },
                            value: {
                                'i-was-under-18': 'I was under 18',
                                'i-was-under-18_someone-else': 'The victim was under 18',
                                'unable-to-report-crime': 'Unable to report the crime',
                                'unable-to-report-crime_someone-else':
                                    'The victim was unable to report the crime'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Select reasons for the delay in reporting the crime to the police',
                    required: [
                        'q-applicant-explain-reason-for-delay-reporting',
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
                    ],
                    allOf: [
                        {
                            properties: {
                                'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                                    type: 'array',
                                    maxItems: 3,
                                    uniqueItems: true,
                                    description: 'Select all that apply.',
                                    items: {
                                        anyOf: [
                                            {
                                                title:
                                                    'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.value.i-was-under-18{?lng,context,ns}',
                                                const: 'i-was-under-18'
                                            },
                                            {
                                                title:
                                                    'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.value.unable-to-report-crime{?lng,context,ns}',
                                                const: 'unable-to-report-crime'
                                            },
                                            {
                                                title: 'Other reasons',
                                                const: 'other'
                                            }
                                        ]
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'crime'
                                        },
                                        summary: {
                                            title: 'Reasons for delay in reporting'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-explain-reason-for-delay-reporting': {
                                    title: 'Briefly explain these reasons',
                                    type: 'string',
                                    maxLength: 500,
                                    errorMessage: {
                                        maxLength: 'Explanation must be 500 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'crime'
                                        },
                                        summary: {
                                            title:
                                                'Briefly explain reasons for the delay in reporting the crime to the police'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
                                'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.error.required{?lng,context,ns}',
                            'q-applicant-explain-reason-for-delay-reporting':
                                'Explain the reasons for the delay in reporting the crime to the police'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'i-was-under-18',
                        'unable-to-report-crime',
                        'other'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'foo'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        12345
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'i-was-under-18',
                        'unable-to-report-crime',
                        'other'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--which-police-force-is-investigating-the-crime'
                }
            ]
        }
    }
};
