'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title: 'Contact CICA',
                    description:
                        '<p class="govuk-body">You\'ll be taken to another website to contact the CICA about your application.</p>{{ govukButton({text: "Continue",href: "https://contact-the-cica.form.service.justice.gov.uk/",isStartButton: true}) }}'
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
