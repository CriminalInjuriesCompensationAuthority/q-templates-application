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
                ns: 'p-applicant-mental-injury-duration'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-mental-injury-duration',
                    resources: {
                        'q-applicant-mental-injury-duration': {
                            error: {
                                required:
                                    'Select yes if your mental injury has lasted longer than 6 weeks',
                                'required_someone-else':
                                    'Select yes if their mental injury has lasted longer than 6 weeks'
                            },
                            title: 'Has your mental injury lasted 6 weeks or more?',
                            'title_someone-else': 'Has this mental injury lasted 6 weeks or more?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-mental-injury-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-mental-injury-duration': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-mental-injury-duration.title{?lng,context,ns}',
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
                            theme: 'mental-health'
                        },
                        summary: {
                            title: 'Has it lasted 6 weeks or more?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-mental-injury-duration':
                        'l10nt:q-applicant-mental-injury-duration.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-mental-injury-duration': true
                },
                {
                    'q-applicant-mental-injury-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-mental-injury-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
