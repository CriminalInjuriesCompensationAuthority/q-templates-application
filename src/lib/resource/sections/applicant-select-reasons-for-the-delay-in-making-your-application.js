'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: [
                'q-applicant-explain-reason-for-delay-application',
                'q-applicant-select-reasons-for-the-delay-in-making-your-application'
            ],
            additionalProperties: false,
            properties: {
                'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
                    title: 'Select reasons for the delay in making your application',
                    type: 'array',
                    maxItems: 4,
                    uniqueItems: true,
                    description: 'Select all options that apply to you.',
                    items: {
                        anyOf: [
                            {title: 'I was under 18', const: 'i-was-underage'},
                            {title: 'I was advised to wait', const: 'i-was-advised-to-wait'},
                            {title: 'Medical reasons', const: 'medical-reasons'},
                            {title: 'Other reasons', const: 'other-reasons'}
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Reasons for delay in applying'
                        }
                    }
                },
                'q-applicant-explain-reason-for-delay-application': {
                    title: 'Briefly explain these reasons',
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {maxLength: 'Explanation must be 500 characters or less'},
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title:
                                'Briefly explain reasons for the delay in making your application'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application':
                        'Select if you were under 18, advised to wait, medical reasons or other reasons',
                    'q-applicant-explain-reason-for-delay-application':
                        'Explain the reasons for the delay in making your application'
                }
            },
            examples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'i-was-underage',
                        'medical-reasons'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 'some reason'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'not a valid answer'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [12345],
                    'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                        'i-was-underage'
                    ],
                    'q-applicant-explain-reason-for-delay-application': 12345
                }
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-where-did-the-crime-happen'}]}}
};
