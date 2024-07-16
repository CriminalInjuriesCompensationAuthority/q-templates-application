'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-provide-additional-information'],
            additionalProperties: false,
            properties: {
                'q-applicant-provide-additional-information': {
                    type: 'boolean',
                    title: 'Would you like to add any information to this claim?',
                    description:
                        'This may include details of additional crime reference numbers, locations, dates and/or offenders.',
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
                            theme: 'additional-info'
                        },
                        summary: {
                            title: 'Would you like to add any information?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-provide-additional-information':
                        'Select yes if you would like to add any information to your claim'
                }
            },
            examples: [
                {
                    'q-applicant-provide-additional-information': true
                },
                {
                    'q-applicant-provide-additional-information': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-provide-additional-information': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-PROVIDE-ADDITIONAL-INFORMATION': [
                {
                    target: 'p-applicant-additional-information',
                    cond: [
                        '==',
                        '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                        true
                    ]
                },
                {
                    target: '#task-list',
                    cond: [
                        '==',
                        '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                        false
                    ]
                }
            ]
        }
    }
};
