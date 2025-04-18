'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: "Enter the GP's address",
                    meta: {
                        compositeId: 'applicant-gp-address',
                        classifications: {
                            theme: 'treatment'
                        }
                    },
                    required: [
                        'q-gp-organisation-name',
                        'q-gp-building-and-street',
                        'q-gp-town-or-city',
                        'q-gp-postcode'
                    ],
                    propertyNames: {
                        enum: [
                            'q-gp-organisation-name',
                            'q-gp-building-and-street',
                            'q-gp-building-and-street-2',
                            'q-gp-building-and-street-3',
                            'q-gp-town-or-city',
                            'q-gp-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-gp-organisation-name': {
                                    type: 'string',
                                    title: 'Practice name',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength: 'Practice name must be 60 characters or less'
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
                                'q-gp-building-and-street': {
                                    type: 'string',
                                    title: 'Address line 1',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be 32 characters or less'
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
                                'q-gp-building-and-street-2': {
                                    type: 'string',
                                    title: 'Address line 2 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 32 characters or less'
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
                                'q-gp-building-and-street-3': {
                                    type: 'string',
                                    title: 'Address line 3 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Third line of address must be 32 characters or less'
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
                                'q-gp-postcode': {
                                    type: 'string',
                                    title: 'Postcode',
                                    description:
                                        'This could be a UK postcode or an international postal or zip code.',
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
                            'q-gp-organisation-name': "Enter the name of the GP's practice",
                            'q-gp-building-and-street': 'Enter the first line of the address',
                            'q-gp-town-or-city':
                                "Enter the town or city where the GP's practice is",
                            'q-gp-postcode':
                                'Enter a UK postcode, international postal code or zip code'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-gp-organisation-name': 'GP Practice Name',
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street-2': 'Flat 2/3',
                    'q-gp-building-and-street-3': 'FooLocality',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-gp-organisation-name': 12345,
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street-2': 'Flat 2/3',
                    'q-gp-building-and-street-3': 'FooLocality',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-organisation-name': 'GP Practice Name',
                    'q-gp-building-and-street': 12345,
                    'q-gp-building-and-street-2': 'Flat 2/3',
                    'q-gp-building-and-street-3': 'FooLocality',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-organisation-name': 'GP Practice Name',
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street-2': 12345,
                    'q-gp-building-and-street-3': 'FooLocality',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-organisation-name': 'GP Practice Name',
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street-2': 'Flat 2/3',
                    'q-gp-building-and-street-3': 12345,
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-organisation-name': 'GP Practice Name',
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street-2': 'Flat 2/3',
                    'q-gp-building-and-street-3': 'FooLocality',
                    'q-gp-town-or-city': 12345,
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-organisation-name': 'GP Practice Name',
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street-2': 'Flat 2/3',
                    'q-gp-building-and-street-3': 'FooLocality',
                    'q-gp-town-or-city': 'FooCity',
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
                    target: 'p-applicant-medical-help'
                }
            ]
        }
    }
};
