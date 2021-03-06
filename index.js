'use strict';

module.exports = {
    type: 'apply-for-compensation',
    version: '3.0.0',
    sections: {
        'p-applicant-declaration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'applicant-declaration': {
                        title: 'Declaration',
                        description:
                            '<p class="govuk-body">By submitting the application I, ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||, agree that:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true as far as I know</li><li>CICA can share the information I’ve given in this claim with:</li><ul><li>police, prosecutors and ACRO Criminal Records Office</li><li>medical organisations and staff, including police medical staff</li><li>any other individuals or organisations needed to process my application (including medical or other experts)</li></ul><li>CICA can receive information from the organisations and individuals described above</li><li>If I deliberately provide information that I know is false or misleading, I may be prosecuted and my application for compensation may be refused.</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p><p class="govuk-body">Read our privacy notice to see <a class="govuk-link" href="https://www.gov.uk/guidance/cica-privacy-notice">how we use your data</a>.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--transition-no-phone-or-email': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    transition: {
                        title:
                            'You must apply by telephone if you do not have an email address or UK mobile phone',
                        description: "{% include 'contact.njk' %}"
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-confirmation-method': {
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
            }
        },
        'p-applicant-british-citizen-or-eu-national': {
            schema: {
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
            }
        },
        'p-applicant-are-you-18-or-over': {
            schema: {
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
            }
        },
        'p-applicant-who-are-you-applying-for': {
            schema: {
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
            }
        },
        'p--before-you-continue': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'applicant-impact-on-you': {
                        title: 'About the crime',
                        description:
                            '<p class="govuk-body">We’re going to ask you:</p><ul class="govuk-list govuk-list--bullet"><li>when and where the crime happened</li><li>which police force investigated the crime</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--was-the-crime-reported-to-police': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q--was-the-crime-reported-to-police'],
                additionalProperties: false,
                properties: {
                    'q--was-the-crime-reported-to-police': {
                        title: 'Was the crime reported to the police?',
                        type: 'boolean'
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
            }
        },
        'p--when-was-the-crime-reported-to-police': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q--when-was-the-crime-reported-to-police'],
                additionalProperties: false,
                properties: {
                    'q--when-was-the-crime-reported-to-police': {
                        title: 'When was the crime reported to the police?',
                        type: 'string',
                        format: 'date-time',
                        description: 'For example, 28 2 2020. You can enter an approximate date.',
                        errorMessage: {
                            format:
                                'Enter the date the crime was reported to police and include a day, month and year'
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with when it was reported",html: \'<p class="govuk-body">If you enter an approximate date or if you reported the crime on more than one occasion, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p--whats-the-crime-reference-number': {
            schema: {
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
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with your crime reference number",html: \'<p class="govuk-body">If you do not have your crime reference number, you can call 101 to speak to your local police station.</p><p class="govuk-body">If you have more than one crime reference number, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-applicant-did-the-crime-happen-once-or-over-time': {
            schema: {
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
                        'q-applicant-did-the-crime-happen-once-or-over-time':
                            'over-a-period-of-time'
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
            }
        },
        'p-applicant-when-did-the-crime-happen': {
            schema: {
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
            }
        },
        'p-applicant-when-did-the-crime-start': {
            schema: {
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
            }
        },
        'p-applicant-when-did-the-crime-stop': {
            schema: {
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
            }
        },
        'p-applicant-select-reasons-for-the-delay-in-making-your-application': {
            schema: {
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
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                            12345
                        ],
                        'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                    },
                    {
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                            'i-was-underage'
                        ],
                        'q-applicant-explain-reason-for-delay-application': 12345
                    }
                ]
            }
        },
        'p-applicant-where-did-the-crime-happen': {
            schema: {
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
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one of these countries, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-applicant-where-in-england-did-it-happen': {
            schema: {
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
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-applicant-where-in-scotland-did-it-happen': {
            schema: {
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
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-applicant-where-in-wales-did-it-happen': {
            schema: {
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
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p--you-need-to-contact-us': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'you-need-to-contact-us': {
                        title: 'You need to contact us',
                        description:
                            '<p class="govuk-body">We need to check if you are eligible for compensation.</p>{% include \'contact.njk\' %}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--which-police-force-is-investigating-the-crime': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-police-force-id'],
                additionalProperties: false,
                properties: {
                    'q-police-force-id': {
                        title: 'Which police force is investigating the crime?',
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
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with which police force is investigating",html: \'<p class="govuk-body">If more than 1 police force is investigating the crime, you can provide additional details later in this claim.</p><p class="govuk-body">See a list of all <a class="govuk-link" href="/police-forces" target="_blank">police forces in England, Scotland and Wales</a> (opens in a new tab)</p><p class="govuk-body">If you can’t find the police force in the list, make the closest selection you can then provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
            schema: {
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
            }
        },
        'p-offender-do-you-know-the-name-of-the-offender': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-do-you-know-the-name-of-the-offender'],
                additionalProperties: false,
                properties: {
                    'q-offender-do-you-know-the-name-of-the-offender': {
                        title: "Do you know the offender's name?",
                        type: 'boolean'
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with offender\'s name",html: \'<p class="govuk-body">If there was more than 1 offender, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-offender-enter-offenders-name': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-enter-offenders-name'],
                additionalProperties: false,
                properties: {
                    'q-offender-enter-offenders-name': {
                        title: "Enter the offender's name",
                        type: 'string',
                        description: 'We will never contact the offender.',
                        maxLength: 120,
                        errorMessage: {
                            maxLength: "Offender's name must be 120 characters or less"
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with offender\'s name",html: \'<p class="govuk-body">If there was more than 1 offender, you can provide additional details later in this claim.</p>\'})}}'
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
            }
        },
        'p-offender-do-you-have-contact-with-offender': {
            schema: {
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
            }
        },
        'p-offender-describe-contact-with-offender': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-describe-contact-with-offender'],
                properties: {
                    'q-offender-describe-contact-with-offender': {
                        type: 'string',
                        title: 'Describe your contact with the offender',
                        description:
                            'We cannot pay compensation if the offender may benefit from it.',
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
            }
        },
        'p-applicant-have-you-applied-to-us-before': {
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
            }
        },
        'p-applicant-have-you-applied-for-or-received-any-other-compensation': {
            schema: {
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
            }
        },
        'p-applicant-enter-your-name': {
            schema: {
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
            }
        },
        'p-applicant-have-you-been-known-by-any-other-names': {
            schema: {
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
            }
        },
        'p-applicant-what-other-names-have-you-used': {
            schema: {
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
            }
        },
        'p-applicant-enter-your-date-of-birth': {
            schema: {
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
            }
        },
        'p-applicant-enter-your-email-address': {
            schema: {
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
            }
        },
        'p-applicant-enter-your-address': {
            schema: {
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
                        title:
                            "Building and street line 2",
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
            }
        },
        'p-applicant-enter-your-telephone-number': {
            schema: {
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
            }
        },
        'p--check-your-answers': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'p-check-your-answers': {
                        title: 'Check your answers',
                        type: 'object',
                        properties: {
                            summaryInfo: {
                                type: 'object',
                                urlPath: 'apply',
                                editAnswerText: 'Change',
                                summaryStructure: [
                                    {
                                        title: 'About the application',
                                        questions: [
                                            {
                                                id: 'p-applicant-fatal-claim',
                                                label:
                                                    'Are you applying for someone who died from their injuries?'
                                            },
                                            {
                                                id: 'p-applicant-who-are-you-applying-for',
                                                label: 'Who are you applying for?'
                                            },
                                            {
                                                id: 'p-applicant-are-you-18-or-over',
                                                label: 'Are you 18 or over?'
                                            },
                                            {
                                                id: 'p-applicant-confirmation-method',
                                                label: 'Confirmation method'
                                            },
                                            {
                                                id:
                                                    'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                                                label:
                                                    'Reasons for the delay in making your application'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Your details',
                                        questions: [
                                            {
                                                id: 'p-applicant-enter-your-name',
                                                label: 'Name'
                                            },
                                            {
                                                id:
                                                    'p-applicant-have-you-been-known-by-any-other-names',
                                                label: 'Have you been known by any other names?'
                                            },
                                            {
                                                id: 'p-applicant-what-other-names-have-you-used',
                                                label: 'Other names'
                                            },
                                            {
                                                id: 'p-applicant-enter-your-date-of-birth',
                                                label: 'Date of birth'
                                            },
                                            {
                                                id: 'p-applicant-british-citizen-or-eu-national',
                                                label: 'Are you a British citizen or EU National?'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'About the crime',
                                        questions: [
                                            {
                                                id: 'p-applicant-incident-type',
                                                label: 'Cause of injuries'
                                            },
                                            {
                                                id:
                                                    'p-applicant-did-the-crime-happen-once-or-over-time',
                                                label:
                                                    'Did the crime happen once or over a period of time?'
                                            },
                                            {
                                                id: 'p-applicant-when-did-the-crime-happen',
                                                label: 'When did the crime happen?'
                                            },
                                            {
                                                id: 'p-applicant-when-did-the-crime-start',
                                                label: 'When did the crime start?'
                                            },
                                            {
                                                id: 'p-applicant-when-did-the-crime-stop',
                                                label: 'When did the crime stop?'
                                            },
                                            {
                                                id: 'p-applicant-where-did-the-crime-happen',
                                                label: 'Where did the crime happen?'
                                            },
                                            {
                                                id: 'p-applicant-where-in-england-did-it-happen',
                                                label: 'Where in England did it happen?'
                                            },
                                            {
                                                id: 'p-applicant-where-in-scotland-did-it-happen',
                                                label: 'Where in Scotland did it happen?'
                                            },
                                            {
                                                id: 'p-applicant-where-in-wales-did-it-happen',
                                                label: 'Where in Wales did it happen?'
                                            },
                                            {
                                                id:
                                                    'p-offender-do-you-know-the-name-of-the-offender',
                                                label: 'Do you know the name of the offender?'
                                            },
                                            {
                                                id: 'p-offender-enter-offenders-name',
                                                label: "Offender's name"
                                            },
                                            {
                                                id: 'p-offender-do-you-have-contact-with-offender',
                                                label: 'Do you have contact with the offender?'
                                            },
                                            {
                                                id: 'p-offender-describe-contact-with-offender',
                                                label: 'Contact with offender'
                                            },
                                            {
                                                id: 'p-applicant-describe-incident',
                                                label: 'Would you like to describe the crime?'
                                            },
                                            {
                                                id: 'p-applicant-incident-description',
                                                label: 'Your description'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Police report',
                                        questions: [
                                            {
                                                id: 'p--was-the-crime-reported-to-police',
                                                label: 'Was the crime reported to police?'
                                            },
                                            {
                                                id: 'p-applicant-has-crime-reference-number',
                                                label: 'Do you have a crime reference number?'
                                            },
                                            {
                                                id: 'p--when-was-the-crime-reported-to-police',
                                                label: 'When was the crime reported?'
                                            },
                                            {
                                                id: 'p--whats-the-crime-reference-number',
                                                label: 'Crime reference number'
                                            },
                                            {
                                                id:
                                                    'p--which-police-force-is-investigating-the-crime',
                                                label: 'Which police force is investigating?'
                                            },
                                            {
                                                id:
                                                    'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                                                label: 'Reasons for delay in reporting crime'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Your injuries',
                                        questions: [
                                            {
                                                id: 'p-applicant-infections',
                                                label: 'Do you have HIV, hepatitis or an STI?'
                                            },
                                            {
                                                id: 'p-applicant-non-sa-infections',
                                                label: 'Do you have HIV or hepatitis?'
                                            },
                                            {
                                                id: 'p-applicant-select-infections',
                                                label: 'Select what infection you have'
                                            },
                                            {
                                                id: 'p-applicant-select-non-sa-infections',
                                                label: 'Select what infection you have'
                                            },
                                            {
                                                id: 'p-applicant-pregnancy',
                                                label: 'Did you become pregnant?'
                                            },
                                            {
                                                id: 'p-applicant-pregnancy-loss',
                                                label: 'Did you lose a pregnancy?'
                                            },
                                            {
                                                id:
                                                    'p-applicant-are-you-claiming-for-physical-injuries',
                                                label: 'Do you have physical injuries?'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury',
                                                label: 'What was injured?'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper',
                                                label:
                                                    'What parts of the head, face or neck were injured?'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-head',
                                                label: 'Head or brain injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-face',
                                                label: 'Face injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-neck',
                                                label: 'Neck injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-eye',
                                                label: 'Eye or eyesight injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-ear',
                                                label: 'Ear or hearing injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-nose',
                                                label: 'Nose injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-mouth',
                                                label: 'Mouth injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-skin',
                                                label: 'Skin on your head, face or neck injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-upper-muscle',
                                                label: 'Tissue on your head, face or neck injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso',
                                                label: 'Torso injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-shoulder',
                                                label: 'Shoulder injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-chest',
                                                label: 'Chest injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-abdomen',
                                                label: 'Abdomen injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-back',
                                                label: 'Back injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-pelvis',
                                                label: 'Pelvis injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-genitals',
                                                label: 'Genital injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-skin',
                                                label: 'Torso injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-torso-muscle',
                                                label: 'Tissue on your torso injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms',
                                                label:
                                                    'What parts of the arms or hands were injured?'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-shoulder',
                                                label: 'Shoulder injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-arm',
                                                label: 'Arm injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-elbow',
                                                label: 'Elbow injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-wrist',
                                                label: 'Wrist injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-hand',
                                                label: 'Hand injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-digit',
                                                label: 'Finger or thumb injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-skin',
                                                label: 'Skin on your arms or hands injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-arms-muscle',
                                                label: 'Tissue on your arms injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs',
                                                label:
                                                    'What parts of the legs or feet were injured?'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-hip',
                                                label: 'Hip injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-leg',
                                                label: 'Leg injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-knee',
                                                label: 'Knee injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-ankle',
                                                label: 'Ankle injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-foot',
                                                label: 'Foot injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-toes',
                                                label: 'Toe injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-skin',
                                                label: 'Skin on your legs or feet injuries'
                                            },
                                            {
                                                id: 'p-applicant-physical-injury-legs-muscle',
                                                label: 'Tissue on your legs injuries'
                                            },
                                            {
                                                id:
                                                    'p-applicant-do-you-have-disabling-mental-injury',
                                                label: 'Do you have a disabling mental injury?'
                                            },
                                            {
                                                id: 'p-applicant-mental-injury-duration',
                                                label:
                                                    'Has your mental injury lasted 6 weeks or more?'
                                            },
                                            {
                                                id: 'p-applicant-affect-on-daily-life-dmi',
                                                label:
                                                    'Briefly say how the crime has affected your daily life'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Your medical details',
                                        questions: [
                                            {
                                                id: 'p-applicant-treatment-for-physical-injuries',
                                                label: 'Treatment for your physical injuries'
                                            },
                                            {
                                                id: 'p-applicant-select-treatments',
                                                label: 'Mental health treatments'
                                            },
                                            {
                                                id: 'p-applicant-has-your-treatment-finished-dmi',
                                                label: 'Have you finished your treatment?'
                                            },
                                            {
                                                id: 'p-applicant-are-you-registered-with-gp',
                                                label: 'Are you registered with a GP practice?'
                                            },
                                            {
                                                id: 'p-applicant-have-you-seen-a-gp',
                                                label: 'Have you seen a GP about your injuries?'
                                            },
                                            {
                                                id: 'p-gp-enter-your-address',
                                                label: "GP's address"
                                            },
                                            {
                                                id: 'p-applicant-medical-help',
                                                label: 'Did you seek other medical help?'
                                            },
                                            {
                                                id: 'p-applicant-treatment-address',
                                                label: 'Where did you have treatment?'
                                            },
                                            {
                                                id: 'p-dentist-visited',
                                                label:
                                                    'Have you seen a dentist about your injuries?'
                                            },
                                            {
                                                id: 'p-dentist-details',
                                                label: "What is your dentist's address?"
                                            },
                                            {
                                                id: 'p-applicant-dentist-visited',
                                                label:
                                                    'Have you seen a dentist about your injuries?'
                                            },
                                            {
                                                id: 'p-applicant-dentist-address',
                                                label: "What is your dentist's address?"
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Money',
                                        questions: [
                                            {
                                                id: 'p-applicant-unable-to-work-duration',
                                                label:
                                                    'Have you been unable to work for more than 28 weeks?'
                                            },
                                            {
                                                id: 'p-applicant-job-when-crime-happened',
                                                label: 'Did you have a job when the crime happened?'
                                            },
                                            {
                                                id: 'p-applicant-work-details-option',
                                                label: 'Reason for not having paid work'
                                            },
                                            {
                                                id: 'p-applicant-expenses',
                                                label: 'Expenses'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Other compensation',
                                        questions: [
                                            {
                                                id: 'p-applicant-have-you-applied-to-us-before',
                                                label: 'Have you applied before?'
                                            },
                                            {
                                                id:
                                                    'p-applicant-have-you-applied-for-or-received-any-other-compensation',
                                                label:
                                                    'Have you applied for or received any other form of compensation?'
                                            },
                                            {
                                                id: 'p-applicant-who-did-you-apply-to',
                                                label: 'Who did you apply to?'
                                            },
                                            {
                                                id: 'p-applicant-has-a-decision-been-made',
                                                label: 'Have they made a decision?'
                                            },
                                            {
                                                id: 'p-applicant-how-much-was-award',
                                                label: 'How much was the award?'
                                            },
                                            {
                                                id: 'p-applicant-when-will-you-find-out',
                                                label: 'When will you find out?'
                                            },
                                            {
                                                id: 'p-applicant-other-compensation-details',
                                                label: 'Details of other compensation received'
                                            },
                                            {
                                                id:
                                                    'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                                                label:
                                                    'Why you have not applied for or received any other form of compensation'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Contact details',
                                        questions: [
                                            {
                                                id: 'p-applicant-enter-your-address',
                                                label: 'Address'
                                            },
                                            {
                                                id: 'p-applicant-enter-your-email-address',
                                                label: 'Email address'
                                            },
                                            {
                                                id: 'p-applicant-enter-your-telephone-number',
                                                label: 'Phone number'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Additional information',
                                        questions: [
                                            {
                                                id: 'p-applicant-provide-additional-information',
                                                label: 'Would you like to add any information?'
                                            },
                                            {
                                                id: 'p-applicant-additional-information',
                                                label: 'Additional information'
                                            }
                                        ]
                                    }
                                ],
                                lookup: {
                                    '10000001': 'British Transport Police',
                                    '10000033': 'Avon And Somerset Constabulary',
                                    '10000035': 'Bedfordshire Police',
                                    '10000039': 'Cambridgeshire Constabulary',
                                    '10000045': 'Scotland Forth Valley',
                                    '10000049': 'Cheshire Constabulary',
                                    '10000059': 'City Of London Police',
                                    '10000066': 'Cleveland Police',
                                    '10000082': 'Cumbria Constabulary',
                                    '10000084': 'Derbyshire Constabulary',
                                    '10000090': 'Devon & Cornwall Constabulary',
                                    '10000093': 'Dorset Police',
                                    '10000098': 'Scotland Dumfries & Galloway',
                                    '10000102': 'Durham Constabulary',
                                    '10000109': 'Dyfed Powys Police',
                                    '10000114': 'Essex Police',
                                    '10000128': 'Gloucestershire Constabulary',
                                    '10000133': 'Scotland North East',
                                    '10000140': 'Greater Manchester Police',
                                    '10000147': 'Gwent Constabulary',
                                    '10000150': 'Hampshire Constabulary',
                                    '10000153': 'Hertfordshire Constabulary',
                                    '10000169': 'Humberside Police',
                                    '10000172': 'Kent County Constabulary',
                                    '10000175': 'Lancashire Constabulary',
                                    '10000176': 'Leicestershire Police',
                                    '10000179': 'Lincolnshire Police',
                                    '10000181': 'Merseyside Police',
                                    '10000185': 'Norfolk Constabulary',
                                    '10000187': 'North Wales Police',
                                    '10000189': 'North Yorkshire Police',
                                    '10000191': 'Northamptonshire Police',
                                    '10000193': 'Scotland Highlands And Islands',
                                    '10000195': 'Northumbria Police',
                                    '10000199': 'Nottinghamshire Police',
                                    '10000215': 'South Wales Police',
                                    '10000218': 'South Yorkshire Police',
                                    '10000223': 'Staffordshire Police',
                                    '10000233': 'Suffolk Constabulary',
                                    '10000237': 'Surrey Constabulary',
                                    '10000240': 'Sussex Police',
                                    '10000243': 'Scotland Tayside',
                                    '10000247': 'Thames Valley Police',
                                    '10000274': 'Warwickshire Constabulary',
                                    '10000279': 'West Mercia Police',
                                    '10000285': 'West Midlands Police',
                                    '10000291': 'West Yorkshire Police',
                                    '10000295': 'Wiltshire Constabulary',
                                    '10002424': 'Scotland Fife',
                                    '11809683': 'Metropolitan Westminster',
                                    '11809691': 'Metropolitan Southwark',
                                    '11809693': 'Metropolitan Lambeth',
                                    '11809694': 'Metropolitan Camden',
                                    '11809698': 'Metropolitan Lewisham',
                                    '11809701': 'Metropolitan Newham',
                                    '11809709': 'Metropolitan Greenwich',
                                    '11809713': 'Metropolitan Croydon',
                                    '11809719': 'Metropolitan Barnet',
                                    '11809722': 'Metropolitan Brent',
                                    '11809726': 'Metropolitan Waltham Forest',
                                    '11809738': 'Metropolitan Haringey',
                                    '11809743': 'Metropolitan Ealing',
                                    '11809760': 'Metropolitan Bromley',
                                    '11809763': 'Metropolitan Hackney',
                                    '11809765': 'Metropolitan Islington',
                                    '11809767': 'Metropolitan Tower Hamlets',
                                    '11809771': 'Metropolitan Wandsworth',
                                    '11809775': 'Metropolitan Hillingdon',
                                    '11809780': 'Metropolitan Hounslow',
                                    '11809782': 'Metropolitan Redbridge',
                                    '11809783': 'Metropolitan Enfield',
                                    '11809785': 'Metropolitan Barking',
                                    '11809788': 'Metropolitan Bexley',
                                    '11809795': 'Metropolitan Hammersmith',
                                    '11809800': 'Metropolitan Havering',
                                    '11809801': 'Metropolitan Kensington',
                                    '11809803': 'Metropolitan Harrow',
                                    '11809805': 'Metropolitan Sutton',
                                    '11809861': 'Metropolitan Merton',
                                    '11809862': 'Metropolitan Richmond',
                                    '11809865': 'Metropolitan Kingston',
                                    '12157147': 'Scotland Ayrshire',
                                    '12607023': 'Scotland Greater Glasgow',
                                    '12607026': 'Scotland Renfrewshire/Inverclyde',
                                    '12607027': 'Scotland Argyll/West Dunbartonshire',
                                    '12607028': 'Scotland Lanarkshire',
                                    '13400412': 'Scotland Edinburgh City',
                                    '13400413': 'Scotland Lothian And Borders',
                                    true: 'Yes',
                                    false: 'No',
                                    once: 'Once',
                                    'over-a-period-of-time': 'Over a period of time',
                                    'i-was-underage': 'I was under 18',
                                    'i-was-advised-to-wait': 'I was advised to wait',
                                    'medical-reasons': 'Medical reasons',
                                    'other-reasons': 'Other reasons',
                                    'i-was-under-18': 'I was under 18',
                                    'unable-to-report-crime': 'Unable to report the crime',
                                    other: 'Other',
                                    'option-1:-sexual-assault-or-abuse':
                                        'Option 1: Sexual assault or abuse',
                                    'option-2:-sexual-assault-or-abuse-and-other-injuries-or-losses':
                                        'Option 2: Sexual assault or abuse and other injuries or losses',
                                    myself: 'Myself',
                                    'someone-else': 'Someone else',
                                    england: 'England',
                                    scotland: 'Scotland',
                                    wales: 'Wales',
                                    'somewhere-else': 'Somewhere else',
                                    'i-have-no-contact-with-the-offender':
                                        'I have no contact with the offender',
                                    email: 'Email to ',
                                    text: 'Text message to',
                                    cbt: 'CBT',
                                    emdr: 'EMDR',
                                    antidepressants: 'Antidepressants',
                                    counselling: 'counselling',
                                    psychotherapy: 'psychotherapy',
                                    'phyinj-001': 'Burns on head, face or neck',
                                    'phyinj-002': 'Scars on head, face or neck',
                                    'phyinj-003': 'Brain damage',
                                    'phyinj-004': 'Epilepsy',
                                    'phyinj-005': 'Nerve damage on Arm',
                                    'phyinj-006': 'Broken ear bone',
                                    'phyinj-007': 'Hearing loss',
                                    'phyinj-008': 'Loss of ear',
                                    'phyinj-009': '1 perforated eardrum',
                                    'phyinj-010': '2 perforated eardrums',
                                    'phyinj-011': 'Tinnitus',
                                    'phyinj-012': 'Injury affecting balance',
                                    'phyinj-013': 'Broken eye socket',
                                    'phyinj-014': 'Temporary blurred or double vision',
                                    'phyinj-015': 'Permanent blurred or double vision',
                                    'phyinj-016': 'Cataract',
                                    'phyinj-017': 'Scratched eye',
                                    'phyinj-018': 'Permanent loss of peripheral vision',
                                    'phyinj-019': 'Dislocated lens',
                                    'phyinj-020': 'Glaucoma',
                                    'phyinj-021': 'Bleeding in eye',
                                    'phyinj-022': 'Loss of eye',
                                    'phyinj-023': 'Blindness',
                                    'phyinj-024': 'Sight loss',
                                    'phyinj-025': 'Floater',
                                    'phyinj-026': 'Damaged or detached retina',
                                    'phyinj-027': 'Punctured eyeball',
                                    'phyinj-028': 'Damaged eye drain',
                                    'phyinj-029': 'Clicking jaw',
                                    'phyinj-030': 'Dislocated jaw',
                                    'phyinj-031': 'Broken ethmoid (bone at base of nose)',
                                    'phyinj-032':
                                        'Broken ethmoid (bone at base of nose) needing operation',
                                    'phyinj-033': 'Broken nose',
                                    'phyinj-034': 'Broken jaw',
                                    'phyinj-035': 'Face fractures',
                                    'phyinj-036': 'Face numbness',
                                    'phyinj-037': 'Broken cheekbone',
                                    'phyinj-038': 'Broken hyoid (throat bone)',
                                    'phyinj-039': 'Whiplash',
                                    'phyinj-040': 'Loss of smell or taste',
                                    'phyinj-041': 'Loss of nose',
                                    'phyinj-042': 'Fractured skull',
                                    'phyinj-043': 'Damaged or broken teeth',
                                    'phyinj-044': 'Loose teeth',
                                    'phyinj-045': 'Difficulty speaking',
                                    'phyinj-046': 'Permanent loss of speech',
                                    'phyinj-047': 'Loss of tongue',
                                    'phyinj-048': 'Cuts on head, face or neck',
                                    'phyinj-049': 'Bruises on head, face or neck',
                                    'phyinj-050': 'Muscle on head, face or neck',
                                    'phyinj-051': 'Black eye',
                                    'phyinj-052': 'Bloody nose',
                                    'phyinj-053': 'Hair pulled out',
                                    'phyinj-054': 'Burns on torso',
                                    'phyinj-055': 'Scars on torso',
                                    'phyinj-056': 'Keyhole surgery on torso',
                                    'phyinj-057': 'Chest surgery',
                                    'phyinj-058': 'Stoma',
                                    'phyinj-059': 'Broken vertebra',
                                    'phyinj-060': 'Slipped disc',
                                    'phyinj-061': 'Back strain',
                                    'phyinj-062': 'Separated shoulder',
                                    'phyinj-063': 'Broken collarbone',
                                    'phyinj-064': 'Broken tailbone',
                                    'phyinj-065': 'Genital injury',
                                    'phyinj-066': 'Infertility',
                                    'phyinj-067': 'Hernia',
                                    'phyinj-068': 'Loss of kidney',
                                    'phyinj-069': 'Kidney damage',
                                    'phyinj-070': 'Punctured lung',
                                    'phyinj-071': 'Collapsed lung',
                                    'phyinj-072': 'Lung damage from smoke or chemicals',
                                    'phyinj-073': 'Loss of pancreas',
                                    'phyinj-074': 'Broken pelvis',
                                    'phyinj-075': 'Broken rib',
                                    'phyinj-076': 'Broken shoulder blade',
                                    'phyinj-077': 'Loss of spleen',
                                    'phyinj-078': 'Broken breast bone',
                                    'phyinj-079': 'Cuts on torso',
                                    'phyinj-080': 'Bruises on torso',
                                    'phyinj-081': 'Muscle, ligament, or tendon on torso',
                                    'phyinj-082': 'Burns on arm or hand',
                                    'phyinj-083': 'Scars on arm or hand',
                                    'phyinj-084': 'Loss of arm',
                                    'phyinj-085': 'Paralysed arm',
                                    'phyinj-086': 'Dislocated elbow',
                                    'phyinj-087': 'Broken elbow',
                                    'phyinj-088': 'Dislocated finger on one hand',
                                    'phyinj-089': 'Dislocated fingers on both hands',
                                    'phyinj-090': 'Broken thumb',
                                    'phyinj-091': 'Broken index finger',
                                    'phyinj-092': 'Broken finger on one hand',
                                    'phyinj-093': 'Broken fingers on both hands',
                                    'phyinj-094': 'Loss of finger',
                                    'phyinj-095': 'Loss of part of finger',
                                    'phyinj-096': 'Broken hand',
                                    'phyinj-097': 'Loss of use of hand',
                                    'phyinj-098': 'Loss of grip',
                                    'phyinj-099': 'Broken arm',
                                    'phyinj-100': 'Dislocated shoulder',
                                    'phyinj-101': 'Frozen shoulder',
                                    'phyinj-103': 'Muscle, ligament, or tendon on arm or hand',
                                    'phyinj-104': 'Broken wrist',
                                    'phyinj-105': 'Sprained wrist',
                                    'phyinj-106': 'Loss of fingernail',
                                    'phyinj-107': 'Cuts on arm or hand',
                                    'phyinj-108': 'Bruises on arm or hand',
                                    'phyinj-109': 'Dislocated index finger',
                                    'phyinj-110': 'Dislocated thumb',
                                    'phyinj-111': 'Loss of thumb',
                                    'phyinj-112': 'Burns on legs or feet',
                                    'phyinj-113': 'Scars on legs or feet',
                                    'phyinj-114': 'Dislocated ankle',
                                    'phyinj-115': 'Broken ankle',
                                    'phyinj-116': 'Sprained ankle',
                                    'phyinj-117': 'Broken leg',
                                    'phyinj-118': 'Broken foot',
                                    'phyinj-119': 'Broken heel',
                                    'phyinj-120': 'Dislocated hip',
                                    'phyinj-121': 'Broken hip',
                                    'phyinj-122': 'Keyhole surgery to leg',
                                    'phyinj-123': 'Dislocated kneecap',
                                    'phyinj-124': 'Broken kneecap',
                                    'phyinj-125': 'Removal of kneecap',
                                    'phyinj-126': 'Amputated leg',
                                    'phyinj-127': 'Paralysed leg',
                                    'phyinj-129': 'Broken big toe',
                                    'phyinj-130': 'Broken toe',
                                    'phyinj-131': 'Amputated big toe',
                                    'phyinj-132': '1 amputated toe',
                                    'phyinj-133': '2 or more amputated toes',
                                    'phyinj-134': 'Cuts on legs or feet',
                                    'phyinj-135': 'Bruises on legs or feet',
                                    'phyinj-136': '2 or more broken toes',
                                    'phyinj-137':
                                        'Hemiplegia (paralysis of one side of the the body)',
                                    'phyinj-138':
                                        'Paraplegia (paralysis of lower half of the body)',
                                    'phyinj-139':
                                        'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                    'phyinj-140': 'Loss of pregnancy',
                                    'phyinj-141': 'HIV',
                                    'phyinj-142': 'Hepatitis B',
                                    'phyinj-143': 'Hepatitis C',
                                    'phyinj-144': 'Pregnancy',
                                    'phyinj-145': 'Sexually transmitted infection (STI)',
                                    'phyinj-146':
                                        'Head injury causing concussion, headaches or loss of balance',
                                    'phyinj-147': 'Paralysed finger',
                                    'phyinj-148': 'Paralysed toe',
                                    'phyinj-149': 'Other',
                                    'phyinj-150': 'Injury affecting eye movement',
                                    'phyinj-151': 'Ligament on head, face or neck',
                                    'phyinj-152': 'Tendon on head, face or neck',
                                    'phyinj-153': 'Cartilage on head, face or neck',
                                    'phyinj-154': 'Muscle on torso',
                                    'phyinj-155': 'Ligament on torso',
                                    'phyinj-156': 'Tendon on torso',
                                    'phyinj-157': 'Cartilage on torso',
                                    'phyinj-158': 'Muscle on arm or hand',
                                    'phyinj-159': 'Ligament on arm or hand',
                                    'phyinj-160': 'Tendon on arm or hand',
                                    'phyinj-161': 'Cartilage on arm or hand',
                                    'phyinj-162': 'Paralysed foot',
                                    'phyinj-164': 'Muscle on Leg or foot',
                                    'phyinj-165': 'Ligament on Leg or foot',
                                    'phyinj-166': 'Tendon on Leg or foot',
                                    'phyinj-167': 'Cartilage on Leg or foot',
                                    'phyinj-168': 'Nerve damage on Hand',
                                    'phyinj-169': 'Nerve damage on Leg',
                                    'phyinj-170': 'Nerve damage on Foot',
                                    upper: 'Head or brain',
                                    torso: 'Torso',
                                    arms: 'Arms',
                                    legs: 'Legs',
                                    head: 'Head',
                                    face: 'Face',
                                    eye: 'Eye',
                                    ear: 'Ear',
                                    nose: 'Nose',
                                    mouth: 'Mouth',
                                    neck: 'Neck',
                                    skin: 'Skin',
                                    muscle: 'Tissue',
                                    shoulder: 'Shoulder',
                                    chest: 'Chest',
                                    abdomen: 'Abdomen',
                                    back: 'Back',
                                    pelvis: 'Pelvis',
                                    genitals: 'Genitals',
                                    arm: 'Arm',
                                    elbow: 'Elbow',
                                    wrist: 'Wrist',
                                    hand: 'Hand',
                                    digit: 'Finger and Thumb',
                                    hip: 'Hip',
                                    leg: 'Leg',
                                    knee: 'Knee',
                                    ankle: 'Ankle',
                                    foot: 'Foot',
                                    toes: 'Toes',
                                    aids: 'Buying or repairing physical aids',
                                    alterations: 'Alterations to my home',
                                    'home-care': 'Home care',
                                    treatment: "NHS treatment I've paid for",
                                    'no-expenses': 'I have not had these expenses',
                                    employed:
                                        'I had been in regular work for at least 3 years before the crime',
                                    'underage-for-work': 'I was too young to work',
                                    education: 'I was in full-time education',
                                    care: 'I was caring for someone',
                                    ASST: 'Physical assault',
                                    WEAP: 'Assault with a weapon',
                                    SEX: 'Sexual assault or abuse',
                                    FMLY: 'Domestic or family violence',
                                    ARSN: 'Arson',
                                    PSNG: 'Poisoning',
                                    ANIMAL: 'Animal attack',
                                    VEHICLE: 'Vehicle attack',
                                    SECV: 'Witnessing an incident',
                                    OTHER: 'Other'
                                }
                            }
                        }
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--confirmation': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    confirmation: {
                        title: 'Confirmation',
                        description:
                            '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We\'ll also send this to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your case reference number to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting an application.</p><h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for a report of the crime</li><li>ask you for more information if we need it</li><li>make a decision on your application</li><li>send our decision letter to you by post</li></ul><p class="govuk-body">We aim to make a decision within 1 year but it can take longer. We may have to wait until there is enough information about your injuries and recovery.</p>{{ govukWarningText({text: "You must tell us right away if any of the information you have given us changes. This includes your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service</a> (takes 10 minutes)</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-you-cannot-get-compensation': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'you-cannot-get-compensation': {
                        title: 'You cannot get compensation',
                        description:
                            '<p class="govuk-body">If the crime has not been reported to the police we cannot pay compensation.</p><p class="govuk-body">You may continue your application, but any future application for the same injuries will be refused.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-offender': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'About the offender',
                additionalProperties: false,
                properties: {
                    'offender-context': {
                        title: 'About the offender',
                        description:
                            '<p class="govuk-body">We’re going to ask:</p><ul class="govuk-list govuk-list--bullet"><li>the offender\'s name (if you know it)</li><li>if you have contact with the offender</li></ul><p class="govuk-body">This is so we can make sure the offender does not benefit from any compensation you get.</p><p class="govuk-body">We will never contact the offender.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-compensation': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'compensation-context': {
                        title: 'Other compensation',
                        description:
                            '<p class="govuk-body">We\'re going to ask about any other compensation you\'ve been paid for your injuries.</p><p class="govuk-body">This is so we can work out how much compensation you can get.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-applied-for-other-compensation-briefly-explain-why-not': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                required: ['q-applicant-applied-for-other-compensation-briefly-explain-why-not'],
                properties: {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                        title:
                            'Briefly explain why you have not applied for or received any other form of compensation',
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
            }
        },
        'p-applicant-who-did-you-apply-to': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-who-did-you-apply-to'],
                properties: {
                    'q-applicant-who-did-you-apply-to': {
                        title: 'Who have you applied to or received compensation from?',
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
            }
        },
        'p-applicant-has-a-decision-been-made': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                required: ['q-applicant-has-a-decision-been-made'],
                properties: {
                    'q-applicant-has-a-decision-been-made': {
                        title: 'Have they made a decision about your claim?',
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
            }
        },
        'p-applicant-how-much-was-award': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-how-much-was-award'],
                properties: {
                    'q-how-much-was-award': {
                        title: 'How much compensation were you awarded?',
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
            }
        },
        'p-applicant-when-will-you-find-out': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-when-will-you-find-out'],
                properties: {
                    'q-when-will-you-find-out': {
                        title: "When will you find out if you've been awarded compensation?",
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
            }
        },
        'p--context-applicant-details': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'Your details',
                        description:
                            '<p class="govuk-body">We’re going to ask for some details about you.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>contact you</li><li>get a report about the crime from the police</li></ul>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-dmi-details': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'Your mental health',
                        description:
                            '<p class="govuk-body">We’re going to ask how the crime affected your mental health.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do</li><li>lasts 6 weeks or more</li><li>is diagnosed by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if you do not have a diagnosis yet. We\'ll tell you what medical evidence you\'ll need.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-do-you-have-disabling-mental-injury': {
            schema: {
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
            }
        },
        'p-applicant-mental-injury-duration': {
            schema: {
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
            }
        },
        'p-applicant-select-treatments': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                propertyNames: {
                    enum: ['q-applicant-select-treatments-dmi', 'q-applicant-other-treatment-dmi']
                },
                properties: {
                    'q-applicant-select-treatments-dmi': {
                        title: 'What mental health treatments have you had?',
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
                        title: 'Other mental health treatment',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other mental health treatment must be 499 characters or less'
                        }
                    }
                },
                required: ['q-applicant-select-treatments-dmi'],
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-other-then-q-applicant-other-treatment-dmi-is-required'
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
            }
        },
        'p-applicant-has-your-treatment-finished-dmi': {
            schema: {
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
            }
        },
        'p-applicant-affect-on-daily-life-dmi': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                properties: {
                    'q-applicant-affect-on-daily-life-dmi': {
                        type: 'string',
                        title: 'Briefly say how the crime has affected your daily life',
                        description:
                            'This helps us understand how the crime has affected you. You can leave this blank, but we may have to ask for more information later.',
                        maxLength: 1000,
                        errorMessage: {
                            maxLength: 'Description must be 1000 characters or less'
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
            }
        },
        'p-applicant-are-you-registered-with-gp': {
            schema: {
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
            }
        },
        'p-applicant-have-you-seen-a-gp': {
            schema: {
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
            }
        },
        'p-gp-enter-your-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: "What is the GP's address?",
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
            }
        },
        'p-applicant-dentist-visited': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-dentist-visited'],
                additionalProperties: false,
                properties: {
                    'q-applicant-dentist-visited': {
                        type: 'boolean',
                        title: 'Have you seen a dentist about your injuries?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-dentist-visited':
                            'Select yes if you have seen a dentist about your injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-dentist-visited': true
                    },
                    {
                        'q-applicant-dentist-visited': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-dentist-visited': 'foo'
                    }
                ]
            }
        },
        'p-applicant-dentist-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: "What is the dentist's address?",
                required: [
                    'q-applicant-dentist-address-building-and-street',
                    'q-applicant-dentist-address-town-or-city',
                    'q-applicant-dentist-address-building-and-street2'
                ],
                additionalProperties: false,
                properties: {
                    'q-applicant-dentist-address-building-and-street': {
                        type: 'string',
                        title: 'Practice name',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Practice name must be less than 60 characters'
                        }
                    },
                    'q-applicant-dentist-address-building-and-street2': {
                        type: 'string',
                        title: 'Building and street',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Building and street must be less than 60 characters'
                        }
                    },
                    'q-applicant-dentist-address-town-or-city': {
                        type: 'string',
                        title: 'Town or city',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'Town or city must be 32 characters or less'
                        }
                    },
                    'q-applicant-dentist-address-county': {
                        type: 'string',
                        title: 'County (optional)',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'County must be 32 characters or less'
                        }
                    },
                    'q-applicant-dentist-address-postcode': {
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
                        'q-applicant-dentist-address-building-and-street':
                            "Enter the name of your dentist's practice",
                        'q-applicant-dentist-address-building-and-street2':
                            'Enter the building and street of your dentist',
                        'q-applicant-dentist-address-town-or-city':
                            "Enter the town or city where your dentist's practice is"
                    }
                },
                examples: [
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-dentist-address-building-and-street': 12345,
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 12345,
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 12345,
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 12345,
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-are-you-claiming-for-physical-injuries': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-are-you-claiming-for-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-are-you-claiming-for-physical-injuries': {
                        type: 'boolean',
                        title: 'Do you have physical injuries as a result of the crime?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-are-you-claiming-for-physical-injuries':
                            'Select yes if you have physical injuries as a result of the crime'
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
            }
        },
        'p--transition': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    transition: {
                        title: 'Continue your claim',
                        description:
                            '<p class="govuk-body">You\'ll be taken to another website to continue your claim.</p>{{ govukButton({text: "Continue",href: "https://www.cica.gov.uk/OAS/Account/create",isStartButton: true}) }}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-physical-injuries': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'About your injuries',
                        description:
                            '<p class="govuk-body">We’re going to ask about any physical injuries caused by the crime.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for physical injuries.</p><p class="govuk-body">We’ll ask about your mental health later in the application.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-physical-injury': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                description: 'Select all that apply.',
                type: 'object',
                required: ['q-applicant-physical-injury'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injury': {
                        title: 'What was injured?',
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
                    {
                        'q-applicant-physical-injury': ['legs']
                    },
                    {
                        'q-applicant-physical-injury': ['arms']
                    },
                    {
                        'q-applicant-physical-injury': ['arms', 'legs']
                    },
                    {
                        'q-applicant-physical-injury': ['torso']
                    },
                    {
                        'q-applicant-physical-injury': ['torso', 'legs']
                    },
                    {
                        'q-applicant-physical-injury': ['torso', 'arms']
                    },
                    {
                        'q-applicant-physical-injury': ['upper']
                    },
                    {
                        'q-applicant-physical-injury': ['upper', 'legs']
                    },
                    {
                        'q-applicant-physical-injury': ['upper', 'arms']
                    },
                    {
                        'q-applicant-physical-injury': ['upper', 'torso']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injury': ['not-a-key']
                    },
                    {
                        'q-applicant-physical-injury': 'not-an-array'
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injury-upper'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injury-upper': {
                        title: 'What parts of the head, face or neck was injured?',
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
                                    const: 'skin',
                                    description: 'Including cuts, bruises, burns and scars'
                                },
                                {
                                    title: 'Tissue',
                                    const: 'muscle',
                                    description:
                                        'Including muscles, ligaments, tendons or cartilage'
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
                        'q-applicant-physical-injury-upper': ['head', 'face']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'eye']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'ear']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'nose']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'mouth']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['head', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'eye']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'ear']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'nose']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'mouth']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['face', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye', 'ear']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye', 'nose']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye', 'mouth']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye', 'neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['eye', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['ear']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['ear', 'nose']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['ear', 'mouth']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['ear', 'neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['ear', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['ear', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['nose']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['nose', 'mouth']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['nose', 'neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['nose', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['nose', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['mouth']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['mouth', 'neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['mouth', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['mouth', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['neck']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['neck', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['neck', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['skin']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['skin', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-upper': ['muscle']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injury-upper': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injury-upper': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-head': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the head or brain',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title:
                                        'Head injury causing concussion, headaches or loss of balance',
                                    const: 'phyinj-146'
                                },
                                {
                                    title: 'Brain damage',
                                    const: 'phyinj-003'
                                },
                                {
                                    title: 'Fractured skull',
                                    const: 'phyinj-042'
                                },
                                {
                                    title: 'Hair pulled out',
                                    const: 'phyinj-053'
                                },
                                {
                                    title: 'Epilepsy',
                                    const: 'phyinj-004'
                                },
                                {
                                    title: 'Injury affecting balance',
                                    const: 'phyinj-012'
                                },
                                {
                                    title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                    const: 'phyinj-139'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-head-other': {
                        type: 'string',
                        title: 'Other head or brain injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other head or brain injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-head-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-head-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-head-other':
                                        'Enter other head or brain injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-042']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-face': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the face',
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
                                },
                                {
                                    title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                    const: 'phyinj-139'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-face-other': {
                        type: 'string',
                        title: 'Other face injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other face injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-face-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-face-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-face-other':
                                        'Enter other face injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-030']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-neck': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the neck',
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
                                },
                                {
                                    title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                    const: 'phyinj-139'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-neck-other': {
                        type: 'string',
                        title: 'Other neck injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other neck injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-neck-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-neck-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-neck-other':
                                        'Enter other neck injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-039']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-eye': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the eye or eyesight',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken eye socket',
                                    const: 'phyinj-013'
                                },
                                {
                                    title: 'Temporary blurred or double vision',
                                    const: 'phyinj-014'
                                },
                                {
                                    title: 'Permanent blurred or double vision',
                                    const: 'phyinj-015'
                                },
                                {
                                    title: 'Permanent loss of peripheral vision',
                                    const: 'phyinj-018'
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
                                    title: 'Punctured eyeball',
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
                                },
                                {
                                    title: 'Injury affecting eye movement',
                                    const: 'phyinj-150'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-eye-other': {
                        type: 'string',
                        title: 'Other eye injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other eye injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-eye-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-eye-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-eye-other':
                                        'Enter other eye injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-028']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-ear': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the ear or hearing',
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
                                    title: 'Tinnitus',
                                    const: 'phyinj-011'
                                },
                                {
                                    title: 'Injury affecting balance',
                                    const: 'phyinj-012'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-ear-other': {
                        type: 'string',
                        title: 'Other ear or hearing injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other ear or hearing injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-ear-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-ear-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-ear-other':
                                        'Enter other ear or hearing injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-012']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-nose': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the nose',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken nose',
                                    const: 'phyinj-033'
                                },
                                {
                                    title: 'Bloody nose',
                                    const: 'phyinj-052'
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
                                    title:
                                        'Broken ethmoid (bone at base of nose) needing operation',
                                    const: 'phyinj-032'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-nose-other': {
                        type: 'string',
                        title: 'Other nose injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other nose injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-nose-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-nose-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-nose-other':
                                        'Enter other nose injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-032']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-mouth': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the mouth',
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
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-mouth-other': {
                        type: 'string',
                        title: 'Other mouth injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other mouth injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-mouth-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-mouth-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-mouth-other':
                                        'Enter other mouth injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-040']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-skin': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the skin on your head, face or neck',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Cuts',
                                    const: 'phyinj-048'
                                },
                                {
                                    title: 'Bruises',
                                    const: 'phyinj-049'
                                },
                                {
                                    title: 'Scars',
                                    const: 'phyinj-002'
                                },
                                {
                                    title: 'Burns',
                                    const: 'phyinj-001'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-skin-other': {
                        type: 'string',
                        title: 'Other skin injuries on head, face or neck',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other skin injuries on head, face or neck must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-skin-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-skin-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-skin-other':
                                        'Enter other skin injuries on head, face or neck'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-001']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-upper-muscle': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the tissue on your head, face or neck',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Muscle',
                                    const: 'phyinj-050'
                                },
                                {
                                    title: 'Ligament',
                                    const: 'phyinj-151'
                                },
                                {
                                    title: 'Tendon',
                                    const: 'phyinj-152'
                                },
                                {
                                    title: 'Cartilage',
                                    const: 'phyinj-153'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-upper-muscle-other': {
                        type: 'string',
                        title: 'Other tissue injuries to head, face or neck',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other tissue injuries to head, face or neck must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-upper-muscle-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-upper-muscle-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-upper-muscle-other':
                                        'Enter other tissue injuries to head, face or neck'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-151']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injury-torso'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injury-torso': {
                        title: 'What parts of the torso were injured?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Shoulder',
                                    const: 'shoulder'
                                },
                                {
                                    title: 'Chest',
                                    const: 'chest'
                                },
                                {
                                    title: 'Abdomen',
                                    const: 'abdomen'
                                },
                                {
                                    title: 'Back',
                                    const: 'back'
                                },
                                {
                                    title: 'Pelvis',
                                    const: 'pelvis'
                                },
                                {
                                    title: 'Genitals',
                                    const: 'genitals'
                                },
                                {
                                    title: 'Skin',
                                    const: 'skin',
                                    description: 'Including cuts, bruises, burns and scars'
                                },
                                {
                                    title: 'Tissue',
                                    const: 'muscle',
                                    description:
                                        'Including muscles, ligaments, tendons or cartilage'
                                }
                            ]
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injury-torso': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injury-torso': ['shoulder']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'chest']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'abdomen']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'back']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'pelvis']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'genitals']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['shoulder', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest', 'abdomen']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest', 'back']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest', 'pelvis']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest', 'genitals']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['chest', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['abdomen']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['abdomen', 'back']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['abdomen', 'pelvis']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['abdomen', 'genitals']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['abdomen', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['abdomen', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['back']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['back', 'pelvis']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['back', 'genitals']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['back', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['back', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['pelvis']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['pelvis', 'genitals']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['pelvis', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['pelvis', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['genitals']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['genitals', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['genitals', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['skin']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['skin', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-torso': ['muscle']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injury-torso': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injury-torso': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-shoulder': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the shoulder',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken shoulder blade',
                                    const: 'phyinj-076'
                                },
                                {
                                    title: 'Dislocated shoulder',
                                    const: 'phyinj-100'
                                },
                                {
                                    title: 'Separated shoulder',
                                    const: 'phyinj-062'
                                },
                                {
                                    title: 'Frozen shoulder',
                                    const: 'phyinj-101'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-shoulder-other': {
                        type: 'string',
                        title: 'Other shoulder injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other shoulder injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-shoulder-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-shoulder-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-shoulder-other':
                                        'Enter other shoulder injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-100']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-chest': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the chest',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken collarbone',
                                    const: 'phyinj-063'
                                },
                                {
                                    title: 'Broken breast bone',
                                    const: 'phyinj-078'
                                },
                                {
                                    title: 'Chest surgery',
                                    const: 'phyinj-057'
                                },
                                {
                                    title: 'Broken rib',
                                    const: 'phyinj-075'
                                },
                                {
                                    title: 'Punctured lung',
                                    const: 'phyinj-070'
                                },
                                {
                                    title: 'Collapsed lung',
                                    const: 'phyinj-071'
                                },
                                {
                                    title: 'Lung damage from smoke or chemicals',
                                    const: 'phyinj-072'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-chest-other': {
                        type: 'string',
                        title: 'Other chest injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other chest injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-chest-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-chest-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-chest-other':
                                        'Enter other chest injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-072']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-abdomen': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the abdomen',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Kidney damage',
                                    const: 'phyinj-069'
                                },
                                {
                                    title: 'Loss of kidney',
                                    const: 'phyinj-068'
                                },
                                {
                                    title: 'Loss of pancreas',
                                    const: 'phyinj-073'
                                },
                                {
                                    title: 'Loss of spleen',
                                    const: 'phyinj-077'
                                },
                                {
                                    title: 'Hernia',
                                    const: 'phyinj-067'
                                },
                                {
                                    title: 'Keyhole surgery on torso',
                                    const: 'phyinj-056'
                                },
                                {
                                    title: 'Stoma',
                                    const: 'phyinj-058'
                                },
                                {
                                    title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                    const: 'phyinj-139'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-abdomen-other': {
                        type: 'string',
                        title: 'Other abdomen injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other abdomen injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-abdomen-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-abdomen-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-abdomen-other':
                                        'Enter other abdomen injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-058']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-back': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the back',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken vertebra',
                                    const: 'phyinj-059'
                                },
                                {
                                    title: 'Slipped disc',
                                    const: 'phyinj-060'
                                },
                                {
                                    title: 'Back strain',
                                    const: 'phyinj-061'
                                },
                                {
                                    title: 'Broken tailbone',
                                    const: 'phyinj-064'
                                },
                                {
                                    title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                    const: 'phyinj-139'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-back-other': {
                        type: 'string',
                        title: 'Other back injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other back injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-back-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-back-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-back-other':
                                        'Enter other back injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-064']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-pelvis': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the pelvis',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken pelvis',
                                    const: 'phyinj-074'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-pelvis-other': {
                        type: 'string',
                        title: 'Other pelvis injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other pelvis injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-pelvis-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-pelvis-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-pelvis-other':
                                        'Enter other pelvis injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-074']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-genitals': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the genitals',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Genital injury',
                                    const: 'phyinj-065'
                                },
                                {
                                    title: 'Infertility',
                                    const: 'phyinj-066'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-genitals-other': {
                        type: 'string',
                        title: 'Other genital injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other genital injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-genitals-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-genitals-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-genitals-other':
                                        'Enter other genital injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-066']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-skin': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the skin on your torso',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Cuts',
                                    const: 'phyinj-079'
                                },
                                {
                                    title: 'Bruises',
                                    const: 'phyinj-080'
                                },
                                {
                                    title: 'Scars',
                                    const: 'phyinj-055'
                                },
                                {
                                    title: 'Burns',
                                    const: 'phyinj-054'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-skin-other': {
                        type: 'string',
                        title: 'Other skin injuries on torso',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other skin injuries on torso must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-skin-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-skin-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-skin-other':
                                        'Enter other skin injuries on torso'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-054']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-torso-muscle': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the tissue on your torso',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Muscle',
                                    const: 'phyinj-154'
                                },
                                {
                                    title: 'Ligament',
                                    const: 'phyinj-155'
                                },
                                {
                                    title: 'Tendon',
                                    const: 'phyinj-156'
                                },
                                {
                                    title: 'Cartilage',
                                    const: 'phyinj-157'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-torso-muscle-other': {
                        type: 'string',
                        title: 'Other tissue injuries to torso',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other tissue injuries to torso must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-torso-muscle-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-torso-muscle-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-torso-muscle-other':
                                        'Enter other tissue injuries to torso'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-154']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injury-arms'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injury-arms': {
                        title: 'What part of the arms or hands were injured?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Shoulder',
                                    const: 'shoulder'
                                },
                                {
                                    title: 'Arm',
                                    const: 'arm'
                                },
                                {
                                    title: 'Elbow',
                                    const: 'elbow'
                                },
                                {
                                    title: 'Wrist',
                                    const: 'wrist'
                                },
                                {
                                    title: 'Hand',
                                    const: 'hand'
                                },
                                {
                                    title: 'Finger and thumb',
                                    const: 'digit'
                                },
                                {
                                    title: 'Skin',
                                    const: 'skin',
                                    description: 'Including cuts, bruises, burns and scars'
                                },
                                {
                                    title: 'Tissue',
                                    const: 'muscle',
                                    description:
                                        'Including muscles, ligaments, tendons or cartilage'
                                }
                            ]
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injury-arms': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injury-arms': ['shoulder']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'arm']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'elbow']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'wrist']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'hand']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'digit']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['shoulder', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm', 'elbow']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm', 'wrist']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm', 'hand']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm', 'digit']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['arm', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['elbow']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['elbow', 'wrist']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['elbow', 'hand']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['elbow', 'digit']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['elbow', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['elbow', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['wrist']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['wrist', 'hand']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['wrist', 'digit']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['wrist', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['wrist', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['hand']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['hand', 'digit']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['hand', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['hand', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['digit']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['digit', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['digit', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['skin']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['skin', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-arms': ['muscle']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injury-arms': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injury-arms': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-shoulder': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the shoulder',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken shoulder blade',
                                    const: 'phyinj-076'
                                },
                                {
                                    title: 'Dislocated shoulder',
                                    const: 'phyinj-100'
                                },
                                {
                                    title: 'Separated shoulder',
                                    const: 'phyinj-062'
                                },
                                {
                                    title: 'Frozen shoulder',
                                    const: 'phyinj-101'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-shoulder-other': {
                        type: 'string',
                        title: 'Other shoulder injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other shoulder injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-shoulder-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-shoulder-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-shoulder-other':
                                        'Enter other shoulder injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-076']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-arm': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the arm',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken arm',
                                    const: 'phyinj-099'
                                },
                                {
                                    title: 'Nerve damage',
                                    const: 'phyinj-005'
                                },
                                {
                                    title: 'Loss of arm',
                                    const: 'phyinj-084'
                                },
                                {
                                    title: 'Paralysed arm',
                                    const: 'phyinj-085'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-arm-other': {
                        type: 'string',
                        title: 'Other arm injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other arm injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-arm-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-arm-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-arm-other':
                                        'Enter other arm injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-099']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-elbow': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the elbow',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Dislocated elbow',
                                    const: 'phyinj-086'
                                },
                                {
                                    title: 'Broken elbow',
                                    const: 'phyinj-087'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-elbow-other': {
                        type: 'string',
                        title: 'Other elbow injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other elbow injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-elbow-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-elbow-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-elbow-other':
                                        'Enter other elbow injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-086']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-wrist': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the wrist',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken wrist',
                                    const: 'phyinj-104'
                                },
                                {
                                    title: 'Sprained wrist',
                                    const: 'phyinj-105'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-wrist-other': {
                        type: 'string',
                        title: 'Other wrist injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other wrist injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-wrist-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-wrist-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-wrist-other':
                                        'Enter other wrist injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-104']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-hand': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the hand',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken hand',
                                    const: 'phyinj-096'
                                },
                                {
                                    title: 'Loss of use of hand',
                                    const: 'phyinj-097'
                                },
                                {
                                    title: 'Loss of grip',
                                    const: 'phyinj-098'
                                },
                                {
                                    title: 'Nerve damage',
                                    const: 'phyinj-168'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-hand-other': {
                        type: 'string',
                        title: 'Other hand injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other hand injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-hand-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-hand-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-hand-other':
                                        'Enter other hand injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-096']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-digit': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the finger or thumb',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Dislocated thumb',
                                    const: 'phyinj-110'
                                },
                                {
                                    title: 'Dislocated index finger',
                                    const: 'phyinj-109'
                                },
                                {
                                    title: 'Dislocated finger on one hand',
                                    const: 'phyinj-088'
                                },
                                {
                                    title: 'Dislocated fingers on both hands',
                                    const: 'phyinj-089'
                                },
                                {
                                    title: 'Broken thumb',
                                    const: 'phyinj-090'
                                },
                                {
                                    title: 'Broken index finger',
                                    const: 'phyinj-091'
                                },
                                {
                                    title: 'Broken finger on one hand',
                                    const: 'phyinj-092'
                                },
                                {
                                    title: 'Broken fingers on both hands',
                                    const: 'phyinj-093'
                                },
                                {
                                    title: 'Loss of thumb',
                                    const: 'phyinj-111'
                                },
                                {
                                    title: 'Loss of finger',
                                    const: 'phyinj-094'
                                },
                                {
                                    title: 'Loss of part of finger',
                                    const: 'phyinj-095'
                                },
                                {
                                    title: 'Loss of fingernail',
                                    const: 'phyinj-106'
                                },
                                {
                                    title: 'Paralysed finger',
                                    const: 'phyinj-147'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-digit-other': {
                        type: 'string',
                        title: 'Other finger or thumb injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other finger or thumb injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-digit-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-digit-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-digit-other':
                                        'Enter other finger or thumb injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-110']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-skin': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the skin on your arms and hands',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Cuts',
                                    const: 'phyinj-107'
                                },
                                {
                                    title: 'Bruises',
                                    const: 'phyinj-108'
                                },
                                {
                                    title: 'Scars',
                                    const: 'phyinj-083'
                                },
                                {
                                    title: 'Burns',
                                    const: 'phyinj-082'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-skin-other': {
                        type: 'string',
                        title: 'Other skin injuries on arms or hands',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other skin injuries on arms or hands must be 499 characters or fewer'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-skin-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-skin-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-skin-other':
                                        'Enter other skin injuries on arms or hands'
                                }
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-107']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-arms-muscle': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the tissue on your arms or hands',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Muscle',
                                    const: 'phyinj-158'
                                },
                                {
                                    title: 'Ligament',
                                    const: 'phyinj-159'
                                },
                                {
                                    title: 'Tendon',
                                    const: 'phyinj-160'
                                },
                                {
                                    title: 'Cartilage',
                                    const: 'phyinj-161'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-arms-muscle-other': {
                        type: 'string',
                        title: 'Other tissue injuries to arms or hands',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other tissue injuries to arms or hands must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-arms-muscle-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-arms-muscle-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-arms-muscle-other':
                                        'Enter other tissue injuries to arms or hands'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-158']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injury-legs'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injury-legs': {
                        title: 'What part of the legs or feet were injured?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Hip',
                                    const: 'hip'
                                },
                                {
                                    title: 'Leg',
                                    const: 'leg'
                                },
                                {
                                    title: 'Knee',
                                    const: 'knee'
                                },
                                {
                                    title: 'Ankle',
                                    const: 'ankle'
                                },
                                {
                                    title: 'Foot',
                                    const: 'foot'
                                },
                                {
                                    title: 'Toes',
                                    const: 'toes'
                                },
                                {
                                    title: 'Skin',
                                    const: 'skin',
                                    description: 'Including cuts, bruises, burns and scars'
                                },
                                {
                                    title: 'Tissue',
                                    const: 'muscle',
                                    description:
                                        'Including muscles, ligaments, tendons or cartilage'
                                }
                            ]
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injury-legs': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injury-legs': ['hip']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'leg']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'knee']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'ankle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'foot']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'toes']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['hip', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg', 'knee']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg', 'ankle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg', 'foot']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg', 'toes']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['leg', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['knee']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['knee', 'ankle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['knee', 'foot']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['knee', 'toes']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['knee', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['knee', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['ankle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['ankle', 'foot']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['ankle', 'toes']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['ankle', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['ankle', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['foot']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['foot', 'toes']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['foot', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['foot', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['toes']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['toes', 'skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['toes', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['skin']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['skin', 'muscle']
                    },
                    {
                        'q-applicant-physical-injury-legs': ['muscle']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injury-legs': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injury-legs': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-hip': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the hip',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Dislocated hip',
                                    const: 'phyinj-120'
                                },
                                {
                                    title: 'Broken hip',
                                    const: 'phyinj-121'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-hip-other': {
                        type: 'string',
                        title: 'Other hip injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other hip injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-hip-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-hip-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-hip-other':
                                        'Enter other hip injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-120']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-leg': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the leg',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken leg',
                                    const: 'phyinj-117'
                                },
                                {
                                    title: 'Nerve damage',
                                    const: 'phyinj-169'
                                },
                                {
                                    title: 'Keyhole surgery to leg',
                                    const: 'phyinj-122'
                                },
                                {
                                    title: 'Amputated leg',
                                    const: 'phyinj-126'
                                },
                                {
                                    title: 'Paralysed leg',
                                    const: 'phyinj-127'
                                },
                                {
                                    title: 'Paraplegia (paralysis of lower half of the body)',
                                    const: 'phyinj-138'
                                },
                                {
                                    title: 'Hemiplegia (paralysis of one side of the the body)',
                                    const: 'phyinj-137'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-leg-other': {
                        type: 'string',
                        title: 'Other leg injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other leg injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-leg-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-leg-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-leg-other':
                                        'Enter other leg injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-117']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-knee': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the knee',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Dislocated kneecap',
                                    const: 'phyinj-123'
                                },
                                {
                                    title: 'Broken kneecap',
                                    const: 'phyinj-124'
                                },
                                {
                                    title: 'Removal of kneecap',
                                    const: 'phyinj-125'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-knee-other': {
                        type: 'string',
                        title: 'Other knee injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other knee injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-knee-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-knee-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-knee-other':
                                        'Enter other knee injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-123']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-ankle': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the ankle',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Dislocated ankle',
                                    const: 'phyinj-114'
                                },
                                {
                                    title: 'Broken ankle',
                                    const: 'phyinj-115'
                                },
                                {
                                    title: 'Sprained ankle',
                                    const: 'phyinj-116'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-ankle-other': {
                        type: 'string',
                        title: 'Other ankle injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other ankle injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-ankle-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-ankle-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-ankle-other':
                                        'Enter other ankle injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-114']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-foot': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the foot',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken foot',
                                    const: 'phyinj-118'
                                },
                                {
                                    title: 'Broken heel',
                                    const: 'phyinj-119'
                                },
                                {
                                    title: 'Nerve damage',
                                    const: 'phyinj-170'
                                },
                                {
                                    title: 'Paralysed foot',
                                    const: 'phyinj-162'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-foot-other': {
                        type: 'string',
                        title: 'Other foot injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other foot injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-foot-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-foot-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-foot-other':
                                        'Enter other foot injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-118']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-toes': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'What parts of the toes were injured?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Broken big toe',
                                    const: 'phyinj-129'
                                },
                                {
                                    title: 'Broken toe',
                                    const: 'phyinj-130'
                                },
                                {
                                    title: '2 or more broken toes',
                                    const: 'phyinj-136'
                                },
                                {
                                    title: 'Amputated big toe',
                                    const: 'phyinj-131'
                                },
                                {
                                    title: '1 amputated toe',
                                    const: 'phyinj-132'
                                },
                                {
                                    title: '2 or more amputated toes',
                                    const: 'phyinj-133'
                                },
                                {
                                    title: 'Paralysed toe',
                                    const: 'phyinj-148'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-toes-other': {
                        type: 'string',
                        title: 'Other toe injuries',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other toe injuries must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-toes-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-toes-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-toes-other':
                                        'Enter other toe injuries'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-129']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-skin': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the skin on your legs or feet',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Cuts',
                                    const: 'phyinj-134'
                                },
                                {
                                    title: 'Bruises',
                                    const: 'phyinj-135'
                                },
                                {
                                    title: 'Scars',
                                    const: 'phyinj-113'
                                },
                                {
                                    title: 'Burns',
                                    const: 'phyinj-112'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-skin-other': {
                        type: 'string',
                        title: 'Other skin injuries on legs or feet',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other skin injuries on legs or feet must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-skin-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-skin-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-skin-other':
                                        'Enter other skin injuries on legs or feet'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-134']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-physical-injury-legs-muscle': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select any injuries to the tissue on your legs or feet',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Muscle',
                                    const: 'phyinj-164'
                                },
                                {
                                    title: 'Ligament',
                                    const: 'phyinj-165'
                                },
                                {
                                    title: 'Tendon',
                                    const: 'phyinj-166'
                                },
                                {
                                    title: 'Cartilage',
                                    const: 'phyinj-167'
                                },
                                {
                                    title: 'Other',
                                    const: 'phyinj-149'
                                }
                            ]
                        }
                    },
                    'q-applicant-physical-injuries-legs-muscle-other': {
                        type: 'string',
                        title: 'Other tissue injuries to legs or feet',
                        maxLength: 499,
                        errorMessage: {
                            maxLength:
                                'Other tissue injuries to legs or feet must be 499 characters or fewer'
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-physical-injuries-legs-muscle-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-physical-injuries-legs-muscle-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-physical-injuries-legs-muscle-other':
                                        'Enter other tissue injuries to legs or feet'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-164']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-infections': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-infections'],
                additionalProperties: false,
                properties: {
                    'q-applicant-infections': {
                        type: 'boolean',
                        title: 'Do you have HIV, hepatitis or an STI as a result of the crime?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-infections':
                            'Select yes if you have HIV, hepatitis or an STI as a result of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-infections': true
                    },
                    {
                        'q-applicant-infections': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-infections': 'foo'
                    }
                ]
            }
        },
        'p-applicant-select-infections': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select what infection you have',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'HIV',
                                    const: 'phyinj-141'
                                },
                                {
                                    title: 'Hepatitis B',
                                    const: 'phyinj-142'
                                },
                                {
                                    title: 'Hepatitis C',
                                    const: 'phyinj-143'
                                },
                                {
                                    title: 'Other sexually transmitted infection (STI)',
                                    const: 'phyinj-145'
                                }
                            ]
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an infection from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-141']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-pregnancy': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-pregnancy'],
                additionalProperties: false,
                properties: {
                    'q-applicant-pregnancy': {
                        type: 'boolean',
                        title: 'Did you become pregnant as a result of the crime?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-pregnancy':
                            'Select yes if you became pregnant as a result of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-pregnancy': true
                    },
                    {
                        'q-applicant-pregnancy': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-pregnancy': 'foo'
                    }
                ]
            }
        },
        'p--context-treatment': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'Your treatment',
                        description:
                            '<p class="govuk-body">We are going to ask for some details about your GP</p><p class="govuk-body">We\'ll use these to understand:</p><ul class="govuk-list govuk-list--bullet"><li>if you\'ve told your GP about your injuries</li><li>who has evidence of your injuries</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-treatment-for-physical-injuries': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-treatment-for-physical-injuries'],
                properties: {
                    'q-applicant-treatment-for-physical-injuries': {
                        type: 'string',
                        title: 'What treatment are you receiving for your physical injuries?',
                        maxLength: 500,
                        errorMessage: {
                            maxLength: 'Description must be 500 characters or less'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-treatment-for-physical-injuries':
                            'Describe what treatment you have received for your physical injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-treatment-for-physical-injuries': 'Some treatment'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-treatment-for-physical-injuries': 12345
                    }
                ]
            }
        },
        'p-applicant-medical-help': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-medical-help'],
                additionalProperties: false,
                properties: {
                    'q-applicant-medical-help': {
                        type: 'boolean',
                        title: 'Did you get other medical help for your injuries?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-medical-help':
                            'Select yes if you got other medical help for your injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-medical-help': true
                    },
                    {
                        'q-applicant-medical-help': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-medical-help': 'foo'
                    }
                ]
            }
        },
        'p-applicant-treatment-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'Where did you have treatment?',
                required: [
                    'q-applicant-treatment-building-and-street',
                    'q-applicant-treatment-town-or-city',
                    'q-applicant-treatment-building-and-street2'
                ],
                additionalProperties: false,
                properties: {
                    'q-applicant-treatment-building-and-street': {
                        type: 'string',
                        title: 'Name of place',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Place name must be less than 60 characters'
                        }
                    },
                    'q-applicant-treatment-building-and-street2': {
                        type: 'string',
                        title: 'Address line 1',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Building and street must be less than 60 characters'
                        }
                    },
                    'q-applicant-treatment-town-or-city': {
                        type: 'string',
                        title: 'Town or city',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'Town or city must be 32 characters or less'
                        }
                    },
                    'q-applicant-treatment-county': {
                        type: 'string',
                        title: 'County (optional)',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'County must be 32 characters or less'
                        }
                    },
                    'q-applicant-treatment-postcode': {
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
                        'q-applicant-treatment-building-and-street': 'Enter the name of the place',
                        'q-applicant-treatment-building-and-street2':
                            'Enter the building and street',
                        'q-applicant-treatment-town-or-city': 'Enter the town or city'
                    }
                },
                examples: [
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-treatment-building-and-street': 12345,
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 12345,
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 12345,
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 12345,
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-unable-to-work-duration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-unable-to-work-duration'],
                additionalProperties: false,
                properties: {
                    'q-applicant-unable-to-work-duration': {
                        type: 'boolean',
                        title: 'Have you been unable to work for more than 28 weeks?',
                        description:
                            'This includes working less hours or being unable to look for work'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-unable-to-work-duration':
                            'Select yes if you have been unable to work for more than 28 weeks'
                    }
                },
                examples: [
                    {
                        'q-applicant-unable-to-work-duration': true
                    },
                    {
                        'q-applicant-unable-to-work-duration': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-unable-to-work-duration': 'foo'
                    }
                ]
            }
        },
        'p-applicant-job-when-crime-happened': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-job-when-crime-happened'],
                additionalProperties: false,
                properties: {
                    'q-applicant-job-when-crime-happened': {
                        type: 'boolean',
                        title: 'Did you have a job when the crime happened?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-job-when-crime-happened':
                            'Select yes if you had a job when the crime happened'
                    }
                },
                examples: [
                    {
                        'q-applicant-job-when-crime-happened': true
                    },
                    {
                        'q-applicant-job-when-crime-happened': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-job-when-crime-happened': 'foo'
                    }
                ]
            }
        },
        'p-applicant-work-details-option': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-work-details-option'],
                additionalProperties: false,
                properties: {
                    'q-applicant-work-details-option': {
                        title: 'Select the option that applies to you',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'I was too young to work',
                                const: 'underage-for-work'
                            },
                            {
                                title: 'I was in full-time education',
                                const: 'education'
                            },
                            {
                                title: 'I was caring for someone',
                                const: 'care'
                            },
                            {
                                title:
                                    'I did not have a job but I had been in regular work for at least 3 years before the crime',
                                const: 'employed'
                            },
                            {
                                title: 'Other',
                                const: 'other'
                            }
                        ]
                    },
                    'q-applicant-work-details-other': {
                        type: 'string',
                        title: 'Details',
                        maxLength: 100,
                        errorMessage: {
                            maxLength: 'Other details must be 100 characters or less'
                        }
                    }
                },
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-other-then-q-applicant-work-details-other-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-q-applicant-work-details-other-is-required': {
                        if: {
                            properties: {
                                'q-applicant-work-details-option': {
                                    const: 'other'
                                }
                            },
                            required: ['q-applicant-work-details-option']
                        },
                        then: {
                            required: ['q-applicant-work-details-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-work-details-option',
                                    'q-applicant-work-details-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-work-details-other': 'Enter other details'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-work-details-option': 'Select the option that applies to you'
                    }
                },
                examples: [
                    {
                        'q-applicant-work-details-option': 'care'
                    },
                    {
                        'q-applicant-work-details-option': 'other',
                        'q-applicant-work-details-other': 'a string'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-work-details-option': 1234
                    },
                    {
                        'q-applicant-work-details-option': 'other'
                    },
                    {
                        'q-applicant-work-details-option': 'other',
                        'q-applicant-work-details-other': 1234
                    }
                ]
            }
        },
        'p-applicant-expenses': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-expenses'],
                additionalProperties: false,
                properties: {
                    'q-applicant-expenses': {
                        title: 'What expenses have you had?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Buying or repairing physical aids',
                                    const: 'aids'
                                },
                                {
                                    title: 'Alterations to my home',
                                    const: 'alterations'
                                },
                                {
                                    title: 'Home care',
                                    const: 'home-care'
                                },
                                {
                                    title: "NHS treatment I've paid for",
                                    const: 'treatment',
                                    description:
                                        'Or treatment from the state health service in another country'
                                },
                                {
                                    title: 'I have not had these expenses',
                                    const: 'no-expenses'
                                }
                            ]
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-q-applicant-expenses-max-one-item'
                    }
                ],
                definitions: {
                    'if-other-then-q-applicant-expenses-max-one-item': {
                        if: {
                            properties: {
                                'q-applicant-expenses': {
                                    contains: {
                                        const: 'no-expenses'
                                    }
                                }
                            },
                            required: ['q-applicant-expenses']
                        },
                        then: {
                            required: ['q-applicant-expenses'],
                            properties: {
                                'q-applicant-expenses': {
                                    maxItems: 1,
                                    errorMessage: {
                                        maxItems:
                                            'Select any expenses you’ve had or select ‘I have not had these expenses’'
                                    }
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-expenses': 'Select expenses from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-expenses': ['home-care']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-expenses': 'not-an-array'
                    },
                    {
                        'q-applicant-expenses': ['not-a-key']
                    }
                ]
            }
        },
        'p--context-money': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'money-context': {
                        title: 'Your money',
                        description:
                            '<p class="govuk-body">We\'re going to ask if you\'ve lost money as a result of the crime.</p><p class="govuk-body">This will help us decide if you\'ll get a payment for expenses or loss of earnings.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-pregnancy-loss': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-pregnancy-loss'],
                additionalProperties: false,
                properties: {
                    'q-applicant-pregnancy-loss': {
                        type: 'boolean',
                        title: 'Did you lose a pregnancy as a result of the crime?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-pregnancy-loss':
                            'Select yes if you lost a pregnancy as a result of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-pregnancy-loss': true
                    },
                    {
                        'q-applicant-pregnancy-loss': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-pregnancy-loss': 'foo'
                    }
                ]
            }
        },
        'p-applicant-non-sa-infections': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-non-sa-infections'],
                additionalProperties: false,
                properties: {
                    'q-applicant-non-sa-infections': {
                        type: 'boolean',
                        title: 'Do you have HIV or hepatitis as a result of the crime?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-non-sa-infections':
                            'Select yes if you have HIV or hepatitis as a result of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-non-sa-infections': true
                    },
                    {
                        'q-applicant-non-sa-infections': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-non-sa-infections': 'foo'
                    }
                ]
            }
        },
        'p-applicant-select-non-sa-infections': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'Select what infection you have',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'HIV',
                                    const: 'phyinj-141'
                                },
                                {
                                    title: 'Hepatitis B',
                                    const: 'phyinj-142'
                                },
                                {
                                    title: 'Hepatitis C',
                                    const: 'phyinj-143'
                                }
                            ]
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an infection from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-141']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-fatal-claim': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-fatal-claim'],
                additionalProperties: false,
                properties: {
                    'q-applicant-fatal-claim': {
                        type: 'boolean',
                        title: 'Are you applying for someone who died from their injuries?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-fatal-claim':
                            'Select yes if you are applying for someone who died from their injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-fatal-claim': true
                    },
                    {
                        'q-applicant-fatal-claim': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-fatal-claim': 'foo'
                    }
                ]
            }
        },
        'p-applicant-incident-type': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-incident-type'],
                additionalProperties: false,
                properties: {
                    'q-applicant-incident-type': {
                        title: 'What led to your injuries?',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Physical assault',
                                const: 'ASST'
                            },
                            {
                                title: 'Assault with a weapon',
                                const: 'WEAP'
                            },
                            {
                                title: 'Sexual assault or abuse',
                                const: 'SEX'
                            },
                            {
                                title: 'Domestic or family violence',
                                const: 'FMLY'
                            },
                            {
                                title: 'Arson',
                                const: 'ARSN'
                            },
                            {
                                title: 'Poisoning',
                                const: 'PSNG'
                            },
                            {
                                title: 'Animal attack',
                                const: 'ANIMAL'
                            },
                            {
                                title: 'Vehicle attack',
                                const: 'VEHICLE'
                            },
                            {
                                title: 'Witnessing an incident',
                                const: 'SECV'
                            },
                            {
                                title: 'Other',
                                const: 'OTHER'
                            }
                        ]
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-incident-type': 'Select what led to your injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-incident-type': 'ANIMAL'
                    }
                ],
                invalidExamples: [
                    {},
                    {
                        'q-applicant-incident-type': 'ABCD'
                    },
                    {
                        'q-applicant-incident-type': ''
                    },
                    {
                        'q-applicant-incident-type': 123
                    },
                    {
                        'q-applicant-incident-type': []
                    },
                    {
                        'q-applicant-incident-type': true
                    }
                ]
            }
        },
        'p-applicant-provide-additional-information': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-provide-additional-information'],
                additionalProperties: false,
                properties: {
                    'q-applicant-provide-additional-information': {
                        type: 'boolean',
                        title: 'Would you like to add any information to your claim?',
                        description:
                            'This may include details of additional crime reference numbers, locations, dates and/or offenders.'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-provide-additional-information':
                            'Select yes if you would like to add any information to your claim'
                    }
                },
                examples: [
                    {
                        'q-applicant-provide-additional-information': true
                    },
                    {
                        'q-applicant-provide-additional-information': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-provide-additional-information': 'foo'
                    }
                ]
            }
        },
        'p-applicant-additional-information': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-additional-information'],
                properties: {
                    'q-applicant-additional-information': {
                        type: 'string',
                        title: 'Enter additional information',
                        description:
                            'You can provide any extra information, including additional crime reference numbers, details of additional crimes, locations, dates and/or offenders here.',
                        maxLength: 1000,
                        errorMessage: {
                            maxLength: 'Additional information must be 1000 characters or less'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-additional-information':
                            'Describe what additional information you want to provide'
                    }
                },
                examples: [
                    {
                        'q-applicant-additional-information': 'Some info'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-additional-information': 12345
                    }
                ]
            }
        },
        'p-applicant-describe-incident': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-describe-incident'],
                additionalProperties: false,
                properties: {
                    'q-applicant-describe-incident': {
                        type: 'boolean',
                        title: 'Would you like to briefly describe the crime in your own words?',
                        description:
                            'The police will send us a report of the crime. Providing an additional description is optional.'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-describe-incident':
                            'Select yes if you would like to describe the crime in your own words'
                    }
                },
                examples: [
                    {
                        'q-applicant-describe-incident': true
                    },
                    {
                        'q-applicant-describe-incident': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-describe-incident': 'foo'
                    }
                ]
            }
        },
        'p-applicant-incident-description': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-incident-description'],
                properties: {
                    'q-applicant-incident-description': {
                        type: 'string',
                        title: 'Briefly describe the crime in your own words',
                        description:
                            'You can add details that may not be included in the crime report.',
                        maxLength: 1000,
                        errorMessage: {
                            maxLength: 'Description must be 1000 characters or less'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-incident-description': 'Describe the crime in your own words'
                    }
                },
                examples: [
                    {
                        'q-applicant-incident-description': 'Some description'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-incident-description': 12345
                    }
                ]
            }
        },
        'p-applicant-has-crime-reference-number': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-has-crime-reference-number'],
                additionalProperties: false,
                properties: {
                    'q-applicant-has-crime-reference-number': {
                        type: 'boolean',
                        title: 'Do you have a crime reference number?',
                        description:
                            'This is the number the police gave the crime when it was reported. We need this to get information about the crime from them. You will need to add this later in the application.'
                    },
                    'crn-info': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I do not know the crime reference number",html: \'<p class="govuk-body">If you do not have your crime reference number, call 101 to speak to your local police station. They can help you get this.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-has-crime-reference-number':
                            'Select yes if you know the crime reference number'
                    }
                },
                examples: [
                    {
                        'q-applicant-has-crime-reference-number': true
                    },
                    {
                        'q-applicant-has-crime-reference-number': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-has-crime-reference-number': 'foo'
                    }
                ]
            }
        },
        'p--context-additional-info': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'applicant-additional-info': {
                        title: 'Additional Information',
                        description:
                            '<p class="govuk-body">We’re going to ask you if you want to provide any more details about this claim</p><p class="govuk-body">This can be information that did not fit the questions you have been asked, such as:</p><ul class="govuk-list govuk-list--bullet"><li>crime reference numbers</li><li>offender names</li><li>locations</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about this claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        system: {
            schema: {
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
        }
    },
    routes: {
        initial: 'p-applicant-fatal-claim',
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
                            target: 'p--context-applicant-details'
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
            'p--before-you-continue': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-incident-type'
                        }
                    ]
                }
            },
            'p-applicant-incident-type': {
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
                            target: 'p-applicant-has-crime-reference-number',
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
                            target: 'p-applicant-describe-incident'
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
                            target: 'p-applicant-describe-incident',
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
                            target: 'p-applicant-describe-incident',
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
                            target: 'p-applicant-describe-incident',
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
                            target: 'p--context-physical-injuries',
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
                            target: 'p--context-physical-injuries',
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
                            target: 'p--context-physical-injuries'
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
                            target: 'p--context-additional-info'
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
                            target: 'p--context-additional-info'
                        }
                    ]
                }
            },
            'p-applicant-how-much-was-award': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-additional-info'
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
                            target: 'p-applicant-who-are-you-applying-for'
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
                            target: 'p-applicant-affect-on-daily-life-dmi',
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
                            target: 'p-applicant-affect-on-daily-life-dmi'
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
                            target: 'p-applicant-are-you-registered-with-gp'
                        }
                    ]
                }
            },
            'p-applicant-affect-on-daily-life-dmi': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-treatment',
                            cond: [
                                'or',
                                [
                                    '==',
                                    '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-infections.q-applicant-infections',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-pregnancy.q-applicant-pregnancy',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-pregnancy-loss.q-applicant-pregnancy-loss',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-non-sa-infections.q-applicant-non-sa-infections',
                                    true
                                ]
                            ]
                        },
                        {
                            target: 'p--context-money'
                        }
                    ]
                }
            },
            'p--context-treatment': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-treatment-for-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-select-treatments',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-has-your-treatment-finished-dmi'
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
                                'or',
                                [
                                    '==',
                                    '$.answers.p-applicant-are-you-registered-with-gp.q-applicant-are-you-registered-with-gp',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                    true
                                ]
                            ]
                        },
                        {
                            target: 'p-applicant-dentist-visited',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'upper'
                            ]
                        },
                        {
                            target: 'p-applicant-medical-help'
                        }
                    ]
                }
            },
            'p-applicant-dentist-visited': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-dentist-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-dentist-visited.q-applicant-dentist-visited',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-medical-help',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                false
                            ]
                        },
                        {
                            target: 'p--context-money'
                        }
                    ]
                }
            },
            'p-applicant-dentist-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-medical-help',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                false
                            ]
                        },
                        {
                            target: 'p--context-money'
                        }
                    ]
                }
            },
            'p-gp-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-dentist-visited',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'upper'
                            ]
                        },
                        {
                            target: 'p-applicant-medical-help',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                false
                            ]
                        },
                        {
                            target: 'p--context-money'
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
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
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
                            target: 'p-applicant-physical-injury-upper-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-skin': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-upper-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-upper-muscle': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'torso'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-shoulder',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'shoulder'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-chest',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'chest'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-abdomen',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'abdomen'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-back',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'back'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-pelvis',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'pelvis'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-genitals',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'genitals'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-shoulder': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-chest',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'chest'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-abdomen',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'abdomen'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-back',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'back'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-pelvis',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'pelvis'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-genitals',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'genitals'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-chest': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-abdomen',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'abdomen'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-back',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'back'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-pelvis',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'pelvis'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-genitals',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'genitals'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-abdomen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-back',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'back'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-pelvis',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'pelvis'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-genitals',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'genitals'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-back': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-pelvis',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'pelvis'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-genitals',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'genitals'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-pelvis': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-genitals',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'genitals'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-genitals': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-skin': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-torso-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-torso-muscle': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'arms'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-shoulder',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'shoulder'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-arm',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'arm'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-elbow',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'elbow'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-wrist',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'wrist'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-hand',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'hand'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-digit',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'digit'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-shoulder': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-arm',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'arm'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-elbow',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'elbow'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-wrist',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'wrist'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-hand',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'hand'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-digit',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'digit'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-arm': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-elbow',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'elbow'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-wrist',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'wrist'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-hand',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'hand'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-digit',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'digit'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-elbow': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-wrist',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'wrist'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-hand',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'hand'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-digit',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'digit'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-wrist': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-hand',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'hand'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-digit',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'digit'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-hand': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-digit',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'digit'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-digit': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-skin': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-arms-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-arms-muscle': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                                'legs'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-hip',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'hip'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-leg',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'leg'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-knee',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'knee'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-ankle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'ankle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-foot',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'foot'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-toes',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'toes'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-hip': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-leg',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'leg'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-knee',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'knee'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-ankle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'ankle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-foot',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'foot'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-toes',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'toes'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-leg': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-knee',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'knee'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-ankle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'ankle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-foot',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'foot'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-toes',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'toes'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-knee': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-ankle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'ankle'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-foot',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'foot'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-toes',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'toes'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-ankle': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-foot',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'foot'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-toes',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'toes'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-foot': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-toes',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'toes'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-toes': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-skin',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'skin'
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-skin': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-physical-injury-legs-muscle',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                                'muscle'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-physical-injury-legs-muscle': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p--context-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-infections',
                            cond: [
                                '==',
                                '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                                'SEX'
                            ]
                        },
                        {
                            target: 'p-applicant-non-sa-infections'
                        }
                    ]
                }
            },
            'p-applicant-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-select-infections',
                            cond: [
                                '==',
                                '$.answers.p-applicant-infections.q-applicant-infections',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-pregnancy',
                            cond: [
                                '==',
                                '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                                'SEX'
                            ]
                        },
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-select-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-pregnancy',
                            cond: [
                                '==',
                                '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                                'SEX'
                            ]
                        },
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-pregnancy': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-treatment-for-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-select-treatments',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-has-your-treatment-finished-dmi'
                        }
                    ]
                }
            },
            'p-applicant-medical-help': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-treatment-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-medical-help.q-applicant-medical-help',
                                true
                            ]
                        },
                        {
                            target: 'p--context-money'
                        }
                    ]
                }
            },
            'p-applicant-treatment-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-money'
                        }
                    ]
                }
            },
            'p--context-money': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-unable-to-work-duration'
                        }
                    ]
                }
            },
            'p-applicant-unable-to-work-duration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-job-when-crime-happened',
                            cond: [
                                '==',
                                '$.answers.p-applicant-unable-to-work-duration.q-applicant-unable-to-work-duration',
                                true
                            ]
                        },
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-job-when-crime-happened': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-expenses',
                            cond: [
                                '==',
                                '$.answers.p-applicant-job-when-crime-happened.q-applicant-job-when-crime-happened',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-work-details-option'
                        }
                    ]
                }
            },
            'p-applicant-work-details-option': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-expenses'
                        }
                    ]
                }
            },
            'p-applicant-expenses': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-pregnancy-loss': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-physical-injuries'
                        }
                    ]
                }
            },
            'p-applicant-non-sa-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-select-non-sa-infections',
                            cond: [
                                '==',
                                '$.answers.p-applicant-non-sa-infections.q-applicant-non-sa-infections',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-select-non-sa-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-fatal-claim': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim',
                                true
                            ]
                        },
                        {
                            target: 'p--was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-provide-additional-information': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-additional-information',
                            cond: [
                                '==',
                                '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                                true
                            ]
                        },
                        {
                            target: 'p--check-your-answers',
                            cond: [
                                '==',
                                '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-additional-information': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--check-your-answers'
                        }
                    ]
                }
            },
            'p-applicant-describe-incident': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-incident-description',
                            cond: [
                                '==',
                                '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                                true
                            ]
                        },
                        {
                            target: 'p--context-offender',
                            cond: [
                                '==',
                                '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-incident-description': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-offender'
                        }
                    ]
                }
            },
            'p-applicant-has-crime-reference-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-who-are-you-applying-for'
                        }
                    ]
                }
            },
            'p--context-additional-info': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-provide-additional-information'
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
    progress: ['p-applicant-fatal-claim'],
    meta: {
        questionnaireDocumentVersion: '2.0.0',
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
