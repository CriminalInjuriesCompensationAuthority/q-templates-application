'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-rep-details': {
                    title: 'Your details',
                    description:
                        '<p class="govuk-body">We\'re going to ask for some details about you.</p><p class="govuk-body">As you\'re the victim\'s representative, we\'ll use these details to contact you about this claim.</p>'
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
                    target: 'p-rep-type'
                }
            ]
        }
    }
};
