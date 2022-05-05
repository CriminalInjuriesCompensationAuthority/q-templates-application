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
                ns: 'p-applicant-select-reasons-for-the-delay-in-making-your-application'
            },
            translations: [
                {
                    language: 'en',
                    namespace:
                        'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                    resources: {
                        'q-applicant-explain-reason-for-delay-application': {
                            error: {
                                required:
                                    'Explain the reasons for the delay in making your application',
                                'required_someone-else':
                                    'Explain the reasons for the delay in making this application'
                            }
                        },
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
                            description: 'Select all options that apply to you.',
                            'description_someone-else': 'Select all options that apply.',
                            error: {
                                required:
                                    'Select if you were under 18, advised to wait, medical reasons or other reasons',
                                'required_someone-else':
                                    'Select if they were under 18, advised to wait, medical reasons or other reasons'
                            },
                            title: 'Select reasons for the delay in making your application',
                            'title_someone-else':
                                'Select reasons for the delay in making this application',
                            value: {
                                'i-was-underage': 'I was under 18',
                                'i-was-underage_someone-else': 'The victim was under 18',
                                'i-was-advised-to-wait': 'I was advised to wait',
                                'i-was-advised-to-wait_someone-else':
                                    'The victim was advised to wait'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: [
                'q-applicant-explain-reason-for-delay-application',
                'q-applicant-select-reasons-for-the-delay-in-making-your-application'
            ],
            additionalProperties: false,
            properties: {
                'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
                    title:
                        'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.title{?lng,context,ns}',
                    type: 'array',
                    maxItems: 4,
                    uniqueItems: true,
                    description:
                        'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.description{?lng,context,ns}',
                    items: {
                        anyOf: [
                            {
                                title:
                                    'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.value.i-was-underage{?lng,context,ns}',
                                const: 'i-was-underage'
                            },
                            {
                                title:
                                    'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.value.i-was-advised-to-wait{?lng,context,ns}',
                                const: 'i-was-advised-to-wait'
                            },
                            {
                                title: 'Medical reasons',
                                const: 'medical-reasons'
                            },
                            {
                                title: 'Other reasons',
                                const: 'other-reasons'
                            }
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Reasons for delay in applying'
                        }
                    }
                },
                'q-applicant-explain-reason-for-delay-application': {
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
                                'Briefly explain reasons for the delay in making your application'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application':
                        'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.error.required{?lng,context,ns}',
                    'q-applicant-explain-reason-for-delay-application':
                        'l10nt:q-applicant-explain-reason-for-delay-application.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'i-was-underage',
                        'medical-reasons'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 'some reason'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'not a valid answer'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [12345],
                    'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'i-was-underage'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-where-did-the-crime-happen'
                }
            ]
        }
    }
};
