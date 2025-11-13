'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-rep-contact-preference', 'q-rep-email-address', 'q-rep-telephone-number']
            },
            properties: {
                'q-rep-contact-preference': {
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
                        format:
                            'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982'
                    },
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        }
                    }
                }
            },
            required: ['q-rep-contact-preference'],
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
                            'q-rep-contact-preference': {
                                const: 'E'
                            }
                        },
                        required: ['q-rep-contact-preference']
                    },
                    then: {
                        required: ['q-rep-email-address'],
                        propertyNames: {
                            enum: ['q-rep-contact-preference', 'q-rep-email-address']
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
                            'q-rep-contact-preference': {
                                const: 'T'
                            }
                        },
                        required: ['q-rep-contact-preference']
                    },
                    then: {
                        required: ['q-rep-telephone-number'],
                        propertyNames: {
                            enum: ['q-rep-contact-preference', 'q-rep-telephone-number']
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
                            'q-rep-contact-preference': {
                                const: 'P'
                            }
                        },
                        required: ['q-rep-contact-preference']
                    },
                    then: {
                        additionalProperties: false,
                        properties: {
                            'q-rep-contact-preference': {
                                const: 'P'
                            }
                        },
                        required: ['q-rep-contact-preference']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-contact-preference':
                        "Select how we should tell you we've got your application"
                }
            },
            examples: [
                {
                    'q-rep-contact-preference': 'P'
                },
                {
                    'q-rep-contact-preference': 'E',
                    'q-rep-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-contact-preference': 'T',
                    'q-rep-telephone-number': '07701 234567'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-contact-preference': 'P',
                    'q-rep-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-contact-preference': 'P',
                    'q-rep-telephone-number': '07701 234567'
                },
                {
                    'q-rep-contact-preference': 'E'
                },
                {
                    'q-rep-contact-preference': 'T'
                },
                {
                    'q-rep-contact-preference': 'E',
                    'q-rep-telephone-number': '07701 234567'
                },
                {
                    'q-rep-contact-preference': 'T',
                    'q-rep-email-address': 'foo@bar.com'
                },
                {
                    'q-rep-contact-preference': 'E',
                    'q-rep-email-address': 'not an email address'
                },
                {
                    'q-rep-contact-preference': 'T',
                    'q-rep-telephone-number': 'not a UK mobile phone number'
                },
                {
                    'q-rep-contact-preference': 'T',
                    'q-rep-telephone-number': '0141 420 5000'
                },
                {
                    'q-rep-contact-preference': 10
                },
                {
                    'q-rep-contact-preference': false
                },
                {
                    'q-rep-contact-preference': true,
                    'q-rep-email-address': true
                },
                {
                    'q-rep-contact-preference': 'P',
                    'q-rep-email-address': ['something']
                },
                {
                    'q-rep-contact-preference': 'P',
                    'q-rep-email-address': 123
                },
                {
                    'q-rep-contact-preference': 'T',
                    'q-rep-email-address': true
                },
                {
                    'q-rep-contact-preference': 'T',
                    'q-rep-telephone-number': 123
                },
                {
                    'q-rep-contact-preference': 'E',
                    'q-rep-telephone-number': false
                }
            ],
            options: {
                transformOrder: [
                    'q-rep-email-address',
                    'q-rep-telephone-number',
                    'q-rep-contact-preference'
                ],
                outputOrder: ['q-rep-contact-preference'],
                properties: {
                    'q-rep-contact-preference': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'E',
                                    componentIds: ['q-rep-email-address']
                                },
                                {
                                    itemValue: 'T',
                                    componentIds: ['q-rep-telephone-number']
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
                    target: 'p-rep-organisation-address',
                    cond: [
                        'or',
                        ['==', '$.answers.p-rep-type.q-rep-type', 'CMCO'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SUPP'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SSER']
                    ]
                },
                {
                    target: 'p-rep-address'
                }
            ]
        }
    }
};
