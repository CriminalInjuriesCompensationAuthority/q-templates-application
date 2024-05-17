'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-what-do-you-want-to-do'],
            additionalProperties: false,
            properties: {
                'q-applicant-what-do-you-want-to-do': {
                    type: 'string',
                    title: 'What do you want to do?',
                    description:
                        'You will not be able to apply online yourself because of your age.',
                    oneOf: [
                        {
                            title: "Close this application and apply when you're 18",
                            const: 'close'
                        },
                        {
                            title:
                                "Ask us to call you and we'll discuss if we can help you make your application over the phone",
                            const: 'call-back'
                        },
                        {
                            title:
                                'Call us to discuss if we can help you make your application over the phone',
                            const: 'call-us'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: 'What do you want to do?'
                    }
                }
            },
            meta: {
                'task-list': {
                    task: 't-about-application'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-what-do-you-want-to-do': 'Select one option'
                }
            },
            examples: [
                {
                    'q-applicant-what-do-you-want-to-do': 'close'
                },
                {
                    'q-applicant-what-do-you-want-to-do': 'call-back'
                },
                {
                    'q-applicant-what-do-you-want-to-do': 'call-us'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-what-do-you-want-to-do': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition-apply-when-18',
                    cond: [
                        '==',
                        '$.answers.p-applicant-what-do-you-want-to-do.q-applicant-what-do-you-want-to-do',
                        'close'
                    ]
                },
                {
                    target: 'p--transition-request-a-call-back',
                    cond: [
                        '==',
                        '$.answers.p-applicant-what-do-you-want-to-do.q-applicant-what-do-you-want-to-do',
                        'call-back'
                    ]
                },
                {
                    target: 'p--transition-contact-us',
                    cond: [
                        '==',
                        '$.answers.p-applicant-what-do-you-want-to-do.q-applicant-what-do-you-want-to-do',
                        'call-us'
                    ]
                }
            ]
        }
    }
};
