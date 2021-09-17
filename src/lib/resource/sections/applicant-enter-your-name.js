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
                ns: 'p-applicant-enter-your-name'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-enter-your-name',
                    resources: {
                        title: 'Enter your name',
                        'title_someone-else': "Enter the child's name",
                        'q-applicant-title': {
                            error: {
                                required: 'Enter your title',
                                'required_someone-else': "Enter the child's title"
                            }
                        },
                        'q-applicant-first-name': {
                            error: {
                                required: 'Enter your first name',
                                'required_someone-else': "Enter the child's first name"
                            }
                        },
                        'q-applicant-last-name': {
                            error: {
                                required: 'Enter your last name',
                                'required_someone-else': "Enter the child's last name"
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
                        compositeId: 'applicant-name',
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Your name'
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
                            'q-applicant-title':
                                'l10nt:q-applicant-title.error.required{?lng,context,ns}',
                            'q-applicant-first-name':
                                'l10nt:q-applicant-first-name.error.required{?lng,context,ns}',
                            'q-applicant-last-name':
                                'l10nt:q-applicant-last-name.error.required{?lng,context,ns}'
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
