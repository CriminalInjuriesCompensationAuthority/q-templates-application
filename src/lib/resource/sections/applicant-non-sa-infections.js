'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-non-sa-infections'],
            additionalProperties: false,
            properties: {
                'q-applicant-non-sa-infections': {
                    title: 'Do you have HIV or hepatitis as a result of the crime?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-non-sa-infections':
                        'Select yes if you have HIV or hepatitis as a result of the crime'
                }
            },
            examples: [
                {'q-applicant-non-sa-infections': true},
                {'q-applicant-non-sa-infections': false}
            ],
            invalidExamples: [{'q-applicant-non-sa-infections': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-select-non-sa-infections',
                    cond: [
                        '==',
                        '$.answers.p-applicant-non-sa-infections.q-applicant-non-sa-infections',
                        true
                    ]
                },
                {target: 'p-applicant-pregnancy-loss'}
            ]
        }
    }
};
