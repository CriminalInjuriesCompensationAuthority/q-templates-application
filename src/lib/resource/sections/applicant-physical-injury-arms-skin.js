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
                    title: 'Select any injuries to the skin on the arms and hands',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Cuts (no scarring)',
                                const: 'phyinj-107'
                            },
                            {
                                title: 'Bruises',
                                const: 'phyinj-108'
                            },
                            {
                                title: 'Scars',
                                const: 'phyinj-083'
                            },
                            {
                                title: 'Burns',
                                const: 'phyinj-082'
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
                            title: 'Arm or hand skin injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-arms-skin-other': {
                    type: 'string',
                    title: 'Other skin injuries on arms or hands',
                    maxLength: 499,
                    errorMessage: {
                        maxLength:
                            'Other skin injuries on arms or hands must be 499 characters or fewer'
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injuries': 'Select an injury from the list'
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
                        required: ['q-applicant-physical-injuries-arms-skin-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-arms-skin-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-arms-skin-other':
                                    'Enter other skin injuries on arms or hands'
                            }
                        }
                    }
                }
            },
            examples: [
                {
                    'q-applicant-physical-injuries': ['phyinj-107']
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
