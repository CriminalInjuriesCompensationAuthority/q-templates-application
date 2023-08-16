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
                    title: 'Select any injuries to the back',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken vertebra',
                                const: 'phyinj-059'
                            },
                            {
                                title: 'Slipped disc',
                                const: 'phyinj-060'
                            },
                            {
                                title: 'Back strain',
                                const: 'phyinj-061'
                            },
                            {
                                title: 'Broken tailbone',
                                const: 'phyinj-064'
                            },
                            {
                                title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                const: 'phyinj-139'
                            },
                            {
                                title: 'Hemiplegia (paralysis of one side of the body)',
                                const: 'phyinj-137'
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
                            title: 'Back injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-torso-back-other': {
                    type: 'string',
                    title: 'Other back injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other back injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-torso-back-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-torso-back-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-torso-back-other':
                                    'Enter other back injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-064']
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
                {
                    target: 'p-applicant-infections'
                }
            ]
        }
    }
};
