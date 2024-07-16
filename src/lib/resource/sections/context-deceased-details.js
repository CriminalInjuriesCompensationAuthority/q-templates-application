'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title: 'About the person who died',
                    description:
                        '<p class="govuk-body">We\'re now going to ask you some questions about the person who died. This includes their:<br><ul class="govuk-list govuk-list--bullet"><li>name</li><li>date of birth</li><li>date of death</li><li>address</li></ul></p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/" target="_blank">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/" target="_blank">if you live in Scotland</a>.</p>\'})}}'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {
        on: {
            'ANSWER__P-CONTEXT-DECEASED-DETAILS': [
                {
                    target: 'p-deceased-name'
                }
            ]
        }
    }
};
