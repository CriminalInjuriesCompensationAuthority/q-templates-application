'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-context-relationship-to-deceased'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-context-relationship-to-deceased',
                    resources: {
                        'context-relationship-to-deceased': {
                            title: {
                                myself: 'Your relationship to the person who died',
                                proxy: 'The claimant’s relationship to the person who died'
                            },
                            description: {
                                myself:
                                    '<p class="govuk-body">We\'re going to ask you:</p></p><ul class="govuk-list govuk-list--bullet"><li>about your relationship to the person who died</li><li>about living arrangements and finances</li><li>if there\'s anyone else who might apply</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/" target="_blank">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/" target="_blank">if you live in Scotland</a>.</p>\'})}}',
                                proxy:
                                    '<p class="govuk-body">We\'re going to ask you:</p></p><ul class="govuk-list govuk-list--bullet"><li>about the claimant’s relationship to the person who died</li><li>about living arrangements and finances</li><li>if there\'s anyone else who might apply</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/" target="_blank">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/" target="_blank">if you live in Scotland</a>.</p>\'})}}'
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
                'context-relationship-to-deceased': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-relationship-to-deceased.title.myself',
                        ['|role.all', 'proxy'],
                        'context-relationship-to-deceased.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-relationship-to-deceased.description.myself',
                        ['|role.all', 'proxy'],
                        'context-relationship-to-deceased.description.proxy'
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
                    target: 'p-applicant-relationship-to-deceased'
                }
            ]
        }
    }
};
