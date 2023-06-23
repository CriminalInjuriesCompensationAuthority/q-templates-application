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
                                    'Were you in the UK legally because you were a family member of an EU citizen when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were in the UK legally because you were a family member of an EU citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title:
                                        'Were you in the UK legally because you were a family member of an EU citizen when the crime happened?'
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
                                ['|role.all'],
                                'q-applicant-eu-citizen-relative.meta.summary.title'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-eu-citizen-relative': [
                        '|l10nt',
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
            ANSWER: [
                {
                    target: 'p--before-you-continue',
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
