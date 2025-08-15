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
                            description:
                                'We will not be able to send you a text or an email confirmation. You will only get an on-screen confirmation with a reference number at the end of this application form. You’ll need to make a note of this reference number in case you need to contact us about your application.',
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
            ],
            options: {
                transformOrder: [
                    'q-applicant-enter-your-email-address',
                    'q-applicant-enter-your-telephone-number',
                    'q-applicant-confirmation-method'
                ],
                outputOrder: ['q-applicant-confirmation-method'],
                properties: {
                    'q-applicant-confirmation-method': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'email',
                                    componentIds: ['q-applicant-enter-your-email-address']
                                },
                                {
                                    itemValue: 'text',
                                    componentIds: ['q-applicant-enter-your-telephone-number']
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
                    'q-applicant-enter-your-email-address': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20',
                                autocomplete: 'email'
                            }
                        }
                    },
                    'q-applicant-enter-your-telephone-number': {
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
                    target: 'p-applicant-enter-your-name'
                }
            ]
        }
    }
};
