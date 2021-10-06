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
                        'This is the reference number the police gave the crime when it was reported.',
                    maxLength: 30,
                    errorMessage: {
                        maxLength: 'Crime reference number must be 30 characters or less'
                    }
                },
                'i-dont-know-the-crime-reference': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with your crime reference number",html: \'<p class="govuk-body">If you do not have your crime reference number, you can call 101 to speak to your local police station.</p><p class="govuk-body">If you have more than one crime reference number, you can provide additional details later in this claim.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q--whats-the-crime-reference-number': 'Enter the crime reference number'
                }
            },
            examples: [{'q--whats-the-crime-reference-number': 'abc123'}],
            invalidExamples: [{'q--whats-the-crime-reference-number': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-describe-incident'}]}}
};
