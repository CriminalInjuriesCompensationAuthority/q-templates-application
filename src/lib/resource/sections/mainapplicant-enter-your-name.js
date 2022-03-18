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
                        compositeId: 'mainapplicant-name',
                        classifications: {
                            theme: 'main-applicant-details'
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
                            'q-mainapplicant-title': 'Enter your title',
                            'q-mainapplicant-first-name': 'Enter your first name',
                            'q-mainapplicant-last-name': 'Enter your last name'
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
