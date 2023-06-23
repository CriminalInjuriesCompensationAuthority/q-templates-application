'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eea-citizen'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-eea-citizen',
                    resources: {
                        'q-applicant-eea-citizen': {
                            title: {
                                applicant:
                                    'Were you a European Economic Area (EEA) citizen when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a European Economic Area (EEA) citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title:
                                        'Were you a European Economic Area (EEA) citizen when the crime happened?'
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
            required: ['q-applicant-eea-citizen'],
            additionalProperties: false,
            properties: {
                'q-applicant-eea-citizen': {
                    type: 'boolean',
                    title: ['|l10nt', ['|role.all'], 'q-applicant-eea-citizen.title.applicant'],
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
                            theme: 'residency-and-nationality'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all'],
                                'q-applicant-eea-citizen.meta.summary.title'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-eea-citizen': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-eea-citizen.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-eea-citizen': true
                },
                {
                    'q-applicant-eea-citizen': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-eea-citizen': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue',
                    cond: ['==', '$.answers.p-applicant-eea-citizen.q-applicant-eea-citizen', true]
                },
                {
                    target: 'p-applicant-eea-citizen-relative',
                    cond: ['==', '$.answers.p-applicant-eea-citizen.q-applicant-eea-citizen', false]
                }
            ]
        }
    }
};
