'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-do-you-want-to-upload-now'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-do-you-want-to-upload-now': {
                    type: 'boolean',
                    title: 'Do you want to upload your documents now?',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: {
                            title: 'Do you want to upload documents now?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-do-you-want-to-upload-now':
                        'Select yes if you want to upload your documents now'
                }
            },
            examples: [
                {
                    'q-mainapplicant-do-you-want-to-upload-now': true
                },
                {
                    'q-mainapplicant-do-you-want-to-upload-now': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-do-you-want-to-upload-now': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-upload-example',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-do-you-want-to-upload-now.q-mainapplicant-do-you-want-to-upload-now',
                        true
                    ]
                },
                {
                    target: 'p-mainapplicant-context-details',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-do-you-want-to-upload-now.q-mainapplicant-do-you-want-to-upload-now',
                        false
                    ]
                }
            ]
        }
    }
};
