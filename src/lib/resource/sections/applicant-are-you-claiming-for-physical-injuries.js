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
                ns: 'p-applicant-are-you-claiming-for-physical-injuries'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-are-you-claiming-for-physical-injuries',
                    resources: {
                        'q-applicant-are-you-claiming-for-physical-injuries': {
                            title: 'Do you have physical injuries as a result of the crime?',
                            'title_someone-else':
                                'Do they have physical injuries as a result of the crime?',
                            error: {
                                required:
                                    'Select yes if you have physical injuries as a result of the crime',
                                'required_someone-else':
                                    'Select yes if they have physical injuries as a result of the crime'
                            },
                            meta: {
                                summary: {
                                    title: 'Do you have physical injuries?',
                                    'title_someone-else': 'Do they have physical injuries?'
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
            required: ['q-applicant-are-you-claiming-for-physical-injuries'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-claiming-for-physical-injuries': {
                    type: 'boolean',
                    title:
                        'l10nt:q-applicant-are-you-claiming-for-physical-injuries.title{?lng,context,ns}',
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
                            theme: 'injuries'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-are-you-claiming-for-physical-injuries.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-claiming-for-physical-injuries':
                        'l10nt:q-applicant-are-you-claiming-for-physical-injuries.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-claiming-for-physical-injuries': true
                },
                {
                    'q-applicant-are-you-claiming-for-physical-injuries': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-claiming-for-physical-injuries': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-infections',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                        false
                    ]
                },
                {
                    target: 'p-applicant-physical-injury',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                        true
                    ]
                }
            ]
        }
    }
};
