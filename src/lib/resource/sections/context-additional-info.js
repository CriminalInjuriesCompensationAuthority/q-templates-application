'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'applicant-additional-info': {
                    title: 'Additional information',
                    description:
                        '<p class="govuk-body">We’re going to ask you if you want to provide any more details about this claim</p><p class="govuk-body">This can be information that did not fit the questions you have been asked, such as:</p><ul class="govuk-list govuk-list--bullet"><li>crime reference numbers</li><li>offender names</li><li>locations</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about this claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
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
                    target: 'p-applicant-provide-additional-information'
                }
            ]
        }
    }
};
