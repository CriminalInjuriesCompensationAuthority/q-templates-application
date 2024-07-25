'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-enter-your-name'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-enter-your-name',
                    resources: {
                        title: {
                            mainapplicant: 'Enter your name',
                            rep: {
                                nonDeceased: {
                                    child:
                                        'Enter the name of the person with parental responsibility for the victim',
                                    adult:
                                        'Enter the name of the person with legal authority to act on behalf of the victim'
                                },
                                deceased: {
                                    child:
                                        'Enter the name of the person with parental responsibility for the claimant',
                                    adultIncapable:
                                        'Enter the name of the person with legal authority to act on behalf of the claimant'
                                }
                            }
                        },
                        meta: {
                            summary: {
                                title: {
                                    mainapplicant: 'Your name',
                                    rep: 'Their name'
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-title': {
                                    mainapplicant: 'Enter your title',
                                    rep: 'Enter their title'
                                },
                                'q-mainapplicant-first-name': {
                                    mainapplicant: 'Enter your first name',
                                    rep: 'Enter their first name'
                                },
                                'q-mainapplicant-last-name': {
                                    mainapplicant: 'Enter your last name',
                                    rep: 'Enter their last name'
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
                        ['|role.all', 'rep', 'child', 'deceased'],
                        'title.rep.deceased.child',
                        ['|role.all', 'rep', 'child', 'nonDeceased'],
                        'title.rep.nonDeceased.child',
                        ['|role.all', 'rep', 'adult', 'incapable', 'deceased'],
                        'title.rep.deceased.adultIncapable',
                        ['|role.all', 'rep', 'adult', 'incapable', 'nonDeceased'],
                        'title.rep.nonDeceased.adult',
                        ['|role.all', 'mainapplicant'],
                        'title.mainapplicant'
                    ],
                    meta: {
                        compositeId: 'mainapplicant-name',
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
                        'q-mainapplicant-title',
                        'q-mainapplicant-first-name',
                        'q-mainapplicant-last-name'
                    ],
                    propertyNames: {
                        enum: [
                            'q-mainapplicant-title',
                            'q-mainapplicant-first-name',
                            'q-mainapplicant-last-name'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-mainapplicant-title': {
                                    title: 'Title',
                                    description: 'For example, Mr or Miss',
                                    type: 'string',
                                    maxLength: 6,
                                    errorMessage: {
                                        maxLength: 'Title must be 6 characters or less'
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
                                'q-mainapplicant-first-name': {
                                    title: 'First name',
                                    type: 'string',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'First name must be 70 characters or less'
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
                                'q-mainapplicant-last-name': {
                                    title: 'Last name',
                                    type: 'string',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'Last name must be 70 characters or less'
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
                            'q-mainapplicant-title': [
                                '|l10nt',
                                ['|role.all', 'mainapplicant'],
                                'errorMessage.required.q-mainapplicant-title.mainapplicant',
                                ['|role.all', 'rep'],
                                'errorMessage.required.q-mainapplicant-title.rep'
                            ],
                            'q-mainapplicant-first-name': [
                                '|l10nt',
                                ['|role.all', 'mainapplicant'],
                                'errorMessage.required.q-mainapplicant-first-name.mainapplicant',
                                ['|role.all', 'rep'],
                                'errorMessage.required.q-mainapplicant-first-name.rep'
                            ],
                            'q-mainapplicant-last-name': [
                                '|l10nt',
                                ['|role.all', 'mainapplicant'],
                                'errorMessage.required.q-mainapplicant-last-name.mainapplicant',
                                ['|role.all', 'rep'],
                                'errorMessage.required.q-mainapplicant-last-name.rep'
                            ]
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-mainapplicant-title': 'Mr',
                    'q-mainapplicant-first-name': 'Foo',
                    'q-mainapplicant-last-name': 'Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-title': 12345,
                    'q-mainapplicant-first-name': 'Foo',
                    'q-mainapplicant-last-name': 'Bar'
                },
                {
                    'q-mainapplicant-title': 'Mr',
                    'q-mainapplicant-first-name': 12345,
                    'q-mainapplicant-last-name': 'Bar'
                },
                {
                    'q-mainapplicant-title': 'Mr',
                    'q-mainapplicant-first-name': 'Foo',
                    'q-mainapplicant-last-name': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-enter-your-address'
                }
            ]
        }
    }
};
