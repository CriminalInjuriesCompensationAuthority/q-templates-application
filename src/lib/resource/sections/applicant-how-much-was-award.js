'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-how-much-was-award'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-how-much-was-award',
                    resources: {
                        'how-much-was-award': {
                            title: {
                                myself: 'Tell us how much you were awarded and what it was for',
                                proxy: 'Tell us how much they were awarded and what it was for'
                            },
                            description: {
                                myself:
                                    'We need to know the amount of each payment and its purpose. For example, it may have been for your injuries, loss of income, medical treatment or something else.',
                                proxy:
                                    'We need to know the amount of each payment and its purpose. For example, it may have been for their injuries, loss of income, medical treatment or something else.'
                            },
                            error: {
                                required: {
                                    myself: 'Enter how much you were awarded and what it was for',
                                    proxy: 'Enter how much they were awarded and what it was for'
                                },
                                maxLength: {
                                    myself:
                                        'How much you were awarded and what it was for must be 2000 characters or less',
                                    proxy:
                                        'How much they were awarded and what it was for must be 2000 characters or less'
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
            required: ['q-how-much-was-award'],
            properties: {
                'q-how-much-was-award': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'how-much-was-award.title.myself',
                        ['|role.all', 'proxy'],
                        'how-much-was-award.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'how-much-was-award.description.myself',
                        ['|role.all', 'proxy'],
                        'how-much-was-award.description.proxy'
                    ],
                    type: 'string',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: [
                            '|l10nt',
                            ['|role.all', 'myself'],
                            'how-much-was-award.error.maxLength.myself',
                            ['|role.all', 'proxy'],
                            'how-much-was-award.error.maxLength.proxy'
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
                                'how-much-was-award.title.myself',
                                ['|role.all', 'proxy'],
                                'how-much-was-award.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-how-much-was-award': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'how-much-was-award.error.required.myself',
                        ['|role.all', 'proxy'],
                        'how-much-was-award.error.required.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-how-much-was-award': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-how-much-was-award': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-additional-info'
                }
            ]
        }
    }
};
