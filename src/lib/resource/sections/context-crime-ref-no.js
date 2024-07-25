'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p--context-crime-ref-no': {
                    title: "You'll need to tell us your crime reference number",
                    description:
                        '<p class="govuk-body">The police give every crime a reference number when it\'s reported.</p> <p class="govuk-body">You\'ll need to give us this crime reference number as part of this application, so you should make sure you know it.</p><h2 class="govuk-heading-l">If you don\'t know your crime reference number</h2><p class="govuk-body">To get your crime reference number, call 101 to speak to your local police station. You\'ll need to give them some details about the crime to help them find the correct case.</p><h2 class="govuk-heading-l">Continuing with your application</h2><p class="govuk-body">If you do not have the crime reference number to hand, you can continue with your application, but you\'ll need to enter it later.</p>'
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
                    target: 'p-applicant-fatal-claim'
                }
            ]
        }
    }
};
