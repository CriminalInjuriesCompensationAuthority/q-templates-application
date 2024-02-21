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
                        '<p class="govuk-body">We\'re going to ask you if you want to provide any more details about this claim</p><p class="govuk-body">This can be information that did not fit the questions you have been asked, such as additional:</p><ul class="govuk-list govuk-list--bullet"><li>crime reference numbers</li><li>offender names</li><li>locations</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about this claim.</p>'
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
