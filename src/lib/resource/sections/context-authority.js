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
                                        'You need to send proof you have legal authority to act on behalf of the victim',
                                    childDeceased:
                                        'You need to send proof you have parental responsibility for the claimant',
                                    adultIncapableDeceased:
                                        'You need to send proof you have legal authority to act on behalf of the claimant'
                                },
                                rep: {
                                    child:
                                        'You need to send proof of who has parental responsibility for the victim',
                                    childDeceased:
                                        'You need to send proof of who has parental responsibility for the claimant',
                                    adult:
                                        'You need to send proof the person has legal authority to act on behalf of the victim',
                                    adultIncapableDeceased:
                                        'You need to send proof the person has legal authority to act on behalf of the claimant',
                                    adultNoLegalAuthority: {
                                        nonDeceased:
                                            'Sending us details of the person with legal authority to act on behalf of the victim',
                                        deceased:
                                            'Sending us details of the person with legal authority to act on behalf of the claimant'
                                    }
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
                                        <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Find out more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                        <p class="govuk-body">If your name or the victim's name has changed, you'll have to show proof of this change.</p>
                                        <p class="govuk-body">We'll tell you how to send this at the end of the application.</p>
                                    `,
                                    childDeceased:
                                        '<p class="govuk-body">We need proof so we know you have the right to apply on the claimant\'s behalf.</p><p class="govuk-body">This proof can be:</p><ul class="govuk-list govuk-list--bullet"><li>the claimant\'s full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class="govuk-body">You can:</p><ul class="govuk-list govuk-list--bullet"><li>take or scan a photo and send it via email</li><li>send a photocopy of this to us via post</li></ul><p class="govuk-body">If your name or the claimant\'s name has changed, you\'ll have to show proof of this change.</p><p class="govuk-body">We\'ll tell you how to send this at the end of the application.</p>',
                                    adultIncapableDeceased: `
                                        <p class="govuk-body">We need proof so we know you have the right to apply on the claimant's behalf.</p>
                                        <p class="govuk-body">This proof should be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document you're named on</li>
                                            <li>court order showing you have legal authority to act on behalf of the claimant</li>
                                        </ul>
                                        <h2 class="govuk-heading-s">Sending us certified documents</h2>
                                        <p class="govuk-body">You must provide certified documentation when applying to us. This means it should be a photocopy of the original document that someone then certifies as a 'true copy'.</p>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity - such as a solicitor.</p>
                                        <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Find out more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                        <p class="govuk-body">If your name or the claimant's name has changed, you'll have to show proof of this change.</p>
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
                                    childDeceased: `
                                        <p class="govuk-body">We need proof so we know they have the right to apply on the claimant's behalf.</p>
                                        <p class="govuk-body">This proof can be:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>the claimant's full birth certificate</li>
                                            <li>adoption documents</li>
                                            <li>a parental responsibility agreement</li>
                                            <li>a court order showing they have parental responsibility, which means they have legal authority, for the claimant</li>
                                        </ul>
                                        <p class="govuk-body">You can:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>take or scan a photo and send it via email</li>
                                            <li>send a photocopy of this to us via post</li>
                                        </ul>
                                        <p class="govuk-body">If their name or the claimant's name has changed, you'll have to show proof of this change.</p>
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
                                        <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Find out more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                        <p class="govuk-body">If their name or the victim's name has changed, you'll have to show proof of this change.</p>
                                        <p class="govuk-body">We'll tell you how to send this at the end of the application.</p>
                                    `,
                                    adultIncapableDeceased: `
                                    <p class="govuk-body">We need proof so we know they have the right to apply on the claimants's behalf.</p>
                                    <p class="govuk-body">This proof can be a certified copy of a:</p>
                                    <ul class="govuk-list govuk-list--bullet">
                                        <li>power of attorney document they're named on</li>
                                        <li>court order showing they have legal authority to act on behalf of the claimant</li>
                                    </ul>
                                    <h2 class="govuk-heading-s">Sending us certified documents</h2>
                                    <p class="govuk-body">You must provide certified documentation when applying to us. This means it should be a photocopy of the original document that someone then certifies as a 'true copy'.</p>
                                    <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity - such as a solicitor.</p>
                                    <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Find out more information about certifying documents (opens in a new tab)</a> if you're still unsure about sending these to us.</p>
                                    <p class="govuk-body">If their name or the claimant's name has changed, you'll have to show proof of this change.</p>
                                    <p class="govuk-body">We'll tell you how to send this at the end of the application.</p>
                                `,

                                    adultNoLegalAuthority: {
                                        nonDeceased: `
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
                                    <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Find out more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                    <p class="govuk-body">We'll tell you more about this at the end of the application.</p>
                                `,
                                        deceased: `
                                <p class="govuk-body">We need the details of the person with legal authority to act on behalf of the claimant to begin processing this application. However, we understand this might not be confirmed as yet. Unfortunately, we're unable to progress the application any further until we have these details.</p>
                                <p class="govuk-body">You can still submit this application today without providing these details. And then send this on to us at a later date.</p>
                                <p class="govuk-body">This proof should be a certified copy of a:</p>
                                <ul class="govuk-list govuk-list--bullet">
                                    <li>power of attorney document they're named on</li>
                                    <li>court order showing they have legal authority to act on behalf of the claimant</li>
                                </ul>
                                <h2 class="govuk-heading-s">Sending us certified documents</h2>
                                <p class="govuk-body">You must provide certified documentation when applying to us. This means it should be a photocopy of the original document that someone then certifies as a 'true copy'.</p>
                                <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity - such as a solicitor.</p>
                                <p class="govuk-body"><a href="https://www.gov.uk/certifying-a-document" target="_blank">Find out more information about certifying documents (opens in new tab)</a> if you're still unsure about sending these to us.</p>
                                <p class="govuk-body">We'll tell you more about this at the end of the application.</p>
                            `
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
            additionalProperties: false,
            properties: {
                'authority-to-apply': {
                    // prettier-ignore
                    title: ['|l10nt',
                        ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'], 'authority-to-apply.title.mainapplicant.childDeceased',
                        ['|role.all', 'mainapplicant', 'child'], 'authority-to-apply.title.mainapplicant.child',
                        ['|role.all', 'rep', 'child', 'deceased'], 'authority-to-apply.title.rep.childDeceased',
                        ['|role.all', 'rep', 'child'], 'authority-to-apply.title.rep.child',
                        ['|role.all', 'mainapplicant', 'incapable', 'deceased'], 'authority-to-apply.title.mainapplicant.adultIncapableDeceased',
                        ['|role.all', 'mainapplicant', 'adult'], 'authority-to-apply.title.mainapplicant.adult',
                        ['|role.all', 'rep', 'adult', 'noauthority', 'nonDeceased'], 'authority-to-apply.title.rep.adultNoLegalAuthority.nonDeceased',
                        ['|role.all', 'rep', 'adult', 'noauthority', 'deceased'], 'authority-to-apply.title.rep.adultNoLegalAuthority.deceased',                        
                        ['|role.all', 'rep', 'adult', 'deceased', 'incapable'], 'authority-to-apply.title.rep.adultIncapableDeceased',
                        ['|role.all', 'rep', 'adult'], 'authority-to-apply.title.rep.adult',
                    ],
                    // prettier-ignore
                    description: ['|l10nt',
                        ['|role.all', 'mainapplicant', 'child', 'proxy', 'deceased'], 'authority-to-apply.description.mainapplicant.childDeceased',
                        ['|role.all', 'mainapplicant', 'child'], 'authority-to-apply.description.mainapplicant.child',
                        ['|role.all', 'rep', 'child', 'deceased'], 'authority-to-apply.description.rep.childDeceased',
                        ['|role.all', 'rep', 'child'], 'authority-to-apply.description.rep.child',
                        ['|role.all', 'mainapplicant', 'incapable', 'deceased'], 'authority-to-apply.description.mainapplicant.adultIncapableDeceased',
                        ['|role.all', 'mainapplicant', 'adult'], 'authority-to-apply.description.mainapplicant.adult',
                        ['|role.all', 'rep', 'adult', 'noauthority', 'nonDeceased'], 'authority-to-apply.description.rep.adultNoLegalAuthority.nonDeceased',
                        ['|role.all', 'rep', 'adult', 'noauthority', 'deceased'], 'authority-to-apply.description.rep.adultNoLegalAuthority.deceased',
                        ['|role.all', 'rep', 'adult', 'deceased', 'incapable'], 'authority-to-apply.description.rep.adultIncapableDeceased',
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
                    cond: ['|role.all', 'mainapplicant']
                },
                {
                    target: 'p--context-rep-details',
                    // prettier-ignore
                    cond: ['|role.all', 'noauthority' ]
                },
                {
                    target: 'p-mainapplicant-enter-your-name'
                }
            ]
        }
    }
};
