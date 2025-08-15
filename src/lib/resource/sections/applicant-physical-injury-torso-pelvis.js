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
                    title: 'Select any injuries to the pelvis',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken pelvis',
                                const: 'phyinj-074'
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
                            title: 'Pelvis injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-torso-pelvis-other': {
                    type: 'string',
                    title: 'Other pelvis injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other pelvis injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-torso-pelvis-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-torso-pelvis-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-torso-pelvis-other':
                                    'Enter other pelvis injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-074']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injuries': 'not-an-array'
                },
                {
                    'q-applicant-physical-injuries': ['not-a-key']
                }
            ],
            options: {
                transformOrder: [
                    'q-applicant-physical-injuries-torso-pelvis-other',
                    'q-applicant-physical-injuries'
                ],
                outputOrder: ['q-applicant-physical-injuries'],
                properties: {
                    'q-applicant-physical-injuries': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'phyinj-149',
                                    componentIds: [
                                        'q-applicant-physical-injuries-torso-pelvis-other'
                                    ]
                                }
                            ]
                        }
                    }
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
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
