'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'you-cannot-get-compensation': {
                    title: "You cannot get compensation as you've told us the crime has not been reported to the police",
                    description:
                        '<p class="govuk-body">You can only get compensation from us if the crime has been reported to the police. This must have been done as soon as reasonably possible.</p>'
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
