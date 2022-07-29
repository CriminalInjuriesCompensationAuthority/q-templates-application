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
                                mainapplicant:
                                    'Do you share parental responsibility for the child with another person?',
                                rep:
                                    "Do they share parental responsibility for the child with another person?'"
                            },
                            description: {
                                mainapplicant:
                                    'This means you share this with another person named as their birth, step or adoptive parent. Or, someone named on a special guardianship order.',
                                rep:
                                    "This means they share this with another person named as the child's birth, step or adoptive parent. Or, someone named on a special guardianship order."
                            },
                            meta: {
                                summary: {
                                    title: {
                                        mainapplicant: 'Do you share parental responsibility?',
                                        rep: 'Do they share parental responsibility?'
                                    }
                                }
                            }
                        },
                        errorMessage: {
                            required: {
                                'q-mainapplicant-relationship': {
                                    mainapplicant:
                                        'Select yes if you share parental responsibility for the child with another person',
                                    rep:
                                        'Select yes if they share parental responsibility for the child with another person'
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
            required: ['q-mainapplicant-shared-responsibility'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-shared-responsibility': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'q-mainapplicant-shared-responsibility.title.mainapplicant',
                        ['|role.all', 'rep'],
                        'q-mainapplicant-shared-responsibility.title.rep'
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
                                ['|role.all', 'mainapplicant'],
                                'q-mainapplicant-shared-responsibility.meta.summary.title.mainapplicant',
                                ['|role.all', 'rep'],
                                'q-mainapplicant-shared-responsibility.meta.summary.title.rep'
                            ]
                        }
                    }
                },
                'mainapplicant-shared-responsibility': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding shared parental responsibility",html: \'<p class="govuk-body">There are a wide range of situations where a person holds parental responsibility for a victim. You may or may not hold parental responsibility for the victim and not know.</p><p class="govuk-body">Find out if you have parental responsibility and what this means <a target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">on the UK Government website(opens in new tab)</a>.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-shared-responsibility': [
                        '|l10nt',
                        ['|role.all', 'mainapplicant'],
                        'errorMessage.required.q-mainapplicant-shared-responsibility.mainapplicant',
                        ['|role.all', 'rep'],
                        'errorMessage.required.q-mainapplicant-shared-responsibility.rep'
                    ]
                }
            },
            examples: [
                {
                    'q-mainapplicant-shared-responsibility': true
                },
                {
                    'q-mainapplicant-shared-responsibility': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-shared-responsibility': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-shared-responsibility-name',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-shared-responsibility.q-mainapplicant-shared-responsibility',
                        true
                    ]
                },
                {
                    target: 'p-mainapplicant-care-order'
                }
            ]
        }
    }
};
