'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-rep-has-reference-number',
                    'q-rep-reference-number',
                    'help-reference-number'
                ]
            },
            properties: {
                'q-rep-has-reference-number': {
                    title: 'Do you have your own reference number for this application?',
                    type: 'boolean',
                    description:
                        'This is a specific number you have given this application for your own records. This was not provided by us.',
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
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Do you have your own reference number?'
                        }
                    }
                },
                'q-rep-reference-number': {
                    type: 'string',
                    title: 'Your reference number:',
                    maxLength: 30,
                    errorMessage: {
                        maxLength: 'Reference number must be 30 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        }
                    }
                },
                'help-reference-number': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What do we use your reference number for?",html: \'<p class="govuk-body">As this is your reference number, we’ll use this in our correspondence with you to identify what application it relates to.</p>\'})}}'
                }
            },
            required: ['q-rep-has-reference-number'],
            allOf: [
                {
                    $ref: '#/definitions/if-yes-then-q-rep-reference-number-is-required'
                }
            ],
            definitions: {
                'if-yes-then-q-rep-reference-number-is-required': {
                    if: {
                        properties: {
                            'q-rep-has-reference-number': {
                                const: true
                            }
                        },
                        required: ['q-rep-has-reference-number']
                    },
                    then: {
                        required: ['q-rep-reference-number'],
                        propertyNames: {
                            enum: ['q-rep-has-reference-number', 'q-rep-reference-number']
                        },
                        errorMessage: {
                            required: {
                                'q-rep-reference-number': ' Enter your own reference number'
                            }
                        }
                    },
                    else: {
                        required: ['q-rep-has-reference-number']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-has-reference-number':
                        'Select yes if you have your own reference number for this application'
                }
            },
            examples: [
                {
                    'q-rep-has-reference-number': true,
                    'q-rep-reference-number': '11//123456'
                },
                {
                    'q-rep-has-reference-number': false
                }
            ],
            invalidExamples: [
                {
                    'q-rep-has-reference-number': false,
                    'q-enter-your-previous-reference-number': '11//123456'
                },
                {
                    'q-rep-has-reference-number': true,
                    'q-enter-your-previous-reference-number': ''
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
