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
                            description: 'I am the person claiming compensation.',
                            const: 'myself'
                        },
                        {
                            title: 'Someone else',
                            description:
                                'I am a representative filling out the form for someone else.',
                            const: 'someone-else'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-who-are-you-applying-for': 'Select who you are applying for'
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
            ],
            options: {
                previousPageLink: {
                    visible: false
                },
                signInLink: {
                    visible: false
                }
            }
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
