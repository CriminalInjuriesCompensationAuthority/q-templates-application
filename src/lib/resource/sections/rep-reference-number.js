'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Do you have your own reference number for this application?',
                    required: ['q-rep-has-reference-number'],
                    propertyNames: {
                        enum: [
                            'q-rep-has-reference-number',
                            'q-rep-reference-number',
                            'help-reference-number'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-rep-has-reference-number': {
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
                                }
                            }
                        },
                        {
                            properties: {
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
                                }
                            }
                        },
                        {
                            properties: {
                                'help-reference-number': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What do we use your reference number for?",html: \'<p class="govuk-body">As this is your reference number, we’ll use this in our correspondence with you to identify what application it relates to.</p>\'})}}'
                                }
                            }
                        }
                    ],
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
                        errorMessage: {
                            required: {
                                'q-rep-reference-number': 'Enter your own reference number'
                            }
                        }
                    },
                    errorMessage: {
                        required: {
                            'q-rep-has-reference-number':
                                'Select yes if you have your own reference number for this application',
                            'q-rep-reference-number': 'Enter your own reference number'
                        }
                    }
                }
            ],
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
                    target: 'p--context-relationship-to-deceased',
                    cond: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                },
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
