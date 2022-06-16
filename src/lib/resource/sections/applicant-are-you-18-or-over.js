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
                ns: 'p-applicant-are-you-18-or-over'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-are-you-18-or-over',
                    resources: {
                        'q-applicant-are-you-18-or-over': {
                            title: 'Are you 18 or over?',
                            'title_someone-else': 'Is the victim 18 or over?',
                            error: {
                                required: 'Select yes if you are 18 or over',
                                'required_someone-else': 'Select yes if the victim is 18 or over'
                            },
                            meta: {
                                summary: {
                                    title: 'Are you 18 or over?',
                                    'title_someone-else': 'Is the victim 18 or over?'
                                }
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-18-or-over'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-18-or-over': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-are-you-18-or-over.title{?lng,context,ns}',
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
                            theme: 'about-application'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-are-you-18-or-over.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-18-or-over':
                        'l10nt:q-applicant-are-you-18-or-over.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-18-or-over': true
                },
                {
                    'q-applicant-are-you-18-or-over': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-18-or-over': 'foo'
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
                            '==',
                            '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                            'myself'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-british-citizen-or-eu-national'
                }
            ]
        }
    }
};
