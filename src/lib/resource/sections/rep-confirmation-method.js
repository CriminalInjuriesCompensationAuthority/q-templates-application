'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-rep-confirmation-method', 'q-rep-email-address', 'q-rep-telephone-number']
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
                            description:
                                'We will not be able to send you a text or an email confirmation. You will only get an on-screen confirmation with a reference number at the end of this application form. You’ll need to make a note of this reference number in case you need to contact us about your application.',
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
                'q-rep-email-address': {
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
                'q-rep-telephone-number': {
                    type: 'string',
                    title: 'UK mobile phone number',
                    description: 'For example, 07700 900 982',
                    maxLength: 20,
                    minLength: 11,
                    pattern: '^[^a-zA-Z]+$',
                    format: 'mobile-uk',
                    errorMessage: {
                        maxLength: 'Enter a mobile phone number between 11 and 20 digits long',
                        minLength: 'Enter a mobile phone number between 11 and 20 digits long',
                        pattern: 'Telephone number must not include alphabetic characters',
                        format: 'Enter a UK mobile phone number, like 07700 900 982'
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
                    $ref: '#/definitions/if-email-then-q-rep-email-address-is-required'
                },
                {
                    $ref: '#/definitions/if-text-then-q-rep-telephone-number-is-required'
                },
                {
                    $ref: '#/definitions/if-none-then-phone-and-email-explicitly-not-required'
                }
            ],
            definitions: {
                'if-email-then-q-rep-email-address-is-required': {
                    if: {
                        properties: {
                            'q-rep-confirmation-method': {
                                const: 'email'
                            }
                        },
                        required: ['q-rep-confirmation-method']
                    },
                    then: {
                        required: ['q-rep-email-address'],
                        propertyNames: {
                            enum: ['q-rep-confirmation-method', 'q-rep-email-address']
                        },
                        errorMessage: {
                            required: {
                                'q-rep-email-address': 'Enter an email address'
                            }
                        }
                    }
                },
                'if-text-then-q-rep-telephone-number-is-required': {
                    if: {
                        properties: {
                            'q-rep-confirmation-method': {
                                const: 'text'
                            }
                        },
                        required: ['q-rep-confirmation-method']
                    },
                    then: {
                        required: ['q-rep-telephone-number'],
                        propertyNames: {
                            enum: ['q-rep-confirmation-method', 'q-rep-telephone-number']
                        },
                        errorMessage: {
                            required: {
                                'q-rep-telephone-number': 'Enter a UK mobile phone number'
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
                    'q-rep-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-telephone-number': '07701 234567'
                },
                {
                    'q-rep-confirmation-method': 'email'
                },
                {
                    'q-rep-confirmation-method': 'text'
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-telephone-number': '07701 234567'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-email-address': 'not an email address'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-telephone-number': '0141 420 5000'
                },
                {
                    'q-rep-confirmation-method': 10
                },
                {
                    'q-rep-confirmation-method': false
                },
                {
                    'q-rep-confirmation-method': true,
                    'q-rep-email-address': true
                },
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-email-address': ['something']
                },
                {
                    'q-rep-confirmation-method': 'none',
                    'q-rep-email-address': 123
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-email-address': true
                },
                {
                    'q-rep-confirmation-method': 'text',
                    'q-rep-telephone-number': 123
                },
                {
                    'q-rep-confirmation-method': 'email',
                    'q-rep-telephone-number': false
                }
            ],
            options: {
                transformOrder: [
                    'q-rep-email-address',
                    'q-rep-telephone-number',
                    'q-rep-confirmation-method'
                ],
                outputOrder: ['q-rep-confirmation-method'],
                properties: {
                    'q-rep-confirmation-method': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'email',
                                    componentIds: ['q-rep-email-address']
                                },
                                {
                                    itemValue: 'text',
                                    componentIds: ['q-rep-telephone-number']
                                }
                            ],
                            additionalMapping: [
                                {
                                    itemType: 'divider',
                                    itemValue: 'or',
                                    itemIndex: 2
                                }
                            ]
                        }
                    },
                    'q-rep-email-address': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20',
                                autocomplete: 'email'
                            }
                        }
                    },
                    'q-rep-telephone-number': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20',
                                autocomplete: 'tel'
                            }
                        }
                    }
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-name'
                }
            ]
        }
    }
};
