'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-care-order-authority'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-care-order-authority': {
                    type: 'string',
                    title: 'What local authority is this with?'
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-care-order-authority': 'Enter the local authority this is with'
                }
            },
            examples: [
                {
                    'q-mainapplicant-care-order-authority': 'local authority'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-care-order-authority': 123
                },
                {
                    'q-mainapplicant-care-order-authority': true
                },
                {
                    'q-mainapplicant-care-order-authority': ['local authority']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
