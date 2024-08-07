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
                        s_applicant_details: {
                            title: {
                                adult: {
                                    capable: 'Provide your details'
                                },
                                proxy: "Provide details of the victim",
                                deceased: "Provide details of the person who is claiming"
                            },
                            tasks: {
                                't_applicant_personal-details': {
                                    title: {
                                        adult: {
                                            capable: 'Your details'
                                        },
                                        proxy: "Victim's details",
                                        deceased: "Claimant details"
                                    }
                                },
                                't_applicant_residency-and-nationality': {
                                    title: {
                                        adult: {
                                            capable: 'Your residency and nationality'
                                        },
                                        proxy: "About the victim's residency and nationality",
                                        deceased: "About the claimant's residency and nationality"
                                    }
                                }
                            }
                        },
                        s_applicant_authority: {
                            title: {
                                proxy: {
                                    deceased: 'Provide details of the person acting on behalf of the claimant',
                                    nonDeceased: 'Provide details of the person acting on behalf of the victim'
                                }
                            },
                            tasks : {
                                't_mainapplicant_authority': {
                                    title: {
                                        proxy: {
                                            deceased: 'Details of the person acting on behalf of the claimant',
                                            nonDeceased: 'Details of the person acting on behalf of the victim'
                                        }
                                    }
                                },
                                't_rep_details': {
                                    title: {
                                        proxy: {
                                            deceased: 'Details of the person acting on behalf of the claimant',
                                            nonDeceased: 'Details of the person acting on behalf of the victim'
                                        }
                                    }
                                }
                            }
                        },
                        's_applicant_about-deceased': {
                            tasks: {
                                't_applicant_relationship-to-deceased': {
                                    title: {
                                        myself: {
                                            deceased: 'Your relationship to the person who died'
                                        },
                                        proxy: {
                                            deceased: "The claimant's relationship to the person who died"
                                        }
                                    }
                                }
                            }
                        },
                        's_applicant_about-injuries': {
                            title: {
                                myself: {
                                    nonDeceased: 'Tell us about your injuries and treatment'
                                },
                                proxy: {
                                    nonDeceased: "Tell us about the victim's injuries and treatment"
                                }
                            },
                            tasks: {
                                't_applicant_about-injuries': {
                                    title: {
                                        myself: {
                                            nonDeceased: 'About your injuries'
                                        },
                                        proxy: {
                                            nonDeceased: "About the victim's injuries"
                                        }
                                    }
                                },
                                't_applicant_about-treatment': {
                                    title: {
                                        myself: {
                                            nonDeceased: 'Your treatment'
                                        },
                                        proxy: {
                                            nonDeceased: "The victim's treatment"
                                        }
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
            required: ['task-list'],
            properties: {
                'task-list': {
                    type: 'object',
                    title: 'Claim criminal injuries compensation',
                    description:
                        'You can <a href="/account/sign-in" class="govuk-link">create a GOV.UK One Login</a> to save your application and return to it later.',
                    properties: {
                        taskListInfo: {
                            type: 'object',
                            sections: [
                                {
                                    id: 's-about-application',
                                    title: 'Tell us about your application',
                                    tasks: [
                                        {
                                            id: 't-about-application',
                                            title: 'About your application'
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
                                },
                                {
                                    id: 's_applicant_authority',
                                    title:  [
                                        '|l10nt',
                                        ['|role.all', 'proxy', 'nonDeceased'],
                                        's_applicant_authority.title.proxy.nonDeceased',
                                        ['|role.all', 'proxy', 'deceased'],
                                        's_applicant_authority.title.proxy.deceased'
                                    ],
                                    tasks: [
                                        {
                                            id: 't_mainapplicant_authority',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's_applicant_authority.tasks.t_mainapplicant_authority.title.proxy.nonDeceased',
                                                ['|role.all', 'proxy', 'deceased'],
                                                's_applicant_authority.tasks.t_mainapplicant_authority.title.proxy.deceased'
                                            ]
                                        },
                                        {
                                            id: 't_rep_details',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's_applicant_authority.tasks.t_rep_details.title.proxy.nonDeceased',
                                                ['|role.all', 'proxy', 'deceased'],
                                                's_applicant_authority.tasks.t_rep_details.title.proxy.deceased'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_about-deceased',
                                    title: 'Tell us about the person who died',
                                    tasks: [
                                        {
                                            id: 't_applicant_relationship-to-deceased',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'myself', 'deceased'],
                                                's_applicant_about-deceased.tasks.t_applicant_relationship-to-deceased.title.myself.deceased',
                                                ['|role.all', 'proxy', 'deceased'],
                                                's_applicant_about-deceased.tasks.t_applicant_relationship-to-deceased.title.proxy.deceased'
                                            ]
                                        },
                                        {
                                            id: 't_applicant_about-who-died',
                                            title: 'About the person who died'
                                        },
                                        {
                                            id: 't_applicant_funeral-costs',
                                            title: 'Funeral costs'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_about-the-crime',
                                    title: 'Provide details of the crime and offender',
                                    tasks: [
                                        {
                                            id: 't_applicant_about-the-crime',
                                            title: 'About the crime'
                                        },
                                        {
                                            id: 't_offender_about-the-offender',
                                            title: 'About the offender'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_about-injuries',
                                    title: [
                                        '|l10nt',
                                        ['|role.all', 'myself', 'nonDeceased'],
                                        's_applicant_about-injuries.title.myself.nonDeceased',
                                        ['|role.all', 'proxy', 'nonDeceased'],
                                        's_applicant_about-injuries.title.proxy.nonDeceased'
                                    ],
                                    tasks: [
                                        {
                                            id: 't_applicant_about-injuries',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'myself', 'nonDeceased'],
                                                's_applicant_about-injuries.tasks.t_applicant_about-injuries.title.myself.nonDeceased',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's_applicant_about-injuries.tasks.t_applicant_about-injuries.title.proxy.nonDeceased'
                                            ]
                                        },
                                        {
                                            id: 't_applicant_impact-of-injuries',
                                            title: 'The impact the injuries have had'
                                        },
                                        {
                                            id: 't_applicant_about-treatment',
                                            title: [
                                                '|l10nt',
                                                ['|role.all', 'myself', 'nonDeceased'],
                                                's_applicant_about-injuries.tasks.t_applicant_about-treatment.title.myself.nonDeceased',
                                                ['|role.all', 'proxy', 'nonDeceased'],
                                                's_applicant_about-injuries.tasks.t_applicant_about-treatment.title.proxy.nonDeceased'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_other-compensation',
                                    title: 'Provide details of other compensation applications',
                                    tasks: [
                                        {
                                            id: 't_applicant_other-compensation',
                                            title: 'Other compensation'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_additional-information',
                                    title: 'Tell us about anything else relevant to the application',
                                    tasks: [
                                        {
                                            id: 't_applicant_additional-information',
                                            title: "Additional information"
                                        }
                                    ]
                                },
                                {
                                    id: 's-check-your-answers',
                                    title: 'Check your answers and submit your application',
                                    tasks: [
                                        {
                                            id: 't-check-your-answers',
                                            title: "Check your answers and submit application"
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
            meta: {
                pageType: 'task-list'
            },
            examples: [
                {
                    'task-list': {
                        taskListInfo: {
                            type: 'object',
                            sections: []
                        }
                    }
                }
            ],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        type: 'final'
    }
};
