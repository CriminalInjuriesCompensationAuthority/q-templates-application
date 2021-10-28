'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-registered-with-gp'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-registered-with-gp': {
                    title: 'Are you registered with a GP practice?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: "treatment",
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-registered-with-gp':
                        'Select yes if you are registered with a GP'
                }
            },
            examples: [
                {'q-applicant-are-you-registered-with-gp': true},
                {'q-applicant-are-you-registered-with-gp': false}
            ],
            invalidExamples: [{'q-applicant-are-you-registered-with-gp': 'foo'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-have-you-seen-a-gp'}]}}
};
