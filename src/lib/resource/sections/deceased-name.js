'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Enter the name of the person who died',
                    meta: {
                        compositeId: 'deceased-name',
                        classifications: {
                            theme: 'deceased'
                        },
                        summary: {
                            title: 'About the deceased'
                        }
                    },
                    required: ['q-deceased-title', 'q-deceased-first-name', 'q-deceased-last-name'],
                    allOf: [
                        {
                            properties: {
                                'q-deceased-title': {
                                    title: 'Title',
                                    type: 'string',
                                    maxLength: 6,
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
                                'q-deceased-first-name': {
                                    title: 'First name',
                                    type: 'string',
                                    maxLength: 70,
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
                                'q-deceased-last-name': {
                                    title: 'Last name',
                                    type: 'string',
                                    maxLength: 70,
                                    meta: {
                                        classifications: {
                                            theme: 'adeceased'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-deceased-title': 'Title must be 6 characters or less',
                            'q-deceased-first-name': 'First name must be 70 characters or less',
                            'q-deceased-last-name': 'Last name must be 70 characters or less'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-deceased-title': 'Mr',
                    'q-deceased-first-name': 'Foo',
                    'q-deceased-last-name': 'Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-deceased-title': 12345,
                    'q-deceased-first-name': 'Foo',
                    'q-deceased-last-name': 'Bar'
                },
                {
                    'q-deceased-title': 'Mr',
                    'q-deceased-first-name': 12345,
                    'q-deceased-last-name': 'Bar'
                },
                {
                    'q-deceased-title': 'Mr',
                    'q-deceased-first-name': 'Foo',
                    'q-deceased-last-name': 12345
                },
                {
                    'q-deceased-first-name': 'Foo',
                    'q-deceased-last-name': 'Bar'
                },
                {
                    'q-deceased-title': 'Mr',
                    'q-deceased-last-name': 'Bar'
                },
                {
                    'q-deceased-title': 'Mr',
                    'q-deceased-first-name': 'Foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-fatal-claim'
                }
            ]
        }
    }
};
