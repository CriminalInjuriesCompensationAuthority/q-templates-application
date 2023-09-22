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
                ns: 'p-applicant-what-other-names-have-you-used'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-what-other-names-have-you-used',
                    resources: {
                        'q-applicant-what-other-names-have-you-used': {
                            title: 'What other names have you been known by?',
                            'title_someone-else': 'What other names have they used?',
                            description:
                                'We need to know any other names you have used, for example, your maiden name.',
                            'description_someone-else':
                                'We need to know any other names they have used, for example, their maiden name.',
                            error: {
                                required: "Enter the other names you've been known by",
                                maxLength:
                                    "Other names you've been known by must be 50 characters or less",
                                'required_someone-else': 'Enter the other names they have used',
                                'maxLength_someone-else':
                                    'Other names they have used must be 50 characters or less'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-what-other-names-have-you-used'],
            additionalProperties: false,
            properties: {
                'q-applicant-what-other-names-have-you-used': {
                    type: 'string',
                    title:
                        'l10nt:q-applicant-what-other-names-have-you-used.title{?lng,context,ns}',
                    description:
                        'l10nt:q-applicant-what-other-names-have-you-used.description{?lng,context,ns}',
                    maxLength: 50,
                    errorMessage: {
                        maxLength:
                            'l10nt:q-applicant-what-other-names-have-you-used.error.maxLength{?lng,context,ns}'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-what-other-names-have-you-used':
                        'l10nt:q-applicant-what-other-names-have-you-used.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-what-other-names-have-you-used': 'Mr Biz Baz'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-what-other-names-have-you-used': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-enter-your-date-of-birth'
                }
            ]
        }
    }
};
