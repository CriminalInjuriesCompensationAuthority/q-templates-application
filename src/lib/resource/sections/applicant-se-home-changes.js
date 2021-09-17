'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-home-changes'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-home-changes': {
                    type: 'boolean',
                    title: 'Have you paid for any changes to the home because of the injuries?',
                    description:
                        'This may be costs for changes to both the inside and outside of the home to improve independence or ability to get around.',
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
                },
                'help-se-home-changes': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with changes to the home",html: "<p class=\'govuk-body\'>Changes to the home may include but are not limited to:</p><ul class=\'govuk-list govuk-list--bullet\'><li>building a ramp</li><li>installing a stair lift</li></ul><p class=\'govuk-body\'>This payment does not apply to the cost of buying a new home because of the injuries.</p>"})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-home-changes':
                        'Select yes if you paid for any changes to the home because of the injuries'
                }
            },
            examples: [
                {
                    'q-applicant-se-home-changes': true
                },
                {
                    'q-applicant-se-home-changes': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-home-changes': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-equipment'
                }
            ]
        }
    }
};
