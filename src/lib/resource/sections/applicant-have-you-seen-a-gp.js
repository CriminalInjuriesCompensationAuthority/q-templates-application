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
                ns: 'p-applicant-have-you-seen-a-gp'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-have-you-seen-a-gp',
                    resources: {
                        'q-applicant-have-you-seen-a-gp': {
                            description: 'This includes your mental health.',
                            'description_someone-else': 'This includes their mental health.',
                            error: {
                                required: 'Select yes if you have seen a GP about your injuries',
                                'required_someone-else':
                                    'Select yes if they have seen a GP about their injuries'
                            },
                            title: 'Have you seen a GP about your injuries?',
                            'title_someone-else': 'Have they seen a GP about their injuries?',
                            meta: {
                                summary: {
                                    title: 'Have you seen a GP?',
                                    'title_someone-else': 'Have they seen a GP?'
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
            required: ['q-applicant-have-you-seen-a-gp'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-seen-a-gp': {
                    type: 'boolean',
                    description:
                        'l10nt:q-applicant-have-you-seen-a-gp.description{?lng,context,ns}',
                    title: 'l10nt:q-applicant-have-you-seen-a-gp.title{?lng,context,ns}',
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
                            theme: 'treatment'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-have-you-seen-a-gp.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-seen-a-gp':
                        'l10nt:q-applicant-have-you-seen-a-gp.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-seen-a-gp': true
                },
                {
                    'q-applicant-have-you-seen-a-gp': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-seen-a-gp': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-HAVE-YOU-SEEN-A-GP': [
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
                {
                    target: 'p-applicant-medical-help'
                }
            ]
        }
    }
};
