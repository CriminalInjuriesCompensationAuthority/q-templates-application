'use strict';

module.exports = {
    type: 'apply-for-compensation',
    version: '3.0.0',
    sections: {
        'p-applicant-who-are-you-applying-for': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-who-are-you-applying-for'],
                additionalProperties: false,
                properties: {
                    'q-applicant-who-are-you-applying-for': {
                        title: 'Who are you applying for?',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Myself',
                                const: 'myself'
                            },
                            {
                                title: 'Someone else',
                                const: 'someone-else'
                            }
                        ]
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-who-are-you-applying-for':
                            'Select myself if you are applying for yourself'
                    }
                },
                examples: [
                    {
                        'q-applicant-who-are-you-applying-for': 'myself'
                    },
                    {
                        'q-applicant-who-are-you-applying-for': 'someone-else'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-who-are-you-applying-for': 12345
                    }
                ]
            }
        },
        'p-applicant-enter-your-address': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-enter-your-address'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-enter-your-address',
                        resources: {
                            'section-title': 'Enter your address',
                            'section-title_someone-else': 'Enter their address'
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'l10nt:section-title{?lng,context,ns}',
                required: ['q-applicant-building-and-street', 'q-applicant-town-or-city'],
                additionalProperties: false,
                properties: {
                    'q-applicant-building-and-street': {
                        type: 'string',
                        title: 'Building and street',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'First line of address must be less than 60 characters'
                        }
                    },
                    'q-applicant-building-and-street-2': {
                        type: 'string',
                        title:
                            "<span class='govuk-visually-hidden'>Building and street line 2</span>",
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Second line of address must be less than 60 characters'
                        }
                    },
                    'q-applicant-town-or-city': {
                        type: 'string',
                        title: 'Town or city',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'Town or city must be 32 characters or less'
                        }
                    },
                    'q-applicant-county': {
                        type: 'string',
                        title: 'County (optional)',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'County must be 32 characters or less'
                        }
                    },
                    'q-applicant-postcode': {
                        type: 'string',
                        title: 'Postcode (optional)',
                        maxLength: 10,
                        errorMessage: {
                            maxLength: 'Postcode must be 10 characters or less'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-building-and-street':
                            'Enter the building and street where you live',
                        'q-applicant-town-or-city': 'Enter the town or city where you live'
                    }
                },
                examples: [
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-building-and-street': 12345,
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 12345,
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 12345,
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 12345,
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-declaration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'applicant-declaration': {
                        title: 'Declaration',
                        description:
                            '<p class="govuk-body">By submitting the application I, ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||, agree that:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true as far as I know</li><li>CICA can share the information I’ve given in this claim with:</li><ul><li>police, prosecutors and ACRO Criminal Records Office</li><li>medical organisations and staff, including police medical staff</li><li>any other individuals or organisations needed to process my application (including medical or other experts)</li></ul><li>CICA can receive information from the organisations and individuals described above</li><li>If I deliberately provide information that I know is false or misleading, I may be prosecuted and my application for compensation may be refused.</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p><p class="govuk-body">Read our privacy notice to see <a class="govuk-link" href="https://www.gov.uk/guidance/cica-privacy-notice">how we use your data</a>.</p>'
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
        'p--confirmation': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    confirmation: {
                        title: 'Confirmation',
                        description:
                            '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We\'ll also send this to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your case reference number to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting an application.</p><h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for a report of the crime</li><li>ask you for more information if we need it</li><li>make a decision on your application</li><li>send our decision letter to you by post</li></ul><p class="govuk-body">We aim to make a decision within 1 year but it can take longer. We may have to wait until there is enough information about your injuries and recovery.</p>{{ govukWarningText({text: "You must tell us right away if any of the information you have given us changes. This includes your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service</a> (takes 10 minutes)</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        }
    },
    routes: {
        initial: 'p-applicant-who-are-you-applying-for',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: 'p-applicant-declaration',
        confirmation: 'p--confirmation',
        states: {
            'p-applicant-who-are-you-applying-for': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-address'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-address': {
                type: 'final'
            },
            'p-applicant-declaration': {
                type: 'final'
            },
            'p--confirmation': {
                type: 'final'
            }
        }
    },
    answers: {},
    progress: ['p-applicant-who-are-you-applying-for'],
    meta: {
        questionnaireDocumentVersion: '2.0.0',
        onComplete: {
            tasks: [
                {
                    type: 'sendEmail',
                    templateId: 'cb79653c-cf6e-44d4-8c03-087ba21cfd01',
                    templatePlaceholderMap: {
                        emailAddress:
                            '/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address',
                        caseReference: '/answers/system/case-reference'
                    }
                },
                {
                    type: 'sendSms',
                    templateId: '3c847bb8-957a-4bba-9fad-090657bb5c71',
                    templatePlaceholderMap: {
                        phoneNumber:
                            '/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number',
                        caseReference: '/answers/system/case-reference'
                    }
                }
            ]
        }
    }
};
