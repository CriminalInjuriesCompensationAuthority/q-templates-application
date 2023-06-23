'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-armed-forces-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-armed-forces-relative',
                    resources: {
                        'q-applicant-armed-forces-relative': {
                            title: {
                                applicant:
                                    'Were you a close relative of a member of the British armed forces living with them when the crime happened?'
                            },
                            details: {
                                applicant: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with who qualifies as a close relative of a member of the British Armed Forces",html: "<p class='govuk-body'>A person is a close relative of a member of the British armed forces if they are living together as part of the same household and is either:</p>
                                <ul class='govuk-list govuk-list--bullet'>
                                <li>their spouse or civil partner</li>
                                <li>their partner (other than a spouse or civil partner) for a continuous period of at least two years immediately before the date of the crime</li>
                                <li>a child aged under 18 of that member of the British Armed Forces or of their spouse, civil partner or partner</li>
                                <li>a child of that member of the British Armed Forces who is financially or physically dependent on that person as a result of a physical or mental disability</li></ul>"})}}`
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a close relative of a member of the British armed forces living with them when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title:
                                        'Were you a close relative of a member of the British armed forces living with them when the crime happened?'
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
            required: ['q-applicant-armed-forces-relative'],
            additionalProperties: false,
            properties: {
                'q-applicant-armed-forces-relative': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-armed-forces-relative.title.applicant'
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
                                ['|role.all'],
                                'q-applicant-armed-forces-relative.meta.summary.title'
                            ]
                        }
                    }
                },
                'armed-forces-relative-info': {
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-armed-forces-relative.details.applicant'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-armed-forces-relative': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-armed-forces-relative.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-armed-forces-relative': true
                },
                {
                    'q-applicant-armed-forces-relative': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-armed-forces-relative': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue',
                    cond: [
                        '==',
                        '$.answers.p-applicant-armed-forces-relative.q-applicant-armed-forces-relative',
                        true
                    ]
                },
                {
                    target: 'p-applicant-victim-human-trafficking',
                    cond: [
                        '==',
                        '$.answers.p-applicant-armed-forces-relative.q-applicant-armed-forces-relative',
                        false
                    ]
                }
            ]
        }
    }
};
