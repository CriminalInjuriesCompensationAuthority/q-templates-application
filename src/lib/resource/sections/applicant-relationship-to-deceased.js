'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-relationship-to-deceased'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-relationship-to-deceased',
                    resources: {
                        'applicant-relationship-to-deceased': {
                            title: {
                                myself: 'What is your relationship to the person who died?',
                                proxy: 'What is the claimant’s relationship to the person who died?'
                            },
                            description: {
                                myself:
                                    'This tells us who you are in relation to the person who died.',
                                proxy:
                                    'This tells us who the claimant is in relation to the person who died.'
                            },
                            optionTitle: {
                                myself: 'Tell us how you are related',
                                proxy: 'Tell us how the claimant is related to the person who died'
                            },
                            error: {
                                noSelection: {
                                    myself: 'Select your relationship to the person who died',
                                    proxy:
                                        'Select the claimant’s relationship to the person who died'
                                },
                                conditionalOption: {
                                    myself: 'Tell us how you are related',
                                    proxy:
                                        'Tell us how the claimant is related to the person who died'
                                },
                                characterCount: {
                                    myself:
                                        'Tell us how you are related must be 50 characters or less',
                                    proxy:
                                        'Tell us how the claimant is related to the person who died must be 50 characters or less'
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
            propertyNames: {
                enum: ['q-applicant-relationship-to-deceased', 'q-applicant-relationship-other']
            },
            properties: {
                'q-applicant-relationship-to-deceased': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-relationship-to-deceased.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-relationship-to-deceased.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-relationship-to-deceased.description.myself',
                        ['|role.all', 'proxy'],
                        'applicant-relationship-to-deceased.description.proxy'
                    ],
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Parent',
                            const: 'parent'
                        },
                        {
                            title: 'Child',
                            const: 'child'
                        },
                        {
                            title: 'Spouse or civil partner',
                            const: 'spouseOrCivilPartner'
                        },
                        {
                            title: 'Partner',
                            const: 'partner'
                        },
                        {
                            title: 'Former spouse or former civil partner',
                            const: 'formerSpouseOrCivilPartner'
                        },
                        {
                            title: 'Other',
                            const: 'other'
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
                                'applicant-relationship-to-deceased.optionTitle.myself',
                                ['|role.all', 'proxy'],
                                'applicant-relationship-to-deceased.optionTitle.proxy'
                            ]
                        }
                    }
                },
                'q-applicant-relationship-other': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-relationship-to-deceased.optionTitle.myself',
                        ['|role.all', 'proxy'],
                        'applicant-relationship-to-deceased.optionTitle.proxy'
                    ],
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: [
                            '|l10nt',
                            ['|role.all', 'myself'],
                            'applicant-relationship-to-deceased.error.characterCount.myself',
                            ['|role.all', 'proxy'],
                            'applicant-relationship-to-deceased.error.characterCount.proxy'
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        }
                    }
                }
            },
            required: ['q-applicant-relationship-to-deceased'],
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-relationship-other-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-relationship-other-is-required': {
                    if: {
                        properties: {
                            'q-applicant-relationship-to-deceased': {
                                const: 'other'
                            }
                        },
                        required: ['q-applicant-relationship-to-deceased']
                    },
                    then: {
                        required: ['q-applicant-relationship-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-relationship-to-deceased',
                                'q-applicant-relationship-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-relationship-other': [
                                    '|l10nt',
                                    ['|role.all', 'myself'],
                                    'applicant-relationship-to-deceased.error.conditionalOption.myself',
                                    ['|role.all', 'proxy'],
                                    'applicant-relationship-to-deceased.error.conditionalOption.proxy'
                                ]
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-relationship-to-deceased': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-relationship-to-deceased.error.noSelection.myself',
                        ['|role.all', 'proxy'],
                        'applicant-relationship-to-deceased.error.noSelection.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-relationship-to-deceased': 'parent'
                },
                {
                    'q-applicant-relationship-to-deceased': 'child'
                },
                {
                    'q-applicant-relationship-to-deceased': 'spouseOrCivilPartner'
                },
                {
                    'q-applicant-relationship-to-deceased': 'partner'
                },
                {
                    'q-applicant-relationship-to-deceased': 'formerSpouseOrCivilPartner'
                },
                {
                    'q-applicant-relationship-to-deceased': 'other',
                    'q-applicant-relationship-other': 'testcase'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-relationship-to-deceased': true
                },
                {
                    'q-applicant-relationship-to-deceased': false
                },
                {
                    'q-applicant-relationship-to-deceased': 123
                },
                {
                    'q-applicant-relationship-to-deceased': 'other'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-deceased-details',
                    cond: ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true]
                },
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'formerSpouseOrCivilPartner'
                        ],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false]
                    ]
                },
                {
                    target: 'p-applicant-living-together'
                }
            ]
        }
    }
};
