'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-enter-your-date-of-birth'],
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-date-of-birth': {
                    title: 'Enter your date of birth',
                    meta: {keywords: {format: {precision: 'YYYY-MM-DD'}}},
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 31 3 1980.',
                    errorMessage: {
                        format: 'Enter your date of birth and include a day, month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-enter-your-date-of-birth':
                        'Enter your date of birth and include a day, month and year'
                }
            },
            examples: [
                {'q-applicant-enter-your-date-of-birth': '1970-01-01T00:00:00.000Z'},
                {'q-applicant-enter-your-date-of-birth': '2019-01-01T00:00:00.000Z'}
            ],
            invalidExamples: [
                {'q-applicant-enter-your-date-of-birth': 12345},
                {'q-applicant-enter-your-date-of-birth': 'not a date'}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition',
                    cond: [
                        'dateLessThanEighteenYearsAgo',
                        '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth'
                    ]
                },
                {target: 'p-applicant-enter-your-address'}
            ]
        }
    }
};
