'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eea-citizen-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-eea-citizen-relative',
                    resources: {
                        'q-applicant-eea-citizen-relative': {
                            title: {
                                applicant:
                                    'Were you in the UK legally because you were the family member of an EEA citizen when the crime happened?',
                                proxy:
                                    'Were they in the UK legally because they were the family member of an EEA citizen when the crime happened?'
                            },
                            details: {
                                applicant:
                                    '<p class="govuk-body">Check the <a class="govuk-link" href="https://www.gov.uk/eu-eea" target="_blank">countries in the EEA (opens in new tab)</a>.</p>'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were in the UK legally because you were the family member of an EEA citizen when the crime happened',
                                proxy:
                                    'Select yes if they were in the UK legally because they were the family member of an EEA citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you in the UK legally because you were the family member of an EEA citizen when the crime happened?',
                                        proxy:
                                            'Were they in the UK legally because they were the family member of an EEA citizen when the crime happened?'
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
            required: ['q-applicant-eea-citizen-relative'],
            additionalProperties: false,
            properties: {
                'q-applicant-eea-citizen-relative': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-eea-citizen-relative.title.proxy',
                        ['|role.all'],
                        'q-applicant-eea-citizen-relative.title.applicant'
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
                                'q-applicant-eea-citizen-relative.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-eea-citizen-relative.meta.summary.title.applicant'
                            ]
                        }
                    }
                },
                'eea-citizen-relative-info': {
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-eea-citizen-relative.details.applicant'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-eea-citizen-relative': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-eea-citizen-relative.error.proxy',
                        ['|role.all'],
                        'q-applicant-eea-citizen-relative.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-eea-citizen-relative': true
                },
                {
                    'q-applicant-eea-citizen-relative': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-eea-citizen-relative': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-EEA-CITIZEN-RELATIVE': [
                {
                    target: '#task-list',
                    cond: [
                        '==',
                        '$.answers.p-applicant-eea-citizen-relative.q-applicant-eea-citizen-relative',
                        true
                    ]
                },
                {
                    target: 'p-applicant-other-citizen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-eea-citizen-relative.q-applicant-eea-citizen-relative',
                        false
                    ]
                }
            ]
        }
    }
};
