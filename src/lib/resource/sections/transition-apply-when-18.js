'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title: "You've told us you want to wait and apply when you're 18",
                    description:
                        '<p class="govuk-body">You can <a class="govuk-link" href="https://www.gov.uk/claim-compensation-criminal-injury/eligibility">find out how long after your 18th birthday you\'ll have to apply</a>.</p>'
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
        type: 'final'
    }
};
