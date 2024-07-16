'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'money-context': {
                    title: 'Your money',
                    description:
                        '<p class="govuk-body">We\'re going to ask if you\'ve lost money as a result of the crime.</p><p class="govuk-body">This will help us decide if you\'ll get a payment for expenses or loss of earnings.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {
        on: {
            'ANSWER__P-CONTEXT-MONEY': [
                {
                    target: 'p-applicant-unable-to-work-duration'
                }
            ]
        }
    }
};
