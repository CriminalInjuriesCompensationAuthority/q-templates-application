'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-telephone-number': {
                    type: 'string',
                    title: 'Enter your telephone number',
                    description:
                        'We may use this to contact you if we need to clarify something on your application form (optional).',
                    maxLength: 20,
                    pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                    errorMessage: {
                        maxLength: 'Telephone number must be 20 characters or less',
                        pattern:
                            'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Telephone number'
                        }
                    }
                }
            },
            examples: [
                {
                    'q-applicant-enter-your-telephone-number': '01632 960 001'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-applicant-enter-your-telephone-number': 12345
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
