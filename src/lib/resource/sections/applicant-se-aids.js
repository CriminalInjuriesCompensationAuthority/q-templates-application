'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-aids'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-aids': {
                    type: 'boolean',
                    title: 'Have you paid to replace or repair physical aids because of the crime?',
                    description:
                        'These may have been damaged or you had to replace them because of the crime.',
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
                            title: 'Physical aids'
                        }
                    }
                },
                'help-se-aids': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with physical aids",html: \'<p class="govuk-body">This applies to the cost of replacing physical aids used by the victim before they were injured. These may include but are not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>walking stick</li><li>spectacles</li><li>dentures</li></ul>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-aids':
                        'Select yes if you paid to replace or repair physical aids because of the crime'
                }
            },
            examples: [
                {
                    'q-applicant-se-aids': true
                },
                {
                    'q-applicant-se-aids': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-aids': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-other'
                }
            ]
        }
    }
};
