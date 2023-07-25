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
                        compositeId: 'rep-organisation-address',
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Your address'
                        }
                    },
                    required: [
                        'q-rep-organisation-name',
                        'q-rep-building-and-street',
                        'q-rep-town-or-city',
                        'q-rep-postcode'
                    ],
                    propertyNames: {
                        enum: [
                            'q-rep-organisation-name',
                            'q-rep-building-and-street',
                            'q-rep-building-and-street-2',
                            'q-rep-building-and-street-3',
                            'q-rep-town-or-city',
                            'q-rep-county',
                            'q-rep-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-rep-organisation-name': {
                                    type: 'string',
                                    title: 'Organisation Name',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'Organisation name must be 70 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-building-and-street': {
                                    type: 'string',
                                    title: 'Building and street',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Building and street must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-building-and-street-2': {
                                    type: 'string',
                                    title: 'Building and street line 2',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-building-and-street-3': {
                                    type: 'string',
                                    title: 'Building and street line 3',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Third line of address must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-county': {
                                    type: 'string',
                                    title: 'County (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'County must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-postcode': {
                                    type: 'string',
                                    title: 'Postcode (optional)',
                                    maxLength: 10,
                                    errorMessage: {
                                        maxLength: 'Postcode must be 10 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-rep-organisation-name':
                                'Enter the name of the organisation you work for',
                            'q-rep-building-and-street': 'Enter the building and street',
                            'q-rep-town-or-city': 'Enter the town or city',
                            'q-rep-postcode':
                                'Enter a UK postcode, international postal code or zip code'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-organisation-name': 12345,
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': 12345,
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 12345,
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 12345,
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 12345,
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 12345,
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-organisation-name': 'Foo Solictitors',
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-building-and-street-3': 'FooLocality',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-email-address',
                    cond: [
                        '==',
                        '$.answers.p-rep-confirmation-method.q-rep-confirmation-method',
                        'text'
                    ]
                },
                {
                    target: 'p-rep-telephone-number'
                }
            ]
        }
    }
};
