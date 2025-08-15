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
                ns: 'p-applicant-treatment-address'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-treatment-address',
                    resources: {
                        title: 'Where did you have treatment?',
                        'title_someone-else': 'Where did they have treatment?'
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
                        compositeId: 'applicant-treatment-address',
                        classifications: {
                            theme: 'treatment'
                        }
                    },
                    required: [
                        'q-applicant-treatment-organisation-name',
                        'q-applicant-treatment-building-and-street',
                        'q-applicant-treatment-town-or-city',
                        'q-applicant-treatment-postcode'
                    ],
                    propertyNames: {
                        enum: [
                            'q-applicant-treatment-organisation-name',
                            'q-applicant-treatment-building-and-street',
                            'q-applicant-treatment-building-and-street-2',
                            'q-applicant-treatment-building-and-street-3',
                            'q-applicant-treatment-town-or-city',
                            'q-applicant-treatment-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-treatment-organisation-name': {
                                    type: 'string',
                                    title: 'Name of place',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength: 'Place name must be less than 60 characters'
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
                                'q-applicant-treatment-building-and-street': {
                                    type: 'string',
                                    title: 'Address line 1',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be less than 32 characters'
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
                                'q-applicant-treatment-building-and-street-2': {
                                    type: 'string',
                                    title: 'Address line 2 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be less than 32 characters'
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
                                'q-applicant-treatment-building-and-street-3': {
                                    type: 'string',
                                    title: 'Address line 3 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Third line of address must be less than 32 characters'
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
                                'q-applicant-treatment-town-or-city': {
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
                                'q-applicant-treatment-postcode': {
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
                            'q-applicant-treatment-organisation-name':
                                'Enter the name of the place',
                            'q-applicant-treatment-building-and-street':
                                'Enter the first line of the address',
                            'q-applicant-treatment-town-or-city': 'Enter the town or city',
                            'q-applicant-treatment-postcode':
                                'Enter a UK postcode, international postal code or zip code'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-treatment-organisation-name': 'FooBar Dental Practice',
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street-2': 'Flat 2/3',
                    'q-applicant-treatment-building-and-street-3': 'FooLocality',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-treatment-organisation-name': 12345,
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street-2': 'Flat 2/3',
                    'q-applicant-treatment-building-and-street-3': 'FooLocality',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-organisation-name': 'FooBar Dental Practice',
                    'q-applicant-treatment-building-and-street': 12345,
                    'q-applicant-treatment-building-and-street-2': 'Flat 2/3',
                    'q-applicant-treatment-building-and-street-3': 'FooLocality',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-organisation-name': 'FooBar Dental Practice',
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street-2': 12345,
                    'q-applicant-treatment-building-and-street-3': 'FooLocality',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-organisation-name': 'FooBar Dental Practice',
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street-2': 'Flat 2/3',
                    'q-applicant-treatment-building-and-street-3': 12345,
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-organisation-name': 'FooBar Dental Practice',
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street-2': 'Flat 2/3',
                    'q-applicant-treatment-building-and-street-3': 'FooLocality',
                    'q-applicant-treatment-town-or-city': 12345,
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-organisation-name': 'FooBar Dental Practice',
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street-2': 'Flat 2/3',
                    'q-applicant-treatment-building-and-street-3': 'FooLocality',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-postcode': 12345
                }
            ],
            options: {
                properties: {
                    'q-applicant-treatment-organisation-name': {
                        options: {
                            macroOptions: {
                                classes: ''
                            }
                        }
                    },
                    'q-applicant-treatment-building-and-street': {
                        options: {
                            macroOptions: {
                                classes: ''
                            }
                        }
                    },
                    'q-applicant-treatment-building-and-street-2': {
                        options: {
                            macroOptions: {
                                classes: ''
                            }
                        }
                    },
                    'q-applicant-treatment-building-and-street-3': {
                        options: {
                            macroOptions: {
                                classes: ''
                            }
                        }
                    }
                },
                outputOrder: [
                    'q-applicant-treatment-organisation-name',
                    'q-applicant-treatment-building-and-street',
                    'q-applicant-treatment-building-and-street-2',
                    'q-applicant-treatment-building-and-street-3',
                    'q-applicant-treatment-town-or-city',
                    'q-applicant-treatment-postcode'
                ]
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-compensation'
                }
            ]
        }
    }
};
