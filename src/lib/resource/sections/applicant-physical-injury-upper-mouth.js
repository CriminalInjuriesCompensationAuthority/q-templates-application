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
                    title: 'Select any injuries to the mouth',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Loose teeth',
                                const: 'phyinj-044'
                            },
                            {
                                title: 'Damaged or broken teeth',
                                const: 'phyinj-043'
                            },
                            {
                                title: 'Difficulty speaking',
                                const: 'phyinj-045'
                            },
                            {
                                title: 'Permanent loss of speech',
                                const: 'phyinj-046'
                            },
                            {
                                title: 'Loss of tongue',
                                const: 'phyinj-047'
                            },
                            {
                                title: 'Loss of smell or taste',
                                const: 'phyinj-040'
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
                            title: 'Mouth injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-upper-mouth-other': {
                    type: 'string',
                    title: 'Other mouth injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other mouth injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-upper-mouth-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-upper-mouth-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-upper-mouth-other':
                                    'Enter other mouth injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-040']
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
                    'q-applicant-physical-injuries-upper-mouth-other',
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
                                        'q-applicant-physical-injuries-upper-mouth-other'
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
                    target: 'p-applicant-physical-injury-upper-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'muscle'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'torso'
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
