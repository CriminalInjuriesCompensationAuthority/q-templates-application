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
                    title: 'Select any injuries to the hip',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Dislocated hip',
                                const: 'phyinj-120'
                            },
                            {
                                title: 'Broken hip',
                                const: 'phyinj-121'
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
                            title: 'Hip injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-legs-hip-other': {
                    type: 'string',
                    title: 'Other hip injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other hip injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-legs-hip-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-legs-hip-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-legs-hip-other':
                                    'Enter other hip injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-120']
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
            'ANSWER__P-APPLICANT-PHYSICAL-INJURY-LEGS-HIP': [
                {
                    target: 'p-applicant-physical-injury-legs-leg',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'leg'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-knee',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'knee'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-ankle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'ankle'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-foot',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'foot'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-toes',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'toes'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'muscle'
                    ]
                },
                {target: 'p-applicant-infections'}
            ]
        }
    }
};
