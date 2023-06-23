'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-victim-human-trafficking'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-victim-human-trafficking',
                    resources: {
                        'q-applicant-victim-human-trafficking': {
                            title: {
                                applicant:
                                    'Have you been referred as a potential victim of human trafficking in the UK?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you have been referred as a potential victim of human trafficking in the UK'
                            },
                            meta: {
                                summary: {
                                    title: 'About your residency and nationality'
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
            required: ['q-applicant-victim-human-trafficking'],
            additionalProperties: false,
            properties: {
                'q-applicant-victim-human-trafficking': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-victim-human-trafficking.title.applicant'
                    ],
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
                            theme: 'residency_and_nationality'
                        },
                        summary: {
                            title: 'q-applicant-victim-human-trafficking.meta.summary.title'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-victim-human-trafficking': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-victim-human-trafficking.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-victim-human-trafficking': true
                },
                {
                    'q-applicant-victim-human-trafficking': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-victim-human-trafficking': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [{target: 'p-applicant-applied-for-asylum'}]
        }
    }
};
