'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Enter their address',
                    meta: {
                        compositeId: 'deceased-address',
                        classifications: {
                            theme: 'deceased'
                        },
                        summary: {
                            title: 'Their address'
                        }
                    },
                    required: [
                        'q-deceased-building-and-street',
                        'q-deceased-town-or-city',
                        'q-deceased-postcode'
                    ],
                    propertyNames: {
                        enum: [
                            'q-deceased-building-and-street',
                            'q-deceased-building-and-street-2',
                            'q-deceased-building-and-street-3',
                            'q-deceased-town-or-city',
                            'q-deceased-county',
                            'q-deceased-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-deceased-building-and-street': {
                                    type: 'string',
                                    title: 'Address line 1',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'deceased'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-deceased-building-and-street-2': {
                                    type: 'string',
                                    title: 'Address line 2',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'deceased'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-deceased-building-and-street-3': {
                                    type: 'string',
                                    title: 'Address line 3',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'deceased'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-deceased-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'deceased'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-deceased-county': {
                                    type: 'string',
                                    title: 'County (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'County must be 32 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'deceased'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-deceased-postcode': {
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
                                            theme: 'deceased'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-deceased-building-and-street': 'Enter the first line of the address',
                            'q-deceased-town-or-city': 'Enter the town or city where they lived',
                            'q-deceased-postcode':
                                'Enter a UK postcode, international postal code or zip code'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-deceased-building-and-street': '1 Foo Lane',
                    'q-deceased-building-and-street-2': 'Flat 2/3',
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-deceased-building-and-street': 12345,
                    'q-deceased-building-and-street-2': 'Flat 2/3',
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 'G1 1XX'
                },
                {
                    'q-deceased-building-and-street': '1 Foo Lane',
                    'q-deceased-building-and-street-2': 12345,
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 'G1 1XX'
                },
                {
                    'q-deceased-building-and-street': 'foo lane',
                    'q-deceased-building-and-street-2': 'Flat 2/3',
                    'q-deceased-building-and-street-3': 12345,
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 'G1 1XX'
                },
                {
                    'q-deceased-building-and-street': '1 Foo Lane',
                    'q-deceased-building-and-street-2': 12345,
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 'G1 1XX'
                },
                {
                    'q-deceased-building-and-street': '1 Foo Lane',
                    'q-deceased-building-and-street-2': 'Flat 2/3',
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 12345,
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 'G1 1XX'
                },
                {
                    'q-deceased-building-and-street': '1 Foo Lane',
                    'q-deceased-building-and-street-2': 'Flat 2/3',
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 12345,
                    'q-deceased-postcode': 'G1 1XX'
                },
                {
                    'q-deceased-building-and-street': '1 Foo Lane',
                    'q-deceased-building-and-street-2': 'Flat 2/3',
                    'q-deceased-building-and-street-3': 'something house',
                    'q-deceased-town-or-city': 'FooCity',
                    'q-deceased-county': 'FooCounty',
                    'q-deceased-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-funeral-costs'
                }
            ]
        }
    }
};
