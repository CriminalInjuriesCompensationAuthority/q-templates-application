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
                        '<p class="govuk-body">We’re going to ask for some details about you.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>contact you</li><li>get a report about the crime from the police</li></ul>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-confirmation-method'}]}}
};
