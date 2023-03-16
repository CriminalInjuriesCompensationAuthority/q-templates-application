'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-contact-more-details'],
            properties: {
                'q-applicant-contact-more-details': {
                    type: 'string',
                    title: 'Tell us more about how you were in contact',
                    description:
                        'Letting us know how close you were to the person who died helps us understand your eligibility',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'Tell us more about how you were in contact'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-more-details':
                        'Tell us more about how you were in contact.'
                }
            },
            examples: [
                {
                    'q-applicant-contact-more-details': 'Some description'
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
