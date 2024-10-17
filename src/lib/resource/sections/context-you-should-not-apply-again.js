'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-you-should-not-apply-again'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-you-should-not-apply-again',
                    resources: {
                        'context-you-should-not-apply-again': {
                            description: {
                                applicant: `<div id="you-should-not-apply-again"> <p class="govuk-body">If you’ve applied before, or someone's applied for you, for injuries related to this crime, we cannot accept another application from you.</p> <h2 class="govuk-heading-m">If you’re waiting to hear from us</h2> <p class="govuk-body">We have your application and are processing it. We'll contact you if we need any more information.</p> <p class="govuk-body">In the majority of cases we make a decision within 12 months, but it can take longer. You may not hear from us during this time, but we are working hard to process your application as quickly as possible.</p><p class="govuk-body">If your information has changed and you need to let us know, you can <a class="govuk-link" href="https://contact-the-cica.form.service.justice.gov.uk/">contact us to update your existing application. </a></p><h2 class="govuk-heading-m">If you applied in the past but were not successful</h2><p class="govuk-body">We cannot accept another application from you, for injuries related to this crime. You should not apply again.</p></p><h2 class="govuk-heading-m">What to do next</h2></p><p class="govuk-body"> If you want to exit this application, you can close this window or tab. You can still continue, if you would like to.</p></div>`,
                                proxy: `<div id="you-should-not-apply-again"> <p class="govuk-body">If you’ve already made an application for the victim, for injuries related to this crime, we cannot accept another application from you.</p> <h2 class="govuk-heading-m">If you’re waiting to hear from us</h2> <p class="govuk-body">We have your application and are processing it. We'll contact you if we need any more information.</p> <p class="govuk-body">In the majority of cases we make a decision within 12 months, but it can take longer. You may not hear from us during this time, but we are working hard to process your application as quickly as possible.</p><p class="govuk-body">If your information or the victim’s information has changed and you need to let us know. You can <a class="govuk-link" href="https://contact-the-cica.form.service.justice.gov.uk/">contact us to update your existing application. </a></p><h2 class="govuk-heading-m">If you applied in the past but were not successful</h2><p class="govuk-body">We cannot accept another application from you, for injuries related to this crime. You should not apply again.</p></p><h2 class="govuk-heading-m">What to do next</h2></p><p class="govuk-body"> If you want to exit this application, you can close this window or tab. You can still continue, if you would like to.</p></div>`
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'You should not apply again',
            required: ['q--duplicate-application-confirmation'],
            propertyNames: {
                enum: ['q--duplicate-application-confirmation']
            },
            properties: {
                'context-you-should-not-apply-again': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'context-you-should-not-apply-again.description.proxy',
                        ['|role.all', 'myself'],
                        'context-you-should-not-apply-again.description.applicant'
                    ]
                },
                'q--duplicate-application-confirmation': {
                    type: 'string',
                    title:
                        'I understand that if I apply more than once for injuries related to the same crime, my second application won’t be considered by CICA',
                    const: 'I understand',
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q--duplicate-application-confirmation':
                        'Select that you understand what happens if you apply more than once for injuries related to the same crime'
                }
            },
            examples: [
                {
                    'q--duplicate-application-confirmation': 'I understand'
                }
            ],
            invalidExamples: [
                {},
                {
                    foo: 'bar'
                },
                {
                    'q--duplicate-application-confirmation': true
                },
                {
                    'q--duplicate-application-confirmation': 'false'
                },
                {
                    'q--duplicate-application-confirmation': 123
                },
                {
                    'q--duplicate-application-confirmation': [123]
                }
            ],
            options: {
                buttonText: 'Continue anyway',
                buttonClass: 'govuk-button--secondary',
                signInLink: {
                    visible: false
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--create-account-or-sign-in',
                    cond: ['==', '$.answers.owner.is-authenticated', false]
                },
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
