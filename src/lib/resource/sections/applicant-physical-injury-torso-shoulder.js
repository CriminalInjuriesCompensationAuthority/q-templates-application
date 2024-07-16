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
                    title: 'Select any injuries to the shoulder',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken shoulder blade',
                                const: 'phyinj-076'
                            },
                            {
                                title: 'Dislocated shoulder',
                                const: 'phyinj-100'
                            },
                            {
                                title: 'Separated shoulder',
                                const: 'phyinj-062'
                            },
                            {
                                title: 'Frozen shoulder',
                                const: 'phyinj-101'
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
                            title: 'Shoulder injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-torso-shoulder-other': {
                    type: 'string',
                    title: 'Other shoulder injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other shoulder injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-torso-shoulder-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-torso-shoulder-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-torso-shoulder-other':
                                    'Enter other shoulder injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-100']
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
            'ANSWER__P-APPLICANT-PHYSICAL-INJURY-TORSO-SHOULDER': [
                {
                    target: 'p-applicant-physical-injury-torso-chest',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'chest'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-abdomen',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'abdomen'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-back',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'back'
                    ]
                },
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
                {target: 'p-applicant-infections'}
            ]
        }
    }
};
