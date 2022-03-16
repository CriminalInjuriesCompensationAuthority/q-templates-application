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
                ns: 'p-applicant-dentist-visited'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-dentist-visited',
                    resources: {
                        'q-applicant-dentist-visited': {
                            error: {
                                required:
                                    'Select yes if you have seen a dentist about your injuries',
                                'required_someone-else':
                                    'Select yes if they have seen a dentist about their injuries'
                            },
                            title: 'Have you seen a dentist about your injuries?',
                            'title_someone-else': 'Have they seen a dentist about their injuries?',
                            meta: {
                                summary:{
                                    title: 'Have you seen a dentist?',
                                    'title_someone-else': 'Have they seen a dentist?',
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
            required: ['q-applicant-dentist-visited'],
            additionalProperties: false,
            properties: {
                'q-applicant-dentist-visited': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-dentist-visited.title{?lng,context,ns}',
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
                            theme: 'treatment'
                        },
                        summary: {
                            title: 'l10nt:q-applicant-dentist-visited.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-dentist-visited':
                        'l10nt:q-applicant-dentist-visited.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-dentist-visited': true
                },
                {
                    'q-applicant-dentist-visited': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-dentist-visited': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-dentist-address',
                    cond: [
                        '==',
                        '$.answers.p-applicant-dentist-visited.q-applicant-dentist-visited',
                        true
                    ]
                },
                {
                    target: 'p-applicant-medical-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                        false
                    ]
                },
                {
                    target: 'p--context-compensation'
                }
            ]
        }
    }
};
