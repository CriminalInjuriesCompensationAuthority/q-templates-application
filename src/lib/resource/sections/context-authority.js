'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'authority-to-apply': {
                    title: 'You need to send proof you have parental responsibility for the victim',
                    description:
                        '<p class="govuk-body">We need proof so we know you have the right to apply on the victim\'s behalf.</p><p class="govuk-body">This proof can be:</p><ul class="govuk-list govuk-list--bullet"><li>the victim\'s full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class="govuk-body">You can:</p><ul class="govuk-list govuk-list--bullet"><li>take or scan a photo and send it via email</li><li>send a photocopy of this to us via post</li></ul><p class="govuk-body">If your name or the victim\'s name has changed, you\'ll have to show proof of this change.</p><p class="govuk-body">We\'ll tell you how to send this at the end of the application.</p>'
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
                    target: 'p-mainapplicant-context-details'
                }
            ]
        }
    }
};
