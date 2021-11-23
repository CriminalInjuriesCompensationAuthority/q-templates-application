'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-mainapplicant-confirmation-method',
                    'q-mainapplicant-enter-your-email-address',
                    'q-mainapplicant-enter-your-telephone-number'
                ]
            },
            properties: {
                'q-mainapplicant-confirmation-method': {
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
                    ]
                },
                'q-mainapplicant-enter-your-email-address': {
                    type: 'string',
                    title: 'Email address',
                    maxLength: 50,
                    format: 'email',
                    errorMessage: {
                        maxLength: 'Email address must be 50 characters or less',
                        format:
                            'Enter an email address in the correct format, like name@example.com'
                    }
                },
                'q-mainapplicant-enter-your-telephone-number': {
                    type: 'string',
                    title: 'UK mobile phone number',
                    maxLength: 20,
                    format: 'mobile-uk',
                    errorMessage: {
                        format:
                            'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982',
                        maxLength: 'Telephone number must be 20 characters or less'
                    }
                }
            },
            required: ['q-mainapplicant-confirmation-method'],
            allOf: [
                {
                    $ref:
                        '#/definitions/if-email-then-q-mainapplicant-enter-your-email-address-is-required'
                },
                {
                    $ref:
                        '#/definitions/if-text-then-q-mainapplicant-enter-your-telephone-number-is-required'
                },
                {
                    $ref: '#/definitions/if-none-then-phone-and-email-explicitly-not-required'
                }
            ],
            definitions: {
                'if-email-then-q-mainapplicant-enter-your-email-address-is-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-confirmation-method': {
                                const: 'email'
                            }
                        },
                        required: ['q-mainapplicant-confirmation-method']
                    },
                    then: {
                        required: ['q-mainapplicant-enter-your-email-address'],
                        propertyNames: {
                            enum: [
                                'q-mainapplicant-confirmation-method',
                                'q-mainapplicant-enter-your-email-address'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-enter-your-email-address': 'Enter an email address'
                            }
                        }
                    }
                },
                'if-text-then-q-mainapplicant-enter-your-telephone-number-is-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-confirmation-method': {
                                const: 'text'
                            }
                        },
                        required: ['q-mainapplicant-confirmation-method']
                    },
                    then: {
                        required: ['q-mainapplicant-enter-your-telephone-number'],
                        propertyNames: {
                            enum: [
                                'q-mainapplicant-confirmation-method',
                                'q-mainapplicant-enter-your-telephone-number'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-enter-your-telephone-number':
                                    'Enter a UK mobile phone number'
                            }
                        }
                    }
                },
                'if-none-then-phone-and-email-explicitly-not-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-confirmation-method': {
                                const: 'none'
                            }
                        },
                        required: ['q-mainapplicant-confirmation-method']
                    },
                    then: {
                        additionalProperties: false,
                        properties: {
                            'q-mainapplicant-confirmation-method': {
                                const: 'none'
                            }
                        },
                        required: ['q-mainapplicant-confirmation-method']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-confirmation-method':
                        'Select how you want to get your confirmation message'
                }
            },
            examples: [
                {
                    'q-mainapplicant-confirmation-method': 'none'
                },
                {
                    'q-mainapplicant-confirmation-method': 'email',
                    'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-mainapplicant-confirmation-method': 'text',
                    'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-confirmation-method': 'none',
                    'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-mainapplicant-confirmation-method': 'none',
                    'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-mainapplicant-confirmation-method': 'email'
                },
                {
                    'q-mainapplicant-confirmation-method': 'text'
                },
                {
                    'q-mainapplicant-confirmation-method': 'email',
                    'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-mainapplicant-confirmation-method': 'text',
                    'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-mainapplicant-confirmation-method': 'email',
                    'q-mainapplicant-enter-your-email-address': 'not an email address'
                },
                {
                    'q-mainapplicant-confirmation-method': 'text',
                    'q-mainapplicant-enter-your-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-mainapplicant-confirmation-method': 'text',
                    'q-mainapplicant-enter-your-telephone-number': '0141 420 5000'
                },
                {
                    'q-mainapplicant-confirmation-method': 10
                },
                {
                    'q-mainapplicant-confirmation-method': false
                },
                {
                    'q-mainapplicant-confirmation-method': true,
                    'q-mainapplicant-enter-your-email-address': true
                },
                {
                    'q-mainapplicant-confirmation-method': 'none',
                    'q-mainapplicant-enter-your-email-address': ['something']
                },
                {
                    'q-mainapplicant-confirmation-method': 'none',
                    'q-mainapplicant-enter-your-email-address': 123
                },
                {
                    'q-mainapplicant-confirmation-method': 'text',
                    'q-mainapplicant-enter-your-email-address': true
                },
                {
                    'q-mainapplicant-confirmation-method': 'text',
                    'q-mainapplicant-enter-your-telephone-number': 123
                },
                {
                    'q-mainapplicant-confirmation-method': 'email',
                    'q-mainapplicant-enter-your-telephone-number': false
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
                        '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                        'none'
                    ]
                },
                {
                    target: 'p-mainapplicant-enter-your-name'
                }
            ]
        }
    }
};