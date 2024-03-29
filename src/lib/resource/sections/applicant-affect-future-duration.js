'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-affect-future-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-affect-future-duration': {
                    type: 'string',
                    title: 'Are their injuries likely to affect them for more than 28 weeks?',
                    description:
                        'This can be a single period of time or cover several periods of time since the crime.',
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
                        }
                    }
                },
                'help-affect-future-duration': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the timeframe of 28 weeks",html: \'<p class="govuk-body">28 weeks is more than six months.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-affect-future-duration':
                        'Select yes if you had to buy or pay for the repair of physical aids'
                }
            },
            examples: [
                {
                    'q-applicant-affect-future-duration': 'yes'
                },
                {
                    'q-applicant-affect-future-duration': 'no'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-affect-future-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-future-work'
                }
            ]
        }
    }
};
