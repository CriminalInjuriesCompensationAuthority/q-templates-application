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
                                myself: 'How much were you awarded?',
                                proxy: 'How much were they awarded?'
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
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Award amount must be 50 characters or less'
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
                    'q-how-much-was-award': 'Enter an amount'
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
                    target: '#task-list'
                }
            ]
        }
    }
};
