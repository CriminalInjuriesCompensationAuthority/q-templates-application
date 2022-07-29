'use strict';

module.exports = {
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
                                adult: 'What is your relationship to the victim?',
                                child: 'What is your relationship to the child?'
                            },
                            rep: {
                                adult: "What is this person's relationship to the victim?",
                                child: "What is this person's relationship to the child?"
                            }
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
                                    mainapplicant: {
                                        adult: 'What is your relationship to the victim?',
                                        child: 'What is your relationship to the child?'
                                    },
                                    rep: {
                                        adult: 'What is their relationship to the victim?',
                                        child: 'What is their relationship to the child?'
                                    }
                                }
                            }
                        }
                    },
                    errorMessage: {
                        required: {
                            'q-mainapplicant-relationship': {
                                mainapplicant: {
                                    adult: 'Enter your relationship with the victim',
                                    child: 'Enter your relationship with the child?'
                                },
                                rep: {
                                    adult: 'Enter their relationship with the victim',
                                    child: 'Enter their relationship with the child'
                                }
                            }
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
            required: ['q-mainapplicant-relationship'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-relationship': {
                    type: 'string',
                    title: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'adult'],
                        'q-mainapplicant-relationship.title.mainapplicant.adult',
                        ['|role.all', 'mainapplicant', 'child'],
                        'q-mainapplicant-relationship.title.mainapplicant.child',
                        ['|role.all', 'rep', 'adult'],
                        'q-mainapplicant-relationship.title.rep.adult',
                        ['|role.all', 'rep', 'child'],
                        'q-mainapplicant-relationship.title.rep.child'
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
                                ['|role.all', 'mainapplicant', 'adult'],
                                'q-mainapplicant-relationship.meta.summary.title.mainapplicant.adult',
                                ['|role.all', 'mainapplicant', 'child'],
                                'q-mainapplicant-relationship.meta.summary.title.mainapplicant.child',
                                ['|role.all', 'rep', 'adult'],
                                'q-mainapplicant-relationship.meta.summary.title.rep.adult',
                                ['|role.all', 'rep', 'child'],
                                'q-mainapplicant-relationship.meta.summary.title.rep.child'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-relationship': [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'adult'],
                        'errorMessage.required.q-mainapplicant-relationship.mainapplicant.adult',
                        ['|role.all', 'mainapplicant', 'child'],
                        'errorMessage.required.q-mainapplicant-relationship.mainapplicant.child',
                        ['|role.all', 'rep', 'adult'],
                        'errorMessage.required.q-mainapplicant-relationship.rep.adult',
                        ['|role.all', 'rep', 'child'],
                        'errorMessage.required.q-mainapplicant-relationship.rep.child'
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
                    target: 'p-mainapplicant-shared-responsibility',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                        false
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    cond: [
                        'or',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                    ]
                },
                {
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
