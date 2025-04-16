'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-mental-injury-ongoing'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-mental-injury-ongoing',
                    resources: {
                        'q-applicant-mental-injury-ongoing': {
                            error: {
                                myself: 'Select yes if you still have your mental injury',
                                proxy: 'Select yes if you still have your mental injury'
                            },
                            title: {
                                myself: 'Do you still have your mental injury?',
                                proxy: 'Do they still have your mental injury?'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-mental-injury-ongoing'],
            additionalProperties: false,
            properties: {
                'q-applicant-mental-injury-ongoing': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-mental-injury-ongoing.title.proxy',
                        ['|role.all'],
                        'q-applicant-mental-injury-ongoing.title.myself'
                    ],
                    oneOf: [
                        {
                            title: '6 weeks or more',
                            const: true
                        },
                        {
                            title: 'Less than 6 weeks',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'mental-health'
                        },
                        summary: {
                            title: 'Is it still ongoing?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-mental-injury-ongoing': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-mental-injury-ongoing.error.proxy',
                        ['|role.all'],
                        'q-applicant-mental-injury-ongoing.error.myself'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-mental-injury-ongoing': true
                },
                {
                    'q-applicant-mental-injury-ongoing': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-mental-injury-ongoing': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-crime-impact'
                }
            ]
        }
    }
};
