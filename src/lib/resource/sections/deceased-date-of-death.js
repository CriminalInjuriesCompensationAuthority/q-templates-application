'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-deceased-date-of-death'],
            additionalProperties: false,
            properties: {
                'q-deceased-date-of-death': {
                    title: 'Enter their date of death',
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
                            title: 'Date of death'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 16 12 2022.',
                    errorMessage: {
                        format: 'Enter their date of death and include a day, month and year'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-deceased-date-of-death':
                        'Enter their date of death and include a day, month and year'
                }
            },
            examples: [
                {
                    'q-deceased-date-of-death': '1970-01-01T00:00:00.000Z'
                },
                {
                    'q-deceased-date-of-death': '2019-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-deceased-date-of-death': 12345
                },
                {
                    'q-deceased-date-of-death': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-DECEASED-DATE-OF-BIRTH': [
                {
                    target: 'p-deceased-address'
                }
            ]
        }
    }
};
