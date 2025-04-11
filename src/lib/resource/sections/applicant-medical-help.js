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
                ns: 'p-applicant-medical-help'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-medical-help',
                    resources: {
                        'q-applicant-medical-help': {
                            error: {
                                required:
                                    "Select yes if you've seen any other medical professionals",
                                'required_someone-else':
                                    "Select yes if they've seen any other medical professionals"
                            },
                            title: 'Have you seen any other medical professionals?',
                            'title_someone-else': 'Have they seen any other medical professionals?',
                            meta: {
                                summary: {
                                    title: 'Have you seen any other medical professionals?',
                                    'title_someone-else':
                                        'Have they seen any other medical professionals?'
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
            required: ['q-applicant-medical-help'],
            additionalProperties: false,
            properties: {
                'q-applicant-medical-help': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-medical-help.title{?lng,context,ns}',
                    description:
                        'Tell us about anything else you think might be relevant. This might include having to go to hospital or visit a physiotherapist.',
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
                                'l10nt:q-applicant-medical-help.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-medical-help':
                        'l10nt:q-applicant-medical-help.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-medical-help': true
                },
                {
                    'q-applicant-medical-help': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-medical-help': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-treatment-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-medical-help.q-applicant-medical-help',
                        true
                    ]
                },
                {
                    target: 'p--context-compensation'
                }
            ]
        }
    }
};
