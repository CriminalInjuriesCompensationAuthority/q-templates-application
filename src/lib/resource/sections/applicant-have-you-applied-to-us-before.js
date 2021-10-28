'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            propertyNames: {
                enum: [
                    'q-applicant-have-you-applied-to-us-before',
                    'q-enter-your-previous-reference-number'
                ]
            },
            properties: {
                'q-applicant-have-you-applied-to-us-before': {
                    title: 'Have you applied to us before?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
                    }
                },
                'q-enter-your-previous-reference-number': {
                    type: 'string',
                    title: 'Enter your previous reference number if you know it (optional)',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Previous reference number must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
                    }
                }
            },
            required: ['q-applicant-have-you-applied-to-us-before'],
            allOf: [
                {
                    $ref:
                        '#/definitions/if-true-then-q-enter-your-previous-reference-number-is-required'
                }
            ],
            definitions: {
                'if-true-then-q-enter-your-previous-reference-number-is-required': {
                    if: {properties: {'q-applicant-have-you-applied-to-us-before': {const: true}}},
                    then: {
                        propertyNames: {
                            enum: [
                                'q-applicant-have-you-applied-to-us-before',
                                'q-enter-your-previous-reference-number'
                            ]
                        }
                    },
                    else: {propertyNames: {enum: ['q-applicant-have-you-applied-to-us-before']}}
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-applied-to-us-before':
                        'Select yes if you have applied to us before'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-applied-to-us-before': true,
                    'q-enter-your-previous-reference-number': '11//123456'
                },
                {'q-applicant-have-you-applied-to-us-before': false}
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-applied-to-us-before': false,
                    'q-enter-your-previous-reference-number': '11//123456'
                },
                {
                    'q-applicant-have-you-applied-to-us-before': true,
                    'q-enter-your-previous-reference-number': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {target: 'p-applicant-have-you-applied-for-or-received-any-other-compensation'}
            ]
        }
    }
};
