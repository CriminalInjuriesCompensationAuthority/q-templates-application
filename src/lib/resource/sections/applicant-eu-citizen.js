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
                                applicant: 'Were you an EU citizen when the crime happened?'
                            },
                            details: {
                                applicant:
                                    '<p class="govuk-body">Check the <a href="https://www.gov.uk/eu-eea" target="_blank">countries in the EU (opens in new tab)</a>.</p>'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were an EU citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: 'Were you an EU citizen when the crime happened?'
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
                    title: ['|l10nt', ['|role.all'], 'q-applicant-eu-citizen.title.applicant'],
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
                                'q-applicant-eu-citizen.meta.summary.title'
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
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
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
