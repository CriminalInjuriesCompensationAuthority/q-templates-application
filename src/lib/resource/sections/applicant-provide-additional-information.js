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
                    title: 'Would you like to add any information to your claim?',
                    description:
                        'This may include details of additional crime reference numbers, locations, dates and/or offenders.',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
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
                {'q-applicant-provide-additional-information': true},
                {'q-applicant-provide-additional-information': false}
            ],
            invalidExamples: [{'q-applicant-provide-additional-information': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-additional-information',
                    cond: [
                        '==',
                        '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                        true
                    ]
                },
                {
                    target: 'p--check-your-answers',
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
