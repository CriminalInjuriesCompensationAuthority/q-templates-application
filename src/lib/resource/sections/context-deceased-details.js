'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title: 'About the person who died',
                    description:
                        '<p class="govuk-body">We\'re now going to ask you some questions about the person who died. This includes their<br><ul class="govuk-list govuk-list--bullet"><li>name</li><li>date of birth</li><li>date of death</li><li>address</li></ul></p>{{ govukButton({text: "Continue",href: "https://www.cica.gov.uk/OAS/Account/create",isStartButton: true}) }}'
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
