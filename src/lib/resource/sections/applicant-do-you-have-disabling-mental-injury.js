'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-do-you-have-disabling-mental-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-do-you-have-disabling-mental-injury': {
                    description:
                        "This means it's much harder than usual to do things you would normally do, like going to work, seeing friends, or having a relationship.",
                    title: 'Do you have a disabling mental injury?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-do-you-have-disabling-mental-injury':
                        'Select yes if you suffered a disabling mental injury'
                }
            },
            examples: [
                {'q-applicant-do-you-have-disabling-mental-injury': true},
                {'q-applicant-do-you-have-disabling-mental-injury': false}
            ],
            invalidExamples: [{'q-applicant-do-you-have-disabling-mental-injury': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-affect-on-daily-life-dmi',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        false
                    ]
                },
                {
                    target: 'p-applicant-mental-injury-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
                    ]
                }
            ]
        }
    }
};
