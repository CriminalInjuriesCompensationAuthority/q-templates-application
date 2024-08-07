'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-british-citizen-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-british-citizen-relative',
                    resources: {
                        'q-applicant-british-citizen-relative': {
                            title: {
                                applicant:
                                    'Were you a close relative of a British citizen when the crime happened?',
                                proxy:
                                    'Were they a close relative of a British citizen when the crime happened?'
                            },
                            details: {
                                applicant: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with who qualifies as a close relative of a British citizen",html: "<p class='govuk-body'>A person is a close relative of a British citizen if they are living together as part of the same household and is either:</p><ul class='govuk-list govuk-list--bullet'><li>their spouse or civil partner
                                </li><li>their partner (other than a spouse or civil partner) for a continuous period of at least two years immediately before the date of the crime
                                </li><li>a child aged under 18 of that citizen or of their spouse, civil partner or partner</li><li>a child of that citizen who is financially or physically dependent on that person as a result of a physical or mental disability</li></ul>"})}}`
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a close relative of a British citizen when the crime happened',
                                proxy:
                                    'Select yes if they were a close relative of a British citizen when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you a close relative of a British citizen when the crime happened?',
                                        proxy:
                                            'Were they a close relative of a British citizen when the crime happened?'
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
            required: ['q-applicant-british-citizen-relative'],
            additionalProperties: false,
            properties: {
                'q-applicant-british-citizen-relative': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-british-citizen-relative.title.proxy',
                        ['|role.all'],
                        'q-applicant-british-citizen-relative.title.applicant'
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
                            theme: 'residency-and-nationality'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'proxy'],
                                'q-applicant-british-citizen-relative.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-british-citizen-relative.meta.summary.title.applicant'
                            ]
                        }
                    }
                },
                'british-close-relative-info': {
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-british-citizen-relative.details.applicant'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-british-citizen-relative': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-british-citizen-relative.error.proxy',
                        ['|role.all'],
                        'q-applicant-british-citizen-relative.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-british-citizen-relative': true
                },
                {
                    'q-applicant-british-citizen-relative': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-british-citizen-relative': 'foo'
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
                        '==',
                        '$.answers.p-applicant-british-citizen-relative.q-applicant-british-citizen-relative',
                        true
                    ]
                },
                {
                    target: 'p-applicant-ordinarily-resident',
                    cond: [
                        '==',
                        '$.answers.p-applicant-british-citizen-relative.q-applicant-british-citizen-relative',
                        false
                    ]
                }
            ]
        }
    }
};
