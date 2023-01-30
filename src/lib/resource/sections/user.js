'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['user-id'],
            properties: {
                'user-id': {
                    type: 'string',
                    pattern: '^urn:fdc:gov.uk:2022:[A-Za-z0-9+/=_-]{1,44}$',
                    errorMessage: {
                        pattern: 'Invalid user id'
                    }
                }
            },
            errorMessage: {
                required: 'User id is required'
            },
            examples: [
                {
                    'user-id': 'urn:fdc:gov.uk:2022:56P4CMsGh_02YOlWpd8PAOI-2sVlB2nsNU7mcLZYhYw='
                }
            ],
            invalidExamples: [
                {
                    'user-id': 12345
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
