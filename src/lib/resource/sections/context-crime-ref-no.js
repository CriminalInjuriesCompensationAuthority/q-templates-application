'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p--context-crime-ref-no': {
                    title: 'About the crime reference number',
                    description:
                        '<p class="govuk-body">The police give every crime a reference number when it\'s reported. This is called a crime reference number. You\'ll need to give us this as part of this application.</p><h2 class="govuk-heading-l">If you do not know your crime reference number</h2><p class="govuk-body">To get your crime reference number, call 101 to speak to your local police. You\'ll have to give them some details about the crime to help them find your case.</p><h2 class="govuk-heading-l">Continuing with your application</h2><p class="govuk-body">You\'ll need to enter the crime reference number later, before you can submit the application.</p>'
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
                    target: 'p-applicant-fatal-claim'
                }
            ]
        }
    }
};
