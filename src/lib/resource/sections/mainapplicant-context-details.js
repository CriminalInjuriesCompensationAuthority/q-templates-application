'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'details-context': {
                    title: 'Your details',
                    description:
                        '<p class="govuk-body">We\'re going to ask for some details about you.</p><p class="govuk-body">We\'ll use these to contact you about this application.</p>'
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
            'ANSWER__MAINAPPLICANT-CONTEXT-DETAILS': [
                {
                    target: 'p-mainapplicant-confirmation-method'
                }
            ]
        }
    }
};
