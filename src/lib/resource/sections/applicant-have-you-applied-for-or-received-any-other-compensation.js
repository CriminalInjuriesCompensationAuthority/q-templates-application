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
                ns: 'p-applicant-have-you-applied-for-or-received-any-other-compensation'
            },
            translations: [
                {
                    language: 'en',
                    namespace:
                        'p-applicant-have-you-applied-for-or-received-any-other-compensation',
                    resources: {
                        'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                            title:
                                'Have you applied for or received any other form of compensation?',
                            'title_someone-else':
                                'Have you applied for or received any other form of compensation on behalf of the child?',
                            error: {
                                required:
                                    'Select yes if you have applied for any other form of compensation',
                                'required_someone-else':
                                    'Select yes if you have applied for any other form of compensation on behalf of the child'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-applied-for-or-received-any-other-compensation'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                    type: 'boolean',
                    title:
                        'l10nt:q-applicant-have-you-applied-for-or-received-any-other-compensation.title{?lng,context,ns}',
                    description:
                        'For example, this may be compensation or damages awarded by a court or in a private settlement.',
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
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: 'Have you applied for other compensation?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation':
                        'l10nt:q-applicant-have-you-applied-for-or-received-any-other-compensation.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': true
                },
                {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-who-did-you-apply-to',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                        true
                    ]
                },
                {
                    target: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                        false
                    ]
                }
            ]
        }
    }
};
