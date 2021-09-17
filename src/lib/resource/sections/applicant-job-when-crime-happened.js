'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-job-when-crime-happened'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-job-when-crime-happened',
                    resources: {
                        'q-applicant-job-when-crime-happened': {
                            title: 'Did you have a job when the crime happened?',
                            'title_someone-else':
                                'Did the child have a job when the crime happened?',
                            error: {
                                required: 'Select yes if you had a job when the crime happened',
                                'required_someone-else':
                                    'Select yes if the child had a job when the crime happened'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-job-when-crime-happened'],
            additionalProperties: false,
            properties: {
                'q-applicant-job-when-crime-happened': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-job-when-crime-happened.title{?lng,context,ns}',
                    description:
                        'This can be a full-time, part-time, freelance, seasonal or self-employed job. We may ask for evidence of this later.',
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
                            theme: 'loss-of-earnings'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-job-when-crime-happened':
                        'l10nt:q-applicant-job-when-crime-happened.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-job-when-crime-happened': true
                },
                {
                    'q-applicant-job-when-crime-happened': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-job-when-crime-happened': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-unable-to-work',
                    cond: [
                        '==',
                        '$.answers.p-applicant-job-when-crime-happened.q-applicant-job-when-crime-happened',
                        true
                    ]
                },
                {
                    target: 'p-applicant-work-details-option'
                }
            ]
        }
    }
};
