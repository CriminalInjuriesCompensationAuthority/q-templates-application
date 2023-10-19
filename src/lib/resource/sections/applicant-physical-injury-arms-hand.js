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
                    title: 'Select any injuries to the hand',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken hand',
                                const: 'phyinj-096'
                            },
                            {
                                title: 'Loss of use of hand',
                                const: 'phyinj-097'
                            },
                            {
                                title: 'Loss of grip',
                                const: 'phyinj-098'
                            },
                            {
                                title: 'Nerve damage',
                                const: 'phyinj-168'
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
                            title: 'Hand injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-arms-hand-other': {
                    type: 'string',
                    title: 'Other hand injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other hand injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-arms-hand-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-arms-hand-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-arms-hand-other':
                                    'Enter other hand injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-096']
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
