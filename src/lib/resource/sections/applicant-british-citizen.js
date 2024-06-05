'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-british-citizen'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-british-citizen',
                    resources: {
                        'q-applicant-british-citizen': {
                            title: {
                                applicant: 'Were you a British citizen when the crime happened?',
                                proxy: 'Were they a British citizen when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a British citizen when the crime happened',
                                proxy:
                                    'Select yes if they were a British citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you a British citizen when the crime happened?',
                                        proxy:
                                            'Were they a British citizen when the crime happened?'
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
            required: ['q-applicant-british-citizen'],
            additionalProperties: false,
            properties: {
                'q-applicant-british-citizen': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-british-citizen.title.proxy',
                        ['|role.all'],
                        'q-applicant-british-citizen.title.applicant'
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
                                'q-applicant-british-citizen.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-british-citizen.meta.summary.title.applicant'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-british-citizen': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-british-citizen.error.proxy',
                        ['|role.all'],
                        'q-applicant-british-citizen.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-british-citizen': true
                },
                {
                    'q-applicant-british-citizen': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-british-citizen': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-task-list',
                    cond: [
                        '==',
                        '$.answers.p-applicant-british-citizen.q-applicant-british-citizen',
                        true
                    ]
                },
                {
                    target: 'p-applicant-british-citizen-relative',
                    cond: [
                        '==',
                        '$.answers.p-applicant-british-citizen.q-applicant-british-citizen',
                        false
                    ]
                }
            ]
        }
    }
};
