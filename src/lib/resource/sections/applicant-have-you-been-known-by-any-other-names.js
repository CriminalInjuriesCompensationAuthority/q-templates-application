'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-been-known-by-any-other-names'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-been-known-by-any-other-names': {
                    title: 'Have you ever been known by any other names?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Have you been known by another name?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-been-known-by-any-other-names':
                        'Select yes if you have been known by any other names'
                }
            },
            examples: [
                {'q-applicant-have-you-been-known-by-any-other-names': true},
                {'q-applicant-have-you-been-known-by-any-other-names': false}
            ],
            invalidExamples: [{'q-applicant-have-you-been-known-by-any-other-names': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-enter-your-date-of-birth',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                        false
                    ]
                },
                {
                    target: 'p-applicant-what-other-names-have-you-used',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                        true
                    ]
                }
            ]
        }
    }
};
