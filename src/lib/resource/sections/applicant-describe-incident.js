'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-describe-incident'],
            additionalProperties: false,
            properties: {
                'q-applicant-describe-incident': {
                    title: 'Would you like to briefly describe the crime in your own words?',
                    description:
                        'The police will send us a report of the crime. Providing an additional description is optional.',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-describe-incident':
                        'Select yes if you would like to describe the crime in your own words'
                }
            },
            examples: [
                {'q-applicant-describe-incident': true},
                {'q-applicant-describe-incident': false}
            ],
            invalidExamples: [{'q-applicant-describe-incident': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-incident-description',
                    cond: [
                        '==',
                        '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                        true
                    ]
                },
                {
                    target: 'p--context-offender',
                    cond: [
                        '==',
                        '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                        false
                    ]
                }
            ]
        }
    }
};
