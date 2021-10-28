'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-treatment-for-physical-injuries'],
            properties: {
                'q-applicant-treatment-for-physical-injuries': {
                    type: 'string',
                    title: 'What treatment are you receiving for your physical injuries?',
                    maxLength: 500,
                    errorMessage: {maxLength: 'Description must be 500 characters or less'},
                    meta: {
                        classifications: {
                            theme: 'treatment'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-treatment-for-physical-injuries':
                        'Describe what treatment you have received for your physical injuries'
                }
            },
            examples: [{'q-applicant-treatment-for-physical-injuries': 'Some treatment'}],
            invalidExamples: [{'q-applicant-treatment-for-physical-injuries': 12345}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-select-treatments',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
                    ]
                },
                {target: 'p-applicant-has-your-treatment-finished-dmi'}
            ]
        }
    }
};
