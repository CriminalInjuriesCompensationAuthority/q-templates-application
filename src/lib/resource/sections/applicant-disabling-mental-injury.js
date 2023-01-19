'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-disabling-mental-injury'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-disabling-mental-injury',
                    resources: {
                        'applicant-disabling-mental-injury': {
                            title: {
                                myself:
                                    'Do you have a disabling mental injury as a result of witnessing the crime',
                                proxy:
                                    'Do they have a disabling mental injury as a result of witnessing the crime?'
                            },
                            description: {
                                myself:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What is a disabling mental injury?",html: \'<p class="govuk-body">We can only pay for a disabling mental injury that:</p></p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do, like going to school or university, seeing friends, working or having a relationship</li><li>lasts six weeks or more</li><li>is confirmed by a diagnosis or prognosis by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if you do not have a diagnosis yet. We’ll tell you what medical evidence you’ll need. This may be a copy of your medical records, a GP report or a specialist report.</p>\'}) }}',
                                proxy:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What is a disabling mental injury?",html: \'<p class="govuk-body">We can only pay for a disabling mental injury that:</p></p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do, like going to school or university, seeing friends, working or having a relationship</li><li>lasts six weeks or more</li><li>is confirmed by a diagnosis or prognosis by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if the claimant does not have a diagnosis yet. We’ll tell you what medical evidence they’ll need. This may be a copy of their medical records, a GP report or a specialist report.</p>\'}) }}'
                            },
                            error: {
                                myself:
                                    'Select yes if you have a disabling mental injury as a result of witnessing the crime',
                                proxy:
                                    'Select yes if they have a disabling mental injury as a result of witnessing the crime'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-disabling-mental-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-disabling-mental-injury': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-disabling-mental-injury.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-disabling-mental-injury.title.proxy'
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
                                'applicant-disabling-mental-injury.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-disabling-mental-injury.title.proxy'
                            ]
                        }
                    }
                },
                'disabling-mental-injury-info': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-disabling-mental-injury.description.myself',
                        ['|role.all', 'proxy'],
                        'applicant-disabling-mental-injury.description.proxy'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-disabling-mental-injury': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-disabling-mental-injury.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-disabling-mental-injury.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-disabling-mental-injury': 'true'
                },
                {
                    'q-applicant-disabling-mental-injury': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-disabling-mental-injury': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-offender'
                }
            ]
        }
    }
};
