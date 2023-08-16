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
                        '<p class="govuk-body">We’re going to ask you:</p><ul class="govuk-list govuk-list--bullet"><li>when and where the crime happened</li><li>which police force investigated the crime</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p><h2 class="govuk-heading-m">Support after a crime</h2><p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/" target="_blank">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/" target="_blank">if you live in Scotland</a>.</p>'
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
                    target: 'p-applicant-when-did-the-crime-happen',
                    cond: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                },
                {
                    target: 'p-applicant-incident-type'
                }
            ]
        }
    }
};
