'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-create-account-or-sign-in'],
            title: 'Creating an account to save your progress',
            additionalProperties: false,
            properties: {
                'create-account-or-sign-in': {
                    description:
                        '<p class="govuk-body">You can create an account to save your progress as you go. This means you won\'t have to complete you application all in one go.</p><p class="govuk-body">You may prefer to do this as:</p><ul class="govuk-list govuk-list--bullet"><li>it takes around 30 minutes on average to complete an application</li><li>some questions might be emotionally challenging</li><li>you will lose your progress if you don\'t interact with the application for more than 30 minutes</li></ul><p class="govuk-body">The account you will need is called a GOV.UK One Login. You can use this type of account with other online government services too.</p>'
                },
                'q-create-account-or-sign-in': {
                    title: 'What would you like to do?',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Create an account to save my progress as I go',
                            const: 'create-account'
                        },
                        {
                            title: 'Sign in to my account to save my progress as I go',
                            description:
                                'Choose this if you already have a GOV.UK One Login account',
                            const: 'sign-in'
                        },
                        {
                            title: 'Continue my application without creating an account',
                            const: 'continue'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-create-account-or-sign-in': 'Select what you would like to do'
                }
            },
            examples: [
                {
                    'q-create-account-or-sign-in': 'create-account'
                },
                {
                    'q-create-account-or-sign-in': 'sign-in'
                }
            ],
            invalidExamples: [
                {
                    'q-create-account-or-sign-in': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: '#task-list',
                    cond: [
                        '==',
                        '$.answers.p--create-account-or-sign-in.q-create-account-or-sign-in',
                        'continue'
                    ]
                },
                {
                    target: 'p--save-your-progress'
                }
            ]
        }
    }
};
