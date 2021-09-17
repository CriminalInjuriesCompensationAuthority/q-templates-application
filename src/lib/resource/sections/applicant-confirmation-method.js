'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-applicant-confirmation-method',
                    'q-applicant-enter-your-email-address',
                    'q-applicant-enter-your-telephone-number'
                ]
            },
            properties: {
                'q-applicant-confirmation-method': {
                    title: "How should we tell you we've got the application?",
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Email',
                            const: 'email'
                        },
                        {
                            title: 'Text message',
                            const: 'text'
                        },
                        {
                            title: "I don't have an email address or UK mobile phone number",
                            const: 'none'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Confirmation method'
                        }
                    }
                },
                'q-applicant-enter-your-email-address': {
                    type: 'string',
                    title: 'Email address',
                    maxLength: 50,
                    format: 'email',
                    errorMessage: {
                        maxLength: 'Email address must be 50 characters or less',
                        format:
                            'Enter an email address in the correct format, like name@example.com'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        }
                    }
                },
                'q-applicant-enter-your-telephone-number': {
                    type: 'string',
                    title: 'UK mobile phone number',
                    maxLength: 20,
                    format: 'mobile-uk',
                    errorMessage: {
                        format:
                            'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982',
                        maxLength: 'Telephone number must be 20 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        }
                    }
                }
            },
            required: ['q-applicant-confirmation-method'],
            allOf: [
                {
                    $ref:
                        '#/definitions/if-email-then-q-applicant-enter-your-email-address-is-required'
                },
                {
                    $ref:
                        '#/definitions/if-text-then-q-applicant-enter-your-telephone-number-is-required'
                },
                {
                    $ref: '#/definitions/if-none-then-phone-and-email-explicitly-not-required'
                }
            ],
            definitions: {
                'if-email-then-q-applicant-enter-your-email-address-is-required': {
                    if: {
                        properties: {
                            'q-applicant-confirmation-method': {
                                const: 'email'
                            }
                        },
                        required: ['q-applicant-confirmation-method']
                    },
                    then: {
                        required: ['q-applicant-enter-your-email-address'],
                        propertyNames: {
                            enum: [
                                'q-applicant-confirmation-method',
                                'q-applicant-enter-your-email-address'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-enter-your-email-address': 'Enter an email address'
                            }
                        }
                    }
                },
                'if-text-then-q-applicant-enter-your-telephone-number-is-required': {
                    if: {
                        properties: {
                            'q-applicant-confirmation-method': {
                                const: 'text'
                            }
                        },
                        required: ['q-applicant-confirmation-method']
                    },
                    then: {
                        required: ['q-applicant-enter-your-telephone-number'],
                        propertyNames: {
                            enum: [
                                'q-applicant-confirmation-method',
                                'q-applicant-enter-your-telephone-number'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-enter-your-telephone-number':
                                    'Enter a UK mobile phone number'
                            }
                        }
                    }
                },
                'if-none-then-phone-and-email-explicitly-not-required': {
                    if: {
                        properties: {
                            'q-applicant-confirmation-method': {
                                const: 'none'
                            }
                        },
                        required: ['q-applicant-confirmation-method']
                    },
                    then: {
                        additionalProperties: false,
                        properties: {
                            'q-applicant-confirmation-method': {
                                const: 'none'
                            }
                        },
                        required: ['q-applicant-confirmation-method']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-confirmation-method':
                        'Select how you want to get your confirmation message'
                }
            },
            examples: [
                {
                    'q-applicant-confirmation-method': 'none'
                },
                {
                    'q-applicant-confirmation-method': 'email',
                    'q-applicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-applicant-confirmation-method': 'text',
                    'q-applicant-enter-your-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-confirmation-method': 'none',
                    'q-applicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-applicant-confirmation-method': 'none',
                    'q-applicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-applicant-confirmation-method': 'email'
                },
                {
                    'q-applicant-confirmation-method': 'text'
                },
                {
                    'q-applicant-confirmation-method': 'email',
                    'q-applicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-applicant-confirmation-method': 'text',
                    'q-applicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-applicant-confirmation-method': 'email',
                    'q-applicant-enter-your-email-address': 'not an email address'
                },
                {
                    'q-applicant-confirmation-method': 'text',
                    'q-applicant-enter-your-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-applicant-confirmation-method': 'text',
                    'q-applicant-enter-your-telephone-number': '0141 420 5000'
                },
                {
                    'q-applicant-confirmation-method': 10
                },
                {
                    'q-applicant-confirmation-method': false
                },
                {
                    'q-applicant-confirmation-method': true,
                    'q-applicant-enter-your-email-address': true
                },
                {
                    'q-applicant-confirmation-method': 'none',
                    'q-applicant-enter-your-email-address': ['something']
                },
                {
                    'q-applicant-confirmation-method': 'none',
                    'q-applicant-enter-your-email-address': 123
                },
                {
                    'q-applicant-confirmation-method': 'text',
                    'q-applicant-enter-your-email-address': true
                },
                {
                    'q-applicant-confirmation-method': 'text',
                    'q-applicant-enter-your-telephone-number': 123
                },
                {
                    'q-applicant-confirmation-method': 'email',
                    'q-applicant-enter-your-telephone-number': false
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition-no-phone-or-email',
                    cond: [
                        '==',
                        '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                        'none'
                    ]
                },
                {
                    target: 'p-applicant-enter-your-name'
                }
            ]
        }
    }
};
