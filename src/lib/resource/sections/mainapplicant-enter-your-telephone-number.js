'use strict';

module.exports = {
    l10n: {
        vars: {
            lng: 'en',
            ns: 'p-mainapplicant-enter-your-telephone-number'
        },
        translations: [
            {
                language: 'en',
                namespace: 'p-mainapplicant-enter-your-telephone-number',
                resources: {
                    'q-mainapplicant-enter-your-telephone-number': {
                        title: {
                            mainapplicant: 'Enter your telephone number',
                            rep: 'Enter their telephone number'
                        },
                        meta: {
                            summary: {
                                title: {
                                    mainapplicant: 'Telephone number',
                                    rep: 'Their telephone number'
                                }
                            }
                        },
                        description: {
                            mainapplicant:
                                'We may use this to contact you if we need to clarify something in this application (optional).',
                            rep:
                                'We will only use this to contact this person in the event we cannot contact you via one of your contact preferences you provide (optional).'
                        }
                    }
                }
            }
        ]
    },
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-mainapplicant-enter-your-telephone-number': {
                    type: 'string',
                    title: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-enter-your-telephone-number.title.mainapplicant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-enter-your-telephone-number.title.rep'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-enter-your-telephone-number.description.mainapplicant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-enter-your-telephone-number.description.rep'
                    ],
                    maxLength: 20,
                    pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                    errorMessage: {
                        maxLength: 'Telephone number must be 20 characters or less',
                        pattern:
                            'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                    },
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: [
                            '|l10nt',
                            ['|role.all', 'mainapplicant'],
                            'q-mainapplicant-enter-your-telephone-number.meta.summary.title.mainapplicant',
                            ['|role.all', 'rep'],
                            'q-mainapplicant-enter-your-telephone-number.meta.summary.title.rep'
                        ]
                    }
                }
            },
            examples: [
                {
                    'q-mainapplicant-enter-your-telephone-number': '01632 960 001'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-enter-your-telephone-number': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-relationship'
                }
            ]
        }
    }
};
