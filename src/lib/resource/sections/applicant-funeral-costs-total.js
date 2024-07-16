'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            required: ['q-applicant-funeral-costs-total'],
            properties: {
                'q-applicant-funeral-costs-total': {
                    type: 'string',
                    title: 'What is the total cost of the funeral?',
                    description:
                        'If you are not sure what the total cost is, enter an estimate in pounds.',
                    maxLength: 50,
                    pattern: '^[0-9]{1,}(\\.[0-9]{2})?$',
                    errorMessage: {
                        pattern: 'Total cost of the funeral must be a number, like 1250 or 1250.00',
                        maxLength: 'Total cost of funeral must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'funeral-costs'
                        },
                        summary: {
                            title: 'What is the total cost of the funeral?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-funeral-costs-total': 'Enter the total cost of the funeral'
                }
            },
            examples: [
                {
                    'q-applicant-funeral-costs-total': '30.00'
                },
                {
                    'q-applicant-funeral-costs-total': '1'
                },
                {
                    'q-applicant-funeral-costs-total': '1234'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-funeral-costs-total': 'AAAA'
                },
                {
                    'q-applicant-funeral-costs-total': '1:00'
                },
                {
                    'q-applicant-funeral-costs-total': '12:00'
                },
                {
                    'q-applicant-funeral-costs-total': '12.000'
                },
                {
                    'q-applicant-funeral-costs-total': '-12.00'
                },
                {
                    'q-applicant-funeral-costs-total': '12.0%'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-FUNERAL-COSTS-TOTAL': [
                {
                    target: 'p-context-funeral-costs-proof'
                }
            ]
        }
    }
};
