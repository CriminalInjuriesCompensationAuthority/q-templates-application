'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-do-you-have-contact-with-offender'],
            additionalProperties: false,
            properties: {
                'q-offender-do-you-have-contact-with-offender': {
                    title: 'Do you have contact with the offender?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-offender-do-you-have-contact-with-offender':
                        'Select yes if you have contact with the offender'
                }
            },
            examples: [
                {'q-offender-do-you-have-contact-with-offender': true},
                {'q-offender-do-you-have-contact-with-offender': false}
            ],
            invalidExamples: [{'q-offender-do-you-have-contact-with-offender': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-physical-injuries',
                    cond: [
                        '==',
                        '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                        false
                    ]
                },
                {
                    target: 'p-offender-describe-contact-with-offender',
                    cond: [
                        '==',
                        '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                        true
                    ]
                }
            ]
        }
    }
};
