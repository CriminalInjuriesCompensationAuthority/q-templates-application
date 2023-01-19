'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-deceased-date-of-birth'],
            additionalProperties: false,
            properties: {
                'q-deceased-date-of-birth': {
                    title: 'Enter their date of birth',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM-DD'
                            },
                            defaults: {
                                DD: '01'
                            }
                        },
                        classifications: {
                            theme: 'deceased'
                        },
                        summary: {
                            title: 'Date of Birth'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 20 12 1980.',
                    errorMessage: {
                        format: 'Enter their date of birth and include a day, month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-deceased-date-of-birth':
                        'Enter their date of birth and include a day, month and year'
                }
            },
            examples: [
                {
                    'q-deceased-date-of-birth': '1970-01-01T00:00:00.000Z'
                },
                {
                    'q-deceased-date-of-birth': '2019-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-deceased-date-of-birth': 12345
                },
                {
                    'q-deceased-date-of-birth': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-deceased-date-of-death'
                }
            ]
        }
    }
};
