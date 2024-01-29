'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['channel'],
            properties: {
                channel: {
                    type: 'string',
                    pattern: '^[a-z][a-z0-9]{0,19}(?:-[a-z0-9]{1,20}){0,20}$',
                    errorMessage: {
                        pattern: 'Channel is not a valid format'
                    }
                }
            },
            errorMessage: {
                required: {
                    channel: 'Channel is required'
                }
            },
            examples: [
                {
                    channel: 'web'
                }
            ],
            invalidExamples: [
                {
                    foo: "bar"
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
