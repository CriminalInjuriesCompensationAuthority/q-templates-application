'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-incident-type'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-incident-type',
                    resources: {
                        'q-applicant-incident-type': {
                            error: {
                                required: 'Select what led to your injuries',
                                'required_someone-else': "Select what led to the victim's injuries"
                            },
                            title: 'What led to your injuries?',
                            'title_someone-else': "What led to the victim's injuries?",
                            description: {
                                myself:
                                    'This helps us to make a decision about your claim. It also helps us to make sure the information we get from other places, such as the police, is accurate. You can select more than one answer.',
                                proxy:
                                    'This helps us to make a decision about their claim. It also helps us to make sure the information we get from other places, such as the police, is accurate. You can select more than one answer.'
                            }
                        },
                        'q-applicant-incident-type-other': {
                            title: {
                                myself: 'What was the crime that caused your injuries?',
                                proxy: 'What was the crime that caused their injuries?'
                            },
                            error: {
                                length: {
                                    myself:
                                        'What led to your injuries must be 100 characters or less',
                                    proxy:
                                        'What led to their injuries must be 100 characters or less'
                                },
                                required: {
                                    myself: 'Tell us what led to your injuries',
                                    proxy: 'Tell us what led to their injuries'
                                }
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-incident-type'],
            additionalProperties: false,
            properties: {
                'q-applicant-incident-type': {
                    title: 'l10nt:q-applicant-incident-type.title{?lng,context,ns}',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'q-applicant-incident-type.description.myself',
                        ['|role.all', 'proxy'],
                        'q-applicant-incident-type.description.proxy'
                    ],
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Physical assault',
                                description: 'This could include assault with a weapon',
                                const: 'PHYS'
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
                                title: 'Arson or fire-raising',
                                const: 'ARSN'
                            },
                            {
                                title: 'Terrorist attack in Great Britain',
                                description:
                                    'There is a different compensation scheme for victims of terrorist attacks that happen abroad',
                                const: 'TERR'
                            },
                            {
                                title: 'Injured by an animal or vehicle',
                                const: 'AORV'
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
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        }
                    }
                },
                'q-applicant-incident-type-other': {
                    type: 'string',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'q-applicant-incident-type-other.title.myself',
                        ['|role.all', 'proxy'],
                        'q-applicant-incident-type-other.title.proxy'
                    ],
                    maxLength: 100,
                    errorMessage: {
                        maxLength: [
                            '|l10nt',
                            ['|role.all', 'myself'],
                            'q-applicant-incident-type-other.error.length.myself',
                            ['|role.all', 'proxy'],
                            'q-applicant-incident-type-other.error.length.proxy'
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        }
                    }
                },
                'incident-type-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "The injuries were caused by a terrorist attack that happened abroad",html: \'<p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/compensation-victim-terrorist-attack" target="_blank">Find out more about compensation for victims of terrorist attacks (opens in new tab)</a>.</p>\'})}}'
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-incident-type-other-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-incident-type-other-is-required': {
                    if: {
                        properties: {
                            'q-applicant-incident-type': {
                                contains: {
                                    const: 'OTHER'
                                }
                            }
                        },
                        required: ['q-applicant-incident-type']
                    },
                    then: {
                        required: ['q-applicant-incident-type-other'],
                        propertyNames: {
                            enum: ['q-applicant-incident-type', 'q-applicant-incident-type-other']
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-incident-type-other': [
                                    '|l10nt',
                                    ['|role.all', 'myself'],
                                    'q-applicant-incident-type-other.error.required.myself',
                                    ['|role.all', 'proxy'],
                                    'q-applicant-incident-type-other.error.required.proxy'
                                ]
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-incident-type':
                        'l10nt:q-applicant-incident-type.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-incident-type': ['AORV']
                },
                {
                    'q-applicant-incident-type': ['OTHER'],
                    'q-applicant-incident-type-other': 'other'
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
                    'q-applicant-incident-type': [],
                    'q-applicant-incident-type-other': 123
                },
                {
                    'q-applicant-incident-type': true
                }
            ],
            options: {
                transformOrder: [
                    'q-applicant-incident-type-other',
                    'q-applicant-incident-type',
                    'incident-type-info'
                ],
                outputOrder: ['q-applicant-incident-type', 'incident-type-info'],
                properties: {
                    'q-applicant-incident-type': {
                        options: {
                            conditionalComponentMap: [
                                {
                                    itemValue: 'OTHER',
                                    componentIds: ['q-applicant-incident-type-other']
                                }
                            ]
                        }
                    },
                    'q-applicant-incident-type-other': {
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
                    target: 'p-applicant-describe-incident'
                }
            ]
        }
    }
};
