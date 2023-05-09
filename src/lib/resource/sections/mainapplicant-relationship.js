'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-relationship'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-relationship',
                    resources: {
                        'q-mainapplicant-relationship': {
                            title: {
                                mainapplicant: 'What is your relationship to the victim?',
                                rep: "What is this person's relationship to the victim?"
                            },
                            description: {
                                mainapplicant:
                                    "For example, you're their mother, father, grandparent etc.",
                                rep:
                                    "For example, they are the victim's mother, father, grandparent etc"
                            },
                            meta: {
                                summary: {
                                    title: {
                                        mainapplicant: 'What is your relationship to the victim?',
                                        rep: 'What is their relationship to the victim?'
                                    }
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-relationship': {
                                    mainapplicant: 'Enter your relationship with the victim',
                                    rep: 'Enter their relationship with the victim'
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
            required: ['q-mainapplicant-relationship'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-relationship': {
                    type: 'string',
                    maxLength: 50,
                    title: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-relationship.title.mainapplicant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-relationship.title.rep'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-relationship.description.mainapplicant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-relationship.description.rep'
                    ],
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'mainapplicant'],
                                'q-mainapplicant-relationship.meta.summary.title.mainapplicant',
                                ['|role.all', 'rep'],
                                'q-mainapplicant-relationship.meta.summary.title.rep'
                            ]
                        }
                    },
                    errorMessage: {
                        maxLength: 'Relationship to the victim must be 50 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-relationship': [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'errorMessage.required.q-mainapplicant-relationship.mainapplicant',
                        ['|role.all', 'rep'],
                        'errorMessage.required.q-mainapplicant-relationship.rep'
                    ]
                }
            },
            examples: [
                {
                    'q-mainapplicant-relationship': 'mother'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-relationship': true
                },
                {
                    'q-mainapplicant-relationship': 123
                },
                {
                    'q-mainapplicant-relationship': ['father']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue',
                    cond: [
                        'and',
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>=', // is greater than or equal to ...
                            '-18', // 18 ...
                            'years' // years (before, due to the negative (-18) ...
                            // today's date (no second date given. defaults to today's date).
                        ],
                        ['|role.all', 'mainapplicant']
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    cond: [
                        'and',
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>=', // is greater than or equal to ...
                            '-18', // 18 ...
                            'years' // years (before, due to the negative (-18) ...
                            // today's date (no second date given. defaults to today's date).
                        ],
                        ['|role.all', 'adult', 'rep']
                    ]
                },
                {
                    target: 'p-mainapplicant-shared-responsibility'
                }
            ]
        }
    }
};
