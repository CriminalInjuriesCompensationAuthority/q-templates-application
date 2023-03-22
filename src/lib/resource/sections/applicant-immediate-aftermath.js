'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title:
                        'Were you there when the crime happened, or involved in the immediate aftermath?',
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'About the crime'
                        }
                    },
                    required: ['q-applicant-immediate-aftermath'],
                    propertyNames: {
                        enum: ['q-applicant-immediate-aftermath']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-immediate-aftermath': {
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
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-immediate-aftermath-info': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What does immediate aftermath mean?",html: \'<p class="govuk-body">You were usual involved in the immediate aftermath if you arrived at the scene of the crime straight after it happened.</p></p>\'}) }}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-immediate-aftermath':
                                'Select yes if you were there when the crime happened, or involved in the immediate aftermath'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-immediate-aftermath': 'true'
                },
                {
                    'q-applicant-immediate-aftermath': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-immediate-aftermath': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-foo'
                }
            ]
        }
    }
};
