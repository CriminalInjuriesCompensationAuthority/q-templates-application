'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-are-you-18-or-over'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-are-you-18-or-over',
                    resources: {
                        'q-applicant-are-you-18-or-over': {
                            title: {
                                myself: 'Are you 18 or over?',
                                proxy: 'Are they 18 or over?'
                            },
                            error: {
                                myself: 'Select yes if you are 18 or over',
                                proxy: 'Select yes if they are 18 or over'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        myself: 'Are you 18 or over?',
                                        proxy: 'Are they 18 or over?'
                                    }
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
            required: ['q-applicant-are-you-18-or-over'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-18-or-over': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'q-applicant-are-you-18-or-over.title.myself',
                        ['|role.all', 'proxy'],
                        'q-applicant-are-you-18-or-over.title.proxy'
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
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-are-you-18-or-over.meta.summary.title.myself',
                                ['|role.all', 'proxy'],
                                'q-applicant-are-you-18-or-over.meta.summary.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-18-or-over': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'q-applicant-are-you-18-or-over.error.myself',
                        ['|role.all', 'proxy'],
                        'q-applicant-are-you-18-or-over.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-are-you-18-or-over': true
                },
                {
                    'q-applicant-are-you-18-or-over': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-18-or-over': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-applicant-details',
                    cond: ['or', ['|role.all', 'proxy'], ['|role.all', 'adult', 'capable']]
                },
                {
                    target: 'p--transition'
                }
            ]
        }
    }
};
