'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'task-list'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'task-list',
                    resources: {
                        's-about-application': {
                            title: {
                                adult: {
                                    capable: 'Tell us about your application'
                                },
                                proxy: "Tell us about the victim's application",
                                deceased: "Tell us about the claimant's application"
                            },
                            tasks: {
                                't-about-application': {
                                    title: {
                                        adult: {
                                            capable: 'About your application'
                                        },
                                        proxy: "About the victim's application",
                                        deceased: "About the claimant's application"
                                    }
                                }
                            }
                        },
                        s_applicant_details: {
                            title: {
                                adult: {
                                    capable: 'Provide your details'
                                },
                                proxy: "Provide the victim's details",
                                deceased: "Provide the claimant's details"
                            },
                            tasks: {
                                't_applicant_personal-details': {
                                    title: {
                                        adult: {
                                            capable: 'Your details'
                                        },
                                        proxy: "Victim's details",
                                        deceased: "Claimant's details"
                                    }
                                },
                                't_applicant_residency-and-nationality': {
                                    title: {
                                        adult: {
                                            capable: 'Your residency and nationality'
                                        },
                                        proxy: "Victim's residency and nationality",
                                        deceased: "Claimant's residency and nationality"
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
            required: ["task-list"],
            properties: {
                'task-list': {
                    type: 'object',
                    title: 'Claim criminal injuries compensation',
                    description:
                        'You can <a href="/account/sign-in" class="govuk-link">create a GOV.UK One Login</a> to save your application and return to it later.',
                    properties: {
                        taskListInfo: {
                            type: 'object',
                            labelCompleted: 'Completed',
                            labelIncomplete: 'Incomplete',
                            labelCannotStart: 'Cannot start yet',
                            sections: [
                                {
                                    id: 's-about-application',
                                    title: [
                                        '|l10nt',
                                        ['|role.all', 'proxy', 'nonDeceased'],
                                        's-about-application.title.proxy',
                                        [
                                            'or',
                                            ['|role.all', 'myself', 'deceased'],
                                            ['|role.all', 'myself', 'nonDeceased']
                                        ],
                                        's-about-application.title.adult.capable',
                                        ['|role.all', 'proxy', 'deceased'],
                                        's-about-application.title.deceased'
                                    ],
                                    tasks: [
                                        {
                                            id: 't-about-application',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's-about-application.tasks.t-about-application.title.proxy',
                                                [
                                                    'or',
                                                    ['|role.all', 'myself', 'deceased'],
                                                    ['|role.all', 'myself', 'nonDeceased']
                                                ],
                                                's-about-application.tasks.t-about-application.title.adult.capable',
                                                ['|role.all', 'proxy', 'deceased'],
                                                's-about-application.tasks.t-about-application.title.deceased'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_details',
                                    title: [
                                        '|l10nt',
                                        ['|role.all', 'proxy', 'nonDeceased'],
                                        's_applicant_details.title.proxy',
                                        [
                                            'or',
                                            ['|role.all', 'myself', 'deceased'],
                                            ['|role.all', 'myself', 'nonDeceased']
                                        ],
                                        's_applicant_details.title.adult.capable',
                                        ['|role.all', 'proxy', 'deceased'],
                                        's_applicant_details.title.deceased'
                                    ],
                                    tasks: [
                                        {
                                            id: 't_applicant_personal-details',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's_applicant_details.tasks.t_applicant_personal-details.title.proxy',
                                                [
                                                    'or',
                                                    ['|role.all', 'myself', 'deceased'],
                                                    ['|role.all', 'myself', 'nonDeceased']
                                                ],
                                                's_applicant_details.tasks.t_applicant_personal-details.title.adult.capable',
                                                ['|role.all', 'proxy', 'deceased'],
                                                's_applicant_details.tasks.t_applicant_personal-details.title.deceased'
                                            ]
                                        },
                                        {
                                            id: 't_applicant_residency-and-nationality',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's_applicant_details.tasks.t_applicant_residency-and-nationality.title.proxy',
                                                [
                                                    'or',
                                                    ['|role.all', 'myself', 'deceased'],
                                                    ['|role.all', 'myself', 'nonDeceased']
                                                ],
                                                's_applicant_details.tasks.t_applicant_residency-and-nationality.title.adult.capable',
                                                ['|role.all', 'proxy', 'deceased'],
                                                's_applicant_details.tasks.t_applicant_residency-and-nationality.title.deceased'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    meta: {
                        classifications: {
                            theme: 'task-list'
                        }
                    }
                }
            },
            examples: [{
                "task-list": {
                    taskListInfo: {
                        type: 'object',
                        labelCompleted: 'Completed',
                        labelIncomplete: 'Incomplete',
                        labelCannotStart: 'Cannot start yet',
                        sections: {}
                    }
                }
            }],
            invalidExamples: [
                {
                    'foo': 'bar'
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
