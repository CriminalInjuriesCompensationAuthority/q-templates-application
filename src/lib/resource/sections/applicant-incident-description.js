'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-incident-description'],
            properties: {
                'q-applicant-incident-description': {
                    type: 'string',
                    title: 'Tell us about the crime',
                    description:
                        'You might want to tell us information such as what happened and whether the crime happened more than once.',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Brief description of the crime'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-incident-description': 'Enter a brief description of the crime'
                }
            },
            examples: [
                {
                    'q-applicant-incident-description': 'Some description'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-incident-description': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: '#t_offender_about-the-offender'
                }
            ]
        }
    }
};
