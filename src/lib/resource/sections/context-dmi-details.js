'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'details-context': {
                    title: 'Your mental health',
                    description:
                        '<p class="govuk-body">We’re going to ask how the crime affected your mental health.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do</li><li>lasts 6 weeks or more</li><li>is diagnosed by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if you do not have a diagnosis yet. We\'ll tell you what medical evidence you\'ll need.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-do-you-have-disabling-mental-injury'}]}}
};
