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
                    title: 'Select any injuries to the tissue on the legs or feet',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Muscle',
                                const: 'phyinj-164'
                            },
                            {
                                title: 'Ligament',
                                const: 'phyinj-165'
                            },
                            {
                                title: 'Tendon',
                                const: 'phyinj-166'
                            },
                            {
                                title: 'Cartilage',
                                const: 'phyinj-167'
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
                            title: 'Leg tissue injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-legs-muscle-other': {
                    type: 'string',
                    title: 'Other tissue injuries to legs or feet',
                    maxLength: 499,
                    errorMessage: {
                        maxLength:
                            'Other tissue injuries to legs or feet must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-legs-muscle-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-legs-muscle-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-legs-muscle-other':
                                    'Enter other tissue injuries to legs or feet'
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
                    'q-applicant-physical-injuries': ['phyinj-164']
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
            'ANSWER__P-APPLICANT-PHYSICAL-INJURY-LEGS-MUSCLE': [
                {
                    target: 'p-applicant-infections'
                }
            ]
        }
    }
};
