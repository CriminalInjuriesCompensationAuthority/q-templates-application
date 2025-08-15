'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eu-citizen'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-eu-citizen',
                    resources: {
                        'q-applicant-eu-citizen': {
                            title: {
                                applicant: 'Were you an EU citizen when the crime happened?',
                                proxy: 'Were they an EU citizen when the crime happened?'
                            },
                            details: {
                                applicant:
                                    '<p class="govuk-body">Check the <a class="govuk-link" href="https://www.gov.uk/eu-eea" target="_blank">countries in the EU (opens in new tab)</a>.</p>'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were an EU citizen when the crime happened',
                                proxy:
                                    'Select yes if they were an EU citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you an EU citizen when the crime happened?',
                                        proxy: 'Were they an EU citizen when the crime happened?'
                                    }
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
            required: ['q-applicant-eu-citizen'],
            additionalProperties: false,
            properties: {
                'q-applicant-eu-citizen': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-eu-citizen.title.proxy',
                        ['|role.all'],
                        'q-applicant-eu-citizen.title.applicant'
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
                            theme: 'residency-and-nationality'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'proxy'],
                                'q-applicant-eu-citizen.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-eu-citizen.meta.summary.title.applicant'
                            ]
                        }
                    }
                },
                'eu-citizen-info': {
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-eu-citizen.details.applicant'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-eu-citizen': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-eu-citizen.error.proxy',
                        ['|role.all'],
                        'q-applicant-eu-citizen.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-eu-citizen': true
                },
                {
                    'q-applicant-eu-citizen': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-eu-citizen': 'foo'
                }
            ],
            options: {
                outputOrder: ['q-applicant-eu-citizen', 'eu-citizen-info']
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-relationship-to-deceased',
                    cond: [
                        'and',
                        ['|role.all', 'deceased', 'myself'],
                        ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', true]
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    cond: [
                        'and',
                        ['|role.all', 'proxy', 'adult', 'capable'],
                        ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', true]
                    ]
                },
                {
                    target: 'p--context-mainapplicant-details',
                    cond: [
                        'and',
                        [
                            'or',
                            ['|role.all', 'proxy', 'adult', 'incapable'],
                            ['|role.all', 'proxy', 'child']
                        ],
                        ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', true]
                    ]
                },
                {
                    target: 'p--before-you-continue',
                    cond: ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', true]
                },
                {
                    target: 'p-applicant-eu-citizen-relative',
                    cond: ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', false]
                }
            ]
        }
    }
};
