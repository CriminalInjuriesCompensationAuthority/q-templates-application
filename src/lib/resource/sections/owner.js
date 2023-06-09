'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['owner-id', 'is-authenticated'],
            properties: {
                'owner-id': {
                    type: 'string'
                },
                'is-authenticated': {
                    type: 'boolean'
                }
            },
            errorMessage: {
                required: {
                    'owner-id': 'User id is required',
                    'is-authenticated': 'isAuthenticated is required'
                }
            },
            examples: [
                {
                    'owner-id': 'urn:fdc:gov.uk:2022:56P4CMsGh_02YOlWpd8PAOI-2sVlB2nsNU7mcLZYhYw=',
                    'is-authenticated': true
                }
            ],
            invalidExamples: [
                {
                    'owner-id': 12345,
                    'is-authenticated': 'foobar'
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
