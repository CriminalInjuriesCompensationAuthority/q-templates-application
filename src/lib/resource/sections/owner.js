'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['id', 'isAuthenticated'],
            properties: {
                id: {
                    type: 'string'
                },
                isAuthenticated: {
                    type: 'boolean'
                }
            },
            errorMessage: {
                required: {
                    id: 'User id is required',
                    isAuthenticated: 'isAuthenticated is required'
                }
            },
            examples: [
                {
                    id: 'urn:fdc:gov.uk:2022:56P4CMsGh_02YOlWpd8PAOI-2sVlB2nsNU7mcLZYhYw=',
                    isAuthenticated: true
                }
            ],
            invalidExamples: [
                {
                    id: 12345,
                    isAuthenticated: 'foobar'
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
