'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-job-when-crime-happened'],
            additionalProperties: false,
            properties: {
                'q-applicant-job-when-crime-happened': {
                    title: 'Did you have a job when the crime happened?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
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
                    'q-applicant-job-when-crime-happened':
                        'Select yes if you had a job when the crime happened'
                }
            },
            examples: [
                {'q-applicant-job-when-crime-happened': true},
                {'q-applicant-job-when-crime-happened': false}
            ],
            invalidExamples: [{'q-applicant-job-when-crime-happened': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-expenses',
                    cond: [
                        '==',
                        '$.answers.p-applicant-job-when-crime-happened.q-applicant-job-when-crime-happened',
                        true
                    ]
                },
                {target: 'p-applicant-work-details-option'}
            ]
        }
    }
};
