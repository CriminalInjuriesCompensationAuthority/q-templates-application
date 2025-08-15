'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-have-you-applied-to-us-before'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-have-you-applied-to-us-before',
                    resources: {
                        'applicant-have-you-applied-to-us-before': {
                            title: {
                                personalInjury: {
                                    myself:
                                        'Have you applied to us before in connection with any other crime?',
                                    proxy:
                                        'Has the victim applied to us before in connection with any other crime?'
                                },
                                deceased: {
                                    myself:
                                        'Have you applied to us before in connection with this or any other crime?',
                                    proxy:
                                        'Has the claimant applied to us before in connection with this or any other crime?'
                                }
                            },
                            error: {
                                personalInjury: {
                                    myself:
                                        'Select yes if you have applied to us before in connection with any other crime',
                                    proxy:
                                        'Select yes if the victim has applied to us before in connection with any other crime'
                                },
                                deceased: {
                                    myself:
                                        'Select yes if you have applied to us before in connection with this or any other crime',
                                    proxy:
                                        'Select yes if the claimant has applied to us before in connection with this or any other crime'
                                }
                            }
                        },
                        'enter-your-previous-reference-number': {
                            title: {
                                myself:
                                    'Enter your previous reference number if you know it (optional)',
                                proxy:
                                    'Enter their previous reference number if you know it (optional)'
                            }
                        }
                    }
                }
            ]
        },
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
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-have-you-applied-to-us-before.title.deceased.proxy',
                        ['|role.all', 'myself', 'deceased'],
                        'applicant-have-you-applied-to-us-before.title.deceased.myself',
                        ['|role.all', 'myself', 'nonDeceased'],
                        'applicant-have-you-applied-to-us-before.title.personalInjury.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-have-you-applied-to-us-before.title.personalInjury.proxy'
                    ],
                    type: 'boolean',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
                    }
                },
                'q-enter-your-previous-reference-number': {
                    type: 'string',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'enter-your-previous-reference-number.title.myself',
                        ['|role.all', 'proxy'],
                        'enter-your-previous-reference-number.title.proxy'
                    ],
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Previous reference number must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
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
                    'q-applicant-have-you-applied-to-us-before': [
                        '|l10nt',
                        ['|role.all', 'myself', 'nonDeceased'],
                        'applicant-have-you-applied-to-us-before.error.personalInjury.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-have-you-applied-to-us-before.error.personalInjury.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-have-you-applied-to-us-before.error.deceased.proxy',
                        ['|role.all', 'myself', 'deceased'],
                        'applicant-have-you-applied-to-us-before.error.deceased.myself'
                    ]
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
            ],
            options: {
                transformOrder: [
                    'q-enter-your-previous-reference-number',
                    'q-applicant-have-you-applied-to-us-before'
                ],
                outputOrder: ['q-applicant-have-you-applied-to-us-before'],
                properties: {
                    'q-applicant-have-you-applied-to-us-before': {
                        // transformer: 'govukRadios',
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: true,
                                    componentIds: ['q-enter-your-previous-reference-number']
                                }
                            ]
                        }
                    },
                    'q-enter-your-previous-reference-number': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20'
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
                    target: 'p-applicant-have-you-applied-for-or-received-any-other-compensation'
                }
            ]
        }
    }
};
