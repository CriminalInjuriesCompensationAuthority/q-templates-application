'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-mental-injury-duration'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-mental-injury-duration',
                    resources: {
                        'q-applicant-mental-injury-duration': {
                            error: {
                                required: 'Select how long your mental injury has lasted',
                                'required_someone-else':
                                    'Select how long their mental injury has lasted'
                            },
                            title: 'How long did your mental injury last?',
                            'title_someone-else': 'How long did their mental injury last?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-mental-injury-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-mental-injury-duration': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-mental-injury-duration.title{?lng,context,ns}',
                    oneOf: [
                        {
                            title: '6 weeks or more',
                            const: true
                        },
                        {
                            title: 'Less than 6 weeks',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'mental-health'
                        },
                        summary: {
                            title: 'How long has it lasted?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-mental-injury-duration':
                        'l10nt:q-applicant-mental-injury-duration.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-mental-injury-duration': true
                },
                {
                    'q-applicant-mental-injury-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-mental-injury-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-mental-injury-ongoing',
                    cond: [
                        '==',
                        '$.answers.p-applicant-mental-injury-duration.q-applicant-mental-injury-duration',
                        false
                    ]
                },
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
