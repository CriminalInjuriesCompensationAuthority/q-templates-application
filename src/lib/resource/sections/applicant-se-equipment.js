'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-equipment'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-equipment': {
                    type: 'boolean',
                    title: 'Have you paid for any special equipment because of the injuries?',
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
                'help-se-equipment': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with special equipment",html: \'<p class="govuk-body">For example, special equipment may include but is not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>walking aids</li><li>wheelchairs</li><li>kitchen implements</li><li>specially-adapted vehicles</li></ul>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-equipment':
                        'Select yes if you paid for any special equipment because of the injuries'
                }
            },
            examples: [
                {
                    'q-applicant-se-equipment': true
                },
                {
                    'q-applicant-se-equipment': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-equipment': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-aids'
                }
            ]
        }
    }
};
