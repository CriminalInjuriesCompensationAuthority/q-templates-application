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
                                    'Were you in the UK legally because you were a close relative of an EEA citizen when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were in the UK legally because you were a family member of an EEA citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title:
                                        'Were you in the UK legally because you were a close relative of an EEA citizen when the crime happened?'
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
                                ['|role.all'],
                                'q-applicant-eea-citizen-relative.meta.summary.title'
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
            ANSWER: [
                {
                    target: 'p--before-you-continue',
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
