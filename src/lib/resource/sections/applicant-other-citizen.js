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
                        'other-citizen-info': {
                            title:
                                'European Convention on the Compensation of Victims of Violent Crimes',
                            description: {
                                applicant: `
                            <p class="govuk-body">Victims of violent crime in the UK who were citizens of a country that had signed and ratified this convention when the crime happened, can apply for compensation.</p>
                            <p class="govuk-body">Check the <a class="govuk-link" href="https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=116" target="_blank">countries that are party to this convention on the Council of Europe website (opens in new tab)</a>.</p>
                            `
                            }
                        },
                        'q-applicant-other-citizen': {
                            title: {
                                applicant:
                                    'Were you a citizen of a country that was party to the European convention when the crime happened?',
                                proxy:
                                    'Were they a citizen of a country that was party to the European convention when the crime happened?'
                            },

                            error: {
                                applicant:
                                    'Select yes if you were a citizen of a country that was party to this convention when the crime happened',
                                proxy:
                                    'Select yes if they were a citizen of a country that was party to this convention when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you a citizen of a country that was party to the European convention when the crime happened?',
                                        proxy:
                                            'Were they a citizen of a country that was party to the European convention when the crime happened?'
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
            required: ['q-applicant-other-citizen'],
            additionalProperties: false,
            properties: {
                'other-citizen-info': {
                    title: ['|l10nt', ['|role.all'], 'other-citizen-info.title'],
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'other-citizen-info.description.applicant'
                    ]
                },
                'q-applicant-other-citizen': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-other-citizen.title.proxy',
                        ['|role.all'],
                        'q-applicant-other-citizen.title.applicant'
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
                                'q-applicant-other-citizen.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-other-citizen.meta.summary.title.applicant'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-other-citizen': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-other-citizen.error.proxy',
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
            ],
            options: {
                outputOrder: ['other-citizen-info', 'q-applicant-other-citizen'],
                properties: {
                    'q-applicant-other-citizen': {
                        options: {
                            macroOptions: {
                                fieldset: {
                                    legend: {
                                        classes: 'govuk-fieldset__legend--m'
                                    }
                                }
                            }
                        }
                    }
                }
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
                        [
                            '==',
                            '$.answers.p-applicant-other-citizen.q-applicant-other-citizen',
                            true
                        ]
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    cond: [
                        'and',
                        ['|role.all', 'proxy', 'adult', 'capable'],
                        [
                            '==',
                            '$.answers.p-applicant-other-citizen.q-applicant-other-citizen',
                            true
                        ]
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
                        [
                            '==',
                            '$.answers.p-applicant-other-citizen.q-applicant-other-citizen',
                            true
                        ]
                    ]
                },
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
