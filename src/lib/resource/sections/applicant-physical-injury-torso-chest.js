'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injuries'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injuries': {
                    title: 'Select any injuries to the chest',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken collarbone',
                                const: 'phyinj-063'
                            },
                            {
                                title: 'Broken breast bone',
                                const: 'phyinj-078'
                            },
                            {
                                title: 'Chest surgery',
                                const: 'phyinj-057'
                            },
                            {
                                title: 'Broken rib',
                                const: 'phyinj-075'
                            },
                            {
                                title: 'Punctured lung',
                                const: 'phyinj-070'
                            },
                            {
                                title: 'Collapsed lung',
                                const: 'phyinj-071'
                            },
                            {
                                title: 'Lung damage from smoke or chemicals',
                                const: 'phyinj-072'
                            },
                            {
                                title: 'Other',
                                const: 'phyinj-149'
                            }
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Chest injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-torso-chest-other': {
                    type: 'string',
                    title: 'Other chest injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other chest injuries must be 499 characters or fewer'
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        }
                    }
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-other-textbox-is-required'
                }
            ],
            definitions: {
                'if-other-then-other-textbox-is-required': {
                    if: {
                        properties: {
                            'q-applicant-physical-injuries': {
                                contains: {
                                    const: 'phyinj-149'
                                }
                            }
                        },
                        required: ['q-applicant-physical-injuries']
                    },
                    then: {
                        required: ['q-applicant-physical-injuries-torso-chest-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-torso-chest-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-torso-chest-other':
                                    'Enter other chest injuries'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injuries': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injuries': ['phyinj-072']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injuries': 'not-an-array'
                },
                {
                    'q-applicant-physical-injuries': ['not-a-key']
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-PHYSICAL-INJURY-TORSO-CHEST': [
                {
                    target: 'p-applicant-physical-injury-torso-abdomen',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'abdomen'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-back',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'back'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-pelvis',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'pelvis'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-genitals',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'genitals'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'muscle'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'arms'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'legs'
                    ]
                },
                {target: 'p-applicant-infections'}
            ]
        }
    }
};
