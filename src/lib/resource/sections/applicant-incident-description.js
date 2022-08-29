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
                    title: 'Briefly describe the crime',
                    description:
                        'You can add details that may not be included in the crime report.',
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
                    target: 'p--context-offender'
                }
            ]
        }
    }
};
