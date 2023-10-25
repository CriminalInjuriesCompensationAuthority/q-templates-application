'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p--context-crime-ref-no': {
                    title:
                        "You'll need to give us the crime reference number as part of this application",
                    description:
                        '<p class="govuk-body">The police give every crime a reference number when it\'s reported. This is called a crime reference number. You\'ll need to give us this crime reference number as part of this application so you should make sure you know it.</p><p class="govuk-body">If you do not know your crime reference number, call 101 to speak to your local police station. They\'ll be able to tell you the crime reference number. You\'ll need to give them some details about the crime to help them find the correct case.</p><p class="govuk-body">If you do not have the crime reference number to hand, you can continue with your application but youll need to enter it later.</p>'
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
