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
                    title: 'Select any injuries to the tissue on the arms or hands',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Muscle',
                                const: 'phyinj-158'
                            },
                            {
                                title: 'Ligament',
                                const: 'phyinj-159'
                            },
                            {
                                title: 'Tendon',
                                const: 'phyinj-160'
                            },
                            {
                                title: 'Cartilage',
                                const: 'phyinj-161'
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
                            title: 'Arm or hand tissue injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-arms-muscle-other': {
                    type: 'string',
                    title: 'Other tissue injuries to arms or hands',
                    maxLength: 499,
                    errorMessage: {
                        maxLength:
                            'Other tissue injuries to arms or hands must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-arms-muscle-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-arms-muscle-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-arms-muscle-other':
                                    'Enter other tissue injuries to arms or hands'
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
                    'q-applicant-physical-injuries': ['phyinj-158']
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
            ANSWER: [
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
