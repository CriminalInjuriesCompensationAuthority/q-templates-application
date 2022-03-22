'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-affect-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-affect-duration': {
                    type: 'boolean',
                    title: 'Has this lasted for over 28 weeks?',
                    description:
                        'This can be a single period of time or cover several periods of time since the crime.',
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
                            theme: 'impact'
                        }
                    }
                },
                'help-affect-duration': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the timeframe of 28 weeks",html: \'<p class="govuk-body">28 weeks is more than six months.</p><p class="govuk-body">We cannot make a payment for the first 28 weeks of any loss of earnings suffered.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-affect-duration':
                        'Select yes if you had to buy or pay for the repair of physical aids'
                }
            },
            examples: [
                {
                    'q-applicant-affect-duration': true
                },
                {
                    'q-applicant-affect-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-affect-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-affect-future-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-affect-duration.q-applicant-affect-duration',
                        false
                    ]
                },
                {
                    target: 'p-applicant-future-work'
                }
            ]
        }
    }
};
