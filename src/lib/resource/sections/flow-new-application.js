'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-new-application'],
            additionalProperties: false,
            properties: {
                'new-application-info': {
                    title: 'Create your GOV.UK One Login or sign in',
                    description: `
                    <p class="govuk-body">Create a GOV.UK One Login to:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>save progress as you go</li>
                    <li>return to an application within 30 days - after 30 days, you'd need to start the application again</li></ul>
                    <p class="govuk-body">You'll need:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>an email address</li>
                    <li>a way to get security codes - this can be a mobile phone number or an authenticator app</li></ul>   
                    <p class="govuk-body">You'll be able to use One Login for some other government services too.</p>
                    <p class="govuk-body">If you do <b>not</b> create a One Login, you'll lose your progress if you leave your application for 30 minutes or more.</p>
  `
                },
                'q-new-application': {
                    type: 'string',
                    title: 'What would you like to do?',
                    oneOf: [
                        {
                            title: 'Create or sign in to a One Login account',
                            const: 'redirect'
                        },
                        {
                            title: 'Continue an application without creating an account',
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
                    'q-new-application': 'Select what you would like to do'
                }
            },
            examples: [
                {
                    'q-new-application': 'redirect'
                },
                {
                    'q-new-application': 'continue'
                }
            ],
            invalidExamples: [
                {
                    'q-new-application': true
                }
            ],
            options: {
                outputOrder: ['new-application-info', 'q-new-application'],
                properties: {
                    'q-new-application': {
                        options: {
                            macroOptions: {
                                fieldset: {
                                    legend: {
                                        classes: 'govuk-fieldset__legend--m'
                                    }
                                }
                            }
                        }
                    }
                },
                signInLink: {
                    visible: false
                },
                pageContext: 'authentication-redirect'
            }
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
