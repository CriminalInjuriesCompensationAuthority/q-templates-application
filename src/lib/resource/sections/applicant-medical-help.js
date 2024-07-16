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
                                    'Select yes if you got other medical help for your injuries',
                                'required_someone-else':
                                    'Select yes if they got other medical help for their injuries'
                            },
                            title: 'Did you get other medical help for your injuries?',
                            'title_someone-else':
                                'Did they get other medical help for their injuries?',
                            meta: {
                                summary: {
                                    title: 'Did you get other medical help?',
                                    'title_someone-else': 'Did they get other medical help?'
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
            'ANSWER__P-APPLICANT-MEDICAL-HELP': [
                {
                    target: 'p-applicant-treatment-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-medical-help.q-applicant-medical-help',
                        true
                    ]
                },
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
