'use strict';

module.exports = {
    type: 'apply-for-compensation',
    version: '1.2.3',
    sections: {
        'p-applicant-declaration': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Declaration',
            additionalProperties: false,
            properties: {
                'applicant-declaration': {
                    description:
                        '<p class="govuk-body">By submitting the application you agree that:</p><ul class="govuk-list govuk-list--bullet"><li>the information you’ve given is true as far as you know</li><li>we can share the information you’ve given with other organisations and gather information from them</li></ul>{{ govukDetails({summaryText: "Who we may share your data with",html: \'These organisations may include:<ul class="govuk-list govuk-list--bullet"><li>the police, prosecutors and ACRO Criminal Records Office</li><li>medical organisations and medical staff, including police medical staff</li><li>any other person or organisation needed to process your application (including medical experts or other experts)</li></ul>\'}) }}<p class="govuk-body">Read our privacy notice to see <a class="govuk-link" href="https://www.gov.uk/guidance/cica-privacy-notice">how we use your data</a>.</p>{{ govukWarningText({text: "If you deliberately give false or misleading information, you may get less compensation or be prosecuted.",iconFallbackText: "Warning"}) }}\n'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--transition-no-phone-or-email': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title:
                'You must apply by telephone if you do not have an email address or UK mobile phone',
            additionalProperties: false,
            properties: {
                transition: {
                    description: "{% include 'contact.njk' %}"
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p-applicant-confirmation-method': {
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
                    title: "How should we tell you we've got your application?",
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
                'q-applicant-enter-your-email-address': {
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
                'q-applicant-enter-your-telephone-number': {
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
        },
        'p-applicant-british-citizen-or-eu-national': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-british-citizen-or-eu-national'],
            additionalProperties: false,
            properties: {
                'q-applicant-british-citizen-or-eu-national': {
                    type: 'boolean',
                    title: 'Are you a British citizen or EU national?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-british-citizen-or-eu-national':
                        'Select yes if you are a British citizen or EU national'
                }
            },
            examples: [
                {
                    'q-applicant-british-citizen-or-eu-national': true
                },
                {
                    'q-applicant-british-citizen-or-eu-national': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-british-citizen-or-eu-national': 'foo'
                }
            ]
        },
        'p-applicant-are-you-18-or-over': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-18-or-over'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-18-or-over': {
                    type: 'boolean',
                    title: 'Are you 18 or over?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-18-or-over': 'Select yes if you are 18 or over'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-18-or-over': true
                },
                {
                    'q-applicant-are-you-18-or-over': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-18-or-over': 'foo'
                }
            ]
        },
        'p-applicant-who-are-you-applying-for': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-who-are-you-applying-for'],
            additionalProperties: false,
            properties: {
                'q-applicant-who-are-you-applying-for': {
                    title: 'Who are you applying for?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Myself',
                            const: 'myself'
                        },
                        {
                            title: 'Someone else',
                            const: 'someone-else'
                        }
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-who-are-you-applying-for':
                        'Select myself if you are applying for yourself'
                }
            },
            examples: [
                {
                    'q-applicant-who-are-you-applying-for': 'myself'
                },
                {
                    'q-applicant-who-are-you-applying-for': 'someone-else'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-who-are-you-applying-for': 12345
                }
            ]
        },
        'p-applicant-were-you-a-victim-of-sexual-assault-or-abuse': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-were-you-a-victim-of-sexual-assault-or-abuse'],
            additionalProperties: false,
            properties: {
                'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse': {
                    type: 'boolean',
                    title: 'Were you a victim of sexual assault or abuse?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse':
                        'Select yes if you were a victim of sexual assault or abuse'
                }
            },
            examples: [
                {
                    'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse': true
                },
                {
                    'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse': 'foo'
                }
            ]
        },
        'p--before-you-continue': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'About the crime',
            type: 'object',
            additionalProperties: false,
            properties: {
                'applicant-impact-on-you': {
                    description:
                        '<p class="govuk-body">We’re going to ask you:</p><ul class="govuk-list govuk-list--bullet"><li>when and where the crime happened</li><li>which police force investigated the crime</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--was-the-crime-reported-to-police': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--was-the-crime-reported-to-police'],
            additionalProperties: false,
            properties: {
                'q--was-the-crime-reported-to-police': {
                    type: 'boolean',
                    title: 'Was the crime reported to the police?'
                },
                'dont-know-if-crime-reported': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know if the crime was reported to the police",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q--was-the-crime-reported-to-police':
                        'Select yes if the crime was reported to the police'
                }
            },
            examples: [
                {
                    'q--was-the-crime-reported-to-police': true
                },
                {
                    'q--was-the-crime-reported-to-police': false
                }
            ],
            invalidExamples: [
                {
                    'q--was-the-crime-reported-to-police': 'foo'
                }
            ]
        },
        'p--when-was-the-crime-reported-to-police': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--when-was-the-crime-reported-to-police'],
            additionalProperties: false,
            properties: {
                'q--when-was-the-crime-reported-to-police': {
                    type: 'string',
                    format: 'date-time',
                    title: 'When was the crime reported to the police?',
                    description: 'For example, 28 2 2020. You can enter an approximate date.',
                    errorMessage: {
                        format:
                            'Enter the date the crime was reported to police and include a day, month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q--when-was-the-crime-reported-to-police':
                        'Enter the date the crime was reported to the police'
                }
            },
            examples: [
                {
                    'q--when-was-the-crime-reported-to-police': '2020-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q--when-was-the-crime-reported-to-police': 12345
                },
                {
                    'q--when-was-the-crime-reported-to-police': 'not a date'
                }
            ]
        },
        'p--whats-the-crime-reference-number': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--whats-the-crime-reference-number'],
            additionalProperties: false,
            properties: {
                'q--whats-the-crime-reference-number': {
                    title: "What's the crime reference number?",
                    type: 'string',
                    description:
                        'This is the reference number the police gave the crime when it was reported.',
                    maxLength: 30,
                    errorMessage: {
                        maxLength: 'Crime reference number must be 30 characters or less'
                    }
                },
                'i-dont-know-the-crime-reference': {
                    description: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with your crime reference number",html: "<p>If you don't have your crime reference number, you can call 101 to speak to your local police station.</p>"}) }}`
                }
            },
            errorMessage: {
                required: {
                    'q--whats-the-crime-reference-number': 'Enter the crime reference number'
                }
            },
            examples: [
                {
                    'q--whats-the-crime-reference-number': 'abc123'
                }
            ],
            invalidExamples: [
                {
                    'q--whats-the-crime-reference-number': 12345
                }
            ]
        },
        'p-applicant-did-the-crime-happen-once-or-over-time': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-did-the-crime-happen-once-or-over-time'],
            additionalProperties: false,
            properties: {
                'q-applicant-did-the-crime-happen-once-or-over-time': {
                    title: 'Did the crime happen once or over a period of time?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Once',
                            const: 'once'
                        },
                        {
                            title: 'Over a period of time',
                            const: 'over-a-period-of-time'
                        }
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-did-the-crime-happen-once-or-over-time':
                        'Select Once or Over a period of time'
                }
            },
            examples: [
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 'once'
                },
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 'over-a-period-of-time'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 'never'
                },
                {
                    'q-applicant-did-the-crime-happen-once-or-over-time': 12345
                }
            ]
        },
        'p-applicant-when-did-the-crime-happen': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-happen'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-happen': {
                    type: 'string',
                    format: 'date-time',
                    title: 'When did the crime happen?',
                    description: 'For example, 28 2 2020. You can enter an approximate date.',
                    errorMessage: {
                        format:
                            'Enter the date the crime happened and include a day, month and year'
                    }
                },
                'when-did-the-crime-happen': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime happened",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-happen':
                        'Enter the date the crime happened and include a day, month and year'
                }
            },
            examples: [
                {
                    'q-applicant-when-did-the-crime-happen': '2020-01-01T00:00:00.000Z'
                },
                {
                    'q-applicant-when-did-the-crime-happen': '2010-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-when-did-the-crime-happen': 12345
                },
                {
                    'q-applicant-when-did-the-crime-happen': 'not a date'
                }
            ]
        },
        'p-applicant-when-did-the-crime-start': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-start'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-start': {
                    type: 'string',
                    format: 'date-time',
                    title: 'When did it start?',
                    description: 'For example, 02 2020. You can enter an approximate date.',
                    errorMessage: {
                        format: 'Enter the date the crime started and include a month and year'
                    }
                },
                'i-dont-know-when-the-crime-started': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime started",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-start':
                        'Enter the date the crime started and include a month and year'
                }
            },
            examples: [
                {
                    'q-applicant-when-did-the-crime-start': '2020-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-when-did-the-crime-start': 12345
                },
                {
                    'q-applicant-when-did-the-crime-start': 'not a date'
                }
            ]
        },
        'p-applicant-when-did-the-crime-stop': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-stop'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-stop': {
                    type: 'string',
                    format: 'date-time',
                    title: 'When did it stop?',
                    description: 'For example, 03 2020. You can enter an approximate date.',
                    errorMessage: {
                        format: 'Enter the date the crime stopped and include a month and year'
                    }
                },
                'i-dont-know-when-the-crime-stopped': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime stopped",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-stop':
                        'Enter the date the crime stopped and include a month and year'
                }
            },
            examples: [
                {
                    'q-applicant-when-did-the-crime-stop': '2020-01-10T00:00:00.000Z'
                },
                {
                    'q-applicant-when-did-the-crime-stop': '2010-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-when-did-the-crime-stop': 12345
                },
                {
                    'q-applicant-when-did-the-crime-stop': 'not a date'
                }
            ]
        },
        'p-applicant-select-reasons-for-the-delay-in-making-your-application': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: [
                'q-applicant-explain-reason-for-delay-application',
                'q-applicant-select-reasons-for-the-delay-in-making-your-application'
            ],
            additionalProperties: false,
            properties: {
                'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
                    title: 'Select reasons for the delay in making your application',
                    type: 'array',
                    maxItems: 4,
                    uniqueItems: true,
                    description: 'Select all options that apply to you.',
                    items: {
                        anyOf: [
                            {
                                title: 'I was under 18',
                                const: 'i-was-underage'
                            },
                            {
                                title: 'I was advised to wait',
                                const: 'i-was-advised-to-wait'
                            },
                            {
                                title: 'Medical reasons',
                                const: 'medical-reasons'
                            },
                            {
                                title: 'Other reasons',
                                const: 'other-reasons'
                            }
                        ]
                    }
                },
                'q-applicant-explain-reason-for-delay-application': {
                    title: 'Briefly explain these reasons',
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Explanation must be 500 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application':
                        'Select if you were under 18, advised to wait, medical reasons or other reasons',
                    'q-applicant-explain-reason-for-delay-application':
                        'Explain the reasons for the delay in making your application'
                }
            },
            examples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'i-was-underage',
                        'medical-reasons'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 'some reason'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'not a valid answer'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [12345],
                    'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'i-was-underage'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 12345
                }
            ]
        },
        'p-applicant-where-did-the-crime-happen': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-where-did-the-crime-happen'],
            additionalProperties: false,
            properties: {
                'q-applicant-where-did-the-crime-happen': {
                    title: 'Where did the crime happen?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'England',
                            const: 'england'
                        },
                        {
                            title: 'Scotland',
                            const: 'scotland'
                        },
                        {
                            title: 'Wales',
                            const: 'wales'
                        },
                        {
                            title: 'Somewhere else',
                            const: 'somewhere-else'
                        }
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-where-did-the-crime-happen':
                        'Select England, Scotland, Wales or Somewhere else'
                }
            },
            examples: [
                {
                    'q-applicant-where-did-the-crime-happen': 'england'
                },
                {
                    'q-applicant-where-did-the-crime-happen': 'scotland'
                },
                {
                    'q-applicant-where-did-the-crime-happen': 'wales'
                },
                {
                    'q-applicant-where-did-the-crime-happen': 'somewhere-else'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-where-did-the-crime-happen': 'Japan'
                },
                {
                    'q-applicant-where-did-the-crime-happen': 12345
                }
            ]
        },
        'p-applicant-where-in-england-did-it-happen': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Where in England did it happen?',
            required: ['q-applicant-english-town-or-city', 'q-applicant-english-location'],
            additionalProperties: false,
            properties: {
                'q-applicant-english-town-or-city': {
                    type: 'string',
                    title: 'Town or city',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Town or city must be 60 characters or less'
                    }
                },
                'q-applicant-english-location': {
                    type: 'string',
                    title: 'Location',
                    description:
                        'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Location must be 60 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-english-location':
                        'Enter the name of a street, business, building or nearby local landmark',
                    'q-applicant-english-town-or-city':
                        'Enter the town or city where the crime happened'
                }
            },
            examples: [
                {
                    'q-applicant-english-town-or-city': 'Some town',
                    'q-applicant-english-location': 'Some location'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-english-town-or-city': 12345,
                    'q-applicant-english-location': 'Some location'
                },
                {
                    'q-applicant-english-town-or-city': 'York',
                    'q-applicant-english-location': 12345
                }
            ]
        },
        'p-applicant-where-in-scotland-did-it-happen': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Where in Scotland did it happen?',
            required: ['q-applicant-scottish-town-or-city', 'q-applicant-scottish-location'],
            additionalProperties: false,
            properties: {
                'q-applicant-scottish-town-or-city': {
                    type: 'string',
                    title: 'Town or city',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Town or city must be 60 characters or less'
                    }
                },
                'q-applicant-scottish-location': {
                    type: 'string',
                    title: 'Location',
                    description:
                        'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Location must be 60 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-scottish-location':
                        'Enter the name of a street, business, building or nearby local landmark',
                    'q-applicant-scottish-town-or-city':
                        'Enter the town or city where the crime happened'
                }
            },
            examples: [
                {
                    'q-applicant-scottish-town-or-city': 'Some town',
                    'q-applicant-scottish-location': 'Some location'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-scottish-town-or-city': 12345,
                    'q-applicant-scottish-location': 'Some location'
                },
                {
                    'q-applicant-scottish-town-or-city': 'Some town',
                    'q-applicant-scottish-location': 12345
                }
            ]
        },
        'p-applicant-where-in-wales-did-it-happen': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Where in Wales did it happen?',
            required: ['q-applicant-welsh-town-or-city', 'q-applicant-welsh-location'],
            additionalProperties: false,
            properties: {
                'q-applicant-welsh-town-or-city': {
                    type: 'string',
                    title: 'Town or city',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Town or city must be 60 characters or less'
                    }
                },
                'q-applicant-welsh-location': {
                    type: 'string',
                    title: 'Location',
                    description:
                        'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Location must be 60 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-welsh-location':
                        'Enter the name of a street, business, building or nearby local landmark',
                    'q-applicant-welsh-town-or-city':
                        'Enter the town or city where the crime happened'
                }
            },
            examples: [
                {
                    'q-applicant-welsh-town-or-city': 'Some town',
                    'q-applicant-welsh-location': 'Some location'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-welsh-town-or-city': 12345,
                    'q-applicant-welsh-location': 'Some location'
                },
                {
                    'q-applicant-welsh-town-or-city': 'Some town',
                    'q-applicant-welsh-location': 12345
                }
            ]
        },
        'p--you-need-to-contact-us': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'You need to contact us',
            type: 'object',
            additionalProperties: false,
            properties: {
                'you-need-to-contact-us': {
                    description:
                        '<p class="govuk-body">We need to check if you are eligible for compensation.</p>{% include \'contact.njk\' %}'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--which-police-force-is-investigating-the-crime': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Which police force is investigating the crime?',
            type: 'object',
            required: ['q-police-force-id'],
            additionalProperties: false,
            properties: {
                'q-police-force-id': {
                    type: 'integer',
                    oneOf: [
                        {
                            title: 'Avon And Somerset Constabulary',
                            const: 10000033
                        },
                        {
                            title: 'Bedfordshire Police',
                            const: 10000035
                        },
                        {
                            title: 'British Transport Police',
                            const: 10000001
                        },
                        {
                            title: 'Cambridgeshire Constabulary',
                            const: 10000039
                        },
                        {
                            title: 'Cheshire Constabulary',
                            const: 10000049
                        },
                        {
                            title: 'City Of London Police',
                            const: 10000059
                        },
                        {
                            title: 'Cleveland Police',
                            const: 10000066
                        },
                        {
                            title: 'Cumbria Constabulary',
                            const: 10000082
                        },
                        {
                            title: 'Derbyshire Constabulary',
                            const: 10000084
                        },
                        {
                            title: 'Devon and Cornwall Police',
                            const: 10000090
                        },
                        {
                            title: 'Dorset Police',
                            const: 10000093
                        },
                        {
                            title: 'Durham Constabulary',
                            const: 10000102
                        },
                        {
                            title: 'Essex Police',
                            const: 10000114
                        },
                        {
                            title: 'Gloucestershire Constabulary',
                            const: 10000128
                        },
                        {
                            title: 'Greater Manchester Police',
                            const: 10000140
                        },
                        {
                            title: 'Hampshire Constabulary',
                            const: 10000150
                        },
                        {
                            title: 'Hertfordshire Constabulary',
                            const: 10000153
                        },
                        {
                            title: 'Humberside Police',
                            const: 10000169
                        },
                        {
                            title: 'Kent Police',
                            const: 10000172
                        },
                        {
                            title: 'Lancashire Constabulary',
                            const: 10000175
                        },
                        {
                            title: 'Leicestershire Police',
                            const: 10000176
                        },
                        {
                            title: 'Lincolnshire Police',
                            const: 10000179
                        },
                        {
                            title: 'Merseyside Police',
                            const: 10000181
                        },
                        {
                            title: 'Metropolitan Barking',
                            const: 11809785
                        },
                        {
                            title: 'Metropolitan Barnet',
                            const: 11809719
                        },
                        {
                            title: 'Metropolitan Bexley',
                            const: 11809788
                        },
                        {
                            title: 'Metropolitan Brent',
                            const: 11809722
                        },
                        {
                            title: 'Metropolitan Bromley',
                            const: 11809760
                        },
                        {
                            title: 'Metropolitan Camden',
                            const: 11809694
                        },
                        {
                            title: 'Metropolitan Croydon',
                            const: 11809713
                        },
                        {
                            title: 'Metropolitan Ealing',
                            const: 11809743
                        },
                        {
                            title: 'Metropolitan Enfield',
                            const: 11809783
                        },
                        {
                            title: 'Metropolitan Greenwich',
                            const: 11809709
                        },
                        {
                            title: 'Metropolitan Hackney',
                            const: 11809763
                        },
                        {
                            title: 'Metropolitan Hammersmith',
                            const: 11809795
                        },
                        {
                            title: 'Metropolitan Haringey',
                            const: 11809738
                        },
                        {
                            title: 'Metropolitan Harrow',
                            const: 11809803
                        },
                        {
                            title: 'Metropolitan Havering',
                            const: 11809800
                        },
                        {
                            title: 'Metropolitan Hillingdon',
                            const: 11809775
                        },
                        {
                            title: 'Metropolitan Hounslow',
                            const: 11809780
                        },
                        {
                            title: 'Metropolitan Islington',
                            const: 11809765
                        },
                        {
                            title: 'Metropolitan Kensington',
                            const: 11809801
                        },
                        {
                            title: 'Metropolitan Kingston',
                            const: 11809865
                        },
                        {
                            title: 'Metropolitan Lambeth',
                            const: 11809693
                        },
                        {
                            title: 'Metropolitan Lewisham',
                            const: 11809698
                        },
                        {
                            title: 'Metropolitan Merton',
                            const: 11809861
                        },
                        {
                            title: 'Metropolitan Newham',
                            const: 11809701
                        },
                        {
                            title: 'Metropolitan Redbridge',
                            const: 11809782
                        },
                        {
                            title: 'Metropolitan Richmond',
                            const: 11809862
                        },
                        {
                            title: 'Metropolitan Southwark',
                            const: 11809691
                        },
                        {
                            title: 'Metropolitan Sutton',
                            const: 11809805
                        },
                        {
                            title: 'Metropolitan Tower Hamlets',
                            const: 11809767
                        },
                        {
                            title: 'Metropolitan Waltham Forest',
                            const: 11809726
                        },
                        {
                            title: 'Metropolitan Wandsworth',
                            const: 11809771
                        },
                        {
                            title: 'Metropolitan Westminster',
                            const: 11809683
                        },
                        {
                            title: 'Norfolk Constabulary',
                            const: 10000185
                        },
                        {
                            title: 'North Yorkshire Police',
                            const: 10000189
                        },
                        {
                            title: 'Northamptonshire Police',
                            const: 10000191
                        },
                        {
                            title: 'Northumbria Police',
                            const: 10000195
                        },
                        {
                            title: 'Nottinghamshire Police',
                            const: 10000199
                        },
                        {
                            title: 'South Yorkshire Police',
                            const: 10000218
                        },
                        {
                            title: 'Staffordshire Police',
                            const: 10000223
                        },
                        {
                            title: 'Suffolk Constabulary',
                            const: 10000233
                        },
                        {
                            title: 'Surrey Police',
                            const: 10000237
                        },
                        {
                            title: 'Sussex Police',
                            const: 10000240
                        },
                        {
                            title: 'Thames Valley Police',
                            const: 10000247
                        },
                        {
                            title: 'Warwickshire Police',
                            const: 10000274
                        },
                        {
                            title: 'West Mercia Police',
                            const: 10000279
                        },
                        {
                            title: 'West Midlands Police',
                            const: 10000285
                        },
                        {
                            title: 'West Yorkshire Police',
                            const: 10000291
                        },
                        {
                            title: 'Wiltshire Police',
                            const: 10000295
                        },
                        {
                            title: 'Police Scotland Argyll and West Dunbartonshire',
                            const: 12607027
                        },
                        {
                            title: 'Police Scotland Ayrshire',
                            const: 12157147
                        },
                        {
                            title: 'Police Scotland Dumfries and Galloway',
                            const: 10000098
                        },
                        {
                            title: 'Police Scotland Edinburgh',
                            const: 13400412
                        },
                        {
                            title: 'Police Scotland Fife',
                            const: 10002424
                        },
                        {
                            title: 'Police Scotland Forth Valley',
                            const: 10000045
                        },
                        {
                            title: 'Police Scotland Greater Glasgow',
                            const: 12607023
                        },
                        {
                            title: 'Police Scotland Highland and Islands',
                            const: 10000193
                        },
                        {
                            title: 'Police Scotland Lanarkshire',
                            const: 12607028
                        },
                        {
                            title: 'Police Scotland North East',
                            const: 10000133
                        },
                        {
                            title: 'Police Scotland Renfrewshire and Inverclyde',
                            const: 12607026
                        },
                        {
                            title: 'Police Scotland Tayside',
                            const: 10000243
                        },
                        {
                            title: 'Police Scotland The Lothians and Scottish Borders',
                            const: 13400413
                        },
                        {
                            title: 'Dyfed-Powys',
                            const: 10000109
                        },
                        {
                            title: 'Gwent',
                            const: 10000147
                        },
                        {
                            title: 'North Wales',
                            const: 10000187
                        },
                        {
                            title: 'South Wales',
                            const: 10000215
                        }
                    ]
                },
                'list-of-police-forces': {
                    description:
                        '\n                {% from "components/details/macro.njk" import govukDetails %}\n                {{ govukDetails({\n                    summaryText: "Help with police forces",\n                    html: \'<p>See a list of all <a class="govuk-link" href="/police-forces" target="_blank">police forces in England, Scotland and Wales</a> (opens in a new tab)</p>\'\n                }) }}\n            '
                }
            },
            errorMessage: {
                required: {
                    'q-police-force-id': 'Select a police force from the list'
                }
            },
            examples: [
                {
                    'q-police-force-id': 10000147
                }
            ],
            invalidExamples: [
                {
                    'q-police-force-id': 999999999
                },
                {
                    'q-police-force-id': '10000147'
                }
            ]
        },
        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: [
                'q-applicant-explain-reason-for-delay-reporting',
                'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
            ],
            additionalProperties: false,
            properties: {
                'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                    title: 'Select reasons for the delay in reporting the crime to the police',
                    type: 'array',
                    maxItems: 3,
                    uniqueItems: true,
                    description: 'Select all options that apply to you.',
                    items: {
                        anyOf: [
                            {
                                title: 'I was under 18',
                                const: 'i-was-under-18'
                            },
                            {
                                title: 'Unable to report the crime',
                                const: 'unable-to-report-crime'
                            },
                            {
                                title: 'Other reasons',
                                const: 'other'
                            }
                        ]
                    }
                },
                'q-applicant-explain-reason-for-delay-reporting': {
                    title: 'Briefly explain these reasons',
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Explanation must be 500 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
                        'Select if you were under 18, unable to report the crime or other reasons',
                    'q-applicant-explain-reason-for-delay-reporting':
                        'Explain the reasons for the delay in reporting the crime to the police'
                }
            },
            examples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'i-was-under-18',
                        'unable-to-report-crime',
                        'other'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'foo'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        12345
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'i-was-under-18',
                        'unable-to-report-crime',
                        'other'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 12345
                }
            ]
        },
        'p-offender-do-you-know-the-name-of-the-offender': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-do-you-know-the-name-of-the-offender'],
            additionalProperties: false,
            properties: {
                'q-offender-do-you-know-the-name-of-the-offender': {
                    type: 'boolean',
                    title: "Do you know the offender's name?"
                }
            },
            errorMessage: {
                required: {
                    'q-offender-do-you-know-the-name-of-the-offender':
                        "Select yes if you know the offender's name"
                }
            },
            examples: [
                {
                    'q-offender-do-you-know-the-name-of-the-offender': true
                },
                {
                    'q-offender-do-you-know-the-name-of-the-offender': false
                }
            ],
            invalidExamples: [
                {
                    'q-offender-do-you-know-the-name-of-the-offender': 'foo'
                }
            ]
        },
        'p-offender-enter-offenders-name': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-enter-offenders-name'],
            additionalProperties: false,
            properties: {
                'q-offender-enter-offenders-name': {
                    type: 'string',
                    title: "Enter the offender's name",
                    description: 'We will never contact the offender.',
                    maxLength: 120,
                    errorMessage: {
                        maxLength: "Offender's name must be 120 characters or less"
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-offender-enter-offenders-name': "Enter the offender's name"
                }
            },
            examples: [
                {
                    'q-offender-enter-offenders-name': 'Foo Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-offender-enter-offenders-name': 12345
                }
            ]
        },
        'p-offender-do-you-have-contact-with-offender': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-do-you-have-contact-with-offender'],
            additionalProperties: false,
            properties: {
                'q-offender-do-you-have-contact-with-offender': {
                    type: 'boolean',
                    title: 'Do you have contact with the offender?'
                }
            },
            errorMessage: {
                required: {
                    'q-offender-do-you-have-contact-with-offender':
                        'Select yes if you have contact with the offender'
                }
            },
            examples: [
                {
                    'q-offender-do-you-have-contact-with-offender': true
                },
                {
                    'q-offender-do-you-have-contact-with-offender': false
                }
            ],
            invalidExamples: [
                {
                    'q-offender-do-you-have-contact-with-offender': 'foo'
                }
            ]
        },
        'p-offender-describe-contact-with-offender': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-describe-contact-with-offender'],
            properties: {
                'q-offender-describe-contact-with-offender': {
                    type: 'string',
                    title: 'Describe your contact with the offender',
                    description: 'We cannot pay compensation if the offender may benefit from it.',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Description must be 500 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-offender-describe-contact-with-offender':
                        'Describe your contact with the offender'
                }
            },
            examples: [
                {
                    'q-offender-describe-contact-with-offender': 'Some contact'
                }
            ],
            invalidExamples: [
                {
                    'q-offender-describe-contact-with-offender': 12345
                }
            ]
        },
        'p-applicant-have-you-applied-to-us-before': {
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
                    type: 'boolean'
                },
                'q-enter-your-previous-reference-number': {
                    type: 'string',
                    title: 'Enter your previous reference number if you know it (optional)',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Previous reference number must be 50 characters or less'
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
                    'q-applicant-have-you-applied-to-us-before':
                        'Select yes if you have applied to us before'
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
        },
        'p-applicant-have-you-applied-for-or-received-any-other-compensation': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-applied-for-or-received-any-other-compensation'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                    type: 'boolean',
                    title: 'Have you applied for or received any other form of compensation?',
                    description:
                        'For example, if you sought civil damages or a court decided you should get compensation.'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation':
                        'Select yes if you have applied for any other form of compensation'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': true
                },
                {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': 'foo'
                }
            ]
        },
        'p-applicant-enter-your-name': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Enter your name',
            type: 'object',
            required: ['q-applicant-title', 'q-applicant-first-name', 'q-applicant-last-name'],
            additionalProperties: false,
            properties: {
                'q-applicant-title': {
                    title: 'Title',
                    type: 'string',
                    maxLength: 6,
                    errorMessage: {
                        maxLength: 'Title must be 6 characters or less'
                    }
                },
                'q-applicant-first-name': {
                    title: 'First name',
                    type: 'string',
                    maxLength: 70,
                    errorMessage: {
                        maxLength: 'First name must be 70 characters or less'
                    }
                },
                'q-applicant-last-name': {
                    title: 'Last name',
                    type: 'string',
                    maxLength: 70,
                    errorMessage: {
                        maxLength: 'Last name must be 70 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-title': 'Enter your title',
                    'q-applicant-first-name': 'Enter your first name',
                    'q-applicant-last-name': 'Enter your last name'
                }
            },
            examples: [
                {
                    'q-applicant-title': 'Mr',
                    'q-applicant-first-name': 'Foo',
                    'q-applicant-last-name': 'Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-title': 12345,
                    'q-applicant-first-name': 'Foo',
                    'q-applicant-last-name': 'Bar'
                },
                {
                    'q-applicant-title': 'Mr',
                    'q-applicant-first-name': 12345,
                    'q-applicant-last-name': 'Bar'
                },
                {
                    'q-applicant-title': 'Mr',
                    'q-applicant-first-name': 'Foo',
                    'q-applicant-last-name': 12345
                }
            ]
        },
        'p-applicant-have-you-been-known-by-any-other-names': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-been-known-by-any-other-names'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-been-known-by-any-other-names': {
                    type: 'boolean',
                    title: 'Have you ever been known by any other names?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-been-known-by-any-other-names':
                        'Select yes if you have been known by any other names'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-been-known-by-any-other-names': true
                },
                {
                    'q-applicant-have-you-been-known-by-any-other-names': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-been-known-by-any-other-names': 'foo'
                }
            ]
        },
        'p-applicant-what-other-names-have-you-used': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-what-other-names-have-you-used'],
            additionalProperties: false,
            properties: {
                'q-applicant-what-other-names-have-you-used': {
                    type: 'string',
                    title: 'What other names have you used?',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Other names you have used must be 50 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-what-other-names-have-you-used':
                        'Enter the other names you have used'
                }
            },
            examples: [
                {
                    'q-applicant-what-other-names-have-you-used': 'Mr Biz Baz'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-what-other-names-have-you-used': 12345
                }
            ]
        },
        'p-applicant-enter-your-date-of-birth': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-enter-your-date-of-birth'],
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-date-of-birth': {
                    type: 'string',
                    format: 'date-time',
                    title: 'Enter your date of birth',
                    description: 'For example, 31 3 1980.',
                    errorMessage: {
                        format: 'Enter your date of birth and include a day, month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-enter-your-date-of-birth':
                        'Enter your date of birth and include a day, month and year'
                }
            },
            examples: [
                {
                    'q-applicant-enter-your-date-of-birth': '1970-01-01T00:00:00.000Z'
                },
                {
                    'q-applicant-enter-your-date-of-birth': '2019-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-enter-your-date-of-birth': 12345
                },
                {
                    'q-applicant-enter-your-date-of-birth': 'not a date'
                }
            ]
        },
        'p-applicant-enter-your-email-address': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-email-address': {
                    type: 'string',
                    title: 'Enter your email address',
                    description:
                        'We may use this to contact you if we need to clarify something on your application form (optional).',
                    maxLength: 50,
                    format: 'email',
                    errorMessage: {
                        maxLength: 'Email address must be 50 characters or less',
                        format: 'Enter your email address, for example john.smith@email.com'
                    }
                }
            },
            examples: [
                {
                    'q-applicant-enter-your-email-address': 'foo@hhjhjk34h5jkh24kj5h2k45.com'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-applicant-enter-your-email-address': 12345
                }
            ]
        },
        'p-applicant-enter-your-address': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Enter your address',
            required: ['q-applicant-building-and-street', 'q-applicant-town-or-city'],
            additionalProperties: false,
            properties: {
                'q-applicant-building-and-street': {
                    type: 'string',
                    title: 'Building and street',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'First line of address must be less than 60 characters'
                    }
                },
                'q-applicant-building-and-street-2': {
                    type: 'string',
                    title: "<span class='govuk-visually-hidden'>Building and street line 2",
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Second line of address must be less than 60 characters'
                    }
                },
                'q-applicant-town-or-city': {
                    type: 'string',
                    title: 'Town or city',
                    maxLength: 32,
                    errorMessage: {
                        maxLength: 'Town or city must be 32 characters or less'
                    }
                },
                'q-applicant-county': {
                    type: 'string',
                    title: 'County (optional)',
                    maxLength: 32,
                    errorMessage: {
                        maxLength: 'County must be 32 characters or less'
                    }
                },
                'q-applicant-postcode': {
                    type: 'string',
                    title: 'Postcode (optional)',
                    maxLength: 10,
                    errorMessage: {
                        maxLength: 'Postcode must be 10 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-building-and-street':
                        'Enter the building and street where you live',
                    'q-applicant-town-or-city': 'Enter the town or city where you live'
                }
            },
            examples: [
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-building-and-street': 12345,
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 12345,
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 12345,
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 12345,
                    'q-applicant-postcode': 'G1 1XX'
                },
                {
                    'q-applicant-building-and-street': '1 Foo Lane',
                    'q-applicant-building-and-street-2': 'Flat 2/3',
                    'q-applicant-town-or-city': 'FooCity',
                    'q-applicant-county': 'FooCounty',
                    'q-applicant-postcode': 12345
                }
            ]
        },
        'p-applicant-enter-your-telephone-number': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-telephone-number': {
                    type: 'string',
                    title: 'Enter your telephone number',
                    description:
                        'We may use this to contact you if we need to clarify something on your application form (optional).',
                    maxLength: 20,
                    pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                    errorMessage: {
                        maxLength: 'Telephone number must be 20 characters or less',
                        pattern:
                            'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                    }
                }
            },
            examples: [
                {
                    'q-applicant-enter-your-telephone-number': '01632 960 001'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-applicant-enter-your-telephone-number': 12345
                }
            ]
        },
        'p--check-your-answers': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Check your answers',
            additionalProperties: false,
            properties: {
                'p-check-your-answers': {
                    summaryInfo: {
                        urlPath: 'apply',
                        editAnswerText: 'Change'
                    }
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--confirmation': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Confirmation',
            additionalProperties: false,
            properties: {
                confirmation: {
                    description:
                        '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: "<p>Your reference number is <br /><strong>||/answers/system/case-reference||</strong></p><p>We\'ve sent your reference number to <strong>" + contactMethod + "</strong></p>"}) }}<p class="govuk-body">Thank you for submitting your application.</p><h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for evidence</li><li>ask you for more information if we need it</li><li>make a decision</li><li>send our decision letter by post</li></ul><p class="govuk-body">We aim to make a decision within 1 year, but it can take longer. We may have to wait until there is enough information about your injuries and recovery.</p>{{ govukWarningText({text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case, and has no effect on your application.</p><p class="govuk-body"><a class="govuk-link" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service</a> (takes 10 minutes)</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p-applicant-you-cannot-get-compensation': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'You cannot get compensation',
            type: 'object',
            additionalProperties: false,
            properties: {
                'you-cannot-get-compensation': {
                    description:
                        '\n                <p class="govuk-body">If the crime has not been reported to the police we cannot pay compensation.</p>\n                <p class="govuk-body">You may continue your application, but any future application for the same injuries will be refused.</p>\n            '
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--context-offender': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'About the offender',
            additionalProperties: false,
            properties: {
                'offender-context': {
                    description:
                        '<p class="govuk-body">We’re going to ask:</p><ul class="govuk-list govuk-list--bullet"><li>the offender\'s name (if you know it)</li><li>if you have contact with the offender</li></ul><p class="govuk-body">This is so we can make sure the offender does not benefit from any compensation you get.</p><p class="govuk-body">We will never contact the offender.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--context-compensation': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Other compensation',
            additionalProperties: false,
            properties: {
                'compensation-context': {
                    description:
                        '<p class="govuk-body">We\'re going to ask about any other compensation you\'ve been paid for your injuries.</p><p class="govuk-body">This is so we can work out how much compensation you can get.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p-applicant-applied-for-other-compensation-briefly-explain-why-not': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title:
                'Briefly explain why you have not applied for or received any other form of compensation',
            additionalProperties: false,
            required: ['q-applicant-applied-for-other-compensation-briefly-explain-why-not'],
            properties: {
                'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Explanation must be 500 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not':
                        'Enter a reason'
                }
            },
            examples: [
                {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 12345
                }
            ]
        },
        'p-applicant-who-did-you-apply-to': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Who have you applied to or received compensation from?',
            required: ['q-applicant-who-did-you-apply-to'],
            properties: {
                'q-applicant-who-did-you-apply-to': {
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength:
                            'Who you applied to or received compensation from must be 50 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-who-did-you-apply-to':
                        'Enter who you applied to or received compensation from'
                }
            },
            examples: [
                {
                    'q-applicant-who-did-you-apply-to': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-who-did-you-apply-to': 12345
                }
            ]
        },
        'p-applicant-has-a-decision-been-made': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Have they made a decision about your claim?',
            additionalProperties: false,
            required: ['q-applicant-has-a-decision-been-made'],
            properties: {
                'q-applicant-has-a-decision-been-made': {
                    type: 'boolean'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-has-a-decision-been-made':
                        'Select yes if you have received a decision about the other compensation claim'
                }
            },
            examples: [
                {
                    'q-applicant-has-a-decision-been-made': true
                },
                {
                    'q-applicant-has-a-decision-been-made': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-has-a-decision-been-made': 'foo'
                }
            ]
        },
        'p-applicant-how-much-was-award': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'How much compensation were you awarded?',
            required: ['q-how-much-was-award'],
            properties: {
                'q-how-much-was-award': {
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Award amount must be 50 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-how-much-was-award': 'Enter an amount'
                }
            },
            examples: [
                {
                    'q-how-much-was-award': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-how-much-was-award': 12345
                }
            ]
        },
        'p-applicant-when-will-you-find-out': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: "When will you find out if you've been awarded compensation?",
            required: ['q-when-will-you-find-out'],
            properties: {
                'q-when-will-you-find-out': {
                    type: 'string',
                    description:
                        'Enter an approximate date, for example, December 2020. If you do not know you can say so.',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'When will you find out must be 50 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-when-will-you-find-out': 'Enter an approximate date'
                }
            },
            examples: [
                {
                    'q-when-will-you-find-out': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-when-will-you-find-out': 12345
                }
            ]
        },
        'p--context-applicant-details': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Your details',
            additionalProperties: false,
            properties: {
                'details-context': {
                    description:
                        '<p class="govuk-body">We’re going to ask for some details about you.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>contact you</li><li>get a report about the crime from the police</li></ul>\n'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p--context-dmi-details': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Your mental health',
            additionalProperties: false,
            properties: {
                'details-context': {
                    description:
                        '<p class="govuk-body">We’re going to ask how the crime affected your mental health.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do</li><li>lasts 6 weeks or more</li><li>is diagnosed by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if you do not have a diagnosis yet. We\'ll tell you what medical evidence you\'ll need.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p-applicant-do-you-have-disabling-mental-injury': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-do-you-have-disabling-mental-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-do-you-have-disabling-mental-injury': {
                    type: 'boolean',
                    description:
                        "This means it's much harder than usual to do things you would normally do, like going to work, seeing friends, or having a relationship.",
                    title: 'Do you have a disabling mental injury?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-do-you-have-disabling-mental-injury':
                        'Select yes if you suffered a disabling mental injury'
                }
            },
            examples: [
                {
                    'q-applicant-do-you-have-disabling-mental-injury': true
                },
                {
                    'q-applicant-do-you-have-disabling-mental-injury': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-do-you-have-disabling-mental-injury': 'foo'
                }
            ]
        },
        'p-applicant-mental-injury-duration': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-mental-injury-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-mental-injury-duration': {
                    type: 'boolean',
                    title: 'Has your mental injury lasted 6 weeks or more?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-mental-injury-duration':
                        'Select yes if your mental injury has lasted longer than 6 weeks'
                }
            },
            examples: [
                {
                    'q-applicant-mental-injury-duration': true
                },
                {
                    'q-applicant-mental-injury-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-mental-injury-duration': 'foo'
                }
            ]
        },
        'p-applicant-select-treatments': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-applicant-select-treatments-dmi', 'q-applicant-other-treatment-dmi']
            },
            properties: {
                'q-applicant-select-treatments-dmi': {
                    title: 'What mental health treatments have you had',
                    description: "Include any treatment you're waiting to get.",
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'CBT (cognitive behavioural therapy)',
                                const: 'cbt'
                            },
                            {
                                title: 'EMDR (eye movement desensitisation and reprocessing)',
                                const: 'emdr'
                            },
                            {
                                title: 'Antidepressants',
                                const: 'antidepressants'
                            },
                            {
                                title: 'Counselling',
                                const: 'counselling'
                            },
                            {
                                title: 'Psychotherapy',
                                const: 'psychotherapy'
                            },
                            {
                                title: 'Other',
                                const: 'other'
                            }
                        ]
                    }
                },
                'q-applicant-other-treatment-dmi': {
                    type: 'string',
                    title: 'Other treatments',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other treatments must be 499 characters or less'
                    }
                }
            },
            required: ['q-applicant-select-treatments-dmi'],
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-other-treatment-dmi-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-other-treatment-dmi-is-required': {
                    if: {
                        properties: {
                            'q-applicant-select-treatments-dmi': {
                                contains: {
                                    const: 'other'
                                }
                            }
                        },
                        required: ['q-applicant-select-treatments-dmi']
                    },
                    then: {
                        required: ['q-applicant-other-treatment-dmi'],
                        propertyNames: {
                            enum: [
                                'q-applicant-select-treatments-dmi',
                                'q-applicant-other-treatment-dmi'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-other-treatment-dmi':
                                    'Enter any other treatment you have received for your mental injury'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-treatments-dmi':
                        'Select any treatments you have received for your mental injury'
                }
            },
            examples: [
                {
                    'q-applicant-select-treatments-dmi': ['cbt']
                },
                {
                    'q-applicant-select-treatments-dmi': ['cbt', 'other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['emdr']
                },
                {
                    'q-applicant-select-treatments-dmi': ['emdr', 'other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-treatments-dmi': {
                        foo: 'bar'
                    }
                },
                {
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['other']
                }
            ]
        },
        'p-applicant-has-your-treatment-finished-dmi': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-has-your-treatment-finished-dmi'],
            additionalProperties: false,
            properties: {
                'q-applicant-has-your-treatment-finished-dmi': {
                    type: 'boolean',
                    title: 'Have you finished your treatment?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-has-your-treatment-finished-dmi':
                        'Select yes if you have finished your treatment'
                }
            },
            examples: [
                {
                    'q-applicant-has-your-treatment-finished-dmi': true
                },
                {
                    'q-applicant-has-your-treatment-finished-dmi': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-has-your-treatment-finished-dmi': 'foo'
                }
            ]
        },
        'p-applicant-affect-on-daily-life-dmi': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                'q-applicant-affect-on-daily-life-dmi': {
                    type: 'string',
                    title: 'Briefly say how the crime has affected your daily life',
                    description:
                        'This helps us understand how the crime has affected you. You can leave this blank, but we may have to ask for more information later.',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Description must be 500 characters or less'
                    }
                }
            },
            examples: [
                {
                    'q-applicant-affect-on-daily-life-dmi': 'Some description'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-affect-on-daily-life-dmi': 12345
                }
            ]
        },
        'p--context-gp-details': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Your GP',
            additionalProperties: false,
            properties: {
                'details-context': {
                    description:
                        '<p class="govuk-body">We’re going to ask for some details about your GP.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>understand if you\'ve told your GP about your injuries</li><li>make sure any letters or forms we send out are addressed properly</li></ul><p class="govuk-body">We will not contact your GP or ask to see your medical records without your consent.</p>\n'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p-applicant-are-you-registered-with-gp': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-registered-with-gp'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-registered-with-gp': {
                    type: 'boolean',
                    title: 'Are you registered with a GP practice?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-registered-with-gp':
                        'Select yes if you are registered with a GP'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-registered-with-gp': true
                },
                {
                    'q-applicant-are-you-registered-with-gp': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-registered-with-gp': 'foo'
                }
            ]
        },
        'p-applicant-have-you-seen-a-gp': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-seen-a-gp'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-seen-a-gp': {
                    type: 'boolean',
                    description: 'This includes your mental health.',
                    title: 'Have you seen a GP about your injuries?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-seen-a-gp':
                        'Select yes if you have seen a GP about your injuries'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-seen-a-gp': true
                },
                {
                    'q-applicant-have-you-seen-a-gp': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-seen-a-gp': 'foo'
                }
            ]
        },
        'p-gp-enter-your-address': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: "What is your GP's address?",
            required: [
                'q-gp-building-and-street',
                'q-gp-town-or-city',
                'q-gp-building-and-street2'
            ],
            additionalProperties: false,
            properties: {
                'q-gp-building-and-street': {
                    type: 'string',
                    title: 'Practice name',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Practice name must be less than 60 characters'
                    }
                },
                'q-gp-building-and-street2': {
                    type: 'string',
                    title: 'Building and street',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Building and street must be less than 60 characters'
                    }
                },
                'q-gp-town-or-city': {
                    type: 'string',
                    title: 'Town or city',
                    maxLength: 32,
                    errorMessage: {
                        maxLength: 'Town or city must be 32 characters or less'
                    }
                },
                'q-gp-county': {
                    type: 'string',
                    title: 'County (optional)',
                    maxLength: 32,
                    errorMessage: {
                        maxLength: 'County must be 32 characters or less'
                    }
                },
                'q-gp-postcode': {
                    type: 'string',
                    title: 'Postcode (optional)',
                    maxLength: 10,
                    errorMessage: {
                        maxLength: 'Postcode must be 10 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-gp-building-and-street': "Enter the name of your GP's practice",
                    'q-gp-building-and-street2': 'Enter the building and street of your GP',
                    'q-gp-town-or-city': "Enter the town or city where your GP's practice is"
                }
            },
            examples: [
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                }
            ],
            invalidExamples: [
                {
                    'q-gp-building-and-street': 12345,
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 12345,
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 12345,
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 12345,
                    'q-gp-postcode': 'G1 1XX'
                },
                {
                    'q-gp-building-and-street': '1 Foo Lane',
                    'q-gp-building-and-street2': 'Flat 2/3',
                    'q-gp-town-or-city': 'FooCity',
                    'q-gp-county': 'FooCounty',
                    'q-gp-postcode': 12345
                }
            ]
        },
        'p-applicant-are-you-claiming-for-physical-injuries': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-claiming-for-physical-injuries'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-claiming-for-physical-injuries': {
                    type: 'boolean',
                    title: 'Are you claiming for any physical injuries?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-claiming-for-physical-injuries':
                        'Select yes if you sare claiming for a physical injury'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-claiming-for-physical-injuries': true
                },
                {
                    'q-applicant-are-you-claiming-for-physical-injuries': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-claiming-for-physical-injuries': 'foo'
                }
            ]
        },
        'p-applicant-are-you-claiming-for-payments': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-claiming-for-payments'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-claiming-for-payments': {
                    type: 'boolean',
                    title:
                        'Are you claiming for a sexually transmitted infection (STI), pregnancy, or loss of a pregnancy?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-claiming-for-payments':
                        'Select yes if you sare claiming for sexually transmitted infection, pregnancy, or loss of a pregnancy'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-claiming-for-payments': true
                },
                {
                    'q-applicant-are-you-claiming-for-payments': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-claiming-for-payments': 'foo'
                }
            ]
        },
        'p-applicant-are-you-claiming-for-loe': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-claiming-for-loe'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-claiming-for-loe': {
                    type: 'boolean',
                    description:
                        'You must have had very limited or no ability to work for more than 28 weeks.',
                    title: 'Are you claiming for loss of earnings?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-claiming-for-loe':
                        'Select yes if you sare claiming for loss of earnings'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-claiming-for-loe': true
                },
                {
                    'q-applicant-are-you-claiming-for-loe': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-claiming-for-loe': 'foo'
                }
            ]
        },
        'p-applicant-are-you-claiming-for-expenses': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-claiming-for-expenses'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-claiming-for-expenses': {
                    type: 'boolean',
                    description:
                        'This can include the cost of equipment, changes to your home, and care costs.',
                    title: 'Are you claiming for expenses as a result of your injuries?'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-claiming-for-expenses':
                        'Select yes if you are claiming for loss of earnings'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-claiming-for-expenses': true
                },
                {
                    'q-applicant-are-you-claiming-for-expenses': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-claiming-for-expenses': 'foo'
                }
            ]
        },
        'p--transition': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Continue your claim',
            additionalProperties: false,
            properties: {
                transition: {
                    description:
                        '<p class="govuk-body">You\'ll be taken to another website to continue your claim.</p>{{ govukButton({text: "Continue",href: "https://www.cica.gov.uk/OAS/Account/create",isStartButton: true}) }}'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        },
        'p-applicant-physical-injury': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'What was injured?',
            type: 'object',
            required: ['q-applicant-physical-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Head, face or neck',
                                const: 'upper'
                            },
                            {
                                title: 'Torso',
                                const: 'torso'
                            },
                            {
                                title: 'Arms or hands',
                                const: 'arms'
                            },
                            {
                                title: 'Legs or feet',
                                const: 'legs'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury': 'Select an injury from the list'
                }
            },
            examples: [
                {'q-applicant-physical-injury': ['legs']},
                {'q-applicant-physical-injury': ['arms']},
                {'q-applicant-physical-injury': ['arms', 'legs']},
                {'q-applicant-physical-injury': ['torso']},
                {'q-applicant-physical-injury': ['torso', 'legs']},
                {'q-applicant-physical-injury': ['torso', 'arms']},
                {'q-applicant-physical-injury': ['torso', 'arms', 'legs']},
                {'q-applicant-physical-injury': ['upper']},
                {'q-applicant-physical-injury': ['upper', 'legs']},
                {'q-applicant-physical-injury': ['upper', 'arms']},
                {'q-applicant-physical-injury': ['upper', 'arms', 'legs']},
                {'q-applicant-physical-injury': ['upper', 'torso']},
                {'q-applicant-physical-injury': ['upper', 'torso', 'legs']},
                {'q-applicant-physical-injury': ['upper', 'torso', 'arms']},
                {'q-applicant-physical-injury': ['upper', 'torso', 'arms', 'legs']}
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury': ['not-a-key']
                },
                {
                    'q-applicant-physical-injury': 'not-an-array'
                }
            ]
        },
        'p-applicant-physical-injury-upper': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'What was injured?',
            type: 'object',
            required: ['q-applicant-physical-injury-upper'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Head or brain',
                                const: 'head'
                            },
                            {
                                title: 'Face or jaw',
                                const: 'face'
                            },
                            {
                                title: 'Eye or eyesight',
                                const: 'eye'
                            },
                            {
                                title: 'Ear or hearing',
                                const: 'ear'
                            },
                            {
                                title: 'Nose',
                                const: 'nose'
                            },
                            {
                                title: 'Mouth',
                                const: 'mouth'
                            },
                            {
                                title: 'Neck',
                                const: 'neck'
                            },
                            {
                                title: 'Skin',
                                const: 'skin'
                            },
                            {
                                title: 'Muscle, ligament or tendon',
                                const: 'muscle'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper': ['head']
                },
                {
                    'q-applicant-physical-injury-upper': ['neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['face']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper': 999999999
                },
                {
                    'q-applicant-physical-injury-upper': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-head': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your head or brain',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-head'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-head': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Brain damage',
                                const: 'phyinj-003'
                            },
                            {
                                title: 'Epilepsy',
                                const: 'phyinj-004'
                            },
                            {
                                title: 'Nerve damage',
                                const: 'phyinj-005'
                            },
                            {
                                title: 'Fractured skull',
                                const: 'phyinj-042'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-head': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-head': ['phyinj-042']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-head': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-head': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-head': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-face': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your face',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-face'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-face': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Face fractures',
                                const: 'phyinj-035'
                            },
                            {
                                title: 'Face numbness',
                                const: 'phyinj-036'
                            },
                            {
                                title: 'Broken cheekbone',
                                const: 'phyinj-037'
                            },
                            {
                                title: 'Broken jaw',
                                const: 'phyinj-034'
                            },
                            {
                                title: 'Clicking jaw',
                                const: 'phyinj-029'
                            },
                            {
                                title: 'Dislocated jaw',
                                const: 'phyinj-030'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-face': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-face': ['phyinj-030']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-face': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-face': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-face': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-neck': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your neck',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-neck'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-neck': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken hyoid (throat bone)',
                                const: 'phyinj-038'
                            },
                            {
                                title: 'Whiplash',
                                const: 'phyinj-039'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-neck': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-neck': ['phyinj-039']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-neck': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-neck': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-neck': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-eye': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your eye or eyesight',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-eye'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-eye': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken eye socket',
                                const: 'phyinj-013'
                            },
                            {
                                title: 'Temporary blurred vision',
                                const: 'phyinj-014'
                            },
                            {
                                title: 'Permanent blurred vision',
                                const: 'phyinj-015'
                            },
                            {
                                title: 'Black eye',
                                const: 'phyinj-051'
                            },
                            {
                                title: 'Scratched eye',
                                const: 'phyinj-017'
                            },
                            {
                                title: 'Bleeding in eye',
                                const: 'phyinj-021'
                            },
                            {
                                title: 'Blindness',
                                const: 'phyinj-023'
                            },
                            {
                                title: 'Sight loss',
                                const: 'phyinj-024'
                            },
                            {
                                title: 'Damaged or detached retina',
                                const: 'phyinj-026'
                            },
                            {
                                title: 'Object in eye',
                                const: 'phyinj-027'
                            },
                            {
                                title: 'Cataract',
                                const: 'phyinj-016'
                            },
                            {
                                title: 'Dislocated lens',
                                const: 'phyinj-019'
                            },
                            {
                                title: 'Glaucoma',
                                const: 'phyinj-020'
                            },
                            {
                                title: 'Loss of eye',
                                const: 'phyinj-022'
                            },
                            {
                                title: 'Floater',
                                const: 'phyinj-025'
                            },
                            {
                                title: 'Damaged eye drain',
                                const: 'phyinj-028'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-eye': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-eye': ['phyinj-028']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-eye': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-eye': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-eye': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-ear': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your ear or hearing',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-ear'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-ear': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken ear bone',
                                const: 'phyinj-006'
                            },
                            {
                                title: 'Hearing loss',
                                const: 'phyinj-007'
                            },
                            {
                                title: 'Loss of ear',
                                const: 'phyinj-008'
                            },
                            {
                                title: '1 perforated eardrum',
                                const: 'phyinj-009'
                            },
                            {
                                title: '2 perforated eardrums',
                                const: 'phyinj-010'
                            },
                            {
                                title: 'Ringing in ears',
                                const: 'phyinj-011'
                            },
                            {
                                title: 'Dizziness',
                                const: 'phyinj-012'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-ear': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-ear': ['phyinj-012']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-ear': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-ear': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-ear': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-nose': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your nose',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-nose'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-nose': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Broken nose',
                                const: 'phyinj-033'
                            },
                            {
                                title: 'Loss of smell or taste',
                                const: 'phyinj-040'
                            },
                            {
                                title: 'Loss of nose',
                                const: 'phyinj-041'
                            },
                            {
                                title: 'Broken ethmoid (bone at base of nose)',
                                const: 'phyinj-031'
                            },
                            {
                                title: 'Broken ethmoid (bone at base of nose) needing operation',
                                const: 'phyinj-032'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-nose': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-nose': ['phyinj-032']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-nose': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-nose': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-nose': ['not-a-key']
                }
            ]
        },
        'p-applicant-physical-injury-upper-mouth': {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'Select any injuries to your mouth',
            type: 'object',
            required: ['q-applicant-physical-injury-upper-mouth'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper-mouth': {
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Loose teeth',
                                const: 'phyinj-044'
                            },
                            {
                                title: 'Damaged or broken teeth',
                                const: 'phyinj-043'
                            },
                            {
                                title: 'Difficulty speaking',
                                const: 'phyinj-045'
                            },
                            {
                                title: 'Permanent loss of speech',
                                const: 'phyinj-046'
                            },
                            {
                                title: 'Loss of tongue',
                                const: 'phyinj-047'
                            },
                            {
                                title: 'Loss of smell or taste',
                                const: 'phyinj-040'
                            }
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper-mouth': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper-mouth': ['phyinj-040']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper-mouth': 999999999
                },
                {
                    'q-applicant-physical-injury-upper-mouth': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper-mouth': ['not-a-key']
                }
            ]
        },
        system: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['case-reference'],
            additionalProperties: false,
            properties: {
                'case-reference': {
                    type: 'string',
                    pattern: '^[0-9]{2}\\\\[0-9]{6}$',
                    errorMessage: {
                        pattern: 'Invalid case reference'
                    }
                }
            },
            errorMessage: {
                required: 'Case reference is required'
            },
            examples: [
                {
                    'case-reference': '11\\123456'
                }
            ],
            invalidExamples: [
                {
                    'case-reference': 12345
                }
            ]
        }
    },
    routes: {
        initial: 'p-applicant-who-are-you-applying-for',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: 'p-applicant-declaration',
        confirmation: 'p--confirmation',
        states: {
            'p-applicant-declaration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--confirmation'
                        }
                    ]
                }
            },
            'p-applicant-british-citizen-or-eu-national': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-british-citizen-or-eu-national.q-applicant-british-citizen-or-eu-national',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-were-you-a-victim-of-sexual-assault-or-abuse',
                            cond: [
                                '==',
                                '$.answers.p-applicant-british-citizen-or-eu-national.q-applicant-british-citizen-or-eu-national',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-are-you-18-or-over': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-british-citizen-or-eu-national',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-who-are-you-applying-for': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p-applicant-are-you-18-or-over',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'myself'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-were-you-a-victim-of-sexual-assault-or-abuse': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-were-you-a-victim-of-sexual-assault-or-abuse.q-applicant-were-you-a-victim-of-sexual-assault-or-abuse',
                                false
                            ]
                        },
                        {
                            target: 'p--was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p-applicant-were-you-a-victim-of-sexual-assault-or-abuse.q-applicant-were-you-a-victim-of-sexual-assault-or-abuse',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--before-you-continue': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-did-the-crime-happen-once-or-over-time'
                        }
                    ]
                }
            },
            'p--was-the-crime-reported-to-police': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-you-cannot-get-compensation',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-are-you-claiming-for-payments',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--when-was-the-crime-reported-to-police': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                            cond: [
                                'dateDifferenceGreaterThanTwoDays',
                                '$.answers.p--when-was-the-crime-reported-to-police.q--when-was-the-crime-reported-to-police',
                                '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen'
                            ]
                        },
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                            cond: [
                                'dateDifferenceGreaterThanTwoDays',
                                '$.answers.p--when-was-the-crime-reported-to-police.q--when-was-the-crime-reported-to-police',
                                '$.answers.p-applicant-when-did-the-crime-stop.q-applicant-when-did-the-crime-stop'
                            ]
                        },
                        {
                            target: 'p--which-police-force-is-investigating-the-crime'
                        }
                    ]
                }
            },
            'p--whats-the-crime-reference-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-offender'
                        }
                    ]
                }
            },
            'p-applicant-did-the-crime-happen-once-or-over-time': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-when-did-the-crime-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                                'once'
                            ]
                        },
                        {
                            target: 'p-applicant-when-did-the-crime-start',
                            cond: [
                                '==',
                                '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                                'over-a-period-of-time'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-when-did-the-crime-happen': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                            cond: [
                                'dateExceedsTwoYearsFromNow',
                                '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen'
                            ]
                        },
                        {
                            target: 'p-applicant-where-did-the-crime-happen'
                        }
                    ]
                }
            },
            'p-applicant-when-did-the-crime-start': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-when-did-the-crime-stop'
                        }
                    ]
                }
            },
            'p-applicant-when-did-the-crime-stop': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                            cond: [
                                'dateExceedsTwoYearsFromNow',
                                '$.answers.p-applicant-when-did-the-crime-stop.q-applicant-when-did-the-crime-stop'
                            ]
                        },
                        {
                            target: 'p-applicant-where-did-the-crime-happen'
                        }
                    ]
                }
            },
            'p-applicant-select-reasons-for-the-delay-in-making-your-application': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-where-did-the-crime-happen'
                        }
                    ]
                }
            },
            'p-applicant-where-did-the-crime-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-where-in-england-did-it-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'england'
                            ]
                        },
                        {
                            target: 'p-applicant-where-in-scotland-did-it-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'scotland'
                            ]
                        },
                        {
                            target: 'p-applicant-where-in-wales-did-it-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'wales'
                            ]
                        },
                        {
                            target: 'p--you-need-to-contact-us',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'somewhere-else'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-where-in-england-did-it-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-offender',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p--when-was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-where-in-scotland-did-it-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-offender',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p--when-was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-where-in-wales-did-it-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-offender',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p--when-was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--you-need-to-contact-us': {
                type: 'final'
            },
            'p--which-police-force-is-investigating-the-crime': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--whats-the-crime-reference-number'
                        }
                    ]
                }
            },
            'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--which-police-force-is-investigating-the-crime'
                        }
                    ]
                }
            },
            'p-offender-do-you-know-the-name-of-the-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                                false
                            ]
                        },
                        {
                            target: 'p-offender-enter-offenders-name',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-offender-enter-offenders-name': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-offender-do-you-have-contact-with-offender'
                        }
                    ]
                }
            },
            'p-offender-do-you-have-contact-with-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                                false
                            ]
                        },
                        {
                            target: 'p-offender-describe-contact-with-offender',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-offender-describe-contact-with-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-physical-injuries'
                        }
                    ]
                }
            },
            'p-applicant-have-you-applied-to-us-before': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-have-you-applied-for-or-received-any-other-compensation'
                        }
                    ]
                }
            },
            'p-applicant-have-you-applied-for-or-received-any-other-compensation': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-who-did-you-apply-to',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                                true
                            ]
                        },
                        {
                            target:
                                'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--check-your-answers'
                        }
                    ]
                }
            },
            'p-applicant-who-did-you-apply-to': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-has-a-decision-been-made'
                        }
                    ]
                }
            },
            'p-applicant-has-a-decision-been-made': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-how-much-was-award',
                            cond: [
                                '==',
                                '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-when-will-you-find-out',
                            cond: [
                                '==',
                                '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-when-will-you-find-out': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--check-your-answers'
                        }
                    ]
                }
            },
            'p-applicant-how-much-was-award': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--check-your-answers'
                        }
                    ]
                }
            },
            'p--context-applicant-details': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-confirmation-method'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-name': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-have-you-been-known-by-any-other-names'
                        }
                    ]
                }
            },
            'p-applicant-have-you-been-known-by-any-other-names': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-date-of-birth',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-what-other-names-have-you-used',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-what-other-names-have-you-used': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-date-of-birth'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-date-of-birth': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                'dateLessThanEighteenYearsAgo',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth'
                            ]
                        },
                        {
                            target: 'p-applicant-enter-your-address'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-email-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--before-you-continue'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-telephone-number',
                            cond: [
                                '==',
                                '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                                'email'
                            ]
                        },
                        {
                            target: 'p-applicant-enter-your-email-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                                'text'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-enter-your-telephone-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--before-you-continue'
                        }
                    ]
                }
            },
            'p--check-your-answers': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-declaration'
                        }
                    ]
                }
            },
            'p--confirmation': {
                type: 'final'
            },
            'p--context-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-offender-do-you-know-the-name-of-the-offender'
                        }
                    ]
                }
            },
            'p-applicant-you-cannot-get-compensation': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-payments'
                        }
                    ]
                }
            },
            'p-applicant-confirmation-method': {
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
            },
            'p--context-compensation': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-have-you-applied-to-us-before'
                        }
                    ]
                }
            },
            'p--transition': {
                type: 'final'
            },
            'p--transition-no-phone-or-email': {
                type: 'final'
            },
            'p-applicant-are-you-claiming-for-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-dmi-details',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-are-you-claiming-for-payments': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-loe',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-payments.q-applicant-are-you-claiming-for-payments',
                                false
                            ]
                        },
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-payments.q-applicant-are-you-claiming-for-payments',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-are-you-claiming-for-loe': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-expenses',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-loe.q-applicant-are-you-claiming-for-loe',
                                false
                            ]
                        },
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-loe.q-applicant-are-you-claiming-for-loe',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-are-you-claiming-for-expenses': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-applicant-details',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-expenses.q-applicant-are-you-claiming-for-expenses',
                                false
                            ]
                        },
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-expenses.q-applicant-are-you-claiming-for-expenses',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--context-dmi-details': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-do-you-have-disabling-mental-injury'
                        }
                    ]
                }
            },
            'p-applicant-do-you-have-disabling-mental-injury': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-compensation',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-mental-injury-duration',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-mental-injury-duration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-select-treatments'
                        }
                    ]
                }
            },
            'p-applicant-select-treatments': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-has-your-treatment-finished-dmi'
                        }
                    ]
                }
            },
            'p-applicant-has-your-treatment-finished-dmi': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-affect-on-daily-life-dmi'
                        }
                    ]
                }
            },
            'p-applicant-affect-on-daily-life-dmi': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-gp-details'
                        }
                    ]
                }
            },
            'p--context-gp-details': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-registered-with-gp'
                        }
                    ]
                }
            },
            'p-applicant-are-you-registered-with-gp': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-have-you-seen-a-gp'
                        }
                    ]
                }
            },
            'p-applicant-have-you-seen-a-gp': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-gp-enter-your-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-registered-with-gp.q-applicant-are-you-registered-with-gp',
                                true
                            ]
                        },
                        {
                            target: 'p-gp-enter-your-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                true
                            ]
                        },
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-gp-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'upper'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-head',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'head'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-face',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'face'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-neck',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'neck'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-eye',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'eye'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-ear',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'ear'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-nose',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'nose'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-head': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-face',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'face'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-neck',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'neck'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-eye',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'eye'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-ear',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'ear'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-nose',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'nose'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-face': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-neck',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'neck'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-eye',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'eye'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-ear',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'ear'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-nose',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'nose'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-neck': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-eye',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'eye'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-ear',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'ear'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-nose',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'nose'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-eye': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-ear',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'ear'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-nose',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'nose'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-ear': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-nose',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'nose'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-nose': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-mouth',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'mouth'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-mouth': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            system: {
                type: 'final'
            }
        }
    },
    answers: {},
    progress: ['p-applicant-who-are-you-applying-for'],
    meta: {
        questionnaireDocumentVersion: '1.0.0',
        onComplete: {
            tasks: [
                {
                    type: 'sendEmail',
                    templateId: 'cb79653c-cf6e-44d4-8c03-087ba21cfd01',
                    templatePlaceholderMap: {
                        emailAddress:
                            '/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address',
                        caseReference: '/answers/system/case-reference'
                    }
                },
                {
                    type: 'sendSms',
                    templateId: '3c847bb8-957a-4bba-9fad-090657bb5c71',
                    templatePlaceholderMap: {
                        phoneNumber:
                            '/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number',
                        caseReference: '/answers/system/case-reference'
                    }
                }
            ]
        }
    }
};
