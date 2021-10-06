'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'you-need-to-contact-us': {
                    title: 'You need to contact us',
                    description:
                        '<p class="govuk-body">We need to check if you are eligible for compensation.</p>{% include \'contact.njk\' %}'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {type: 'final'}
};
