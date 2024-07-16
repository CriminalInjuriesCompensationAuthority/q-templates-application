'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-enter-your-address'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-enter-your-address',
                    resources: {
                        title: {
                            mainapplicant: 'Enter your address',
                            rep: 'Enter their address'
                        },
                        meta: {
                            summary: {
                                title: {
                                    mainapplicant: 'Your address',
                                    rep: 'Their address'
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-town-or-city': {
                                    mainapplicant: 'Enter the town or city where you live',
                                    rep: 'Enter the town or city where they live'
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
                        ['|role.all', 'mainapplicant'],
                        'title.mainapplicant',
                        ['|role.all', 'rep'],
                        'title.rep'
                    ],
                    meta: {
                        compositeId: 'mainapplicant-address',
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'mainapplicant'],
                                'meta.summary.title.mainapplicant',
                                ['|role.all', 'rep'],
                                'meta.summary.title.rep'
                            ]
                        }
                    },
                    required: [
                        'q-mainapplicant-building-and-street',
                        'q-mainapplicant-town-or-city',
                        'q-mainapplicant-postcode'
                    ],
                    propertyNames: {
                        enum: [
                            'q-mainapplicant-building-and-street',
                            'q-mainapplicant-building-and-street-2',
                            'q-mainapplicant-building-and-street-3',
                            'q-mainapplicant-town-or-city',
                            'q-mainapplicant-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-mainapplicant-building-and-street': {
                                    type: 'string',
                                    title: 'Address line 1',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be 32 characters or less'
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
                                    title: 'Address line 2 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 32 characters or less'
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
                                'q-mainapplicant-building-and-street-3': {
                                    type: 'string',
                                    title: 'Address line 3 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Third line of address must be 32 characters or less'
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
                                'q-mainapplicant-postcode': {
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
                                'Enter the first line of the address',
                            'q-mainapplicant-town-or-city': [
                                '|l10nt',
                                ['|role.all', 'mainapplicant'],
                                'errorMessage.required.q-mainapplicant-town-or-city.mainapplicant',
                                ['|role.all', 'rep'],
                                'errorMessage.required.q-mainapplicant-town-or-city.rep'
                            ],
                            'q-mainapplicant-postcode':
                                'Enter a UK postcode, international postal code or zip code'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-building-and-street-3': 'FooLocality',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-building-and-street': 12345,
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-building-and-street-3': 'FooLocality',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 12345,
                    'q-mainapplicant-building-and-street-3': 'FooLocality',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-building-and-street-3': 12345,
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-building-and-street-3': 'FooLocality',
                    'q-mainapplicant-town-or-city': 12345,
                    'q-mainapplicant-postcode': 'G1 1XX'
                },
                {
                    'q-mainapplicant-building-and-street': '1 Foo Lane',
                    'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                    'q-mainapplicant-building-and-street-3': 'FooLocality',
                    'q-mainapplicant-town-or-city': 'FooCity',
                    'q-mainapplicant-postcode': 12345
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-MAINAPPLICANT-ENTER-YOUR-ADDRESS': [
                {
                    target: 'p-mainapplicant-enter-your-email-address',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                        'text'
                    ]
                },
                {
                    target: 'p-mainapplicant-relationship',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                        'none'
                    ]
                },
                {
                    target: 'p-mainapplicant-enter-your-telephone-number'
                }
            ]
        }
    }
};
