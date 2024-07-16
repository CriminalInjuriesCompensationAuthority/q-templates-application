'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-living-together'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-living-together',
                    resources: {
                        'applicant-living-together': {
                            title: {
                                myself: 'Were you living with them when they died?',
                                proxy:
                                    'Did the claimant and the person who died live together at the time of the death?'
                            },
                            error: {
                                myself: 'Select yes if you were living with them when they died',
                                proxy:
                                    'Select yes if the claimant and the person who died lived together at the time of the death'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-living-together'],
            additionalProperties: false,
            properties: {
                'q-applicant-living-together': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-living-together.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-living-together.title.proxy'
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
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-living-together.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-living-together.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-living-together': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-living-together.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-living-together.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-living-together': true
                },
                {
                    'q-applicant-living-together': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-living-together': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-LIVING-TOGETHER': [
                {
                    target: 'p-applicant-contact-with-deceased',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-living-together.q-applicant-living-together',
                            false
                        ],
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'parent'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'child'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'other'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'formerSpouseOrCivilPartner'
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-living-together.q-applicant-living-together',
                            true
                        ],
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'parent'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'child'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'other'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'spouseOrCivilPartner'
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-applicant-living-apart',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-living-together.q-applicant-living-together',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'spouseOrCivilPartner'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-living-together-duration',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-living-together.q-applicant-living-together',
                            true
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'partner'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-living-apart',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-living-together.q-applicant-living-together',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'partner'
                        ]
                    ]
                }
            ]
        }
    }
};
