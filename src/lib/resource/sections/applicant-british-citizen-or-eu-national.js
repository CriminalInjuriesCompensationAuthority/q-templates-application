'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-british-citizen-or-eu-national'],
            additionalProperties: false,
            properties: {
                'q-applicant-british-citizen-or-eu-national': {
                    title: 'Are you a British citizen or EU national?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-british-citizen-or-eu-national':
                        'Select yes if you are a British citizen or EU national'
                }
            },
            examples: [
                {'q-applicant-british-citizen-or-eu-national': true},
                {'q-applicant-british-citizen-or-eu-national': false}
            ],
            invalidExamples: [{'q-applicant-british-citizen-or-eu-national': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition',
                    cond: [
                        '==',
                        '$.answers.p-applicant-british-citizen-or-eu-national.q-applicant-british-citizen-or-eu-national',
                        false
                    ]
                },
                {target: 'p--context-applicant-details'}
            ]
        }
    }
};
