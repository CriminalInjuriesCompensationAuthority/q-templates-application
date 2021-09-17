'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title: 'Continue your claim',
                    description:
                        '<p class="govuk-body">You\'ll be taken to another website to continue your claim.</p>{{ govukButton({text: "Continue",href: "https://www.cica.gov.uk/OAS/Account/create",isStartButton: true}) }}'
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
