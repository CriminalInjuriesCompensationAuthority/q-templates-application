'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'applicant-impact-on-you': {
                    title: 'About the crime',
                    description:
                        '<p class="govuk-body">We’re going to ask you:</p><ul class="govuk-list govuk-list--bullet"><li>when and where the crime happened</li><li>which police force investigated the crime</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-incident-type'}]}}
};
