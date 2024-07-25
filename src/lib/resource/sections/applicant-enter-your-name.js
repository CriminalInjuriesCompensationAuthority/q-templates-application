'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-enter-your-name'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-enter-your-name',
                    resources: {
                        title: {
                            myself: 'Enter your name',
                            proxy: {
                                nonDeceased: "Enter the victim's name",
                                deceased: "Enter the claimant's name"
                            }
                        },
                        'q-applicant-title': {
                            error: {
                                myself: 'Enter your title',
                                nonDeceased: "Enter the victim's title",
                                deceased: 'Enter the claimant’s title'
                            }
                        },
                        'q-applicant-first-name': {
                            error: {
                                myself: 'Enter your first name',
                                nonDeceased: "Enter the victim's first name",
                                deceased: 'Enter the claimant’s first name'
                            }
                        },
                        'q-applicant-last-name': {
                            error: {
                                myself: 'Enter your last name',
                                nonDeceased: "Enter the victim's first name",
                                deceased: "Enter the claimant's last name"
                            }
                        },
                        meta: {
                            summary: {
                                title: {
                                    myself: 'Your name',
                                    nonDeceased: "The victim's name",
                                    deceased: "The claimant's name"
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
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'title.proxy.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'],
                        'title.proxy.deceased'
                    ],
                    meta: {
                        compositeId: 'applicant-name',
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'meta.summary.title.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'meta.summary.title.nonDeceased',
                                ['|role.all', 'proxy', 'deceased'],
                                'meta.summary.title.deceased'
                            ]
                        }
                    },
                    required: [
                        'q-applicant-title',
                        'q-applicant-first-name',
                        'q-applicant-last-name'
                    ],
                    propertyNames: {
                        enum: [
                            'q-applicant-title',
                            'q-applicant-first-name',
                            'q-applicant-last-name'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-title': {
                                    title: 'Title',
                                    type: 'string',
                                    description: 'For example, Mr or Miss',
                                    maxLength: 6,
                                    errorMessage: {
                                        maxLength: 'Title must be 6 characters or less'
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
                                'q-applicant-first-name': {
                                    title: 'First name',
                                    type: 'string',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'First name must be 70 characters or less'
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
                                'q-applicant-last-name': {
                                    title: 'Last name',
                                    type: 'string',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'Last name must be 70 characters or less'
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
                            'q-applicant-title': [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-title.error.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'q-applicant-title.error.nonDeceased',
                                ['|role.all', 'proxy', 'deceased'],
                                'q-applicant-title.error.deceased'
                            ],
                            'q-applicant-first-name': [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-first-name.error.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'q-applicant-first-name.error.nonDeceased',
                                ['|role.all', 'proxy', 'deceased'],
                                'q-applicant-first-name.error.deceased'
                            ],
                            'q-applicant-last-name': [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-last-name.error.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'q-applicant-last-name.error.nonDeceased',
                                ['|role.all', 'proxy', 'deceased'],
                                'q-applicant-last-name.error.deceased'
                            ]
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-title': 'Mr',
                    'q-applicant-first-name': 'Foo',
                    'q-applicant-last-name': 'Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-title': 12345,
                    'q-applicant-first-name': 'Foo',
                    'q-applicant-last-name': 'Bar'
                },
                {
                    'q-applicant-title': 'Mr',
                    'q-applicant-first-name': 12345,
                    'q-applicant-last-name': 'Bar'
                },
                {
                    'q-applicant-title': 'Mr',
                    'q-applicant-first-name': 'Foo',
                    'q-applicant-last-name': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-have-you-been-known-by-any-other-names'
                }
            ]
        }
    }
};
