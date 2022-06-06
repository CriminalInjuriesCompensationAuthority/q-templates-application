'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-rep-telephone-number': {
                    type: 'string',
                    title: 'Enter your telephone number',
                    description:
                        'We may use this to contact you if we need to clarify something on your application (optional).',
                    maxLength: 20,
                    pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                    errorMessage: {
                        maxLength: 'Telephone number must be 20 characters or less',
                        pattern:
                            'Enter a Telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                    },
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Telephone number'
                        }
                    }
                }
            },
            examples: [
                {
                    'q-rep-telephone-number': '01632 960 001'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-rep-telephone-number': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-reference-number',
                    cond: ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS']
                },
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
