'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-immediate-aftermath'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-immediate-aftermath',
                    resources: {
                        'applicant-immediate-aftermath': {
                            title: {
                                myself:
                                    'Were you there when the crime happened, or involved in the immediate aftermath?',
                                proxy:
                                    'Was the claimant there when the crime happened, or involved in the immediate aftermath?'
                            },
                            error: {
                                myself:
                                    'Select yes if you were there when the crime happened, or involved in the immediate aftermath',
                                proxy:
                                    'Select yes if the claimant was there when the crime happened, or involved in the immediate aftermath'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-immediate-aftermath'],
            additionalProperties: false,
            properties: {
                'q-applicant-immediate-aftermath': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-immediate-aftermath.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-immediate-aftermath.title.proxy'
                    ],
                    type: 'boolean',
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
                            theme: 'crime'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-immediate-aftermath.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-immediate-aftermath.title.proxy'
                            ]
                        }
                    }
                },
                'immediate-aftermath-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What does immediate aftermath mean?",html: \'<p class="govuk-body">You were usually involved in the immediate aftermath if you arrived at the scene of the crime straight after it happened.</p></p>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-immediate-aftermath': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-immediate-aftermath.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-immediate-aftermath.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-immediate-aftermath': 'true'
                },
                {
                    'q-applicant-immediate-aftermath': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-immediate-aftermath': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-disabling-mental-injury',
                    cond: [
                        '==',
                        '$.answers.p-applicant-immediate-aftermath.q-applicant-immediate-aftermath',
                        true
                    ]
                },
                {
                    target: 'p--context-offender',
                    cond: [
                        '==',
                        '$.answers.p-applicant-immediate-aftermath.q-applicant-immediate-aftermath',
                        false
                    ]
                }
            ]
        }
    }
};
