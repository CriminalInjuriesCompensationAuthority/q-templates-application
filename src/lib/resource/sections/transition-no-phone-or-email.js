'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title:
                        'You must apply by telephone if you do not have an email address or UK mobile phone',
                    description: "{% include 'contact.njk' %}"
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
