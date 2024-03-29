'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--has-legal-authority'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--has-legal-authority',
                    resources: {
                        'q--has-legal-authority': {
                            title: {
                                proxy: {
                                    child: 'Do you have parental responsibility for them?',
                                    adult: {
                                        deceased:
                                            'Do you have legal authority to act on behalf of the claimant?',
                                        nonDeceased:
                                            'Do you have legal authority to act on behalf of the victim?'
                                    }
                                }
                            },
                            error: {
                                required: {
                                    proxy: {
                                        child:
                                            'Select yes if you have parental responsibility for them',
                                        adult: {
                                            deceased:
                                                'Select yes if you have legal authority to act on behalf of the claimant',
                                            nonDeceased:
                                                'Select yes if you have legal authority to act on behalf of the victim'
                                        }
                                    }
                                }
                            },
                            meta: {
                                summary: {
                                    title: {
                                        proxy: {
                                            child: 'Do you have parental responsibility for them?',
                                            adult: 'Do you have legal authority?'
                                        }
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
            required: ['q--has-legal-authority'],
            additionalProperties: false,
            properties: {
                'q--has-legal-authority': {
                    type: 'boolean',
                    // prettier-ignore
                    title: ['|l10nt',
                        ['|role.all', 'proxy', 'child'], 'q--has-legal-authority.title.proxy.child',
                        ['|role.all', 'proxy', 'adult','incapable', 'deceased'], 'q--has-legal-authority.title.proxy.adult.deceased',
                        ['|role.all', 'proxy', 'adult'], 'q--has-legal-authority.title.proxy.adult.nonDeceased'
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
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            // prettier-ignore
                            title: ['|l10nt',
                                ['|role.all', 'proxy', 'child'], 'q--has-legal-authority.meta.summary.title.proxy.child',
                                ['|role.all', 'proxy', 'adult'], 'q--has-legal-authority.meta.summary.title.proxy.adult'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    // prettier-ignore
                    'q--has-legal-authority': ['|l10nt',
                        ['|role.all', 'proxy', 'child'], 'q--has-legal-authority.error.required.proxy.child',
                        ['|role.all', 'proxy', 'adult', 'incapable', 'deceased'], 'q--has-legal-authority.error.required.proxy.adult.deceased',
                        ['|role.all', 'proxy', 'adult'], 'q--has-legal-authority.error.required.proxy.adult.nonDeceased'
                    ]
                }
            },
            examples: [
                {
                    'q--has-legal-authority': true
                },
                {
                    'q--has-legal-authority': false
                }
            ],
            invalidExamples: [
                {
                    'q--has-legal-authority': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-authority',
                    // prettier-ignore
                    cond: [
                        'and',
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
                        [
                        'dateCompare',
                        '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                        '<', // is greater than or equal to ...
                        '-18', // 18 ...
                        'years' // years (before, due to the negative (-18) ...
                        // today's date (no second date given. defaults to today's date).
                        ]                                              
                    ]
                },
                {
                    target: 'p--represents-legal-authority',

                    cond: [
                        'and',
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
                        ['|role.all', 'adult', 'incapable']
                    ]
                },
                {
                    target: 'p--context-authority'
                }
            ]
        }
    }
};
