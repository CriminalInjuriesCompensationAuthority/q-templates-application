'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            required: ['q-applicant-applied-for-other-compensation-briefly-explain-why-not'],
            properties: {
                'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                    title:
                        'Briefly explain why you have not applied for or received any other form of compensation',
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {maxLength: 'Explanation must be 500 characters or less'}
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not':
                        'Enter a reason'
                }
            },
            examples: [
                {'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 'blah'}
            ],
            invalidExamples: [
                {'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 12345}
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p--context-additional-info'}]}}
};
