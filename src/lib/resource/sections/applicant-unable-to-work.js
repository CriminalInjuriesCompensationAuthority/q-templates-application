'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-unable-to-work'],
            additionalProperties: false,
            properties: {
                'q-applicant-unable-to-work': {
                    type: 'boolean',
                    title:
                        'Are they incapable of working or do they have very limited capacity to work due to their injuries?',
                    description:
                        'Very limited capacity means they are not capable of undertaking paid work for more than a few hours each week.',
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
                    'q-applicant-unable-to-work':
                        'Select yes if they are incapable of working or have very limited capacity to work due to their injuries'
                }
            },
            examples: [
                {
                    'q-applicant-unable-to-work': true
                },
                {
                    'q-applicant-unable-to-work': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-unable-to-work': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-unable-to-work-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-unable-to-work.q-applicant-unable-to-work',
                        true
                    ]
                },
                {
                    target: 'p-applicant-future-work',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-unable-to-work.q-applicant-unable-to-work',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                            'someone-else'
                        ]
                    ]
                },
                {
                    target: 'p--context-treatment'
                }
            ]
        }
    }
};
