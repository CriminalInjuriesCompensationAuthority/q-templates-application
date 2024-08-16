'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-other-claimants-details'],
            properties: {
                'q-other-claimants-details': {
                    type: 'string',
                    title: 'Tell us more about who else might apply',
                    description: 'Include their full name and relationship to the person who died.',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'Tell us more about who else might apply'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-other-claimants-details': 'Tell us more about who else might apply'
                }
            },
            examples: [
                {
                    'q-other-claimants-details': 'Some description'
                }
            ],
            invalidExamples: [{}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
