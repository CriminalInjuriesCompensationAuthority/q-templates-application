'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['case-reference'],
            additionalProperties: false,
            properties: {
                'case-reference': {
                    type: 'string',
                    pattern: '^[0-9]{2}\\\\[0-9]{6}$',
                    errorMessage: {
                        pattern: 'Invalid case reference'
                    }
                }
            },
            errorMessage: {
                required: 'Case reference is required'
            },
            examples: [
                {
                    'case-reference': '11\\123456'
                }
            ],
            invalidExamples: [
                {
                    'case-reference': 12345
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
