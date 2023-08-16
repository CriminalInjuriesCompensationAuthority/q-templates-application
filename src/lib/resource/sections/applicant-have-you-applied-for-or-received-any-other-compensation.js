'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-have-you-applied-for-or-received-any-other-compensation'
            },
            translations: [
                {
                    language: 'en',
                    namespace:
                        'p-applicant-have-you-applied-for-or-received-any-other-compensation',
                    resources: {
                        'applicant-have-you-applied-for-or-received-any-other-compensation': {
                            title: {
                                myself:
                                    'Have you applied for or received any other form of compensation or damages?',
                                proxy:
                                    'Has the victim applied for or received any other form of compensation or damages in connection with this crime?',
                                deceased:
                                    'Has the claimant applied for or received any other form of compensation or damages in connection with this crime?'
                            },
                            error: {
                                myself:
                                    'Select yes if you have applied for any other form of compensation or damages',
                                proxy:
                                    'Select yes if anyone has applied for or received any other form of compensation on behalf of the victim',
                                deceased:
                                    'Select yes if the claimant has applied for or received any other form of compensation or damages in connection with this crime'
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
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-have-you-applied-for-or-received-any-other-compensation.title.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-have-you-applied-for-or-received-any-other-compensation.title.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-have-you-applied-for-or-received-any-other-compensation.title.deceased'
                    ],
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
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-have-you-applied-for-or-received-any-other-compensation.title.myself',
                                ['|role.all', 'proxy', 'nonDeceased'],
                                'applicant-have-you-applied-for-or-received-any-other-compensation.title.proxy',
                                ['|role.all', 'proxy', 'deceased'],
                                'applicant-have-you-applied-for-or-received-any-other-compensation.title.deceased'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-have-you-applied-for-or-received-any-other-compensation.error.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-have-you-applied-for-or-received-any-other-compensation.error.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-have-you-applied-for-or-received-any-other-compensation.error.deceased'
                    ]
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
