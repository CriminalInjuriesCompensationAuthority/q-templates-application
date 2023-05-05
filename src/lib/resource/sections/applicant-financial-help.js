'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-financial-help'],
            additionalProperties: false,
            properties: {
                'q-applicant-financial-help': {
                    title: 'Were you reliant on the person who died for regular financial help?',
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
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title:
                                'Were you reliant on the person who died for regular financial help?'
                        }
                    }
                },
                'financial-help-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What does financial help mean?",html: \'<p class="govuk-body">Financial help includes regular help with the cost of household bills, or day to day expenses and living costs.</p>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-financial-help':
                        'Select yes if you were reliant on the person who died for regular financial help'
                }
            },
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
                    target: 'p-applicant-physical-help'
                }
            ]
        }
    }
};
