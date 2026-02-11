'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-applicant-contact-preference',
                    'q-applicant-enter-your-email-address',
                    'q-applicant-enter-your-telephone-number'
                ]
            },
            properties: {
                'q-applicant-contact-preference': {
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
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'How would you like us to contact you?'
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
                    title: 'Mobile number',
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
                            theme: 'applicant-details'
                        }
                    }
                }
            },
            required: ['q-applicant-contact-preference'],
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
                    $ref: '#/definitions/if-post-then-phone-and-email-explicitly-not-required'
                }
            ],
            definitions: {
                'if-email-then-q-applicant-enter-your-email-address-is-required': {
                    if: {
                        properties: {
                            'q-applicant-contact-preference': {
                                const: 'E'
                            }
                        },
                        required: ['q-applicant-contact-preference']
                    },
                    then: {
                        required: ['q-applicant-enter-your-email-address'],
                        propertyNames: {
                            enum: [
                                'q-applicant-contact-preference',
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
                            'q-applicant-contact-preference': {
                                const: 'T'
                            }
                        },
                        required: ['q-applicant-contact-preference']
                    },
                    then: {
                        required: ['q-applicant-enter-your-telephone-number'],
                        propertyNames: {
                            enum: [
                                'q-applicant-contact-preference',
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
                'if-post-then-phone-and-email-explicitly-not-required': {
                    if: {
                        properties: {
                            'q-applicant-contact-preference': {
                                const: 'P'
                            }
                        },
                        required: ['q-applicant-contact-preference']
                    },
                    then: {
                        additionalProperties: false,
                        properties: {
                            'q-applicant-contact-preference': {
                                const: 'P'
                            }
                        },
                        required: ['q-applicant-contact-preference']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-preference': "Select how you'd like us to contact you"
                }
            },
            examples: [
                {
                    'q-applicant-contact-preference': 'P'
                },
                {
                    'q-applicant-contact-preference': 'E',
                    'q-applicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-applicant-contact-preference': 'T',
                    'q-applicant-enter-your-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-contact-preference': 'P',
                    'q-applicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-applicant-contact-preference': 'P',
                    'q-applicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-applicant-contact-preference': 'E'
                },
                {
                    'q-applicant-contact-preference': 'T'
                },
                {
                    'q-applicant-contact-preference': 'E',
                    'q-applicant-enter-your-telephone-number': '07701 234567'
                },
                {
                    'q-applicant-contact-preference': 'T',
                    'q-applicant-enter-your-email-address': 'foo@bar.com'
                },
                {
                    'q-applicant-contact-preference': 'E',
                    'q-applicant-enter-your-email-address': 'not an email address'
                },
                {
                    'q-applicant-contact-preference': 'T',
                    'q-applicant-enter-your-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-applicant-contact-preference': 'T',
                    'q-applicant-enter-your-telephone-number': '0141 420 5000'
                },
                {
                    'q-applicant-contact-preference': 10
                },
                {
                    'q-applicant-contact-preference': false
                },
                {
                    'q-applicant-contact-preference': true,
                    'q-applicant-enter-your-email-address': true
                },
                {
                    'q-applicant-contact-preference': 'P',
                    'q-applicant-enter-your-email-address': ['something']
                },
                {
                    'q-applicant-contact-preference': 'P',
                    'q-applicant-enter-your-email-address': 123
                },
                {
                    'q-applicant-contact-preference': 'T',
                    'q-applicant-enter-your-email-address': true
                },
                {
                    'q-applicant-contact-preference': 'T',
                    'q-applicant-enter-your-telephone-number': 123
                },
                {
                    'q-applicant-contact-preference': 'E',
                    'q-applicant-enter-your-telephone-number': false
                }
            ],
            options: {
                transformOrder: [
                    'q-applicant-enter-your-email-address',
                    'q-applicant-enter-your-telephone-number',
                    'q-applicant-contact-preference'
                ],
                outputOrder: ['q-applicant-contact-preference'],
                properties: {
                    'q-applicant-contact-preference': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'E',
                                    componentIds: ['q-applicant-enter-your-email-address']
                                },
                                {
                                    itemValue: 'T',
                                    componentIds: ['q-applicant-enter-your-telephone-number']
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
                    target: 'p-applicant-enter-your-address'
                }
            ]
        }
    }
};
