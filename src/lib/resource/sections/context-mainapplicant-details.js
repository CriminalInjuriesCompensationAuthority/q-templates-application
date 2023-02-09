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
                            title: 'The person with parental responsibility for the victim',
                            title_true:
                                'The person with legal authority to act on behalf of the victim',
                            description:
                                '<p class="govuk-body">We\'re going to ask for details about the person who has parental responsibility for the victim. This means they have the legal authority to apply on their behalf.</p><p class="govuk-body">This could be:</p><ul class="govuk-list govuk-list--bullet"><li>the victim\'s birth, step or adoptive parent</li><li>a person named on a Special Guardianship order</li><li>the local authority</li></ul>{{ govukDetails({summaryText: "Can I apply if I do not have parental responsibility?",html: "<p class=\'govuk-body\'>You can still apply even if you do not have parental responsibility for the victim. This means you have to provide the details of who has authority to act on behalf of the victim in order to send this application. This allows us to communicate with this person or organisation after you’ve sent this application.</p>"})}}',
                            description_true:
                                '<p class="govuk-body">You’ve told us the person you\'re applying for is unable to handle their own affairs in relation to this application.</p><p class="govuk-body">Therefore, we’re going to ask for details about the person who has legal authority to act on behalf of the victim.</p><p class="govuk-body">This could be:</p><ul class="govuk-list govuk-list--bullet"><li>a person appointed by a court</li><li>a person named on a power of attorney document</li><li>the local authority</li></ul>{{ govukDetails({summaryText: "Can I apply if I do not have legal authority?",html: "<p class=\'govuk-body\'>You can still apply even if you do not have legal authority to act on behalf of the victim. This means you have to provide the details of who has authority to act on behalf of them in this application. This allows us to communicate with the person who has authority after you’ve sent this application.</p>"})}}'
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
                    title: 'l10nt:details-context.title{?lng,context,ns}',
                    description: 'l10nt:details-context.description{?lng,context,ns}'
                }
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
                    cond: ['|role.all', 'child']

                    // [
                    //     'dateCompare',
                    //     '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                    //     '<', // is less than ...
                    //     '-18', // 18 ...
                    //     'years' // years (before, due to the negative (-18) ...
                    //     // today's date (no second date given. defaults to today's date).
                    // ]
                },
                {
                    target: 'p--has-legal-authority'
                }
            ]
        }
    }
};
