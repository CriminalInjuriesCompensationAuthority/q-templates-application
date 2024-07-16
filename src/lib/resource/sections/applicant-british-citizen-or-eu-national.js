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
                ns: 'p-applicant-british-citizen-or-eu-national'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-british-citizen-or-eu-national',
                    resources: {
                        'q-applicant-british-citizen-or-eu-national': {
                            title: 'Are you a British citizen or EU national?',
                            'title_someone-else': 'Are they a British citizen or EU national?',
                            error: {
                                required: 'Select yes if you are a British citizen or EU national',
                                'required_someone-else':
                                    'Select yes if they are a British citizen or EU national'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-british-citizen-or-eu-national'],
            additionalProperties: false,
            properties: {
                'q-applicant-british-citizen-or-eu-national': {
                    title:
                        'l10nt:q-applicant-british-citizen-or-eu-national.title{?lng,context,ns}',
                    type: 'boolean',
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
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-british-citizen-or-eu-national':
                        'l10nt:q-applicant-british-citizen-or-eu-national.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-british-citizen-or-eu-national': true
                },
                {
                    'q-applicant-british-citizen-or-eu-national': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-british-citizen-or-eu-national': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-BRITISH-CITIZEN-OR-EU-NATIONAL': [
                {
                    target: 'p--transition',
                    cond: [
                        '==',
                        '$.answers.p-applicant-british-citizen-or-eu-national.q-applicant-british-citizen-or-eu-national',
                        false
                    ]
                },
                {
                    target: 'p--was-the-crime-reported-to-police'
                }
            ]
        }
    }
};
