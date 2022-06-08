'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: "What is the dentist's address?",
                    meta: {
                        compositeId: 'applicant-dentist-address',
                        classifications: {
                            theme: 'treatment'
                        }
                    },
                    required: [
                        'q-applicant-dentist-address-building-and-street',
                        'q-applicant-dentist-address-town-or-city',
                        'q-applicant-dentist-address-building-and-street2'
                    ],
                    propertyNames: {
                        enum: [
                            'q-applicant-dentist-address-building-and-street',
                            'q-applicant-dentist-address-building-and-street2',
                            'q-applicant-dentist-address-town-or-city',
                            'q-applicant-dentist-address-county',
                            'q-applicant-dentist-address-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-dentist-address-building-and-street': {
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
                                'q-applicant-dentist-address-building-and-street2': {
                                    type: 'string',
                                    title: 'Building and street',
                                    maxLength: 32,
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
                                'q-applicant-dentist-address-town-or-city': {
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
                                'q-applicant-dentist-address-county': {
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
                                'q-applicant-dentist-address-postcode': {
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
                            'q-applicant-dentist-address-building-and-street':
                                "Enter the name of the dentist's practice",
                            'q-applicant-dentist-address-building-and-street2':
                                'Enter the building and street of the dentist',
                            'q-applicant-dentist-address-town-or-city':
                                "Enter the town or city where the dentist's practice is"
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                    'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                    'q-applicant-dentist-address-town-or-city': 'FooCity',
                    'q-applicant-dentist-address-county': 'FooCounty',
                    'q-applicant-dentist-address-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-dentist-address-building-and-street': 12345,
                    'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                    'q-applicant-dentist-address-town-or-city': 'FooCity',
                    'q-applicant-dentist-address-county': 'FooCounty',
                    'q-applicant-dentist-address-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                    'q-applicant-dentist-address-building-and-street2': 12345,
                    'q-applicant-dentist-address-town-or-city': 'FooCity',
                    'q-applicant-dentist-address-county': 'FooCounty',
                    'q-applicant-dentist-address-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                    'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                    'q-applicant-dentist-address-town-or-city': 12345,
                    'q-applicant-dentist-address-county': 'FooCounty',
                    'q-applicant-dentist-address-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                    'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                    'q-applicant-dentist-address-town-or-city': 'FooCity',
                    'q-applicant-dentist-address-county': 12345,
                    'q-applicant-dentist-address-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                    'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                    'q-applicant-dentist-address-town-or-city': 'FooCity',
                    'q-applicant-dentist-address-county': 'FooCounty',
                    'q-applicant-dentist-address-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-medical-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                        false
                    ]
                },
                {
                    target: 'p--context-compensation'
                }
            ]
        }
    }
};
