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
                    title: 'Select any injuries to the finger or thumb',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Dislocated thumb',
                                const: 'phyinj-110'
                            },
                            {
                                title: 'Dislocated index finger',
                                const: 'phyinj-109'
                            },
                            {
                                title: 'Dislocated finger on one hand',
                                const: 'phyinj-088'
                            },
                            {
                                title: 'Dislocated fingers on both hands',
                                const: 'phyinj-089'
                            },
                            {
                                title: 'Broken thumb',
                                const: 'phyinj-090'
                            },
                            {
                                title: 'Broken index finger',
                                const: 'phyinj-091'
                            },
                            {
                                title: 'Broken finger on one hand',
                                const: 'phyinj-092'
                            },
                            {
                                title: 'Broken fingers on both hands',
                                const: 'phyinj-093'
                            },
                            {
                                title: 'Loss of thumb',
                                const: 'phyinj-111'
                            },
                            {
                                title: 'Loss of finger',
                                const: 'phyinj-094'
                            },
                            {
                                title: 'Loss of part of finger',
                                const: 'phyinj-095'
                            },
                            {
                                title: 'Loss of fingernail',
                                const: 'phyinj-106'
                            },
                            {
                                title: 'Paralysed finger',
                                const: 'phyinj-147'
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
                            title: 'Finger or thumb injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-arms-digit-other': {
                    type: 'string',
                    title: 'Other finger or thumb injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other finger or thumb injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-arms-digit-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-arms-digit-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-arms-digit-other':
                                    'Enter other finger or thumb injuries'
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
                    'q-applicant-physical-injuries': ['phyinj-110']
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
