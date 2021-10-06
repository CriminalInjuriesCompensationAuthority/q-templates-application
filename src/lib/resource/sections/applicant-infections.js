'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-infections'],
            additionalProperties: false,
            properties: {
                'q-applicant-infections': {
                    title: 'Do you have HIV, hepatitis or an STI as a result of the crime?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-infections':
                        'Select yes if you have HIV, hepatitis or an STI as a result of the crime'
                }
            },
            examples: [{'q-applicant-infections': true}, {'q-applicant-infections': false}],
            invalidExamples: [{'q-applicant-infections': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-select-infections',
                    cond: ['==', '$.answers.p-applicant-infections.q-applicant-infections', true]
                },
                {
                    target: 'p-applicant-pregnancy',
                    cond: [
                        '==',
                        '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                        'SEX'
                    ]
                },
                {target: 'p-applicant-pregnancy-loss'}
            ]
        }
    }
};
