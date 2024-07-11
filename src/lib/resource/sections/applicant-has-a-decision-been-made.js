'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-has-a-decision-been-made'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-has-a-decision-been-made',
                    resources: {
                        'applicant-has-a-decision-been-made': {
                            title: {
                                myself:
                                    'Have they made a decision about how much you will receive?',
                                proxy: 'Have they made a decision about how much they will receive?'
                            },
                            error: {
                                myself:
                                    'Select yes if they have made a decision about how much you will receive',
                                proxy:
                                    'Select yes if a decision has been made about how much they will receive'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            required: ['q-applicant-has-a-decision-been-made'],
            properties: {
                'q-applicant-has-a-decision-been-made': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-has-a-decision-been-made.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-has-a-decision-been-made.title.proxy'
                    ],
                    type: 'boolean',
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
                                'applicant-has-a-decision-been-made.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-has-a-decision-been-made.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-has-a-decision-been-made': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-has-a-decision-been-made.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-has-a-decision-been-made.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-has-a-decision-been-made': true
                },
                {
                    'q-applicant-has-a-decision-been-made': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-has-a-decision-been-made': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-how-much-was-award',
                    cond: [
                        '==',
                        '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                        true
                    ]
                },
                {
                    target: 'p-applicant-when-will-you-find-out',
                    cond: [
                        '==',
                        '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                        false
                    ]
                }
            ]
        }
    }
};
