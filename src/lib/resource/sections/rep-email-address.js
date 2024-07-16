'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-rep-email-address': {
                    type: 'string',
                    title: 'Enter your email address (optional)',
                    description:
                        'We may use this to contact you if we need to clarify something in this application.',
                    maxLength: 50,
                    format: 'email',
                    errorMessage: {
                        maxLength: 'Email address must be 50 characters or less',
                        format:
                            'Enter an email address in the correct format, like name@example.com'
                    },
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Email address'
                        }
                    }
                }
            },
            examples: [
                {
                    'q-rep-email-address': 'foo@hhjhjk34h5jkh24kj5h2k45.com'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-rep-email-address': 12345
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-REP-EMAIL-ADDRESS': [
                {
                    target: 'p--context-relationship-to-deceased',
                    cond: [
                        'and',
                        ['!=', '$.answers.p-rep-type.q-rep-type', 'CMCO'],
                        ['!=', '$.answers.p-rep-type.q-rep-type', 'SOLS'],
                        ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                    ]
                },
                {
                    target: 'p-rep-claims-management-reg',
                    cond: ['==', '$.answers.p-rep-type.q-rep-type', 'CMCO']
                },
                {
                    target: 'p-rep-reference-number',
                    cond: ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS']
                },
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
