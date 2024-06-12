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
            additionalProperties: false,
            properties: {
                'task-list': {
                    type: 'object',
                    title: 'Claim criminal injuries compensation',
                    description:
                        'You can <a href="/account/sign-in" class="govuk-link">create a GOV.UK One Login</a> to save your appliciation and return to it later.',
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
                                    // cond: ['|role.any', 'proxy', 'myself'],
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
                                            ],
                                            hint: 'This is a hint'
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
                                    // cond: ['|role.all', 'myself'],
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
                                    id: 's_main-applicant_authority',
                                    title: 's_main-applicant_authority',
                                    cond: ['|role.all', 'mainapplicant'],
                                    tasks: [
                                        {
                                            id: 't_main-applicant_authority',
                                            title: 't_main-applicant_authority'
                                        }
                                    ]
                                },
                                {
                                    id: 's_rep_details',
                                    title: 's_rep_details',
                                    cond: ['|role.all', 'rep'],
                                    tasks: [
                                        {
                                            id: 't_rep_details',
                                            title: 't_rep_details'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_about-deceased',
                                    title: 's_applicant_about-deceased',
                                    cond: ['|role.all', 'deceased'],
                                    tasks: [
                                        {
                                            id: 't_applicant_relationship-to-deceased',
                                            title: 't_applicant_relationship-to-deceased'
                                        },
                                        {
                                            id: 't_applicant_about-who-died', // should the context of this task be "deceased" givn that that is what it pertains to?
                                            title: 't_applicant_about-who-died'
                                        },
                                        {
                                            id: 't_applicant_funeral-costs',
                                            title: 't_applicant_funeral-costs'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_about-the-crime',
                                    title: 's_applicant_about-the-crime',
                                    // cond: ['|role.all', 'proxy', 'myself'],
                                    tasks: [
                                        {
                                            id: 't_applicant_about-the-crime',
                                            title: 't_applicant_about-the-crime'
                                        },
                                        {
                                            id: 't_offender_about-the-offender', // we have an offender context under the applicant context in the section id. Is this ok?
                                            title: 't_offender_about-the-offender'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_about-injuries',
                                    title: 's_applicant_about-injuries',
                                    cond: ['|role.none', 'deceased'],
                                    tasks: [
                                        {
                                            id: 't_applicant_about-injuries',
                                            title: 't_applicant_about-injuries'
                                        },
                                        {
                                            id: 't_applicant_impact-of-injuries',
                                            title: 't_applicant_impact-of-injuries'
                                        },
                                        {
                                            id: 't_applicant_about-treatment',
                                            title: 't_applicant_about-treatment'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_other-compensation',
                                    title: 's_applicant_other-compensation',
                                    // cond: ['|role.all', 'proxy', 'myself'],
                                    tasks: [
                                        {
                                            id: 't_applicant_other-compensation',
                                            title: 't_applicant_other-compensation'
                                        }
                                    ]
                                },
                                {
                                    id: 's_applicant_additional-information',
                                    title: 's_applicant_additional-information',
                                    // cond: ['|role.all', 'proxy', 'myself'],
                                    tasks: [
                                        {
                                            id: 't_applicant_additional-information',
                                            title: 't_applicant_additional-information'
                                        }
                                    ]
                                },
                                // {
                                //     id: 's_deceased_details',
                                //     title: 'Tell us about the person who died',
                                //     cond: ['|role.all', 'proxy', 'deceased'],
                                //     tasks: [
                                //         {
                                //             id: 't_deceased_relationship-to-applicant',
                                //             title: 'Your relationship to the person who died',
                                //             // href: '/apply/info-context-relationship-to-deceased',
                                //             status: {
                                //                 text: 'custom status',
                                //                 classes: 'govuk-task-list__status--cannot-start-yet'
                                //             }
                                //         },
                                //         {
                                //             id: 't_deceased_personal-details',
                                //             title: 'About the person who died',
                                //             // href: '/apply/info-context-deceased-details',
                                //             status: 'cannotStartYet'
                                //         },
                                //         {
                                //             id: 't_deceased_funeral-costs',
                                //             title: 'Funeral costs',
                                //             // href: '/apply/info-context-funeral-costs',
                                //             status: 'cannotStartYet'
                                //         }
                                //     ]
                                // },
                                // {
                                //     title: 'Provide details of the crime and offender',
                                //     id: 's_offender_details',
                                //     // cond: ['|role.any', 'proxy', 'myself'],
                                //     tasks: [
                                //         {
                                //             id: 't_offender_about-the-crime', // t-about-the-crime ?
                                //             title: 'About the crime',
                                //             // href: '/apply/info-before-you-continue',
                                //             status: 'cannotStartYet'
                                //         },
                                //         {
                                //             id: 't_offender_about-the-offender', // t-about-the-offender ?
                                //             title: 'About the offender',
                                //             // href: '/apply/info-context-offender',
                                //             status: 'cannotStartYet'
                                //         }
                                //     ]
                                // },
                                // {
                                //     title: 'Provide details of other compensation applications',
                                //     id: 's-other-compensation-details',
                                //     // cond: ['|role.any', 'proxy', 'myself'],
                                //     tasks: [
                                //         {
                                //             id: 't-other-compensation-details',
                                //             title: 'Other compensation',
                                //             // href: '/apply/info-context-compensation',
                                //             status: 'cannotStartYet'
                                //         }
                                //     ]
                                // },
                                {
                                    title: 'Check your answers and submit',
                                    id: 's-check-your-answers',
                                    // cond: ['|role.any', 'proxy', 'myself'],
                                    tasks: [
                                        {
                                            id: 't-check-your-answers',
                                            title: 'Check your answers and submit application'
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
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
