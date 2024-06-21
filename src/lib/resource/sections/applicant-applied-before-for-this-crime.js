'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-applied-before-for-this-crime'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-applied-before-for-this-crime',
                    resources: {
                        'q-applicant-applied-before-for-this-crime': {
                            title: {
                                applicant: 'Have you applied before, for injuries related to this crime?',
                                proxy: 'Have you applied before, on behalf of the victim, for injuries related to this crime?'
                            },
                            error: {
                                applicant: 'Select yes if you have applied before, for injuries related to this crime',
                                proxy: 'Select yes if you have applied before, on behalf of the victim, for injuries related to this crime'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-applied-before-for-this-crime'],
            additionalProperties: false,
            properties: {
                'q-applicant-applied-before-for-this-crime': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-applied-before-for-this-crime.title.proxy',
                        ['|role.all'],
                        'q-applicant-applied-before-for-this-crime.title.applicant'
                    ],
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
                            theme: 'about-application'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-applied-before-for-this-crime':[
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-applied-before-for-this-crime.error.proxy',
                        ['|role.all'],
                        'q-applicant-applied-before-for-this-crime.error.applicant'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-applied-before-for-this-crime': true
                },
                {
                    'q-applicant-applied-before-for-this-crime': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-applied-before-for-this-crime': 'foo'
                }
            ],
            options: {
                signInLink: {
                    visible: false
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-you-should-not-apply-again',
                    cond: [
                        '==',
                        '$.answers.p-applicant-applied-before-for-this-crime.q-applicant-applied-before-for-this-crime',
                        true
                    ]
                },
                {
                    target: 'p-applicant-someone-else-applied-before-for-this-crime',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-applied-before-for-this-crime.q-applicant-applied-before-for-this-crime',
                            false
                        ],
                        ['|role.all', 'myself']
                    ]
                },
                {
                    target: 'p-proxy-someone-else-applied-before-for-this-crime',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-applied-before-for-this-crime.q-applicant-applied-before-for-this-crime',
                            false
                        ],
                        ['|role.all', 'proxy']
                    ]
                }
            ]
        }
    }
};
