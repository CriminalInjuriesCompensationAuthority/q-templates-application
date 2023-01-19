'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-rep-type'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-rep-type',
                    resources: {
                        'rep-type': {
                            title: {
                                proxy: {
                                    nonDeceased:
                                        'In what capacity are you applying on behalf of the victim?',
                                    deceased:
                                        'In what capacity are you applying on behalf of the claimant?'
                                }
                            },
                            description: {
                                proxy: {
                                    nonDeceased:
                                        'This tells us who you are in relation to the victim.',
                                    deceased:
                                        'This tells us who you are in relation to the claimant.'
                                }
                            },
                            error: {
                                nonDeceased:
                                    'Select in what capacity you are applying on behalf of the victim',
                                deceased:
                                    'Select in what capacity you are applying on behalf of the claimant'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-rep-type'],
            additionalProperties: false,
            properties: {
                'q-rep-type': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'rep-type.title.proxy.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'],
                        'rep-type.title.proxy.deceased'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'rep-type.description.proxy.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'],
                        'rep-type.description.proxy.deceased'
                    ],
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Solicitor',
                            const: 'SOLS'
                        },
                        {
                            title: 'Claims management company',
                            const: 'CMCO'
                        },
                        {
                            title: 'Support organisation',
                            const: 'SUPP'
                        },
                        {
                            title: 'Social Services',
                            const: 'SSER'
                        },
                        {
                            title: 'Friend or relative',
                            const: 'FRFA'
                        },
                        {
                            title: 'Foster carer',
                            const: 'FC'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Representative type'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-type': [
                        '|l10nt',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'rep-type.error.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'],
                        'rep-type.error.deceased'
                    ]
                }
            },
            examples: [
                {
                    'q-rep-type': 'SOLS'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-type': ['SOLS', 'FC']
                },
                {
                    'q-rep-type': ''
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-confirmation-method'
                }
            ]
        }
    }
};
