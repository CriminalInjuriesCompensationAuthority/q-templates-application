'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-other-citizen'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-other-citizen',
                    resources: {
                        'q-applicant-other-citizen': {
                            title: {
                                applicant:
                                    'Were you a citizen of a country that was party to the European convention when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a citizen of a country that was party to this convention when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title:
                                        'Were you a citizen of a country that was party to the European convention when the crime happened?'
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
            required: ['q-applicant-other-citizen'],
            additionalProperties: false,
            properties: {
                'q-applicant-other-citizen': {
                    type: 'boolean',
                    title: ['|l10nt', ['|role.all'], 'q-applicant-other-citizen.title.applicant'],
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
                                'q-applicant-other-citizen.meta.summary.title'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-other-citizen': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-other-citizen.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-other-citizen': true
                },
                {
                    'q-applicant-other-citizen': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-other-citizen': 'foo'
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
                        '$.answers.p-applicant-other-citizen.q-applicant-other-citizen',
                        true
                    ]
                },
                {
                    target: 'p-applicant-armed-forces',
                    cond: [
                        '==',
                        '$.answers.p-applicant-other-citizen.q-applicant-other-citizen',
                        false
                    ]
                }
            ]
        }
    }
};
