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
                        compositeId: 'rep-address',
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Your address'
                        }
                    },
                    required: ['q-rep-building-and-street', 'q-rep-town-or-city'],
                    propertyNames: {
                        enum: [
                            'q-rep-building-and-street',
                            'q-rep-building-and-street-2',
                            'q-rep-town-or-city',
                            'q-rep-county',
                            'q-rep-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-rep-building-and-street': {
                                    type: 'string',
                                    title: 'Building and street',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be 60 characters or less'
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
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 60 characters or less'
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
                            'q-rep-building-and-street':
                                'Enter the building and street where you live',
                            'q-rep-town-or-city': 'Enter the town or city where you live'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-building-and-street': 12345,
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 12345,
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-town-or-city': 12345,
                    'q-rep-county': 'FooCounty',
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
                    'q-rep-town-or-city': 'FooCity',
                    'q-rep-county': 12345,
                    'q-rep-postcode': 'G1 1XX'
                },
                {
                    'q-rep-building-and-street': '1 Foo Lane',
                    'q-rep-building-and-street-2': 'Flat 2/3',
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
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
