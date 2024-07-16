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
                    title: 'Select any injuries to the ear or hearing',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken ear bone',
                                const: 'phyinj-006'
                            },
                            {
                                title: 'Hearing loss',
                                const: 'phyinj-007'
                            },
                            {
                                title: 'Loss of ear',
                                const: 'phyinj-008'
                            },
                            {
                                title: '1 perforated eardrum',
                                const: 'phyinj-009'
                            },
                            {
                                title: '2 perforated eardrums',
                                const: 'phyinj-010'
                            },
                            {
                                title: 'Tinnitus',
                                const: 'phyinj-011'
                            },
                            {
                                title: 'Injury affecting balance',
                                const: 'phyinj-012'
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
                            title: 'Ear injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-upper-ear-other': {
                    type: 'string',
                    title: 'Other ear or hearing injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other ear or hearing injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-upper-ear-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-upper-ear-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-upper-ear-other':
                                    'Enter other ear or hearing injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-012']
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
            'ANSWER__P-APPLICANT-PHYSICAL-INJURY-UPPER-EAR': [
                {
                    target: 'p-applicant-physical-injury-upper-nose',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'nose'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-mouth',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'mouth'
                    ]
                },
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
                {
                    target: 'p-applicant-infections'
                }
            ]
        }
    }
};
