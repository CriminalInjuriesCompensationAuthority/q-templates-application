'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p-check-your-answers': {
                    title: 'Check your answers',
                    description: 'Check your answers before sending your application',
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'apply',
                            editAnswerText: 'Change',
                            summaryStructure: [],
                            lookup: {}
                        }
                    }
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-declaration',
                    cond: ['|role.all', 'myself', 'adult', 'nonDeceased']
                },
                {
                    target: 'p-applicant-declaration-deceased',
                    cond: ['|role.all', 'myself', 'adult', 'deceased']
                },
                {
                    target: 'p--download-your-answers',
                    cond: [
                        'or',
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'CMCO'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SUPP'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SSER']
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-under-12',
                    cond: [
                        'and',
                        ['|role.all', 'mainapplicant'],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'nonDeceased'],
                            ['|role.all', 'adult', 'incapable', 'nonDeceased']
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-under-12-deceased',
                    cond: [
                        'and',
                        ['|role.all', 'mainapplicant'],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'deceased'],
                            ['|role.all', 'adult', 'incapable', 'deceased']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-under-12',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'nonDeceased'],
                            ['|role.all', 'adult', 'incapable', 'nonDeceased']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-under-12-deceased',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'deceased'],
                            ['|role.all', 'adult', 'incapable', 'deceased']
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-12-and-over',
                    cond: ['|role.all', 'mainapplicant', 'childOver12', 'nonDeceased']
                },
                {
                    target: 'p-mainapplicant-declaration-12-and-over-deceased',
                    cond: ['|role.all', 'mainapplicant', 'childOver12', 'deceased']
                },
                {
                    target: 'p-rep-declaration-12-and-over',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        ['|role.all', 'childOver12', 'nonDeceased']
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over-deceased',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        ['|role.all', 'childOver12', 'deceased']
                    ]
                }
            ]
        }
    }
};
