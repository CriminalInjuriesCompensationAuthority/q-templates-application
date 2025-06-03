'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-when-will-you-find-out'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-when-will-you-find-out',
                    resources: {
                        'when-will-you-find-out': {
                            title: {
                                myself:
                                    "When will you find out if you've been awarded compensation or damages?",
                                proxy:
                                    "When will the victim find out if they've been awarded compensation or damages?",
                                deceased:
                                    "When will the claimant find out if they've been awarded compensation or damages?"
                            },
                            chars: {
                                myself: 'When will you find out must be 50 characters or less',
                                proxy:
                                    'When will the victim find out must be 50 characters or less',
                                deceased:
                                    'When will the claimant find out must be 50 characters or less'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-when-will-you-find-out'],
            properties: {
                'q-when-will-you-find-out': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'when-will-you-find-out.title.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'when-will-you-find-out.title.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'when-will-you-find-out.title.deceased'
                    ],
                    type: 'string',
                    description:
                        'Enter an approximate date, for example, December 2023. If you do not know you can say so.',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: [
                            '|l10nt',
                            ['|role.all', 'myself'],
                            'when-will-you-find-out.chars.myself',
                            ['|role.all', 'proxy', 'nonDeceased'],
                            'when-will-you-find-out.chars.proxy',
                            ['|role.all', 'proxy', 'deceased'],
                            'when-will-you-find-out.chars.deceased'
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                [
                                    'or',
                                    ['|role.all', 'myself'],
                                    ['|role.all', 'proxy', 'nonDeceased']
                                ],
                                'when-will-you-find-out.title.myself',
                                ['|role.all', 'proxy', 'deceased'],
                                'when-will-you-find-out.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-when-will-you-find-out': 'Enter an approximate date'
                }
            },
            examples: [
                {
                    'q-when-will-you-find-out': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-when-will-you-find-out': 12345
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
