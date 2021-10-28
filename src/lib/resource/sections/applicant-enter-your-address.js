'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Enter your address',
                    meta: {
                        compositeId: 'applicant-address',
                        theme: 'applicant-details'
                    },
                    required: ['q-applicant-building-and-street', 'q-applicant-town-or-city'],
                    propertyNames: {
                        enum: [
                            'q-applicant-building-and-street',
                            'q-applicant-building-and-street-2',
                            'q-applicant-town-or-city',
                            'q-applicant-county',
                            'q-applicant-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-building-and-street': {
                                    type: 'string',
                                    title: 'Building and street',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be less than 60 characters'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-building-and-street-2': {
                                    type: 'string',
                                    title: 'Building and street line 2',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be less than 60 characters'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-county': {
                                    type: 'string',
                                    title: 'County (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'County must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-postcode': {
                                    type: 'string',
                                    title: 'Postcode (optional)',
                                    maxLength: 10,
                                    errorMessage: {
                                        maxLength: 'Postcode must be 10 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'applicant-details'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-building-and-street':
                                'Enter the building and street where you live',
                            'q-applicant-town-or-city': 'Enter the town or city where you live'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-building-and-street': 12345,
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 12345,
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 12345,
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 12345,
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-enter-your-telephone-number',
                    cond: [
                        '==',
                        '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                        'email'
                    ]
                },
                {
                    target: 'p-applicant-enter-your-email-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                        'text'
                    ]
                }
            ]
        }
    }
};
