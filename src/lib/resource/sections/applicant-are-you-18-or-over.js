'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-18-or-over'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-18-or-over': {
                    title: 'Are you 18 or over?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: "about-application",
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-are-you-18-or-over': 'Select yes if you are 18 or over'}
            },
            examples: [
                {'q-applicant-are-you-18-or-over': true},
                {'q-applicant-are-you-18-or-over': false}
            ],
            invalidExamples: [{'q-applicant-are-you-18-or-over': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                        false
                    ]
                },
                {
                    target: 'p-applicant-british-citizen-or-eu-national',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                        true
                    ]
                }
            ]
        }
    }
};
