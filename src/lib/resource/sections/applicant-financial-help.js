'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title:
                        'Where you reliant on the person who died for regular physical or financial help?',
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title:
                                'Where you reliant on the person who died for regular physical or financial help?'
                        }
                    },
                    required: ['q-applicant-financial-help'],
                    propertyNames: {
                        enum: ['q-applicant-financial-help']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-financial-help': {
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
                                'q-applicant-financial-help-info': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What does physical or financial help mean?",html: \'<p class="govuk-body">Physical help includes regular help with care needs such as:</p></p><ul class="govuk-list govuk-list--bullet"><li>personal hygiene</li><li>continence management</li><li>food preparation and eating</li><li>medication and simple treatments</li><li>keeping you safe from harm</li></ul>\'}) }}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-financial-help':
                                'Select yes if you were reliant on the person who died for regular physical or financial help'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-financial-help': 'true'
                },
                {
                    'q-applicant-financial-help': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-financial-help': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-other-claimants'
                }
            ]
        }
    }
};
