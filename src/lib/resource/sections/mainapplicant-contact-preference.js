'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-mainapplicant-contact-preference',
                    'q-mainapplicant-enter-your-email-address',
                    'q-mainapplicant-enter-your-telephone-number'
                ]
            },
            properties: {
                'q-mainapplicant-contact-preference': {
                    title: 'How would you like us to contact you?',
                    description:
                        "We'll usually contact you by post, but we can sometimes email or text you.",
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Post preferred',
                            const: 'P'
                        },
                        {
                            title: 'Email if possible',
                            const: 'E'
                        },
                        {
                            title: 'Text if possible',
                            const: 'T'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: 'How would you like us to contact you?'
                        }
                    }
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
                    },
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        }
                    }
                },
                'q-mainapplicant-enter-your-telephone-number': {
                    type: 'string',
                    title: 'UK mobile phone number',
                    description: 'For example, 07700 900 982',
                    maxLength: 20,
                    minLength: 11,
                    pattern: '^[^a-zA-Z]+$',
                    format: 'mobile-uk',
                    errorMessage: {
                        maxLength: 'Telephone number must be 20 characters or less',
                        minLength: 'Enter a mobile phone number between 11 and 20 digits long',
                        pattern: 'Telephone number must not include alphabetic characters',
                        format:
                            'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982'
                    },
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            required: ['q-mainapplicant-contact-preference'],
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
                    $ref: '#/definitions/if-post-then-phone-and-email-explicitly-not-required'
                }
            ],
            definitions: {
                'if-email-then-q-mainapplicant-enter-your-email-address-is-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-contact-preference': {
                                const: 'E'
                            }
                        },
                        required: ['q-mainapplicant-contact-preference']
                    },
                    then: {
                        required: ['q-mainapplicant-enter-your-email-address'],
                        propertyNames: {
                            enum: [
                                'q-mainapplicant-contact-preference',
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
                            'q-mainapplicant-contact-preference': {
                                const: 'T'
                            }
                        },
                        required: ['q-mainapplicant-contact-preference']
                    },
                    then: {
                        required: ['q-mainapplicant-enter-your-telephone-number'],
                        propertyNames: {
                            enum: [
                                'q-mainapplicant-contact-preference',
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
                'if-post-then-phone-and-email-explicitly-not-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-contact-preference': {
                                const: 'P'
                            }
                        },
                        required: ['q-mainapplicant-contact-preference']
                    },
                    then: {
                        additionalProperties: false,
                        properties: {
                            'q-mainapplicant-contact-preference': {
                                const: 'P'
                            }
                        },
                        required: ['q-mainapplicant-contact-preference']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-contact-preference': "Select how you'd like us to contact you"
                }
            },
            examples: [
                {
                    'q-mainapplicant-contact-preference': 'P'
                },
                {
                    'q-mainapplicant-contact-preference': 'E',
                    'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-mainapplicant-contact-preference': 'T',
                    'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-contact-preference': 'P',
                    'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-mainapplicant-contact-preference': 'P',
                    'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-mainapplicant-contact-preference': 'E'
                },
                {
                    'q-mainapplicant-contact-preference': 'T'
                },
                {
                    'q-mainapplicant-contact-preference': 'E',
                    'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-mainapplicant-contact-preference': 'T',
                    'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-mainapplicant-contact-preference': 'E',
                    'q-mainapplicant-enter-your-email-address': 'not an email address'
                },
                {
                    'q-mainapplicant-contact-preference': 'T',
                    'q-mainapplicant-enter-your-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-mainapplicant-contact-preference': 'T',
                    'q-mainapplicant-enter-your-telephone-number': '0141 420 5000'
                },
                {
                    'q-mainapplicant-contact-preference': 10
                },
                {
                    'q-mainapplicant-contact-preference': false
                },
                {
                    'q-mainapplicant-contact-preference': true,
                    'q-mainapplicant-enter-your-email-address': true
                },
                {
                    'q-mainapplicant-contact-preference': 'P',
                    'q-mainapplicant-enter-your-email-address': ['something']
                },
                {
                    'q-mainapplicant-contact-preference': 'P',
                    'q-mainapplicant-enter-your-email-address': 123
                },
                {
                    'q-mainapplicant-contact-preference': 'T',
                    'q-mainapplicant-enter-your-email-address': true
                },
                {
                    'q-mainapplicant-contact-preference': 'T',
                    'q-mainapplicant-enter-your-telephone-number': 123
                },
                {
                    'q-mainapplicant-contact-preference': 'E',
                    'q-mainapplicant-enter-your-telephone-number': false
                }
            ],
            options: {
                transformOrder: [
                    'q-mainapplicant-enter-your-email-address',
                    'q-mainapplicant-enter-your-telephone-number',
                    'q-mainapplicant-contact-preference'
                ],
                outputOrder: ['q-mainapplicant-contact-preference'],
                properties: {
                    'q-mainapplicant-contact-preference': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'E',
                                    componentIds: ['q-mainapplicant-enter-your-email-address']
                                },
                                {
                                    itemValue: 'T',
                                    componentIds: ['q-mainapplicant-enter-your-telephone-number']
                                }
                            ]
                        }
                    },
                    'q-mainapplicant-enter-your-email-address': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20',
                                autocomplete: 'email'
                            }
                        }
                    },
                    'q-mainapplicant-enter-your-telephone-number': {
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
                    target: 'p-mainapplicant-enter-your-address'
                }
            ]
        }
    }
};
