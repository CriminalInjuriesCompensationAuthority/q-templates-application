'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-ordinarily-resident'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-ordinarily-resident',
                    resources: {
                        'q-applicant-ordinarily-resident': {
                            title: {
                                applicant:
                                    'Were you ordinarily resident in the UK when the crime happened?',
                                proxy:
                                    'Were they ordinarily resident in the UK when the crime happened?'
                            },
                            description: {
                                applicant:
                                    'This means that you were living in the UK legally as part of your normal life. For example, you were working, studying or caring for someone in the UK.',
                                proxy:
                                    'This means that they were living in the UK legally as part of their normal life. For example, they were working, studying or caring for someone in the UK.'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were ordinarily resident in the UK when the crime happened',
                                proxy:
                                    'Select yes if they were ordinarily resident in the UK when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you ordinarily resident in the UK when the crime happened?',
                                        proxy:
                                            'Were they ordinarily resident in the UK when the crime happened?'
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
            required: ['q-applicant-ordinarily-resident'],
            additionalProperties: false,
            properties: {
                'q-applicant-ordinarily-resident': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-ordinarily-resident.title.proxy',
                        ['|role.all'],
                        'q-applicant-ordinarily-resident.title.applicant'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-ordinarily-resident.description.proxy',
                        ['|role.all'],
                        'q-applicant-ordinarily-resident.description.applicant'
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
                                'q-applicant-ordinarily-resident.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-ordinarily-resident.meta.summary.title.applicant'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-ordinarily-resident': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-ordinarily-resident.error.proxy',
                        ['|role.all'],
                        'q-applicant-ordinarily-resident.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-ordinarily-resident': true
                },
                {
                    'q-applicant-ordinarily-resident': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-ordinarily-resident': 'foo'
                }
            ]
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
                            '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
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
                            '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
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
                            '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
                            true
                        ]
                    ]
                },
                {
                    target: 'p--before-you-continue',
                    cond: [
                        '==',
                        '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
                        true
                    ]
                },
                {
                    target: 'p-applicant-eu-citizen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-ordinarily-resident.q-applicant-ordinarily-resident',
                        false
                    ]
                }
            ]
        }
    }
};
