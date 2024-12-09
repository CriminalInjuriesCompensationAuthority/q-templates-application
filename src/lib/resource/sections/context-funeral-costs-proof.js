'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-context-funeral-costs-proof'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-context-funeral-costs-proof',
                    resources: {
                        'context-funeral-costs-proof': {
                            title: {
                                myself: 'You may need to send proof of funeral costs',
                                proxy: 'You may need to send proof of funeral costs'
                            },
                            description: {
                                myself:
                                    '<p class="govuk-body">You may receive a funeral payment of £2,500 once we have confirmed that you\'re eligible. If the funeral costs are more than £2,500 you may be eligible for a further payment. The total payment cannot be more than £5,000.</p><p class="govuk-body">You will need to provide proof of payment for costs up to £2,500. In addition, any costs over £2,500 can only be paid if you provide receipts or invoices showing a breakdown of costs. These costs should be reasonable and may include items such as:</p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombstone</li><li>memorials</li><li>flowers</li><li>newspaper announcements</li><li>catering and non-alcoholic refreshments</li><li>costs of transporting the person who died back to their country of origin</li></ul><p class="govuk-body"><b>Public funds</b></p><p class="govuk-body">If you have already received money from public funds to help pay for funeral costs, you will need to provide details of this as we will need to take this into account when deciding your claim.</p><p class="govuk-body">Public funds could include:</p><ul class="govuk-list govuk-list--bullet"><li><a class="govuk-link" href="https://www.gov.uk/funeral-payments/" target="_blank">Funeral Expenses Payment (opens in a new tab)</a> from the Department for Work and Pensions if you live in England or Wales</li><li><a class="govuk-link" href="https://www.mygov.scot/funeral-support-payment/" target="_blank">Funeral Support Payment (opens in a new tab)</a> from Social Security Scotland if you live in Scotland</li></ul><p class="govuk-body"><b>Crowdfunding</b></p><p class="govuk-body">Tell us about any money raised for the funeral through crowdfunding platforms like GoFundMe and JustGiving.</p>',
                                proxy:
                                    '<p class="govuk-body">The claimant may receive a funeral payment of £2,500 once we have confirmed that they\'re eligible. If the funeral costs are more than £2,500 they may be eligible for a further payment. The total payment cannot be more than £5,000.</p><p class="govuk-body">You will need to provide proof of payment for costs up to £2,500. In addition, any costs over £2,500 can only be paid if you provide receipts or invoices showing a breakdown of costs. These costs should be reasonable and may include items such as:</p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombstone</li><li>memorials</li><li>flowers</li><li>newspaper announcements</li><li>catering and non-alcoholic refreshments</li><li>costs of transporting the person who died back to their country of origin</li></ul><p class="govuk-body"><b>Public funds</b></p><p class="govuk-body">If the claimant has already received money from public funds to help pay for funeral costs, you will need to provide details of this as we will need to take this into account when deciding their claim.</p><p class="govuk-body">Public funds could include:</p><ul class="govuk-list govuk-list--bullet"><li><a class="govuk-link" href="https://www.gov.uk/funeral-payments/" target="_blank">Funeral Expenses Payment (opens in a new tab)</a> from the Department for Work and Pensions if you live in England or Wales</li><li><a class="govuk-link" href="https://www.mygov.scot/funeral-support-payment/" target="_blank">Funeral Support Payment (opens in a new tab)</a> from Social Security Scotland if you live in Scotland</li></ul><p class="govuk-body"><b>Crowdfunding</b></p><p class="govuk-body">Tell us about any money raised for the funeral through crowdfunding platforms like GoFundMe and JustGiving.</p>'
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
                'context-funeral-costs-proof': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-funeral-costs-proof.title.myself',
                        ['|role.all', 'proxy'],
                        'context-funeral-costs-proof.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-funeral-costs-proof.description.myself',
                        ['|role.all', 'proxy'],
                        'context-funeral-costs-proof.description.proxy'
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
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
