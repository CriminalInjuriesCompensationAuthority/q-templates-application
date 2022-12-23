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
                        compositeId: 'rep-name',
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Your name'
                        }
                    },
                    required: ['q-rep-title', 'q-rep-first-name', 'q-rep-last-name'],
                    propertyNames: {
                        enum: ['q-rep-title', 'q-rep-first-name', 'q-rep-last-name']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-rep-title': {
                                    title: 'Title',
                                    type: 'string',
                                    maxLength: 6,
                                    errorMessage: {
                                        maxLength: 'Title must be 6 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-first-name': {
                                    title: 'First name',
                                    type: 'string',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'First name must be 70 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-rep-last-name': {
                                    title: 'Last name',
                                    type: 'string',
                                    maxLength: 70,
                                    errorMessage: {
                                        maxLength: 'Last name must be 70 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'rep-details'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-rep-title': 'Enter your title',
                            'q-rep-first-name': 'Enter your first name',
                            'q-rep-last-name': 'Enter your last name'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-rep-title': 'Mr',
                    'q-rep-first-name': 'Foo',
                    'q-rep-last-name': 'Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-title': 12345,
                    'q-rep-first-name': 'Foo',
                    'q-rep-last-name': 'Bar'
                },
                {
                    'q-rep-title': 'Mr',
                    'q-rep-first-name': 12345,
                    'q-rep-last-name': 'Bar'
                },
                {
                    'q-rep-title': 'Mr',
                    'q-rep-first-name': 'Foo',
                    'q-rep-last-name': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-organisation-address',
                    cond: [
                        'or',
                        ['==', '$.answers.p-rep-type.q-rep-type', 'CMCO'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SUPP'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SSER']
                    ]
                },
                {
                    target: 'p-rep-address'
                }
            ]
        }
    }
};
