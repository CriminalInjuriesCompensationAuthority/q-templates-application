'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--new-or-existing-application'],
            additionalProperties: false,
            properties: {
                'q--new-or-existing-application': {
                    title: 'What would you like to do?111',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Start a new application',
                            const: 'new'
                        },
                        {
                            title: 'Update an existing application',
                            const: 'existing'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q--new-or-existing-application': 'Select what you would like to do'
                }
            },
            examples: [
                {
                    'q--new-or-existing-application': 'new'
                },
                {
                    'q--new-or-existing-application': 'existing'
                }
            ],
            invalidExamples: [
                {
                    'q--new-or-existing-application': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--contact-cica',
                    cond: [
                        '==',
                        '$.answers.p--new-or-existing-application.q--new-or-existing-application',
                        'existing'
                    ]
                },
                {
                    target: 'p-applicant-fatal-claim'
                }
            ]
        }
    }
};
