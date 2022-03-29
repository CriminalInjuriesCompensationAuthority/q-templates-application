'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-relationship'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-relationship': {
                    type: 'string',
                    title: 'What is your relationship to the child?',
                    description: "For example, you're their mother, father, grandparent etc.",
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-relationship': 'Enter your relationship with the child'
                }
            },
            examples: [
                {
                    'q-mainapplicant-relationship': 'mother'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-relationship': true
                },
                {
                    'q-mainapplicant-relationship': 123
                },
                {
                    'q-mainapplicant-relationship': ['father']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-shared-responsibility'
                }
            ]
        }
    }
};
