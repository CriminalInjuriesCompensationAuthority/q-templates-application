'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-rep-confirmation-method',
                    'q-rep-enter-your-email-address',
                    'q-rep-enter-your-telephone-number'
                ]
            },
            properties: {
                'q-rep-confirmation-method': {
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
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Confirmation method'
                        }
                    }
                },
                'q-rep-enter-your-email-address': {
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
                            theme: 'rep-details'
                        }
                    }
                },
                'q-rep-enter-your-telephone-number': {
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
                            theme: 'rep-details'
                        }
                    }
                }
            },
            required: ['q-rep-confirmation-method'],
            allOf: [
                {
                    $ref: '#/definitions/if-email-then-q-rep-enter-your-email-address-is-required'
                },
                {
                    $ref: '#/definitions/if-text-then-q-rep-enter-your-telephone-number-is-required'
                },
                {
                    $ref: '#/definitions/if-none-then-phone-and-email-explicitly-not-required'
                }
            ],
            definitions: {
                'if-email-then-q-rep-enter-your-email-address-is-required': {
                    if: {
                        properties: {
                            'q-rep-confirmation-method': {
                                const: 'email'
                            }
                        },
                        required: ['q-rep-confirmation-method']
                    },
                    then: {
                        required: ['q-rep-enter-your-email-address'],
                        propertyNames: {
                            enum: ['q-rep-confirmation-method', 'q-rep-enter-your-email-address']
                        },
                        errorMessage: {
                            required: {
                                'q-rep-enter-your-email-address': 'Enter an email address'
                            }
                        }
                    }
                },
                'if-text-then-q-rep-enter-your-telephone-number-is-required': {
                    if: {
                        properties: {
                            'q-rep-confirmation-method': {
                                const: 'text'
                            }
                        },
                        required: ['q-rep-confirmation-method']
                    },
                    then: {
                        required: ['q-rep-enter-your-telephone-number'],
                        propertyNames: {
                            enum: ['q-rep-confirmation-method', 'q-rep-enter-your-telephone-number']
                        },
                        errorMessage: {
                            required: {
                                'q-rep-enter-your-telephone-number':
                                    'Enter a UK mobile phone number'
                            }
                        }
                    }
                },
                'if-none-then-phone-and-email-explicitly-not-required': {
                    if: {
                        properties: {
                            'q-rep-confirmation-method': {
                                const: 'none'
                            }
                        },
                        required: ['q-rep-confirmation-method']
                    },
                    then: {
                        additionalProperties: false,
                        properties: {
                            'q-rep-confirmation-method': {
                                const: 'none'
                            }
                        },
                        required: ['q-rep-confirmation-method']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-confirmation-method':
                        "Select how we should tell you we've got your application"
                }
            },
            examples: [
                {
                    'q-rep-confirmation-method': 'none'
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-enter-your-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-rep-confirmation-method': 'email'
                },
                {
                    'q-rep-confirmation-method': 'text'
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-enter-your-email-address': 'not an email address'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-enter-your-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-enter-your-telephone-number': '0141 420 5000'
                },
                {
                    'q-rep-confirmation-method': 10
                },
                {
                    'q-rep-confirmation-method': false
                },
                {
                    'q-rep-confirmation-method': true,
                    'q-rep-enter-your-email-address': true
                },
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-enter-your-email-address': ['something']
                },
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-enter-your-email-address': 123
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-enter-your-email-address': true
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-enter-your-telephone-number': 123
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-enter-your-telephone-number': false
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
