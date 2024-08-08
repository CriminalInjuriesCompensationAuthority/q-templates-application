'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-offender-do-you-know-the-name-of-the-offender',
                    'q-offender-enter-offenders-name',
                    'additional-info-help-text'
                ]
            },
            required: ['q-offender-do-you-know-the-name-of-the-offender'],
            additionalProperties: false,
            properties: {
                'q-offender-do-you-know-the-name-of-the-offender': {
                    title: "Do you know the offender's name?",
                    description: 'We will never contact the offender.',
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
                            theme: 'offender'
                        }
                    }
                },
                'q-offender-enter-offenders-name': {
                    title: "Enter the offender's name",
                    type: 'string',
                    maxLength: 120,
                    errorMessage: {
                        maxLength: "Offender's name must be 120 characters or less"
                    },
                    meta: {
                        classifications: {
                            theme: 'offender'
                        },
                        summary: {
                            title: 'Offenders name'
                        }
                    }
                },
                'additional-info-help-text': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "There was more than one offender",html: \'<p class="govuk-body">If there was more than one offender, you can provide additional details later in this application.</p>\'})}}'
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-offender-enter-offenders-name-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-offender-enter-offenders-name-is-required': {
                    if: {
                        properties: {
                            'q-offender-do-you-know-the-name-of-the-offender': {
                                const: true
                            }
                        },
                        required: ['q-offender-do-you-know-the-name-of-the-offender']
                    },
                    then: {
                        required: ['q-offender-enter-offenders-name'],
                        propertyNames: {
                            enum: [
                                'q-offender-do-you-know-the-name-of-the-offender',
                                'q-offender-enter-offenders-name',
                                'additional-info-help-text'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-offender-enter-offenders-name': "Enter the offender's name"
                            }
                        }
                    },
                    else: {
                        required: ['q-offender-do-you-know-the-name-of-the-offender']
                    }
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
                    'q-offender-do-you-know-the-name-of-the-offender': true,
                    'q-offender-enter-offenders-name': 'Foo Bar'
                },
                {
                    'q-offender-do-you-know-the-name-of-the-offender': false
                }
            ],
            invalidExamples: [
                {
                    'q-offender-do-you-know-the-name-of-the-offender': 'foo'
                },
                {
                    'q-offender-do-you-know-the-name-of-the-offender': true,
                    'q-offender-enter-offenders-name': 12345
                },
                {
                    'q-offender-enter-offenders-name': 'Foo Bar'
                },
                {
                    'q-offender-do-you-know-the-name-of-the-offender': true,
                    'q-offender-enter-offenders-name': null
                }
            ],
            options: {
                transformOrder: [
                    'q-offender-enter-offenders-name',
                    'q-offender-do-you-know-the-name-of-the-offender',
                    'additional-info-help-text'
                ],
                outputOrder: [
                    'q-offender-do-you-know-the-name-of-the-offender',
                    'additional-info-help-text'
                ],
                properties: {
                    'q-offender-do-you-know-the-name-of-the-offender': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-radios'
                            },
                            conditionalComponentMap: [
                                {
                                    itemValue: true,
                                    componentIds: ['q-offender-enter-offenders-name']
                                }
                            ]
                        }
                    },
                    'q-offender-enter-offenders-name': {
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
                    target: 'p-offender-do-you-have-contact-with-offender',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                            true
                        ],
                        ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', false]
                    ]
                },
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
