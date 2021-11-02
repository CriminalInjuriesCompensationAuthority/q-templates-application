'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-email-address': {
                    type: 'string',
                    title: 'Enter your email address',
                    description:
                        'We may use this to contact you if we need to clarify something on your application form (optional).',
                    maxLength: 50,
                    format: 'email',
                    errorMessage: {
                        maxLength: 'Email address must be 50 characters or less',
                        format: 'Enter your email address, for example john.smith@email.com'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Email address'
                        }
                    }
                }
            },
            examples: [
                {'q-applicant-enter-your-email-address': 'foo@hhjhjk34h5jkh24kj5h2k45.com'},
                {}
            ],
            invalidExamples: [{'q-applicant-enter-your-email-address': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p--before-you-continue'}]}}
};
