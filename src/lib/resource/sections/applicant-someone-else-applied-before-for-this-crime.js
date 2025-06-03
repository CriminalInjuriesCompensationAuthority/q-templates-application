'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-someone-else-applied-before-for-this-crime'],
            additionalProperties: false,
            properties: {
                'q-applicant-someone-else-applied-before-for-this-crime': {
                    type: 'string',
                    title: 'Has anyone applied on your behalf, for injuries related to this crime?',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: 'yes'
                        },
                        {
                            title: 'No',
                            const: 'no'
                        },
                        {
                            title: 'I do not know',
                            const: 'dont-know'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-someone-else-applied-before-for-this-crime':
                        'Select yes if anyone has applied on your behalf, for injuries related to this crime'
                }
            },
            examples: [
                {
                    'q-applicant-someone-else-applied-before-for-this-crime': 'yes'
                },
                {
                    'q-applicant-someone-else-applied-before-for-this-crime': 'no'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-someone-else-applied-before-for-this-crime': 'foo'
                }
            ],
            options: {
                signInLink: {
                    visible: false
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-you-should-not-apply-again',
                    cond: [
                        '==',
                        '$.answers.p-applicant-someone-else-applied-before-for-this-crime.q-applicant-someone-else-applied-before-for-this-crime',
                        'yes'
                    ]
                },
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
