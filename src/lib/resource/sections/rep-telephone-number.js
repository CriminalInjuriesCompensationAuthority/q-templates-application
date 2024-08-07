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
                    title: 'Enter your telephone number (optional)',
                    description:
                        'We may use this to contact you if we need to clarify something in this application.',
                    maxLength: 20,
                    minLength: 8,
                    pattern: '^[^a-zA-Z]+$',
                    format: 'global-mobile',
                    errorMessage: {
                        maxLength: 'Enter a mobile phone number between 8 and 20 digits long',
                        minLength: 'Enter a mobile phone number between 8 and 20 digits long',
                        pattern: 'Telephone number must not include alphabetic characters',
                        format: 'Enter a telephone number, like 07700 900 982'
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
                    target: '#t_applicant_relationship-to-deceased',
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
