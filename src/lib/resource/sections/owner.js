'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['owner-id', 'is-authenticated'],
            properties: {
                'owner-id': {
                    type: 'string',
                    format: 'uri',
                    maxLength: 64,
                    pattern: '^urn:(uuid|fdc:gov.uk:2022):'
                },
                'is-authenticated': {
                    type: 'boolean'
                }
            },
            errorMessage: {
                required: {
                    'owner-id': 'Owner id is required',
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
                    'owner-id': 'urn:not-a-good-id:1223334444-55555666666-777777788888888',
                    'is-authenticated': true
                },
                {
                    'owner-id': 'urn:fdc:gov.uk:2022:56P4CMsGh_02YOlWpd8PAOI-2sVlB2nsNU7mcLZYhYw=',
                    'is-authenticated': 'foobar'
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
