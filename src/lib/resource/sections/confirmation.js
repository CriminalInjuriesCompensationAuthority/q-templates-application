'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p--confirmation'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--confirmation',
                    resources: {
                        confirmation: {
                            description:
                                '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting this application.</p><h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for evidence</li><li>ask for medical information if required</li><li>ask you for more information if we need it</li><li>make a decision</li><li>send our decision letter by post</li></ul><p class="govuk-body">We aim to make a decision within one year but it can take longer. We may have to wait until there’s enough information about your injuries and recovery.</p><p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter (opens in new tab)</a></p>{{ govukWarningText({text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2><p class="govuk-body govuk-!-margin-bottom-1">Email: <a href="mailto:info@cica.gov.uk" class="govuk-link">info@cica.gov.uk</a></p>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>',
                            'description_someone-else':
                                '{% set mobilePhoneNumber = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting this application.</p><h2 class="govuk-heading-m">Send proof you can apply on the victim\'s behalf</h2><p class="govuk-body">You need to send proof that you have the right to apply on the victim\'s behalf.</p><p class="govuk-body">This proof can be one of the following documents:</p><ul class="govuk-list govuk-list--bullet"><li>the victim\'s full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class="govuk-body">You should copy the document in one of these ways to send to us:</p><ul class="govuk-list govuk-list--bullet"><li>take a photo</li><li>scan a copy</li><li>make a photocopy </li></ul><p class="govuk-body">You should email your documents to us at <a class="govuk-link" target="_blank" href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk</a>.</p><p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>{{ govukInsetText({html: \'<p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p><p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p><p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p><p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p><p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p><p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p><p class="govuk-body">United Kingdom</p>\'})}}<h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for evidence</li><li>ask for medical information if required</li><li>ask you for more information if we need it</li><li>make a decision</li><li>send our decision letter by post</li></ul><p class="govuk-body">We aim to make a decision within one year but it can take longer. We may have to wait until there’s enough information about your injuries and recovery.</p><p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter (opens in new tab)</a></p>{{ govukWarningText({text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2><p class="govuk-body govuk-!-margin-bottom-1">Email: <a href="mailto:info@cica.gov.uk" class="govuk-link">info@cica.gov.uk</a></p>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                confirmation: {
                    title: 'Confirmation',
                    description: 'l10nt:confirmation.description{?lng,context,ns}'
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
        type: 'final'
    }
};
