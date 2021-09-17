'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-home-care'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-home-care': {
                    type: 'boolean',
                    title: 'Have they required care or supervision because of their injuries?',
                    description:
                        'This can be care or supervision provided by a family member or other provider.',
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
                'help-understanding-care': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means they cannot do daily tasks themselves. For example, care for the victim may include but is not limited to.</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>helping them to eat</li><li>helping them go to the bathroom</li><li>taking medication</li><li>administering other medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means they pose a substantial danger to themselves or others without supervision.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-home-care':
                        'Select yes if they required care or supervision because of their injuries'
                }
            },
            examples: [
                {
                    'q-applicant-se-home-care': true
                },
                {
                    'q-applicant-se-home-care': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-home-care': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-home-changes'
                }
            ]
        }
    }
};
