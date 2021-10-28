'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: "What is the GP's address?",
                    meta: {
                        compositeId: 'applicant-gp-address',
                        classifications: {
                            theme: 'treatment'
                        }
                    },
                    required: [
                        'q-gp-building-and-street',
                        'q-gp-town-or-city',
                        'q-gp-building-and-street2'
                    ],
                    propertyNames: {
                        enum: [
                            'q-gp-building-and-street',
                            'q-gp-building-and-street2',
                            'q-gp-town-or-city',
                            'q-gp-county',
                            'q-gp-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-gp-building-and-street': {
                                    type: 'string',
                                    title: 'Practice name',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength: 'Practice name must be less than 60 characters'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'treatment'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-gp-building-and-street2': {
                                    type: 'string',
                                    title: 'Building and street',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Building and street must be less than 60 characters'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'treatment'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-gp-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'treatment'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-gp-county': {
                                    type: 'string',
                                    title: 'County (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'County must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'treatment'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-gp-postcode': {
                                    type: 'string',
                                    title: 'Postcode (optional)',
                                    maxLength: 10,
                                    errorMessage: {
                                        maxLength: 'Postcode must be 10 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'treatment'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-gp-building-and-street': "Enter the name of your GP's practice",
                            'q-gp-building-and-street2': 'Enter the building and street of your GP',
                            'q-gp-town-or-city':
                                "Enter the town or city where your GP's practice is"
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-gp-building-and-street': 12345,
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 12345,
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 12345,
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 12345,
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-dentist-visited',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'upper'
                    ]
                },
                {
                    target: 'p-applicant-medical-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                        false
                    ]
                },
                {target: 'p--context-money'}
            ]
        }
    }
};
