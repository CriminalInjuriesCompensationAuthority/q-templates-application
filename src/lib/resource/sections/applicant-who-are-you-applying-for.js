'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-who-are-you-applying-for'],
            additionalProperties: false,
            properties: {
                'q-applicant-who-are-you-applying-for': {
                    title: 'Who are you applying for?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Myself',
                            const: 'myself'
                        },
                        {
                            title: 'Someone else',
                            const: 'someone-else'
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
                    'q-applicant-who-are-you-applying-for':
                        'Select myself if you are applying for yourself'
                }
            },
            examples: [
                {
                    'q-applicant-who-are-you-applying-for': 'myself'
                },
                {
                    'q-applicant-who-are-you-applying-for': 'someone-else'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-who-are-you-applying-for': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-are-you-18-or-over'
                }
            ]
        }
    }
};
