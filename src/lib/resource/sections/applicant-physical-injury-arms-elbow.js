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
                    title: 'Select any injuries to the elbow',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Dislocated elbow',
                                const: 'phyinj-086'
                            },
                            {
                                title: 'Broken elbow',
                                const: 'phyinj-087'
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
                            title: 'Elbow injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-arms-elbow-other': {
                    type: 'string',
                    title: 'Other elbow injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other elbow injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-arms-elbow-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-arms-elbow-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-arms-elbow-other':
                                    'Enter other elbow injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-086']
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
                    'q-applicant-physical-injuries-arms-elbow-other',
                    'q-applicant-physical-injuries'
                ],
                outputOrder: ['q-applicant-physical-injuries'],
                properties: {
                    'q-applicant-physical-injuries': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'phyinj-149',
                                    componentIds: ['q-applicant-physical-injuries-arms-elbow-other']
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
                    target: 'p-applicant-physical-injury-arms-wrist',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'wrist'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-hand',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'hand'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-digit',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'digit'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'muscle'
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
