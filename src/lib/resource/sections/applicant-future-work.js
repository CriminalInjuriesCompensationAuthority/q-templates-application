'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-future-work'],
            additionalProperties: false,
            properties: {
                'q-applicant-future-work': {
                    type: 'string',
                    title:
                        "Has the victim's ability to work in future been affected by their injuries?",
                    oneOf: [
                        {
                            title: 'Yes',
                            const: 'yes'
                        },
                        {
                            title: 'No',
                            const: 'no'
                        },
                        {
                            title: 'I do not know',
                            const: 'dont-know'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'impact'
                        },
                        summary: {
                            title: 'Is their ability to work in future affected?'
                        }
                    }
                },
                'help-future-work': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the ability to work in future",html: \'<p class="govuk-body">They must have no capacity or very limited capacity to work because of the injury. This must be for longer than 28 weeks.</p><p class="govuk-body">We cannot make a payment for the first 28 weeks of any loss of earnings suffered.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-future-work':
                        "Select yes if the victim's ability to work in future has been affected by their injuries"
                }
            },
            examples: [
                {
                    'q-applicant-future-work': 'yes'
                },
                {
                    'q-applicant-future-work': 'no'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-future-work': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-affect-on-daily-life-dmi'
                }
            ]
        }
    }
};
