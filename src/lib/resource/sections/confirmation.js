'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                confirmation: {
                    title: 'Confirmation',
                    description:
                        '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We\'ll also send this to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your case reference number to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting an application.</p><h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for a report of the crime</li><li>ask you for more information if we need it</li><li>make a decision on your application</li><li>send our decision letter to you by post</li></ul><p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there is enough information about your injuries and recovery.</p>{{ govukWarningText({text: "You must tell us right away if any of the information you have given us changes. This includes your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service</a> (takes 10 minutes)</p>'
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
