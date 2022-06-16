'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p--context-pregnancy'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-pregnancy',
                    resources: {
                        'pregnancy-context': {
                            description:
                                '<p class="govuk-body">We need to ask questions about pregnancy related to the crime. These questions may be difficult to answer or may not be relevant to you.</p><p class="govuk-body">By answering them, it ensures you are considered for all correct compensation from us. This helps us better understand the case and if we need to ask for more evidence from you.</p><h2 class="govuk-heading-m">Help and support</h2><p class="govuk-body">The following links open in a new tab.</p><p class="govuk-body">You can get practical and emotional support after a crime. Visit <a href="https://www.victimandwitnessinformation.org.uk/" target="_blank">Victim and Witness information</a> if you’re in England and Wales. Or <a href="https://www.mygov.scot/victim-witness-support/" target="_blank">support as a victim or witness of crime</a> in Scotland.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support with the application",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/" target="_blank">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/" target="_blank">if you live in Scotland</a>.</p>\'})}}',
                            'description_someone-else':
                                '<p class="govuk-body">We need to ask questions about pregnancy related to the crime. These questions may be difficult to answer or may not be relevant to the victim.</p><p class="govuk-body">By answering them, it ensures they are considered for all correct compensation from us. This helps us better understand the case and if we need to ask for more evidence from you.</p><h2 class="govuk-heading-m">Help and support</h2><p class="govuk-body">The following links open in a new tab.</p><p class="govuk-body">You can get practical and emotional support after a crime. Visit <a href="https://www.victimandwitnessinformation.org.uk/" target="_blank">Victim and Witness information</a> if you’re in England and Wales. Or <a href="https://www.mygov.scot/victim-witness-support/" target="_blank">support as a victim or witness of crime</a> in Scotland.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support with the application",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/" target="_blank">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/" target="_blank">if you live in Scotland</a>.</p>\'})}}'
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
                'pregnancy-context': {
                    title: 'Pregnancy',
                    description: 'l10nt:pregnancy-context.description{?lng,context,ns}'
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
                    target: 'p-applicant-pregnancy',
                    cond: [
                        '==',
                        '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                        'SEX'
                    ]
                },
                {
                    target: 'p-applicant-pregnancy-loss'
                }
            ]
        }
    }
};
