'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-over-16'],
            additionalProperties: false,
            properties: {
                'q-applicant-over-16': {
                    type: 'boolean',
                    title: 'Was the victim 16 or over at the time of the crime?',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'impact'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-over-16':
                        'Select yes if the victim was over 16 at the time of the crime'
                }
            },
            examples: [
                {
                    'q-applicant-over-16': true
                },
                {
                    'q-applicant-over-16': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-over-16': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-affected-daily-capacity',
                    cond: ['==', '$.answers.p-applicant-over-16.q-applicant-over-16', false]
                },
                {
                    target: 'p-applicant-job-when-crime-happened'
                }
            ]
        }
    }
};
