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
                                required: 'Select how long your mental injury has lasted',
                                'required_someone-else':
                                    'Select how long their mental injury has lasted'
                            },
                            title: 'How long did your mental injury last?',
                            'title_someone-else': 'How long did their mental injury last?'
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
                            title: '6 weeks or more',
                            const: true
                        },
                        {
                            title: 'Less than 6 weeks',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'mental-health'
                        },
                        summary: {
                            title: 'How long has it lasted?'
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
                    target: 'p--context-crime-impact',
                    cond: [
                        '==',
                        '$.answers.p-applicant-mental-injury-duration.q-applicant-mental-injury-duration',
                        true
                    ]
                },
                {
                    target: 'p-applicant-mental-injury-ongoing',
                    cond: [
                        '==',
                        '$.answers.p-applicant-mental-injury-duration.q-applicant-mental-injury-duration',
                        false
                    ]
                }
            ]
        }
    }
};
