'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-british-citizen-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-british-citizen-relative',
                    resources: {
                        'q-applicant-british-citizen-relative': {
                            title: {
                                applicant:
                                    'Were you a close relative of a British citizen when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a close relative of a British citizen when the crime happened'
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
            required: ['q-applicant-british-citizen-relative'],
            additionalProperties: false,
            properties: {
                'q-applicant-british-citizen-relative': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-british-citizen-relative.title.applicant'
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
                            title: 'q-applicant-british-citizen-relative.meta.summary.title'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-british-citizen-relative': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-british-citizen-relative.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-british-citizen-relative': true
                },
                {
                    'q-applicant-british-citizen-relative': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-british-citizen-relative': 'foo'
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
                        '$.answers.p-applicant-british-citizen-relative.q-applicant-british-citizen-relative',
                        true
                    ]
                },
                {
                    target: 'p-applicant-ordinarily-resident',
                    cond: [
                        '==',
                        '$.answers.p-applicant-british-citizen-relative.q-applicant-british-citizen-relative',
                        false
                    ]
                }
            ]
        }
    }
};
