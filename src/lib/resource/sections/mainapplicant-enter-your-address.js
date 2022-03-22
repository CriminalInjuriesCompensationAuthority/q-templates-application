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
                        compositeId: 'mainapplicant-address',
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: 'Your address'
                        }
                    },
                    required: [
                        'q-mainapplicant-building-and-street',
                        'q-mainapplicant-town-or-city'
                    ],
                    propertyNames: {
                        enum: [
                            'q-mainapplicant-building-and-street',
                            'q-mainapplicant-building-and-street-2',
                            'q-mainapplicant-town-or-city',
                            'q-mainapplicant-county',
                            'q-mainapplicant-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-mainapplicant-building-and-street': {
                                    type: 'string',
                                    title: 'Building and street',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be less than 60 characters'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'main-applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-mainapplicant-building-and-street-2': {
                                    type: 'string',
                                    title: 'Building and street line 2',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be less than 60 characters'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'main-applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-mainapplicant-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'main-applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-mainapplicant-county': {
                                    type: 'string',
                                    title: 'County (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'County must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'main-applicant-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-mainapplicant-postcode': {
                                    type: 'string',
                                    title: 'Postcode (optional)',
                                    maxLength: 10,
                                    errorMessage: {
                                        maxLength: 'Postcode must be 10 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'main-applicant-details'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-mainapplicant-building-and-street':
                                'Enter the building and street where you live',
                            'q-mainapplicant-town-or-city': 'Enter the town or city where you live'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-county': 'FooCounty',
                    'q-mainapplicant-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-building-and-street': 12345,
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-county': 'FooCounty',
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 12345,
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-county': 'FooCounty',
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-town-or-city': 12345,
                    'q-mainapplicant-county': 'FooCounty',
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-county': 12345,
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-county': 'FooCounty',
                    'q-mainapplicant-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-enter-your-telephone-number',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                        'email'
                    ]
                },
                {
                    target: 'p-mainapplicant-enter-your-email-address',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                        'text'
                    ]
                }
            ]
        }
    }
};
