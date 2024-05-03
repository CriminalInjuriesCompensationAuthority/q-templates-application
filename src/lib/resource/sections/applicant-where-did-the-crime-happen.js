'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-applicant-where-did-the-crime-happen',
                    'q-applicant-crime-location',
                    'additional-info-help-text'
                ]
            },
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
                    ],
                    meta: {
                        classifications: {
                            theme: 'crime'
                        }
                    }
                },
                'q-applicant-crime-location': {
                    type: 'string',
                    title: 'Tell us more about where the crime happened',
                    maxLength: 140,
                    errorMessage: {
                        maxLength: 'Explanation must be 140 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Tell us more about where the crime happened'
                        }
                    }
                },
                'additional-info-help-text': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "If the crime happened in more than one country",html: \'<p class="govuk-body">If the crime took place in more than one of these countries, you can provide additional details later in this application.</p>\'})}}'
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-crime-location-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-crime-location-is-required': {
                    if: {
                        properties: {
                            'q-applicant-where-did-the-crime-happen': {
                                const: 'somewhere-else'
                            }
                        },
                        required: ['q-applicant-where-did-the-crime-happen']
                    },
                    then: {
                        required: ['q-applicant-crime-location'],
                        propertyNames: {
                            enum: [
                                'q-applicant-where-did-the-crime-happen',
                                'q-applicant-crime-location',
                                'additional-info-help-text'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-crime-location':
                                    'Enter the location where the crime happened'
                            }
                        }
                    },
                    else: {
                        required: ['q-applicant-where-did-the-crime-happen']
                    }
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
                    'q-applicant-where-did-the-crime-happen': 'somewhere-else',
                    'q-applicant-crime-location': 'somewhere else'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-where-did-the-crime-happen': 'Japan'
                },
                {
                    'q-applicant-where-did-the-crime-happen': 'somewhere-else',
                    'q-applicant-crime-location': 12345
                },
                {
                    'q-applicant-crime-location': 'somewhere'
                },
                {
                    'q-applicant-where-did-the-crime-happen': 'somewhere-else',
                    'q-applicant-crime-location': null
                }
            ],
            options: {
                transformOrder: [
                    'q-applicant-crime-location',
                    'q-applicant-where-did-the-crime-happen',
                    'additional-info-help-text'
                ],
                outputOrder: [
                    'q-applicant-where-did-the-crime-happen',
                    'additional-info-help-text'
                ],
                properties: {
                    'q-applicant-where-did-the-crime-happen': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-radios'
                            },
                            conditionalComponentMap: [
                                {
                                    itemValue: 'somewhere-else',
                                    componentIds: ['q-applicant-crime-location']
                                }
                            ]
                        }
                    },
                    'q-applicant-crime-location': {
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
                    target: 'p--which-police-force-is-investigating-the-crime',
                    cond: [
                        'and',
                        ['|role.all', 'deceased'],
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            true
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                            'somewhere-else'
                        ]
                    ]
                },
                {
                    target: 'p--context-offender',
                    cond: [
                        'and',
                        ['|role.all', 'deceased'],
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                            'somewhere-else'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-describe-incident',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                            'somewhere-else'
                        ]
                    ]
                },
                {
                    target: 'p--when-was-the-crime-reported-to-police',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            true
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                            'somewhere-else'
                        ]
                    ]
                }
            ]
        }
    }
};
