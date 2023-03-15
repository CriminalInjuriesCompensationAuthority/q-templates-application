'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-relationship-to-deceased': {
                    title: 'Your relationship to the deceased',
                    description:
                        '<p class="govuk-body">We\'re going to ask you:</p></p><ul class="govuk-list govuk-list--bullet"><li>how you\'re related to the person who died</li><li>about living arrangements and finances</li><li>if there is anyone else who could apply</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
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
                    target: 'p-applicant-relationship-to-deceased'
                }
            ]
        }
    }
};
