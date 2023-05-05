'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-living-together'],
            additionalProperties: false,
            properties: {
                'q-applicant-living-together': {
                    type: 'boolean',
                    title: 'Were you living with them when they died?',
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
                            title: 'Were you living with them when they died?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-living-together':
                        'Select yes if you were living with them when they died?'
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
            ANSWER: [
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
