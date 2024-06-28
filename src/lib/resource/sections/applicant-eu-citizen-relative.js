'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eu-citizen-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-eu-citizen-relative',
                    resources: {
                        'q-applicant-eu-citizen-relative': {
                            title: {
                                applicant:
                                    'Were you in the UK legally because you were the family member of an EU citizen when the crime happened?',
                                proxy:
                                    'Were they in the UK legally because they were the family member of an EU citizen when the crime happened?'
                            },
                            details: {
                                applicant:
                                    '<p class="govuk-body">Check the <a class="govuk-link" href="https://www.gov.uk/eu-eea" target="_blank">countries in the EU (opens in new tab)</a>.</p>'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were in the UK legally because you were the family member of an EU citizen when the crime happened',
                                proxy:
                                    'Select yes if they were in the UK legally because they were the family member of an EU citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you in the UK legally because you were the family member of an EU citizen when the crime happened?',
                                        proxy:
                                            'Were they in the UK legally because they were the family member of an EU citizen when the crime happened?'
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
            required: ['q-applicant-eu-citizen-relative'],
            additionalProperties: false,
            properties: {
                'q-applicant-eu-citizen-relative': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-eu-citizen-relative.title.proxy',
                        ['|role.all'],
                        'q-applicant-eu-citizen-relative.title.applicant'
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
                                'q-applicant-eu-citizen-relative.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-eu-citizen-relative.meta.summary.title.applicant'
                            ]
                        }
                    }
                },
                'eu-citizen-relative-info': {
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-eu-citizen-relative.details.applicant'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-eu-citizen-relative': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-eu-citizen-relative.error.proxy',
                        ['|role.all'],
                        'q-applicant-eu-citizen-relative.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-eu-citizen-relative': true
                },
                {
                    'q-applicant-eu-citizen-relative': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-eu-citizen-relative': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-EU-CITIZEN-RELATIVE': [
                {
                    target: '#t-task-list',
                    cond: [
                        '==',
                        '$.answers.p-applicant-eu-citizen-relative.q-applicant-eu-citizen-relative',
                        true
                    ]
                },
                {
                    target: 'p-applicant-eea-citizen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-eu-citizen-relative.q-applicant-eu-citizen-relative',
                        false
                    ]
                }
            ]
        }
    }
};
