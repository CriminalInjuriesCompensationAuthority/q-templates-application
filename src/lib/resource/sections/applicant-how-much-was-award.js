'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-how-much-was-award'],
            properties: {
                'q-how-much-was-award': {
                    title: 'How much compensation were you awarded?',
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Award amount must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-how-much-was-award': 'Enter an amount'
                }
            },
            examples: [
                {
                    'q-how-much-was-award': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-how-much-was-award': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-additional-info'
                }
            ]
        }
    }
};
