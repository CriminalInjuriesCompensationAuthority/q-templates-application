'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-contact-with-deceased'],
            additionalProperties: false,
            properties: {
                'q-applicant-contact-with-deceased': {
                    title: 'When the person died, how often were you in contact?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'We were in regular contact',
                            const: 'regular'
                        },
                        {
                            title: 'We were in contact occasionally',
                            const: 'occasionally'
                        },
                        {
                            title: 'We were not in contact',
                            const: 'never'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'When the person died, how often were you in contact?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-with-deceased': 'Select how often you were in contact'
                }
            },
            examples: [
                {
                    'q-applicant-contact-with-deceased': 'regular'
                },
                {
                    'q-applicant-contact-with-deceased': 'occasionally'
                },
                {
                    'q-applicant-contact-with-deceased': 'never'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-contact-with-deceased': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-contact-with-deceased.q-applicant-contact-with-deceased',
                        'regular'
                    ]
                },
                {
                    target: 'p-applicant-contact-more-details',
                    cond: [
                        '==',
                        '$.answers.p-applicant-contact-with-deceased.q-applicant-contact-with-deceased',
                        'occasionally'
                    ]
                },
                {
                    target: 'p-applicant-contact-out-of-touch',
                    cond: [
                        '==',
                        '$.answers.p-applicant-contact-with-deceased.q-applicant-contact-with-deceased',
                        'never'
                    ]
                }
            ]
        }
    }
};
