'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-applicant-details'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-applicant-details',
                    resources: {
                        'context-applicant-details': {
                            title: {
                                myself: 'Your details',
                                proxy: {
                                    nonDeceased: 'Victim details',
                                    deceased: 'Claimant details'
                                }
                            },
                            description: {
                                myself:
                                    '<p class="govuk-body">We’re going to ask for some details about you.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>contact you</li><li>get a report about the crime from the police</li></ul>',
                                proxy: {
                                    nonDeceased:
                                        '<p class="govuk-body">We’re going to ask for some details about the victim.</p><p class="govuk-body">We’ll use these to get a report about the crime from the police.</p>',
                                    deceased:
                                        '<p class="govuk-body">We’re going to ask for some details about the claimant.</p><p class="govuk-body">We’ll use these to get a report about the crime from the police.</p>'
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
                'context-applicant-details': {
                    // prettier-ignore
                    title: ['|l10nt',
                        ['|role.all', 'myself'], 'context-applicant-details.title.myself',
                        ['|role.all', 'proxy', 'nonDeceased'], 'context-applicant-details.title.proxy.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'], 'context-applicant-details.title.proxy.deceased'
                    ],
                    // prettier-ignore
                    description: ['|l10nt',
                        ['|role.all', 'myself'], 'context-applicant-details.description.myself',
                        ['|role.all', 'proxy', 'nonDeceased'], 'context-applicant-details.description.proxy.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'], 'context-applicant-details.description.proxy.deceased'
                    ]
                }
            },
            'task-list': {
                task: 't_applicant_personal-details'
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
                    target: 'p-applicant-enter-your-name',
                    cond: ['|role.all', 'proxy']
                },
                {
                    target: 'p-applicant-confirmation-method'
                }
            ]
        }
    }
};
