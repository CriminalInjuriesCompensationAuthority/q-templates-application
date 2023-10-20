'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-enter-your-address'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-enter-your-address',
                    resources: {
                        title: {
                            myself: 'Enter your address',
                            proxy: 'What is their address?'
                        },
                        'q-applicant-building-and-street': {
                            error: {
                                myself: 'Enter the building and street where you live',
                                proxy: 'Enter the building and street where they live'
                            }
                        },
                        'q-applicant-town-or-city': {
                            error: {
                                myself: 'Enter the town or city where you live',
                                proxy: 'Enter the town or city where they live'
                            }
                        },
                        meta: {
                            summary: {
                                title: {
                                    myself: 'Your address',
                                    proxy: {
                                        nonDeceased: "The victim's address",
                                        deceased: "The claimant's address"
                                    }
                                }
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
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'title.myself',
                        ['|role.all', 'proxy'],
                        'title.proxy'
                    ],
                    meta: {
                        compositeId: 'applicant-address',
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'meta.summary.title.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'meta.summary.title.proxy.nonDeceased',
                                ['|role.all', 'proxy', 'deceased'],
                                'meta.summary.title.proxy.deceased'
                            ]
                        }
                    },
                    required: [
                        'q-applicant-building-and-street',
                        'q-applicant-town-or-city',
                        'q-applicant-postcode'
                    ],
                    propertyNames: {
                        enum: [
                            'q-applicant-building-and-street',
                            'q-applicant-building-and-street-2',
                            'q-applicant-building-and-street-3',
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
                                            'First line of address must be 32 characters or less'
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
                                            'Second line of address must be 32 characters or less'
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
                                'q-applicant-building-and-street-3': {
                                    type: 'string',
                                    title: 'Building and street line 3',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Third line of address must be 32 characters or less'
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
                                    title: 'Postcode',
                                    description:
                                        'This could be a UK postcode or an international postal or zip code.',
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
                            'q-applicant-building-and-street': [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-building-and-street.error.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'q-applicant-building-and-street.error.proxy',
                                ['|role.all', 'proxy', 'deceased'],
                                'q-applicant-building-and-street.error.proxy'
                            ],
                            'q-applicant-town-or-city': [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-town-or-city.error.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'q-applicant-town-or-city.error.proxy',
                                ['|role.all', 'proxy', 'deceased'],
                                'q-applicant-town-or-city.error.proxy'
                            ],
                            'q-applicant-postcode':
                                'Enter a UK postcode, international postal code or zip code'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-building-and-street-3': 'FooLocality',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-building-and-street': 12345,
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-building-and-street-3': 'FooLocality',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 12345,
                    'q-applicant-building-and-street-3': 'FooLocality',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-building-and-street-3': 12345,
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-building-and-street-3': 'FooLocality',
                    'q-applicant-town-or-city': 12345,
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-building-and-street-3': 'FooLocality',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 12345,
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-building-and-street-3': 'FooLocality',
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
                        'or',
                        [
                            '==',
                            '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                            'email'
                        ],
                        [
                            'and',
                            [
                                'dateCompare',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                                '>=', // is more than or equal to ...
                                '-18', // 18 ...
                                'years' // years (before, due to the negative (-18) ...
                                // today's date (no second date given. defaults to today's date).
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-can-handle-affairs.q-applicant-capable',
                                true
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-applicant-enter-your-email-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                        'text'
                    ]
                },
                {
                    target: 'p--context-residency-and-nationality',
                    cond: [
                        'or',
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '<', // is less than ...
                            '-18', // 18 ...
                            'years' // years (before, due to the negative (-18) ...
                            // today's date (no second date given. defaults to today's date).
                        ],
                        ['|role.all', 'incapable'],
                        ['|role.all', 'noContactMethod']
                    ]
                },
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
