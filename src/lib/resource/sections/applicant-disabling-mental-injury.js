'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title:
                        'Do you have a disabling mental injury as a result of witnessing the crime?',
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title:
                                'Do you have a disabling mental injury as a result of witnessing the crime?'
                        }
                    },
                    required: ['q-applicant-disabling-mental-injury'],
                    propertyNames: {
                        enum: ['q-applicant-disabling-mental-injury']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-disabling-mental-injury': {
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
                                'q-applicant-disabling-mental-injury-info': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What does disabling mental injury mean?",html: \'<p class="govuk-body">A disabling mental injury is something that significantly affects your ability to carry out day-to-day activities. For example, it may affect your performance at work or school, your social or sexual relationships. Mental injuries must be diagnosed by a psychiatrist or clinical psychologist before compensation can be given</p></p>\'}) }}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-disabling-mental-injury':
                                'Select yes if you have a disabling mental injury as a result of witnessing the crime'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-disabling-mental-injury': 'true'
                },
                {
                    'q-applicant-disabling-mental-injury': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-disabling-mental-injury': 'foo'
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
