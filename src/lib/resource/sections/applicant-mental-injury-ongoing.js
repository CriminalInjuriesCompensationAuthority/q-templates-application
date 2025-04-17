'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-mental-injury-ongoing'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-mental-injury-ongoing',
                    resources: {
                        'q-applicant-mental-injury-ongoing': {
                            error: {
                                myself: 'Select yes if you still have your mental injury',
                                proxy: 'Select yes if you still have your mental injury'
                            },
                            title: {
                                myself: 'Do you still have your mental injury?',
                                proxy: 'Do they still have your mental injury?'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-mental-injury-ongoing'],
            additionalProperties: false,
            properties: {
                'q-applicant-mental-injury-ongoing': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-mental-injury-ongoing.title.proxy',
                        ['|role.all'],
                        'q-applicant-mental-injury-ongoing.title.myself'
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
                            theme: 'mental-health'
                        },
                        summary: {
                            title: 'Is it still ongoing?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-mental-injury-ongoing': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-mental-injury-ongoing.error.proxy',
                        ['|role.all'],
                        'q-applicant-mental-injury-ongoing.error.myself'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-mental-injury-ongoing': true
                },
                {
                    'q-applicant-mental-injury-ongoing': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-mental-injury-ongoing': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-injuries-not-eligible',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                            'once'
                        ],
                        [
                            'doesNotInclude',
                            '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                            ['SEX']
                        ],
                        ['==', '$.answers.p-applicant-infections.q-applicant-infections', 'no'],
                        [
                            '!=',
                            '$.answers.p-applicant-pregnancy-loss.q-applicant-pregnancy-loss',
                            'yes'
                        ],
                        [
                            '!=',
                            '$.answers.p-applicant-pregnancy-loss.q-applicant-pregnancy-loss',
                            'not-sure'
                        ],
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                false
                            ],
                            [
                                'and',
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-arms-digit.q-applicant-physical-injuries',
                                    ['phyinj-092', 'phyinj-088', 'phyinj-106']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-arms-skin.q-applicant-physical-injuries',
                                    ['phyinj-108', 'phyinj-107']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-legs-leg.q-applicant-physical-injuries',
                                    ['phyinj-122']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-legs-skin.q-applicant-physical-injuries',
                                    ['phyinj-135', 'phyinj-143']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-legs-toes.q-applicant-physical-injuries',
                                    ['phyinj-132', 'phyinj-130']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-torso-muscle.q-applicant-physical-injuries',
                                    ['phyinj-154']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-torso-shoulder.q-applicant-physical-injuries',
                                    ['phyinj-062']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-torso-skin.q-applicant-physical-injuries',
                                    ['phyinj-080', 'phyinj-079']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-upper-ear.q-applicant-physical-injuries',
                                    ['phyinj-006', 'phyinj-009']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-upper-eye.q-applicant-physical-injuries',
                                    ['phyinj-051', 'phyinj-017', 'phyinj-014']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-upper-head.q-applicant-physical-injuries',
                                    ['phyinj-053']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-upper-mouth.q-applicant-physical-injuries',
                                    ['phyinj-044']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-upper-nose.q-applicant-physical-injuries',
                                    ['phyinj-031', 'phyinj-033']
                                ],
                                [
                                    'includesOnly',
                                    '$.answers.p-applicant-physical-injury-upper-skin.q-applicant-physical-injuries',
                                    ['phyinj-049', 'phyinj-048']
                                ]
                            ]
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-mental-injury-ongoing.q-applicant-mental-injury-ongoing',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-mental-injury-duration.q-applicant-mental-injury-duration',
                            false
                        ]
                    ]
                },
                {
                    target: 'p--context-crime-impact'
                }
            ]
        }
    }
};
