'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-mainapplicant-enter-your-email-address': {
                    type: 'string',
                    title: 'Enter your email address',
                    description:
                        'We may use this to contact you if we need to clarify something in your application (optional).',
                    maxLength: 50,
                    format: 'email',
                    errorMessage: {
                        maxLength: 'Email address must be 50 characters or less',
                        format: 'Enter your email address, for example john.smith@email.com'
                    },
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            examples: [
                {
                    'q-mainapplicant-enter-your-email-address': 'foo@domain.com'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-enter-your-email-address': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-relationship'
                }
            ]
        }
    }
};
