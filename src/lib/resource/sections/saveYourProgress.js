'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'save-your-progress': {
                    title: 'Saving your progress',
                    description:
                        '<p class="govuk-body">To save your progress, you need to create or sign in to a GOV.UK One Login account.</p><p class="govuk-body">Once you\'ve done this, you can continue your application straight away, or sign out and continue another time.</p><p class="govuk-body">Your application will only be saved to your account for 30 days, so you\'ll need to complete it in this time. If you don\'t complete your application in this timeframe, you\'ll need to start again.</p>{{ govukButton({text: "Continue",href: "/account/sign-in"}) }}'
                }
            },
            meta: {
                authenticationRedirectionUrl: '/apply/task-list',
                isSubmittable: false
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
                    target: '#task-list'
                }
            ]
        }
    }
};
