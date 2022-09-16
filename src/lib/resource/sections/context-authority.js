'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-authority'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-authority',
                    resources: {
                        'authority-to-apply': {
                            title: {
                                mainapplicant: {
                                    child:
                                        'You need to send proof you have parental responsibility for the victim',
                                    adult:
                                        'You need to send proof you have legal authority to act on behalf of the victim'
                                },
                                rep: {
                                    child:
                                        'You need to send proof of who has parental responsibility for the victim',
                                    adult:
                                        'You need to send proof the person has legal authority to act on behalf of the victim',
                                    adultNoLegalAuthority:
                                        'Sending us details of the person with legal authority to act on behalf of the victim'
                                }
                            },
                            description: {
                                mainapplicant: {
                                    child:
                                        '<p class="govuk-body">We need proof so we know you have the right to apply on the victim\'s behalf.</p><p class="govuk-body">This proof can be:</p><ul class="govuk-list govuk-list--bullet"><li>the victim\'s full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class="govuk-body">You can:</p><ul class="govuk-list govuk-list--bullet"><li>take or scan a photo and send it via email</li><li>send a photocopy of this to us via post</li></ul><p class="govuk-body">If your name or the victim\'s name has changed, you\'ll have to show proof of this change.</p><p class="govuk-body">We\'ll tell you how to send this at the end of the application.</p>',
                                    adult: `
                                        <p class="govuk-body">We need proof so we know you have the right to apply on the victim's behalf.</p>
                                        <p class="govuk-body">This proof should be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document you're named on</li>
                                            <li>court order showing you have legal authority to act on behalf of the victim</li>
                                        </ul>
                                        <h2 class="govuk-heading-s">Sending us certified documents</h2>
                                        <p class="govuk-body">You must provide certified documentation when applying to us. This means it should be a photocopy of the original document that someone then certifies as a 'true copy'.</p>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity - such as a solicitor.</p>
                                        <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Discover more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                        <p class="govuk-body">If your name or the victim's name has changed, you'll have to show proof of this change.</p>
                                        <p class="govuk-body">We'll tell you how to send this at the end of the application.</p>
                                    `
                                },
                                rep: {
                                    child: `
                                        <p class="govuk-body">We need proof so we know they have the right to apply on the victim's behalf.</p>
                                        <p class="govuk-body">This proof can be:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>the victim's full birth certificate</li>
                                            <li>adoption documents</li>
                                            <li>a parental responsibility agreement</li>
                                            <li>a court order showing they have parental responsibility, which means they have legal authority, for the victim</li>
                                        </ul>
                                        <p class="govuk-body">You can:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>take or scan a photo and send it via email</li>
                                            <li>send a photocopy of this to us via post</li>
                                        </ul>
                                        <p class="govuk-body">If their name or the victim's name has changed, you'll have to show proof of this change.</p>
                                        <p class="govuk-body">We'll tell you how to send this at the end of the application.</p>
                                    `,
                                    adult: `
                                        <p class="govuk-body">We need proof so we know they have the right to apply on the victim's behalf.</p>
                                        <p class="govuk-body">This proof can be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document they're named on</li>
                                            <li>court order showing they have legal authority to act on behalf of the victim</li>
                                        </ul>
                                        <h2 class="govuk-heading-s">Sending us certified documents</h2>
                                        <p class="govuk-body">You must provide certified documentation when applying to us. This means it should be a photocopy of the original document that someone then certifies as a 'true copy'.</p>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity - such as a solicitor.</p>
                                        <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Discover more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                        <p class="govuk-body">If their name or the victim's name has changed, you'll have to show proof of this change.</p>
                                        <p class="govuk-body">We'll tell you how to send this at the end of the application.</p>
                                    `,
                                    adultNoLegalAuthority: `
                                        <p class="govuk-body">We need the details of the person with legal authority to act on behalf of the victim to begin processing this application. However, we understand this might not be confirmed as yet. Unfortunately, we're unable to progress the application any further until we have these details.</p>
                                        <p class="govuk-body">You can still submit this application today without providing these details. And then send this on to us at a later date.</p>
                                        <p class="govuk-body">This proof should be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document they're named on</li>
                                            <li>court order showing they have legal authority to act on behalf of the victim</li>
                                        </ul>
                                        <h2 class="govuk-heading-s">Sending us certified documents</h2>
                                        <p class="govuk-body">You must provide certified documentation when applying to us. This means it should be a photocopy of the original document that someone then certifies as a 'true copy'.</p>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity - such as a solicitor.</p>
                                        <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Discover more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                        <p class="govuk-body">We'll tell you more about this at the end of the application.</p>
                                    `
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
                'authority-to-apply': {
                    // prettier-ignore
                    title: ['|l10nt',
                        ['|role.all', 'mainapplicant', 'child'], 'authority-to-apply.title.mainapplicant.child',
                        ['|role.all', 'mainapplicant', 'adult'], 'authority-to-apply.title.mainapplicant.adult',
                        ['|role.all', 'rep', 'child'], 'authority-to-apply.title.rep.child',
                        ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false], 'authority-to-apply.title.rep.adultNoLegalAuthority',
                        ['|role.all', 'rep', 'adult'], 'authority-to-apply.title.rep.adult',
                    ],
                    // prettier-ignore
                    description: ['|l10nt',
                        ['|role.all', 'mainapplicant', 'child'], 'authority-to-apply.description.mainapplicant.child',
                        ['|role.all', 'mainapplicant', 'adult'], 'authority-to-apply.description.mainapplicant.adult',
                        ['|role.all', 'rep', 'child'], 'authority-to-apply.description.rep.child',
                        ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false], 'authority-to-apply.description.rep.adultNoLegalAuthority',
                        ['|role.all', 'rep', 'adult'], 'authority-to-apply.description.rep.adult'
                    ]
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
                    target: 'p-mainapplicant-confirmation-method',
                    // prettier-ignore
                    // mainapplicant role
                    cond: ['or',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    // prettier-ignore
                    // noauthority role
                    cond: ['and',
                        ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
                        ['==', '$.answers.q-applicant-can-handle-affairs.q-applicant-can-handle-affairs', false],
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
                        ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
                    ]
                },
                {
                    target: 'p-mainapplicant-enter-your-name'
                }
            ]
        }
    }
};
