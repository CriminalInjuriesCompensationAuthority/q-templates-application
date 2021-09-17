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
                    title: 'Select any injuries to the eye or eyesight',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken eye socket',
                                const: 'phyinj-013'
                            },
                            {
                                title: 'Temporary blurred or double vision',
                                const: 'phyinj-014'
                            },
                            {
                                title: 'Permanent blurred or double vision',
                                const: 'phyinj-015'
                            },
                            {
                                title: 'Permanent loss of peripheral vision',
                                const: 'phyinj-018'
                            },
                            {
                                title: 'Black eye',
                                const: 'phyinj-051'
                            },
                            {
                                title: 'Scratched eye',
                                const: 'phyinj-017'
                            },
                            {
                                title: 'Bleeding in eye',
                                const: 'phyinj-021'
                            },
                            {
                                title: 'Blindness',
                                const: 'phyinj-023'
                            },
                            {
                                title: 'Sight loss',
                                const: 'phyinj-024'
                            },
                            {
                                title: 'Damaged or detached retina',
                                const: 'phyinj-026'
                            },
                            {
                                title: 'Punctured eyeball',
                                const: 'phyinj-027'
                            },
                            {
                                title: 'Cataract',
                                const: 'phyinj-016'
                            },
                            {
                                title: 'Dislocated lens',
                                const: 'phyinj-019'
                            },
                            {
                                title: 'Glaucoma',
                                const: 'phyinj-020'
                            },
                            {
                                title: 'Loss of eye',
                                const: 'phyinj-022'
                            },
                            {
                                title: 'Floater',
                                const: 'phyinj-025'
                            },
                            {
                                title: 'Damaged eye drain',
                                const: 'phyinj-028'
                            },
                            {
                                title: 'Injury affecting eye movement',
                                const: 'phyinj-150'
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
                            title: 'Eye injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-upper-eye-other': {
                    type: 'string',
                    title: 'Other eye injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other eye injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-upper-eye-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-upper-eye-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-upper-eye-other':
                                    'Enter other eye injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-028']
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
                    target: 'p-applicant-physical-injury-upper-ear',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'ear'
                    ]
                },
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
