'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data: '/answers/p-applicant-are-you-18-or-over/q-applicant-are-you-18-or-over'
                },
                ns: 'p--context-mainapplicant-details'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-mainapplicant-details',
                    resources: {
                        'details-context': {
                            title: {
                                child: {
                                    nonDeceased:
                                        'The person with parental responsibility for the victim',
                                    deceased:
                                        'The person with parental responsibility for the claimant'
                                },
                                incapable: {
                                    nonDeceased:
                                        'The person with legal authority to act on behalf of the victim',
                                    deceased:
                                        'The person with legal authority to act on behalf of the claimant'
                                }
                            },
                            description: {
                                child: {
                                    nonDeceased:
                                        '<p class="govuk-body">We\'re going to ask for details about the person who has parental responsibility for the victim. This means they have the legal authority to apply on their behalf.</p><p class="govuk-body">This could be:</p><ul class="govuk-list govuk-list--bullet"><li>the victim\'s birth, step or adoptive parent</li><li>a person named on a Special Guardianship order</li><li>the local authority</li></ul><h2 class="govuk-heading-m">If you do not have parental responsibility</h2><p class="govuk-body">You can still apply even if you do not have parental responsibility for the victim. If this is the case, we will ask you for the details of someone who does have the parental responsibility to act on behalf of the victim.</p><p class="govuk-body">This allows us to communicate with this person or organisation after you\'ve sent this application.</p>',
                                    deceased:
                                        '<p class="govuk-body">We\'re going to ask for details about the person who has parental responsibility for the claimant. This means they have the legal authority to apply on their behalf.</p><p class="govuk-body">This could be:</p><ul class="govuk-list govuk-list--bullet"><li>the claimant\'s birth, step or adoptive parent</li><li>a person named on a Special Guardianship order</li><li>the local authority</li></ul><h2 class="govuk-heading-m">If you do not have parental responsibility</h2><p class="govuk-body">You can still apply even if you do not have parental responsibility for the claimant. If this is the case, we will ask you for the details of someone who does have the parental responsibility to act on behalf of the claimant.</p><p class="govuk-body">This allows us to communicate with this person or organisation after you\'ve sent this application.</p>'
                                },
                                incapable: {
                                    nonDeceased:
                                        '<p class="govuk-body">You\'ve told us the person you\'re applying for is unable to handle their own affairs in relation to this application.</p><p class="govuk-body">Therefore, we\'re going to ask for details about the person who has legal authority to act on behalf of the victim.</p><p class="govuk-body">This could be:</p><ul class="govuk-list govuk-list--bullet"><li>a person appointed by a court</li><li>a person named on a power of attorney document</li><li>the local authority</li></ul><h2 class="govuk-heading-m">If you do not have legal authority</h2><p class="govuk-body">You can still apply even if you do not have legal authority to act on behalf of the victim. If this is the case, we will ask you for the details of someone who does have the legal authority to act on behalf of the victim.</p><p class="govuk-body">This allows us to communicate with the person who has authority after you\'ve sent this application.</p>',
                                    deceased:
                                        '<p class="govuk-body">You\'ve told us the person you\'re applying for is unable to handle their own affairs in relation to this application.</p><p class="govuk-body">Therefore, we\'re going to ask for details about the person who has legal authority to act on behalf of the claimant.</p><p class="govuk-body">This could be:</p><ul class="govuk-list govuk-list--bullet"><li>a person appointed by a court</li><li>a person named on a power of attorney document</li><li>the local authority</li></ul><h2 class="govuk-heading-m">If you do not have legal authority</h2><p class="govuk-body">You can still apply even if you do not have legal authority to act on behalf of the claimant. If this is the case, we will ask you for the details of someone who does have the legal authority to act on behalf of the claimant.</p><p class="govuk-body">This allows us to communicate with the person who has authority after you\'ve sent this application.</p>'
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
                'details-context': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'child', 'nonDeceased'],
                        'details-context.title.child.nonDeceased',
                        ['|role.all', 'child', 'deceased'],
                        'details-context.title.child.deceased',
                        ['|role.all', 'incapable', 'nonDeceased'],
                        'details-context.title.incapable.nonDeceased',
                        ['|role.all', 'incapable', 'deceased'],
                        'details-context.title.incapable.deceased'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'child', 'nonDeceased'],
                        'details-context.description.child.nonDeceased',
                        ['|role.all', 'child', 'deceased'],
                        'details-context.description.child.deceased',
                        ['|role.all', 'incapable', 'nonDeceased'],
                        'details-context.description.incapable.nonDeceased',
                        ['|role.all', 'incapable', 'deceased'],
                        'details-context.description.incapable.deceased'
                    ]
                }
            },
            meta: {
                pageType: 'context'
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
                    target: 'p-mainapplicant-parent',
                    cond: [
                        'dateCompare',
                        '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                        '<', // is less than ...
                        '-18', // 18 ...
                        'years' // years (before, due to the negative (-18) ...
                        // today's date (no second date given. defaults to today's date).
                    ]
                },
                {
                    target: 'p--has-legal-authority'
                }
            ]
        }
    }
};
