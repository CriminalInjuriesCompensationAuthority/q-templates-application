'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-shared-responsibility'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-shared-responsibility',
                    resources: {
                        'q-mainapplicant-shared-responsibility': {
                            title: {
                                mainapplicant: {
                                    victim:
                                        'Do you share parental responsibility for the victim with another person?',
                                    claimant:
                                        'Do you share parental responsibility for the claimant with another person?'
                                },
                                rep: {
                                    victim:
                                        'Do they share parental responsibility for the victim with another person?',
                                    claimant:
                                        'Do they share parental responsibility for the claimant with another person?'
                                }
                            },
                            description: {
                                mainapplicant:
                                    'This means you share this with another person named as their birth, step-parent, adoptive parent or someone named on a special guardianship order.',
                                rep:
                                    'This means they share this with another person named as their birth, step-parent, adoptive parent or someone named on a special guardianship order.'
                            },
                            details: {
                                victim:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding shared parental responsibility",html: \'<p class="govuk-body">There are a wide range of situations where a person holds parental responsibility for a victim.</p><p class="govuk-body">Understand more about <a class="govuk-link" target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">parental responsibility (opens in new tab)</a>.</p>\'})}}',
                                claimant:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding shared parental responsibility",html: \'<p class="govuk-body">There are a wide range of situations where a person holds parental responsibility for a claimant.</p><p class="govuk-body">Understand more about <a class="govuk-link" target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">parental responsibility (opens in new tab)</a>.</p>\'})}}'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        mainapplicant: {
                                            victim: 'Do you share parental responsibility?',
                                            claimant: 'Do you share parental responsibility?'
                                        },
                                        rep: 'Do they share parental responsibility?'
                                    }
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-shared-responsibility': {
                                    mainapplicant: {
                                        victim:
                                            'Select yes if you share parental responsibility for the victim with another person',
                                        claimant:
                                            'Select yes if you share parental responsibility for the claimant with another person'
                                    },
                                    rep: {
                                        victim:
                                            'Select yes if they share parental responsibility for the victim with another person',
                                        claimant:
                                            'Select yes if they share parental responsibility for the claimant with another person'
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
            propertyNames: {
                enum: [
                    'q-mainapplicant-shared-responsibility',
                    'q-mainapplicant-shared-responsibility-name',
                    'mainapplicant-shared-responsibility'
                ]
            },
            required: ['q-mainapplicant-shared-responsibility'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-shared-responsibility': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'],
                        'q-mainapplicant-shared-responsibility.title.mainapplicant.claimant',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-shared-responsibility.title.mainapplicant.victim',
                        ['|role.all', 'rep', 'deceased'],
                        'q-mainapplicant-shared-responsibility.title.rep.claimant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-shared-responsibility.title.rep.victim'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-shared-responsibility.description.mainapplicant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-shared-responsibility.description.rep'
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
                                ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'],
                                'q-mainapplicant-shared-responsibility.meta.summary.title.mainapplicant.claimant',
                                ['|role.all', 'mainapplicant'],
                                'q-mainapplicant-shared-responsibility.meta.summary.title.mainapplicant.victim',
                                ['|role.all', 'rep'],
                                'q-mainapplicant-shared-responsibility.meta.summary.title.rep'
                            ]
                        }
                    }
                },
                'q-mainapplicant-shared-responsibility-name': {
                    type: 'string',
                    title: 'What is their full name?',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Name must be 50 characters or less'
                    },
                    description:
                        'We will never contact this person without your consent unless there is an exceptional situation where we have to.',
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: 'With who?'
                        }
                    }
                },
                'mainapplicant-shared-responsibility': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'],
                        'q-mainapplicant-shared-responsibility.details.claimant',
                        ['|role.all', 'rep', 'deceased'],
                        'q-mainapplicant-shared-responsibility.details.claimant',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-shared-responsibility.details.victim',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-shared-responsibility.details.victim'
                    ]
                }
            },
            allOf: [
                {
                    $ref:
                        '#/definitions/if-other-then-q-mainapplicant-shared-responsibility-name-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-mainapplicant-shared-responsibility-name-is-required': {
                    if: {
                        properties: {
                            'q-mainapplicant-shared-responsibility': {
                                const: true
                            }
                        },
                        required: ['q-mainapplicant-shared-responsibility']
                    },
                    then: {
                        required: ['q-mainapplicant-shared-responsibility-name'],
                        propertyNames: {
                            enum: [
                                'q-mainapplicant-shared-responsibility',
                                'q-mainapplicant-shared-responsibility-name',
                                'mainapplicant-shared-responsibility'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-shared-responsibility-name':
                                    'Enter their full name'
                            }
                        }
                    },
                    else: {
                        required: ['q-mainapplicant-shared-responsibility']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-shared-responsibility': [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'],
                        'errorMessage.required.q-mainapplicant-shared-responsibility.mainapplicant.claimant',
                        ['|role.all', 'rep', 'deceased'],
                        'errorMessage.required.q-mainapplicant-shared-responsibility.rep.claimant',
                        ['|role.all', 'mainapplicant'],
                        'errorMessage.required.q-mainapplicant-shared-responsibility.mainapplicant.victim',
                        ['|role.all', 'rep'],
                        'errorMessage.required.q-mainapplicant-shared-responsibility.rep.victim'
                    ]
                }
            },
            examples: [
                {
                    'q-mainapplicant-shared-responsibility': true,
                    'q-mainapplicant-shared-responsibility-name': 'Foo Bar'
                },
                {
                    'q-mainapplicant-shared-responsibility': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-shared-responsibility': 'foo'
                },
                {
                    'q-mainapplicant-shared-responsibility': true,
                    'q-mainapplicant-shared-responsibility-name': 12345
                },
                {
                    'q-mainapplicant-shared-responsibility-name': 'Foo Bar'
                },
                {
                    'q-mainapplicant-shared-responsibility': true,
                    'q-mainapplicant-shared-responsibility-name': null
                }
            ],
            options: {
                transformOrder: [
                    'q-mainapplicant-shared-responsibility-name',
                    'q-mainapplicant-shared-responsibility',
                    'mainapplicant-shared-responsibility'
                ],
                outputOrder: [
                    'q-mainapplicant-shared-responsibility',
                    'mainapplicant-shared-responsibility'
                ],
                properties: {
                    'q-mainapplicant-shared-responsibility': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-radios'
                            },
                            conditionalComponentMap: [
                                {
                                    itemValue: true,
                                    componentIds: ['q-mainapplicant-shared-responsibility-name']
                                }
                            ]
                        }
                    },
                    'q-mainapplicant-shared-responsibility-name': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20'
                            }
                        }
                    }
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-care-order'
                }
            ]
        }
    }
};
