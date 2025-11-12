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
                                            'Who has legal authority to act for the claimant?',
                                        nonDeceased:
                                            'Who has legal authority to act for the victim?'
                                    }
                                }
                            },
                            description: {
                                proxy: {
                                    child:
                                        'This means you have parental responsibility for the victim as their birth, step or adoptive parent',
                                    adult: {
                                        deceased:
                                            'To have legal authority to act on behalf of the victim, you could be a person appointed bu a court, a person named on a power of attorney document, or the local authority',
                                        nonDeceased:
                                            'To have legal authority to act on behalf of the claimant, you could be a person appointed bu a court, a person named on a power of attorney document, or the local authority'
                                    }
                                }
                            },
                            error: {
                                required: {
                                    proxy: {
                                        child: 'Select who has parental responsibility for them',
                                        adult: {
                                            deceased:
                                                'Select who has legal authority to act on for the claimant',
                                            nonDeceased:
                                                'Select who has legal authority to act on for the victim'
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
                    type: 'string',
                    // prettier-ignore
                    title: ['|l10nt',
                        ['|role.all', 'proxy', 'child'], 'q--has-legal-authority.title.proxy.child',
                        ['|role.all', 'proxy', 'adult','incapable', 'deceased'], 'q--has-legal-authority.title.proxy.adult.deceased',
                        ['|role.all', 'proxy', 'adult'], 'q--has-legal-authority.title.proxy.adult.nonDeceased'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'child'],
                        'q--has-legal-authority.description.proxy.child',
                        ['|role.all', 'proxy', 'adult', 'incapable', 'deceased'],
                        'q--has-legal-authority.description.proxy.adult.deceased',
                        ['|role.all', 'proxy', 'adult'],
                        'q--has-legal-authority.description.proxy.adult.nonDeceased'
                    ],
                    oneOf: [
                        {
                            title: 'Me',
                            const: 'me'
                        },
                        {
                            title: 'Someone else',
                            const: 'someone-else'
                        },
                        {
                            title: "No-one or I'm not sure",
                            const: 'not-sure'
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
                    'q--has-legal-authority': 'me'
                },
                {
                    'q--has-legal-authority': 'someone-else'
                },
                {
                    'q--has-legal-authority': 'not-sure'
                }
            ],
            invalidExamples: [
                {
                    'q--has-legal-authority': 'foo'
                },
                {
                    'q--has-legal-authority': true
                },
                {
                    'q--has-legal-authority': false
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--represents-legal-authority',
                    // prettier-ignore
                    cond: [
                        'and',
                        ['!=', '$.answers.p--has-legal-authority.q--has-legal-authority', 'me'],
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
