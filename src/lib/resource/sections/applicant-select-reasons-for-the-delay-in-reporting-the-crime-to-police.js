'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: [
                'q-applicant-explain-reason-for-delay-reporting',
                'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
            ],
            additionalProperties: false,
            properties: {
                'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                    title: 'Select reasons for the delay in reporting the crime to the police',
                    type: 'array',
                    maxItems: 3,
                    uniqueItems: true,
                    description: 'Select all options that apply to you.',
                    items: {
                        anyOf: [
                            {title: 'I was under 18', const: 'i-was-under-18'},
                            {title: 'Unable to report the crime', const: 'unable-to-report-crime'},
                            {title: 'Other reasons', const: 'other'}
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Reasons for delay in reporting'
                        }
                    }
                },
                'q-applicant-explain-reason-for-delay-reporting': {
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
                                'Briefly explain reasons for the delay in reporting the crime to the police'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
                        'Select if you were under 18, unable to report the crime or other reasons',
                    'q-applicant-explain-reason-for-delay-reporting':
                        'Explain the reasons for the delay in reporting the crime to the police'
                }
            },
            examples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'i-was-under-18',
                        'unable-to-report-crime',
                        'other'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'foo'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        12345
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                },
                {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                        'i-was-under-18',
                        'unable-to-report-crime',
                        'other'
                    ],
                    'q-applicant-explain-reason-for-delay-reporting': 12345
                }
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p--which-police-force-is-investigating-the-crime'}]}}
};
