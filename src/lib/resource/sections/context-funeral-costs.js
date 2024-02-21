'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-context-funeral-costs'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-context-funeral-costs',
                    resources: {
                        'context-funeral-costs': {
                            description: {
                                myself:
                                    '<p class="govuk-body">You may be entitled to claim back money spent on the funeral.</p><p class="govuk-body">We’re now going to ask you some questions about funeral costs. This includes:</p><ul class="govuk-list govuk-list--bullet"><li>if you’re paying any of the funeral costs</li><li>if anyone else is contributing to the funeral costs</li><li>the cost of the funeral</li><li>what type of proof you need to provide and how to send it to us</li></ul><h2 class="govuk-heading-m">Funeral costs you may be able to claim</h2><p class="govuk-body">Funeral costs can include:</p></p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombstone</li><li>memorials</li><li>flowers</li><li>newspaper announcements</li><li>catering and non-alcoholic refreshments</li><li>costs of transporting the person who died back to their country of origin</li></ul><p class="govuk-body">You may be able to claim up to £5000.</p>',
                                proxy:
                                    '<p class="govuk-body">The claimant may be entitled to claim back money spent on the funeral.</p><p class="govuk-body">We’re now going to ask you some questions about funeral costs. This includes:</p><ul class="govuk-list govuk-list--bullet"><li>if the claimant is paying any of the funeral costs</li><li>if anyone else is contributing to the funeral costs</li><li>the cost of the funeral</li><li>what type of proof you need to provide and how to send it to us</li></ul><h2 class="govuk-heading-m">Funeral costs they may be able to claim</h2><p class="govuk-body">Funeral costs can include:</p></p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombstone</li><li>memorials</li><li>flowers</li><li>newspaper announcements</li><li>catering and non-alcoholic refreshments</li><li>costs of transporting the person who died back to their country of origin</li></ul><p class="govuk-body">The claimant may be able to claim up to £5000.</p>'
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
                'context-funeral-costs': {
                    title: 'Funeral costs',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-funeral-costs.description.myself',
                        ['|role.all', 'proxy'],
                        'context-funeral-costs.description.proxy'
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
                    target: 'p-applicant-funeral-costs-paid'
                }
            ]
        }
    }
};
