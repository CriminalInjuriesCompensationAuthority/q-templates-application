'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-describe-contact-with-offender'],
            properties: {
                'q-offender-describe-contact-with-offender': {
                    type: 'string',
                    title: 'Describe your contact with the offender',
                    description: 'We cannot pay compensation if the offender may benefit from it.',
                    maxLength: 500,
                    errorMessage: {maxLength: 'Description must be 500 characters or less'}
                }
            },
            errorMessage: {
                required: {
                    'q-offender-describe-contact-with-offender':
                        'Describe your contact with the offender'
                }
            },
            examples: [{'q-offender-describe-contact-with-offender': 'Some contact'}],
            invalidExamples: [{'q-offender-describe-contact-with-offender': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p--context-physical-injuries'}]}}
};
