'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-who-did-you-apply-to'],
            properties: {
                'q-applicant-who-did-you-apply-to': {
                    title: 'Who have you applied to or received compensation from?',
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength:
                            'Who you applied to or received compensation from must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: 'Who have you applied for compensation from?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-who-did-you-apply-to':
                        'Enter who you applied to or received compensation from'
                }
            },
            examples: [{'q-applicant-who-did-you-apply-to': 'blah'}],
            invalidExamples: [{'q-applicant-who-did-you-apply-to': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-has-a-decision-been-made'}]}}
};
