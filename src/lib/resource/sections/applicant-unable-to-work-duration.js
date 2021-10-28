'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-unable-to-work-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-unable-to-work-duration': {
                    title: 'Have you been unable to work for more than 28 weeks?',
                    description:
                        'This includes working less hours or being unable to look for work',
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
                    'q-applicant-unable-to-work-duration':
                        'Select yes if you have been unable to work for more than 28 weeks'
                }
            },
            examples: [
                {'q-applicant-unable-to-work-duration': true},
                {'q-applicant-unable-to-work-duration': false}
            ],
            invalidExamples: [{'q-applicant-unable-to-work-duration': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-job-when-crime-happened',
                    cond: [
                        '==',
                        '$.answers.p-applicant-unable-to-work-duration.q-applicant-unable-to-work-duration',
                        true
                    ]
                },
                {target: 'p--context-compensation'}
            ]
        }
    }
};
