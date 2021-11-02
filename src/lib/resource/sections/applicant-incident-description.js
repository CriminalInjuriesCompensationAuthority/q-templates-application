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
                    title: 'Briefly describe the crime in your own words',
                    description:
                        'You can add details that may not be included in the crime report.',
                    maxLength: 1000,
                    errorMessage: {maxLength: 'Description must be 1000 characters or less'},
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
                    'q-applicant-incident-description': 'Describe the crime in your own words'
                }
            },
            examples: [{'q-applicant-incident-description': 'Some description'}],
            invalidExamples: [{'q-applicant-incident-description': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p--context-offender'}]}}
};
