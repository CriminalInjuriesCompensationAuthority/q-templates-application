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
                                mainapplicant: {
                                    victim: 'What is your relationship to the victim?',
                                    claimant: 'What is your relationship to the claimant?'
                                },
                                rep: {
                                    victim: "What is this person's relationship to the victim?",
                                    claimant: "What is this person's relationship to the claimant?"
                                }
                            },
                            description: {
                                mainapplicant:
                                    "For example, you're their mother, father, grandparent.",
                                rep: {
                                    victim:
                                        "For example, they are the victim's mother, father, grandparent.",
                                    claimant:
                                        "For example, they are the claimant's mother, father, grandparent."
                                }
                            },
                            meta: {
                                summary: {
                                    title: {
                                        mainapplicant: {
                                            victim: 'What is your relationship to the victim?',
                                            claimant: 'What is your relationship to the claimant?'
                                        },
                                        rep: {
                                            victim: 'What is their relationship to the victim?',
                                            claimant: 'What is their relationship to the claimant?'
                                        }
                                    }
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-relationship': {
                                    mainapplicant: {
                                        victim: 'Enter your relationship to the victim',
                                        claimant: 'Enter your relationship to the claimant'
                                    },
                                    rep: {
                                        victim: 'Enter their relationship to the victim',
                                        claimant: 'Enter their relationship to the claimant'
                                    }
                                }
                            },
                            characterCount: {
                                claimant:
                                    'Relationship to the claimant must be 50 characters or less',
                                victim: 'Relationship to the victim must be 50 characters or less'
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
                        ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'],
                        'q-mainapplicant-relationship.title.mainapplicant.claimant',
                        ['|role.all', 'mainapplicant', 'incapable', 'proxy', 'deceased'],
                        'q-mainapplicant-relationship.title.mainapplicant.claimant',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-relationship.title.mainapplicant.victim',
                        ['|role.all', 'rep', 'deceased'],
                        'q-mainapplicant-relationship.title.rep.claimant',
                        ['|role.all', 'rep', 'nonDeceased'],
                        'q-mainapplicant-relationship.title.rep.victim'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-relationship.description.mainapplicant',
                        ['|role.all', 'rep', 'deceased'],
                        'q-mainapplicant-relationship.description.rep.claimant',
                        ['|role.all', 'rep', 'nonDeceased'],
                        'q-mainapplicant-relationship.description.rep.victim'
                    ],
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'],
                                'q-mainapplicant-relationship.meta.summary.title.mainapplicant.claimant',
                                ['|role.all', 'mainapplicant', 'incapable', 'proxy', 'deceased'],
                                'q-mainapplicant-relationship.meta.summary.title.mainapplicant.claimant',
                                ['|role.all', 'mainapplicant'],
                                'q-mainapplicant-relationship.meta.summary.title.mainapplicant.victim',
                                ['|role.all', 'rep', 'deceased'],
                                'q-mainapplicant-relationship.meta.summary.title.rep.claimant',
                                ['|role.all', 'rep', 'nonDeceased'],
                                'q-mainapplicant-relationship.meta.summary.title.rep.victim'
                            ]
                        }
                    },
                    errorMessage: {
                        maxLength: [
                            '|l10nt',
                            ['|role.all', 'deceased'],
                            'errorMessage.characterCount.claimant',
                            ['|role.all', 'nonDeceased'],
                            'errorMessage.characterCount.victim'
                        ]
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-relationship': [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'deceased'],
                        'errorMessage.required.q-mainapplicant-relationship.mainapplicant.claimant',
                        ['|role.all', 'mainapplicant', 'nonDeceased'],
                        'errorMessage.required.q-mainapplicant-relationship.mainapplicant.victim',
                        ['|role.all', 'rep', 'deceased'],
                        'errorMessage.required.q-mainapplicant-relationship.rep.claimant',
                        ['|role.all', 'rep', 'nonDeceased'],
                        'errorMessage.required.q-mainapplicant-relationship.rep.victim'
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
                    target: '#task-list',
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
                        // Main Applicant role
                        ['|role.any', 'mainapplicant', 'rep']
                    ]
                },
                {
                    target: 'p-mainapplicant-shared-responsibility'
                }
            ]
        }
    }
};
