'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-affected-daily-capacity'],
            additionalProperties: false,
            properties: {
                'q-applicant-affected-daily-capacity': {
                    type: 'boolean',
                    title:
                        'Has their capacity to do day-to-day activities been affected by their injuries?',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-affected-daily-capacity':
                        'Select yes if their capacity to do day-to-day activities been affected by the crime'
                }
            },
            examples: [
                {
                    'q-applicant-affected-daily-capacity': true
                },
                {
                    'q-applicant-affected-daily-capacity': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-affected-daily-capacity': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-affect-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-affected-daily-capacity.q-applicant-affected-daily-capacity',
                        true
                    ]
                },
                {
                    target: 'p-applicant-future-work'
                }
            ]
        }
    }
};
