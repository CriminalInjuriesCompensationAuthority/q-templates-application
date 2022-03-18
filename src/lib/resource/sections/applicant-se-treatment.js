'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-treatment'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-treatment': {
                    type: 'boolean',
                    title:
                        'Have you paid for any costs relating to treatments from the NHS or other state health service because of the injuries?',
                    description:
                        'For example, paying for costs towards certain treatments. Or paying towards other related costs such as prescriptions, dental fees, opticians and travel.',
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
                            theme: 'special-expenses'
                        },
                        summary: {
                            title: 'NHS or other state health service treatment'
                        }
                    }
                },
                'help-se-treatment': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with the costs of NHS and state health service treatments",html: \'<p class="govuk-body">Not all treatments provided by the NHS or other state health services are free.</p><p class="govuk-body">You can find out more about the <a href="https://www.nhs.uk/nhs-services/help-with-health-costs/when-you-need-to-pay-towards-nhs-care/" target="_blank">cost of NHS treatments (opens in new tab)</a> and <a href="https://www.nhsinform.scot/care-support-and-rights/health-rights/access/help-with-health-costs" target="_blank">cost of NHS Scotland treatments (opens in new tab)</a>.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-treatment':
                        'Select yes if you paid for any costs relating to treatments from the NHS or other state health service because of the injuries'
                }
            },
            examples: [
                {
                    'q-applicant-se-treatment': true
                },
                {
                    'q-applicant-se-treatment': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-treatment': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-home-care'
                }
            ]
        }
    }
};
