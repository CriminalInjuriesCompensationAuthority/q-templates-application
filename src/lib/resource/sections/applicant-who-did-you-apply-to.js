'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-who-did-you-apply-to'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-who-did-you-apply-to',
                    resources: {
                        'applicant-who-did-you-apply-to': {
                            title: {
                                myself:
                                    'Who have you applied to or received compensation or damages from?',
                                proxy:
                                    'Who have they applied to or received compensation or damages from?'
                            },
                            error: {
                                myself:
                                    'Enter who you applied to or received compensation or damages from',
                                proxy:
                                    'Enter who they have applied to or received compensation or damages from'
                            },
                            chars: {
                                myself:
                                    'Who you applied to or received compensation or damages from must be 50 characters or less',
                                proxy:
                                    'Who have they applied to or received compensation or damages from must be 50 characters or less'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-who-did-you-apply-to'],
            properties: {
                'q-applicant-who-did-you-apply-to': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-who-did-you-apply-to.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-who-did-you-apply-to.title.proxy'
                    ],
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: [
                            '|l10nt',
                            ['|role.all', 'myself'],
                            'applicant-who-did-you-apply-to.chars.myself',
                            ['|role.all', 'proxy'],
                            'applicant-who-did-you-apply-to.chars.proxy'
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-who-did-you-apply-to.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-who-did-you-apply-to.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-who-did-you-apply-to': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-who-did-you-apply-to.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-who-did-you-apply-to.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-who-did-you-apply-to': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-who-did-you-apply-to': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-has-a-decision-been-made'
                }
            ]
        }
    }
};
