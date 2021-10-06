'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-has-your-treatment-finished-dmi'],
            additionalProperties: false,
            properties: {
                'q-applicant-has-your-treatment-finished-dmi': {
                    title: 'Have you finished your treatment?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-has-your-treatment-finished-dmi':
                        'Select yes if you have finished your treatment'
                }
            },
            examples: [
                {'q-applicant-has-your-treatment-finished-dmi': true},
                {'q-applicant-has-your-treatment-finished-dmi': false}
            ],
            invalidExamples: [{'q-applicant-has-your-treatment-finished-dmi': 'foo'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-are-you-registered-with-gp'}]}}
};
