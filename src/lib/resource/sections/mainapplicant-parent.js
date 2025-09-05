'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-parent'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-parent',
                    resources: {
                        'q-mainapplicant-parent': {
                            title: {
                                deceased: "Are you the claimant's parent?",
                                nonDeceased: "Are you the victim's parent?"
                            },
                            description: {
                                deceased:
                                    'This means you have parental responsibility for the claimant as their birth, step or adoptive parent.',
                                nonDeceased:
                                    'This means you have parental responsibility for the victim as their birth, step or adoptive parent.'
                            },
                            details: {
                                deceased: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Can I apply for the claimant?",html: "<p class='govuk-body'>You need to prove you have parental responsibility for the claimant to apply.</p><p class='govuk-body'>To prove this, you'll need relevant documents your name is on, such as:</p><ul class='govuk-list govuk-list--bullet'><li>the claimant's full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class='govuk-body'>Understand more about <a class='govuk-link' href='https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility' target='_blank' >parental responsibility (opens in new tab).</a></p>"})}}`,
                                nonDeceased: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Can I apply for the victim?",html: "<p class='govuk-body'>You need to prove you have parental responsibility for the victim to apply.</p><p class='govuk-body'>To prove this, you'll need relevant documents your name is on, such as:</p><ul class='govuk-list govuk-list--bullet'><li>the victim's full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class='govuk-body'>Understand more about <a class='govuk-link' href='https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility' target='_blank' >parental responsibility (opens in new tab).</a></p>"})}}`
                            },
                            meta: {
                                summary: {
                                    title: {
                                        deceased: "Are you the claimant's parent?",
                                        nonDeceased: "Are you the victim's parent?"
                                    }
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-parent': {
                                    deceased: "Select yes if you are the claimant's parent",
                                    nonDeceased: "Select yes if you are the victim's parent"
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
            required: ['q-mainapplicant-parent'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-parent': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'deceased'],
                        'q-mainapplicant-parent.title.deceased',
                        ['|role.all', 'nonDeceased'],
                        'q-mainapplicant-parent.title.nonDeceased'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'deceased'],
                        'q-mainapplicant-parent.description.deceased',
                        ['|role.all', 'nonDeceased'],
                        'q-mainapplicant-parent.description.nonDeceased'
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
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'deceased'],
                                'q-mainapplicant-parent.meta.summary.title.deceased',
                                ['|role.all', 'nonDeceased'],
                                'q-mainapplicant-parent.meta.summary.title.nonDeceased'
                            ]
                        }
                    }
                },
                'can-i-apply-for-child': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'deceased'],
                        'q-mainapplicant-parent.details.deceased',
                        ['|role.all', 'nonDeceased'],
                        'q-mainapplicant-parent.details.nonDeceased'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-parent': [
                        '|l10nt',
                        ['|role.all', 'deceased'],
                        'errorMessage.required.q-mainapplicant-parent.deceased',
                        ['|role.all', 'nonDeceased'],
                        'errorMessage.required.q-mainapplicant-parent.nonDeceased'
                    ]
                }
            },
            examples: [
                {
                    'q-mainapplicant-parent': true
                },
                {
                    'q-mainapplicant-parent': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-parent': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--has-parental-responsibility',
                    cond: ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false]
                },
                {
                    target: 'p--context-authority'
                }
            ]
        }
    }
};
