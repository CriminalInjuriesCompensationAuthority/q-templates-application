'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-has-crime-reference-number'],
            additionalProperties: false,
            properties: {
                'q-applicant-has-crime-reference-number': {
                    type: 'boolean',
                    title: 'Do you have a crime reference number?',
                    description:
                        'This is the number the police gave the crime when it was reported. We need this to get information about the crime from them. You will need to add this later in the application.',
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
                            theme: 'about-application'
                        }
                    }
                },
                'crn-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I do not know the crime reference number",html: \'<p class="govuk-body">If you do not have your crime reference number, call 101 to speak to your local police station. They can help you get this.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-has-crime-reference-number':
                        'Select yes if you know the crime reference number'
                }
            },
            examples: [
                {
                    'q-applicant-has-crime-reference-number': true
                },
                {
                    'q-applicant-has-crime-reference-number': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-has-crime-reference-number': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-who-are-you-applying-for'
                }
            ]
        }
    }
};
