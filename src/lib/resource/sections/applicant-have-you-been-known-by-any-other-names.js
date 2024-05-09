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
                ns: 'p-applicant-have-you-been-known-by-any-other-names'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-have-you-been-known-by-any-other-names',
                    resources: {
                        'q-applicant-have-you-been-known-by-any-other-names': {
                            title: 'Have you ever been known by any other names?',
                            'title_someone-else': 'Have they ever been known by any other names?',
                            error: {
                                required: 'Select yes if you have been known by any other names',
                                'required_someone-else':
                                    'Select yes if they have been known by any other names'
                            },
                            meta: {
                                summary: {
                                    title: 'Have you been known by another name?',
                                    'title_someone-else': 'Have they been known by another name?'
                                }
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-been-known-by-any-other-names'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-been-known-by-any-other-names': {
                    type: 'boolean',
                    title:
                        'l10nt:q-applicant-have-you-been-known-by-any-other-names.title{?lng,context,ns}',
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
                            theme: 'applicant-details'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-have-you-been-known-by-any-other-names.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-been-known-by-any-other-names':
                        'l10nt:q-applicant-have-you-been-known-by-any-other-names.error.required{?lng,context,ns}'
                }
            },
            'task-list': {
                task: 't_applicant_personal-details'
            },
            examples: [
                {
                    'q-applicant-have-you-been-known-by-any-other-names': true
                },
                {
                    'q-applicant-have-you-been-known-by-any-other-names': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-been-known-by-any-other-names': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-enter-your-date-of-birth',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                        false
                    ]
                },
                {
                    target: 'p-applicant-what-other-names-have-you-used',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                        true
                    ]
                }
            ]
        }
    }
};
