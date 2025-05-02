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
                ns: 'p-applicant-do-you-have-disabling-mental-injury'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-do-you-have-disabling-mental-injury',
                    resources: {
                        'q-applicant-do-you-have-disabling-mental-injury': {
                            description:
                                "This means it's much harder than usual to do things you would normally do, like going to school or university, seeing friends, working or having a relationship.",
                            'description_someone-else':
                                "This means it's much harder than usual to do things they would normally do, like going to school or university, seeing friends, working or having a relationship.",
                            error: {
                                required: "Select yes if you've had a disabling mental injury",
                                'required_someone-else':
                                    "Select yes if they've had a disabling mental injury"
                            },
                            title: 'Have you had a disabling mental injury?',
                            'title_someone-else': 'Have they had a disabling mental injury?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-do-you-have-disabling-mental-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-do-you-have-disabling-mental-injury': {
                    type: 'boolean',
                    description:
                        'l10nt:q-applicant-do-you-have-disabling-mental-injury.description{?lng,context,ns}',
                    title:
                        'l10nt:q-applicant-do-you-have-disabling-mental-injury.title{?lng,context,ns}',
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
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-do-you-have-disabling-mental-injury':
                        'l10nt:q-applicant-do-you-have-disabling-mental-injury.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-do-you-have-disabling-mental-injury': true
                },
                {
                    'q-applicant-do-you-have-disabling-mental-injury': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-do-you-have-disabling-mental-injury': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-mental-injury-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
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
                                    ['phyinj-135', 'phyinj-134']
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
                                    ['phyinj-031', 'phyinj-033', 'phyinj-052']
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
