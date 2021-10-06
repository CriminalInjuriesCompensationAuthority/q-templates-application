'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-dentist-visited'],
            additionalProperties: false,
            properties: {
                'q-applicant-dentist-visited': {
                    title: 'Have you seen a dentist about your injuries?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-dentist-visited':
                        'Select yes if you have seen a dentist about your injuries'
                }
            },
            examples: [
                {'q-applicant-dentist-visited': true},
                {'q-applicant-dentist-visited': false}
            ],
            invalidExamples: [{'q-applicant-dentist-visited': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-dentist-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-dentist-visited.q-applicant-dentist-visited',
                        true
                    ]
                },
                {
                    target: 'p-applicant-medical-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                        false
                    ]
                },
                {target: 'p--context-money'}
            ]
        }
    }
};
