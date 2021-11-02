'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Enter your name',
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
                                    errorMessage: {maxLength: 'Title must be 6 characters or less'},
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
                            'q-applicant-title': 'Enter your title',
                            'q-applicant-first-name': 'Enter your first name',
                            'q-applicant-last-name': 'Enter your last name'
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
    route: {on: {ANSWER: [{target: 'p-applicant-have-you-been-known-by-any-other-names'}]}}
};
