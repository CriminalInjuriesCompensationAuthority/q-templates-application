'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-enter-your-address'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-enter-your-address',
                    resources: {
                        title: 'Enter your address',
                        'title_someone-else': 'Enter their address',
                        'q-applicant-building-and-street': {
                            error: {
                                required: 'Enter the building and street where you live',
                                'required_someone-else':
                                    'Enter the building and street where they live'
                            }
                        },
                        'q-applicant-town-or-city': {
                            error: {
                                required: 'Enter the town or city where you live',
                                'required_someone-else': 'Enter the town or city where they live'
                            }
                        },
                        meta: {
                            summary: {
                                title: 'Your address',
                                'title_someone-else': "The victim's address"
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'l10nt:title{?lng,context,ns}',
                    meta: {
                        compositeId: 'applicant-address',
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'l10nt:meta.summary.title{?lng,context,ns}'
                        }
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
                                    maxLength: 32,
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
                                    maxLength: 32,
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
                                'l10nt:q-applicant-building-and-street.error.required{?lng,context,ns}',
                            'q-applicant-town-or-city':
                                'l10nt:q-applicant-town-or-city.error.required{?lng,context,ns}'
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
                    target: 'p--before-you-continue',
                    cond: [
                        '==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'someone-else'
                    ]
                },
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
