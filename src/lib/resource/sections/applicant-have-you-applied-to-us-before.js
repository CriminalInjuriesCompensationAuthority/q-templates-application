'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-have-you-applied-to-us-before'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-have-you-applied-to-us-before',
                    resources: {
                        'applicant-have-you-applied-to-us-before': {
                            title: {
                                myself:
                                    'Have you applied to us before in connection with this or any other crime?',
                                proxy: 'Has anyone applied to us before on behalf of the victim?',
                                deceased:
                                    'Has the claimant applied to us before in connection with this or any other crime?'
                            },
                            error: {
                                myself:
                                    'Select yes if you have applied for or received any other form of compensation or damages',
                                proxy:
                                    'Select yes if anyone has applied to us before on behalf of the victim',
                                deceased:
                                    'Select yes if anyone has applied to us before on behalf of the claimant in connection with this or any other crime'
                            }
                        }
                    }
                }
            ]
        },
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
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-have-you-applied-to-us-before.title.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-have-you-applied-to-us-before.title.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-have-you-applied-to-us-before.title.deceased'
                    ],
                    type: 'boolean',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
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
                    if: {
                        properties: {
                            'q-applicant-have-you-applied-to-us-before': {
                                const: true
                            }
                        }
                    },
                    then: {
                        propertyNames: {
                            enum: [
                                'q-applicant-have-you-applied-to-us-before',
                                'q-enter-your-previous-reference-number'
                            ]
                        }
                    },
                    else: {
                        propertyNames: {
                            enum: ['q-applicant-have-you-applied-to-us-before']
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-applied-to-us-before': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-have-you-applied-to-us-before.error.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-have-you-applied-to-us-before.error.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-have-you-applied-to-us-before.error.deceased'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-have-you-applied-to-us-before': true,
                    'q-enter-your-previous-reference-number': '11//123456'
                },
                {
                    'q-applicant-have-you-applied-to-us-before': false
                }
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
                {
                    target: 'p-applicant-have-you-applied-for-or-received-any-other-compensation'
                }
            ]
        }
    }
};
