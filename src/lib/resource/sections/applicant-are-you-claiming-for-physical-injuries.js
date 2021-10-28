'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-claiming-for-physical-injuries'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-claiming-for-physical-injuries': {
                    title: 'Do you have physical injuries as a result of the crime?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Do you have physical injuries?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-claiming-for-physical-injuries':
                        'Select yes if you have physical injuries as a result of the crime'
                }
            },
            examples: [
                {'q-applicant-are-you-claiming-for-physical-injuries': true},
                {'q-applicant-are-you-claiming-for-physical-injuries': false}
            ],
            invalidExamples: [{'q-applicant-are-you-claiming-for-physical-injuries': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-dmi-details',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                        false
                    ]
                },
                {
                    target: 'p-applicant-physical-injury',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                        true
                    ]
                }
            ]
        }
    }
};
