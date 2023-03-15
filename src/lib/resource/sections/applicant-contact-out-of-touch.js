'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-contact-out-of-touch'],
            properties: {
                'q-applicant-contact-out-of-touch': {
                    type: 'string',
                    title: 'Tell us why you were out of touch with each other',
                    description: 'This helps us to understand your eligibility',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'Tell us why you were out of touch with each other'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-out-of-touch':
                        'Tell us why you were out of touch with each other, Description must be 2000 characters or less'
                }
            },
            examples: [
                {
                    'q-applicant-contact-out-of-touch': 'Some description'
                }
            ],
            invalidExamples: [{}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-financial-help'
                }
            ]
        }
    }
};
