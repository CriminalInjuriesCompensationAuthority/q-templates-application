'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'details-context': {
                    title: 'Your treatment',
                    description:
                        '<p class="govuk-body">We are going to ask for some details about your GP</p><p class="govuk-body">We\'ll use these to understand:</p><ul class="govuk-list govuk-list--bullet"><li>if you\'ve told your GP about your injuries</li><li>who has evidence of your injuries</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-treatment-for-physical-injuries',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                        true
                    ]
                },
                {
                    target: 'p-applicant-select-treatments',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
                    ]
                },
                {target: 'p-applicant-has-your-treatment-finished-dmi'}
            ]
        }
    }
};
