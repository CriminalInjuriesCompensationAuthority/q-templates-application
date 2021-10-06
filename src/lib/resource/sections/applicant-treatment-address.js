'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Where did you have treatment?',
                    meta: {compositeId: 'applicant-treatment-address'},
                    required: [
                        'q-applicant-treatment-building-and-street',
                        'q-applicant-treatment-town-or-city',
                        'q-applicant-treatment-building-and-street2'
                    ],
                    propertyNames: {
                        enum: [
                            'q-applicant-treatment-building-and-street',
                            'q-applicant-treatment-building-and-street2',
                            'q-applicant-treatment-town-or-city',
                            'q-applicant-treatment-county',
                            'q-applicant-treatment-postcode'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-treatment-building-and-street': {
                                    type: 'string',
                                    title: 'Name of place',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength: 'Place name must be less than 60 characters'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-treatment-building-and-street2': {
                                    type: 'string',
                                    title: 'Address line 1',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Building and street must be less than 60 characters'
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
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-treatment-county': {
                                    type: 'string',
                                    title: 'County (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'County must be 32 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-treatment-postcode': {
                                    type: 'string',
                                    title: 'Postcode (optional)',
                                    maxLength: 10,
                                    errorMessage: {
                                        maxLength: 'Postcode must be 10 characters or less'
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-treatment-building-and-street':
                                'Enter the name of the place',
                            'q-applicant-treatment-building-and-street2':
                                'Enter the building and street',
                            'q-applicant-treatment-town-or-city': 'Enter the town or city'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-county': 'FooCounty',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-treatment-building-and-street': 12345,
                    'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-county': 'FooCounty',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street2': 12345,
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-county': 'FooCounty',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                    'q-applicant-treatment-town-or-city': 12345,
                    'q-applicant-treatment-county': 'FooCounty',
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-county': 12345,
                    'q-applicant-treatment-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-treatment-building-and-street': '1 Foo Lane',
                    'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                    'q-applicant-treatment-town-or-city': 'FooCity',
                    'q-applicant-treatment-county': 'FooCounty',
                    'q-applicant-treatment-postcode': 12345
                }
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p--context-money'}]}}
};
