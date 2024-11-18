'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--whats-the-crime-reference-number'],
            additionalProperties: false,
            properties: {
                'q--whats-the-crime-reference-number': {
                    title: "What's the crime reference number?",
                    type: 'string',
                    description:
                        'This is the number the police gave the crime when it was reported. We need this to get information from the police about the crime.',
                    maxLength: 30,
                    errorMessage: {
                        maxLength: 'Crime reference number must be 30 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        }
                    }
                },
                'i-dont-know-the-crime-reference': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with the crime reference number",html: \'<p class="govuk-body">If there is more than one crime reference number, you can add these numbers to the ‘additional information’ section at the end of the application.</p><p class="govuk-body">If you do not have the crime reference number call the police on 101. They can help you with this.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q--whats-the-crime-reference-number': 'Enter the crime reference number'
                }
            },
            examples: [
                {
                    'q--whats-the-crime-reference-number': 'abc123'
                }
            ],
            invalidExamples: [
                {
                    'q--whats-the-crime-reference-number': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-offender',
                    cond: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                },
                {
                    target: 'p-applicant-incident-type'
                }
            ]
        }
    }
};
