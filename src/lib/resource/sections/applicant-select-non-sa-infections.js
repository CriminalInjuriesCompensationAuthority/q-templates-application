'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
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
                        required: ['q-applicant-infections-other'],
                        propertyNames: {
                            enum: ['q-applicant-physical-injuries', 'q-applicant-infections-other']
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-infections-other': 'Enter other infection'
                            }
                        }
                    }
                }
            },
            allOf: [
                {
                    title: 'What infection?',
                    required: ['q-applicant-physical-injuries'],
                    allOf: [
                        {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    type: 'array',
                                    description: 'Select all that apply.',
                                    items: {
                                        anyOf: [
                                            {
                                                title: 'HIV',
                                                const: 'phyinj-141'
                                            },
                                            {
                                                title: 'Hepatitis B',
                                                const: 'phyinj-142'
                                            },
                                            {
                                                title: 'Hepatitis C',
                                                const: 'phyinj-143'
                                            },
                                            {
                                                title: 'Other infection',
                                                const: 'phyinj-149'
                                            }
                                        ]
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'injuries'
                                        },
                                        summary: {
                                            title: 'What infection?'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-infections-other': {
                                    type: 'string',
                                    title: 'Other infection',
                                    maxLength: 499,
                                    errorMessage: {
                                        maxLength:
                                            'Other infections must be 499 characters or fewer'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'injuries'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-physical-injuries': 'Select an infection from the list'
                        }
                    },
                    oneOf: [
                        {
                            allOf: [
                                {
                                    $ref: '#/definitions/if-other-then-other-textbox-is-required'
                                }
                            ]
                        }
                    ]
                }
            ],
            examples: [
                {
                    'q-applicant-physical-injuries': ['phyinj-141']
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
                    target: 'p--context-pregnancy',
                    cond: [
                        'dateCompare',
                        '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                        '>', // is more than ...
                        '-7', // 7 ...
                        'years' // years (before, due to the negative (-7) ...
                        // today's date (no second date given. defaults to today's date).
                    ]
                },
                {
                    target: 'p--context-dmi-details'
                }
            ]
        }
    }
};
