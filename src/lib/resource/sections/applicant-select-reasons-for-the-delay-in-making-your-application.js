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
                ns: 'p-applicant-select-reasons-for-the-delay-in-making-your-application'
            },
            translations: [
                {
                    language: 'en',
                    namespace:
                        'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                    resources: {
                        'q-applicant-explain-reason-for-delay-application': {
                            error: {
                                required:
                                    'Explain the reasons for the delay in making your application',
                                'required_someone-else':
                                    'Explain the reasons for the delay in making this application'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-explain-reason-for-delay-application'],
            additionalProperties: false,
            properties: {
                'q-applicant-explain-reason-for-delay-application': {
                    title: 'Briefly explain these reasons',
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Explanation must be 500 characters or less'
                    },
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
                    'q-applicant-explain-reason-for-delay-application':
                        'l10nt:q-applicant-explain-reason-for-delay-application.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-explain-reason-for-delay-application': 'some reason'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-explain-reason-for-delay-application': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-where-did-the-crime-happen'
                }
            ]
        }
    }
};
