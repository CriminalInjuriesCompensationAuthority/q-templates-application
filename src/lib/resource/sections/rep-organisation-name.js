'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-rep-organisation-name'],
            additionalProperties: false,
            properties: {
                'q-rep-organisation-name': {
                    type: 'string',
                    title: 'Enter the name of the organisation you work for',
                    maxLength: 60,
                    errorMessage: {
                        maxLength: 'Name of organisation must be 60 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-organisation-name': 'Enter the name of the organisation you work for'
                }
            },
            examples: [
                {
                    'q-rep-organisation-name': 'My organisation'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-rep-organisation-name': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
