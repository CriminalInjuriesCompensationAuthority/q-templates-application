'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-pregnancy'],
            additionalProperties: false,
            properties: {
                'q-applicant-pregnancy': {
                    title: 'Did you become pregnant as a result of the crime?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'pregnancy'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-pregnancy':
                        'Select yes if you became pregnant as a result of the crime'
                }
            },
            examples: [{'q-applicant-pregnancy': true}, {'q-applicant-pregnancy': false}],
            invalidExamples: [{'q-applicant-pregnancy': 'foo'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-pregnancy-loss'}]}}
};
