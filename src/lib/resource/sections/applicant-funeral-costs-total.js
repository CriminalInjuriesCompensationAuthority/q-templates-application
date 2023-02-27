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
                    title: 'What was the total cost of the funeral?',
                    description:
                        'If you are not sure what the total cost was, enter an estimate in pounds.',
                    meta: {
                        classifications: {
                            theme: 'funeral_costs'
                        },
                        summary: {
                            title: 'Funeral costs'
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
                    'q-applicant-funeral-costs-total': '30:00'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-applicant-funeral-costs-total': 'AAAA'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-compensation'
                }
            ]
        }
    }
};
