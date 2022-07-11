'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-rep-claims-management-reg'],
            additionalProperties: false,
            properties: {
                'q-rep-claims-management-reg': {
                    title: 'What is your company registration number?',
                    type: 'string',
                    description: `This is a unique number given to businesses in the United Kingdom. It may start with the letters 'SC'.`,
                    maxLength: 30,
                    errorMessage: {
                        maxLength: 'Registration number must be 30 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        }
                    },
                    summary: {
                        title: 'Registration number'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-claims-management-reg': 'Enter your company registration number'
                }
            },
            examples: [
                {
                    'q-rep-claims-management-reg': 'abc123'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-claims-management-reg': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-reference-number'
                }
            ]
        }
    }
};
