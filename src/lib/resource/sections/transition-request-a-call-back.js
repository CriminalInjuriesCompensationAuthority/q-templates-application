'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title: 'Continue to our call back request form',
                    description:
                        '<p class="govuk-body">You\'ll be taken to another website to request a call back.</p>{{ govukButton({text: "Continue",href: " https://request-a-call-back.form.service.justice.gov.uk/",isStartButton: true}) }}'
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                signInLink: {
                    visible: false
                }
            }
        }
    },
    route: {
        type: 'final'
    }
};
