'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-ordinarily-resident'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-ordinarily-resident',
                    resources: {
                        'q-applicant-ordinarily-resident': {
                            title: {
                                applicant:
                                    'Were you ordinarily resident in the UK when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were ordinarily resident in the UK when the crime happened'
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
            required: ['q-applicant-ordinarily-resident'],
            additionalProperties: false,
            properties: {
                'q-applicant-ordinarily-resident': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-ordinarily-resident.title.applicant'
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
                            title: 'q-applicant-ordinarily-resident.meta.summary.title'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-ordinarily-resident': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-ordinarily-resident.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-ordinarily-resident': true
                },
                {
                    'q-applicant-ordinarily-resident': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-ordinarily-resident': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue',
                    cond: [
                        '==',
                        '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
                        true
                    ]
                },
                {
                    target: 'p-applicant-eu-citizen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
                        false
                    ]
                }
            ]
        }
    }
};
