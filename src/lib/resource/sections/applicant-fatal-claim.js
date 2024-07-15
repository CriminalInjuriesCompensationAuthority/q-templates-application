'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-fatal-claim'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-fatal-claim',
                    resources: {
                        'q-applicant-fatal-claim': {
                            title: {
                                myself: 'I am applying because I was the victim of a violent crime',
                                proxy:
                                    'I am applying on behalf of someone who was the victim of a violent crime'
                            },
                            description: {
                                myself:
                                    'If you are paying for the funeral of the person who died, you may be able to get help with the cost. If you are their relative, you may also be eligible for bereavement payments.',
                                proxy:
                                    "If the person you're applying on behalf of is paying for the funeral of the person who died, they may be able to get help with the cost. If they are their relative, they may also be eligible for bereavement payments."
                            },
                            details: {
                                myself: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Both of these options apply to me",html: "<p class='govuk-body'>If both of the options above apply you'll need to make 2 separate applications.</p>"})}}`,
                                proxy: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Both of these options apply",html: "<p class='govuk-body'>If both of the options above apply you'll need to make 2 separate applications.</p>"})}}`
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-fatal-claim'],
            additionalProperties: false,
            properties: {
                'q-applicant-fatal-claim': {
                    type: 'boolean',
                    title: "Select the reason you're applying",
                    oneOf: [
                        {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-fatal-claim.title.myself',
                                ['|role.all', 'proxy'],
                                'q-applicant-fatal-claim.title.proxy'
                            ],
                            description:
                                'This could include a physical injury, disabling mental injury or abuse over a period of time. The disabling mental injury could be due to witnessing a loved one being injured in a violent crime.',
                            const: false
                        },
                        {
                            title: 'I am applying because someone died due to a violent crime',
                            description: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'q-applicant-fatal-claim.description.myself',
                                ['|role.all', 'proxy'],
                                'q-applicant-fatal-claim.description.proxy'
                            ],
                            const: true
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: {
                            title: 'Select why you are applying'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                },
                'applicant-fatal-claim-info': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'q-applicant-fatal-claim.details.myself',
                        ['|role.all', 'proxy'],
                        'q-applicant-fatal-claim.details.proxy'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-fatal-claim': "Select the reason you're applying"
                }
            },
            examples: [
                {
                    'q-applicant-fatal-claim': true
                },
                {
                    'q-applicant-fatal-claim': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-fatal-claim': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-FATAL-CLAIM': [
                {
                    target: 'p-applicant-claim-type',
                    cond: ['|role.all', 'deceased']
                },
                {
                    target: 'p-applicant-applied-before-for-this-crime'
                }
            ]
        }
    }
};
