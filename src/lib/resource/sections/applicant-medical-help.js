'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-medical-help'],
            additionalProperties: false,
            properties: {
                'q-applicant-medical-help': {
                    title: 'Did you get other medical help for your injuries?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'treatment'
                        },
                        summary: {
                            title: 'Did you get other medical help?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-medical-help':
                        'Select yes if you got other medical help for your injuries'
                }
            },
            examples: [{'q-applicant-medical-help': true}, {'q-applicant-medical-help': false}],
            invalidExamples: [{'q-applicant-medical-help': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-treatment-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-medical-help.q-applicant-medical-help',
                        true
                    ]
                },
                {target: 'p--context-money'}
            ]
        }
    }
};
