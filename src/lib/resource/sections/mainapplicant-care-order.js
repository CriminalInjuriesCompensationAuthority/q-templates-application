'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-care-order'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-care-order',
                    resources: {
                        'mainapplicant-care-order': {
                            title: {
                                nonDeceased:
                                    'Is there a care, supervision or other local authority order in place for the victim?',
                                deceased:
                                    'Is there a care, supervision or other local authority order in place for the claimant?'
                            },
                            error: {
                                nonDeceased:
                                    'Select yes if there is a care, supervision or other local authority order in place for the victim',
                                deceased:
                                    'Select yes if there is a care, supervision or other local authority order in place for the claimant'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-mainapplicant-care-order', 'q-mainapplicant-care-order-authority']
            },
            required: ['q-mainapplicant-care-order'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-care-order': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'nonDeceased'],
                        'mainapplicant-care-order.title.nonDeceased',
                        ['|role.all', 'deceased'],
                        'mainapplicant-care-order.title.deceased'
                    ],
                    description: 'This includes an interim care order.',
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
                            theme: 'main-applicant-details'
                        }
                    }
                },
                'q-mainapplicant-care-order-authority': {
                    type: 'string',
                    title: 'Which local authority is this with?',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Local authority must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            allOf: [
                {
                    $ref:
                        '#/definitions/if-other-then-q-mainapplicant-care-order-authority-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-mainapplicant-care-order-authority-is-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-care-order': {
                                const: true
                            }
                        },
                        required: ['q-mainapplicant-care-order']
                    },
                    then: {
                        required: ['q-mainapplicant-care-order-authority'],
                        propertyNames: {
                            enum: [
                                'q-mainapplicant-care-order',
                                'q-mainapplicant-care-order-authority'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-care-order-authority':
                                    'Enter the local authority this is with'
                            }
                        }
                    },
                    else: {
                        required: ['q-mainapplicant-care-order']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-care-order': [
                        '|l10nt',
                        ['|role.all', 'nonDeceased'],
                        'mainapplicant-care-order.error.nonDeceased',
                        ['|role.all', 'deceased'],
                        'mainapplicant-care-order.error.deceased'
                    ]
                }
            },
            examples: [
                {
                    'q-mainapplicant-care-order': true,
                    'q-mainapplicant-care-order-authority': 'local authority'
                },
                {
                    'q-mainapplicant-care-order': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-care-order': 'foo'
                },
                {
                    'q-mainapplicant-care-order': true,
                    'q-mainapplicant-care-order-authority': 12345
                },
                {
                    'q-mainapplicant-care-order-authority': 'local authority'
                },
                {
                    'q-mainapplicant-care-order': true,
                    'q-mainapplicant-care-order-authority': null
                }
            ],
            options: {
                transformOrder: [
                    'q-mainapplicant-care-order-authority',
                    'q-mainapplicant-care-order'
                ],
                outputOrder: ['q-mainapplicant-care-order'],
                properties: {
                    'q-mainapplicant-care-order': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-radios'
                            },
                            conditionalComponentMap: [
                                {
                                    itemValue: true,
                                    componentIds: ['q-mainapplicant-care-order-authority']
                                }
                            ]
                        }
                    },
                    'q-mainapplicant-care-order-authority': {
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
                    target: '#task-list'
                }
            ]
        }
    }
};
