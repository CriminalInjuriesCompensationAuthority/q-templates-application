'use strict';

/* eslint-disable no-useless-escape */
module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--confirmation'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--confirmation',
                    resources: {
                        confirmation: {
                            description: {
                                adult: {
                                    nonDeceased: `{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}
                                    {% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}
                                    {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                    {% if mobilePhoneNumber %}
                                      {% set contactMethod =  mobilePhoneNumber %}
                                    {% else %}
                                      {% set contactMethod =  emailAddress %}
                                    {% endif %}
                                    {% if caseReferenceNumber %}
                                      {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                    {% else %}
                                      {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                    {% endif %}
                                    {% set contact %}
                                        {% include 'contact.njk' %}
                                    {% endset %}
                                    <p class="govuk-body">All links on this page open in a new tab.</p>
                                    {{ govukPanel({
                                      titleText: "Application submitted",
                                      html: html
                                    })}}
                                    <p class="govuk-body">Thank you for submitting this application.</p>
                                    <h2 class="govuk-heading-m">What happens next</h2>
                                    <p class="govuk-body">We will:</p>
                                      <ul class="govuk-list govuk-list--bullet">
                                          <li>ask the police for evidence</li>
                                          <li>ask for medical information if required</li>
                                          <li>ask you for more information if we need it</li>
                                          <li>make a decision</li>
                                          <li>send our decision letter by post</li>
                                      </ul>
                                    <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about your injuries and recovery.</p>
                                    <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                    {{ govukWarningText({
                                      text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                      iconFallbackText: "Warning"
                                    }) }}
                                    <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                    <p class="govuk-body">You should send us any updates using our contact form.</p>
                                    <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                    <ul class="govuk-list govuk-list--bullet">
                                        <li>your contact or personal details change</li>
                                        <li>you stop using or change representative</li>
                                        <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                        <li>you have new information to add to your application</li>
                                        <li>information you provided previously has changed</li>
                                    </ul>
                                    <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                    <h2 class="govuk-heading-m">Contact us</h2>
                                    <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                    {{ govukDetails({
                                        summaryText: "View the different ways to contact CICA",
                                        html: contact
                                    })}}
                                    <h2 class="govuk-heading-m">Help us improve this service</h2>
                                    <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                    <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>`,
                                    deceased: `{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}
                                        {% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}
                                        {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                        {% if mobilePhoneNumber %}
                                            {% set contactMethod =  mobilePhoneNumber %}
                                        {% else %}
                                            {% set contactMethod =  emailAddress %}
                                        {% endif %}
                                        {% if caseReferenceNumber %}
                                            {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                        {% else %}
                                            {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                        {% endif %}
                                        {% set contact %}
                                            {% include 'contact.njk' %}
                                        {% endset %}
                                        <p class="govuk-body">All links on this page open in a new tab.</p>
                                        {{ govukPanel({
                                            titleText: "Application submitted",
                                            html: html
                                        })}}
                                        <p class="govuk-body">Thank you for submitting this application.</p>
                                        <h2 class="govuk-heading-m">What happens next</h2>
                                        <p class="govuk-body">We will:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>ask the police for evidence</li>
                                                <li>ask for proof of funeral costs if required</li>
                                                <li>ask you for more information if we need it</li>
                                                <li>make a decision</li>
                                                <li>send our decision letter by post</li>
                                            </ul>
                                        <p class="govuk-body">We aim to make a decision within 12 months but it can take longer.</p>
                                        <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                        {{ govukWarningText({
                                            text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                            iconFallbackText: "Warning"
                                        }) }}
                                        <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                        <p class="govuk-body">You should send us any updates using our contact form.</p>
                                        <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>your contact or personal details change</li>
                                            <li>any change of representative</li>
                                            <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                            <li>you have new information to add to your application</li>
                                            <li>information you provided previously has changed</li>
                                        </ul>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                        <h2 class="govuk-heading-m">If you need to contact us</h2>
                                        <p class="govuk-body">Unless you've anything to update in your applicaton you should wait for us to contect you.</p>
                                        {{ govukDetails({
                                            summaryText: "View the different ways to contact CICA",
                                            html: contact
                                        })}}
                                        <h2 class="govuk-heading-m">Help us improve this service</h2>
                                        <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                        <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                                <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>`
                                },
                                mainapplicant: {
                                    adult: {
                                        nonDeceased: `{% set mobilePhoneNumber = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||" %}
                                        {% set emailAddress = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||" %}
                                        {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                        {% if mobilePhoneNumber %}
                                        {% set contactMethod =  mobilePhoneNumber %}
                                        {% else %}
                                        {% set contactMethod =  emailAddress %}
                                        {% endif %}
                                        {% if caseReferenceNumber %}
                                        {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                        {% else %}
                                        {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                        {% endif %}
                                        {% set contact %}
                                            {% include 'contact.njk' %}
                                        {% endset %}
                                        <p class="govuk-body">All links on this page open in a new tab.</p>
                                        {{ govukPanel({
                                        titleText: "Application submitted",
                                        html: html
                                        })}}
                                        <p class="govuk-body">Thank you for submitting this application.</p>
                                        
                                        <h2 class="govuk-heading-m">Send certified documents to prove you have the legal authority to act on the victim’s behalf</h2>
                                        <p class="govuk-body">This proof should be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document you’re named on</li>
                                            <li>court order showing you have legal authority to act on behalf of the victim</li>
                                        </ul>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity – such as a solicitor. <a class="govuk-link" target="_blank" href="https://www.gov.uk/certifying-a-document">Discover more information about certifying documents (opens in new tab)</a> if you’re still unsure about sending these to us.</p>
                                        <p class="govuk-body">You should email your documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                        <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                        <p class="govuk-body">United Kingdom</p>
                                        <h2 class="govuk-heading-m">What happens next</h2>
                                        <p class="govuk-body">We will:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>ask the police for evidence</li>
                                            <li>ask for medical information if required</li>
                                            <li>ask you for more information if we need it</li>
                                            <li>make a decision</li>
                                            <li>send our decision letter by post</li>
                                        </ul>
                                        <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about the victim's injuries and recovery.</p>
                                        <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                        {{ govukWarningText({
                                        text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                        iconFallbackText: "Warning"
                                        }) }}
                                        <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                        <p class="govuk-body">You should send us any updates using our contact form.</p>
                                        <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>your contact or personal details change</li>
                                            <li>you stop using or change representative</li>
                                            <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                            <li>you have new information to add to your application</li>
                                            <li>information you provided previously has changed</li>
                                        </ul>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                        <h2 class="govuk-heading-m">Contact us</h2>
                                        <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                        {{ govukDetails({
                                            summaryText: "View the different ways to contact CICA",
                                            html: contact
                                        })}}
                                        <h2 class="govuk-heading-m">Help us improve this service</h2>
                                        <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                        <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                    `,
                                        deceased: `{% set mobilePhoneNumber = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||" %}
                                        {% set emailAddress = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||" %}
                                        {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                        {% if mobilePhoneNumber %}
                                        {% set contactMethod =  mobilePhoneNumber %}
                                        {% else %}
                                        {% set contactMethod =  emailAddress %}
                                        {% endif %}
                                        {% if caseReferenceNumber %}
                                        {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                        {% else %}
                                        {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                        {% endif %}
                                        {% set contact %}
                                            {% include 'contact.njk' %}
                                        {% endset %}
                                        <p class="govuk-body">All links on this page open in a new tab.</p>
                                        {{ govukPanel({
                                        titleText: "Application submitted",
                                        html: html
                                        })}}
                                        <p class="govuk-body">Thank you for submitting this application.</p>
                                        
                                        <h2 class="govuk-heading-m">Send certified documents to prove you have the legal authority to act on the claimant’s behalf</h2>
                                        <p class="govuk-body">This proof should be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document you’re named on</li>
                                            <li>court order showing you have legal authority to act on behalf of the claimant</li>
                                        </ul>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity – such as a solicitor. <a class="govuk-link" target="_blank" href="https://www.gov.uk/certifying-a-document">Discover more information about certifying documents (opens in new tab)</a> if you’re still unsure about sending these to us.</p>
                                        <p class="govuk-body">You should email these documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                        <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                        <p class="govuk-body">United Kingdom</p>
                                        <h2 class="govuk-heading-m">What happens next</h2>
                                        <p class="govuk-body">We will:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>ask the police for evidence</li>
                                            <li>ask for proof of funeral costs if required</li>
                                            <li>ask you for more information if we need it</li>
                                            <li>make a decision</li>
                                            <li>send our decision letter by post</li>
                                        </ul>
                                        <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. </p>
                                        <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                        {{ govukWarningText({
                                        text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                        iconFallbackText: "Warning"
                                        }) }}
                                        <h2 class="govuk-heading-m">Sending updated information about this application</h2>
                                        <p class="govuk-body">You should send us any updates using our contact form.</p>
                                        <p class="govuk-body">If any information in this application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>your contact or personal details change</li>
                                            <li>any change of  representative</li>
                                            <li>the claimant gets compensation or money from any other sources after you apply in relation to the incident</li>
                                            <li>you have new information to add to this application</li>
                                            <li>information you provided previously has changed</li>
                                        </ul>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                        <h2 class="govuk-heading-m">If you need to contact us</h2>
                                        <p class="govuk-body">Unless you've anything to update in this application you should wait for us to contact you.</p>
                                        {{ govukDetails({
                                            summaryText: "View the different ways to contact CICA",
                                            html: contact
                                        })}}
                                        <h2 class="govuk-heading-m">Help us improve this service</h2>
                                        <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                        <p class="govuk-body">It does not ask for any details about this case and has no effect on this application.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                    `
                                    },
                                    child: {
                                        nonDeceased: `{% set mobilePhoneNumber = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||" %}
                                            {% set emailAddress = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||" %}
                                            {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                            {% if mobilePhoneNumber %}
                                            {% set contactMethod =  mobilePhoneNumber %}
                                            {% else %}
                                            {% set contactMethod =  emailAddress %}
                                            {% endif %}
                                            {% if caseReferenceNumber %}
                                            {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                            {% else %}
                                            {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                            {% endif %}
                                            {% set contact %}
                                                {% include 'contact.njk' %}
                                            {% endset %}
                                            <p class="govuk-body">All links on this page open in a new tab.</p>
                                            {{ govukPanel({
                                            titleText: "Application submitted",
                                            html: html
                                            })}}
                                            <p class="govuk-body">Thank you for submitting this application.</p>
                                            <h2 class="govuk-heading-m">Send proof you can apply on the victim’s behalf</h2>
                                            <p class="govuk-body">This proof can be one of the following documents:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>the victim’s full birth certificate</li>
                                                <li>adoption documents</li>
                                                <li>a parental responsibility agreement</li>
                                                <li>a court order</li>
                                            </ul>
                                            <p class="govuk-body">You should copy the document in one of these ways to send to us:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>take a photo</li>
                                                <li>scan a copy</li>
                                                <li>make a photocopy</li>
                                            </ul>
                                            <p class="govuk-body">You should email your documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                            <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                            <p class="govuk-body">United Kingdom</p>
                                            <h2 class="govuk-heading-m">What happens next</h2>
                                            <p class="govuk-body">We will:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>ask the police for evidence</li>
                                                <li>ask for medical information if required</li>
                                                <li>ask you for more information if we need it</li>
                                                <li>make a decision</li>
                                                <li>send our decision letter by post</li>
                                            </ul>
                                            <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about the victim's injuries and recovery.</p>
                                            <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                            {{ govukWarningText({
                                            text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                            iconFallbackText: "Warning"
                                            }) }}
                                            <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                            <p class="govuk-body">You should send us any updates using our contact form.</p>
                                            <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>your contact or personal details change</li>
                                                <li>you stop using or change representative</li>
                                                <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                                <li>you have new information to add to your application</li>
                                                <li>information you provided previously has changed</li>
                                            </ul>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                            <h2 class="govuk-heading-m">Contact us</h2>
                                            <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                            {{ govukDetails({
                                                summaryText: "View the different ways to contact CICA",
                                                html: contact
                                            })}}
                                            <h2 class="govuk-heading-m">Help us improve this service</h2>
                                            <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                            <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                        `,
                                        deceased: `{% set mobilePhoneNumber = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||" %}
                                            {% set emailAddress = "||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||" %}
                                            {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                            {% if mobilePhoneNumber %}
                                            {% set contactMethod =  mobilePhoneNumber %}
                                            {% else %}
                                            {% set contactMethod =  emailAddress %}
                                            {% endif %}
                                            {% if caseReferenceNumber %}
                                            {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                            {% else %}
                                            {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                            {% endif %}
                                            {% set contact %}
                                                {% include 'contact.njk' %}
                                            {% endset %}
                                            <p class="govuk-body">All links on this page open in a new tab.</p>
                                            {{ govukPanel({
                                            titleText: "Application submitted",
                                            html: html
                                            })}}
                                            <p class="govuk-body">Thank you for submitting this application.</p>
                                            <h2 class="govuk-heading-m">Send proof you can apply on the claimant’s behalf</h2>
                                            <p class="govuk-body">This proof can be one of the following documents:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>the claimant’s full birth certificate</li>
                                                <li>adoption documents</li>
                                                <li>a parental responsibility agreement</li>
                                                <li>a court order</li>
                                            </ul>
                                            <p class="govuk-body">You should copy the document in one of these ways to send to us:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>take a photo</li>
                                                <li>scan a copy</li>
                                                <li>make a photocopy</li>
                                            </ul>
                                            <p class="govuk-body">You should email these documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                            <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                            <p class="govuk-body">United Kingdom</p>
                                            <h2 class="govuk-heading-m">What happens next</h2>
                                            <p class="govuk-body">We will:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>ask the police for evidence</li>
                                                <li>ask for proof of funeral costs if required</li>
                                                <li>ask you for more information if we need it</li>
                                                <li>make a decision</li>
                                                <li>send our decision letter by post</li>
                                            </ul>
                                            <p class="govuk-body">We aim to make a decision within 12 months but it can take longer.</p>
                                            <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                            {{ govukWarningText({
                                            text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                            iconFallbackText: "Warning"
                                            }) }}
                                            <h2 class="govuk-heading-m">Sending updated information about this application</h2>
                                            <p class="govuk-body">You should send us any updates using our contact form.</p>
                                            <p class="govuk-body">If any information in this application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>your contact or personal details change</li>
                                                <li>any change of representative</li>
                                                <li>the claimant gets compensation or money from any other sources after you apply in relation to the incident</li>
                                                <li>you have new information to add to this application</li>
                                                <li>information you provided previously has changed</li>
                                            </ul>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about this application</a></p>
                                            <h2 class="govuk-heading-m">If you need to contact us</h2>
                                            <p class="govuk-body">Unless you've anything to update in this application you should wait for us to contact you.</p>
                                            {{ govukDetails({
                                                summaryText: "View the different ways to contact CICA",
                                                html: contact
                                            })}}
                                            <h2 class="govuk-heading-m">Help us improve this service</h2>
                                            <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                            <p class="govuk-body">It does not ask for any details about this case and has no effect on this application.</p>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                        `
                                    }
                                },
                                rep: {
                                    adult: {
                                        capable: {
                                            nonDeceased: `{% set mobilePhoneNumber = "||/answers/p-rep-confirmation-method/q-rep-telephone-number||" %}
                                            {% set emailAddress = "||/answers/p-rep-confirmation-method/q-rep-email-address||" %}
                                            {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                            {% if mobilePhoneNumber %}
                                            {% set contactMethod =  mobilePhoneNumber %}
                                            {% else %}
                                            {% set contactMethod =  emailAddress %}
                                            {% endif %}
                                            {% if caseReferenceNumber %}
                                            {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                            {% else %}
                                            {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                            {% endif %}
                                            {% set contact %}
                                                {% include 'contact.njk' %}
                                            {% endset %}
                                            <p class="govuk-body">All links on this page open in a new tab.</p>
                                            {{ govukPanel({
                                            titleText: "Application submitted",
                                            html: html
                                            })}}
                                            <p class="govuk-body">Thank you for submitting this application.</p>
                                            <h2 class="govuk-heading-m">What happens next</h2>
                                            <p class="govuk-body">We will:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>ask the police for evidence</li>
                                                <li>ask for medical information if required</li>
                                                <li>ask you for more information if we need it</li>
                                                <li>make a decision</li>
                                                <li>send our decision letter by post</li>
                                            </ul>
                                            <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about the victim’s injuries and recovery.</p>
                                            <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                            {{ govukWarningText({
                                            text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                            iconFallbackText: "Warning"
                                            }) }}
                                            <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                            <p class="govuk-body">You should send us any updates using our contact form.</p>
                                            <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>your contact or personal details change</li>
                                                <li>you stop using or change representative</li>
                                                <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                                <li>you have new information to add to your application</li>
                                                <li>information you provided previously has changed</li>
                                            </ul>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                            <h2 class="govuk-heading-m">Contact us</h2>
                                            <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                            {{ govukDetails({
                                                summaryText: "View the different ways to contact CICA",
                                                html: contact
                                            })}}
                                            <h2 class="govuk-heading-m">Help us improve this service</h2>
                                            <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                            <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                        `,
                                            deceased: `{% set mobilePhoneNumber = "||/answers/p-rep-confirmation-method/q-rep-telephone-number||" %}
                                        {% set emailAddress = "||/answers/p-rep-confirmation-method/q-rep-email-address||" %}
                                        {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                        {% if mobilePhoneNumber %}
                                        {% set contactMethod =  mobilePhoneNumber %}
                                        {% else %}
                                        {% set contactMethod =  emailAddress %}
                                        {% endif %}
                                        {% if caseReferenceNumber %}
                                        {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                        {% else %}
                                        {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                        {% endif %}
                                        {% set contact %}
                                            {% include 'contact.njk' %}
                                        {% endset %}
                                        <p class="govuk-body">All links on this page open in a new tab.</p>
                                        {{ govukPanel({
                                        titleText: "Application submitted",
                                        html: html
                                        })}}
                                        <p class="govuk-body">Thank you for submitting this application.</p>
                                        <h2 class="govuk-heading-m">What happens next</h2>
                                        <p class="govuk-body">We will:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>ask the police for evidence</li>
                                            <li>ask for proof of funeral costs if required</li>
                                            <li>ask you for more information if we need it</li>
                                            <li>make a decision</li>
                                            <li>send our decision letter by post</li>
                                        </ul>
                                        <p class="govuk-body">We aim to make a decision within 12 months but it can take longer.</p>
                                        <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                        {{ govukWarningText({
                                        text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                        iconFallbackText: "Warning"
                                        }) }}
                                        <h2 class="govuk-heading-m">Sending updated information about this application</h2>
                                        <p class="govuk-body">You should send us any updates using our contact form.</p>
                                        <p class="govuk-body">If any information in this application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>your contact or personal details change</li>
                                            <li>any change of representative</li>
                                            <li>the claimant gets compensation or money from any other sources after you apply in relation to the incident</li>
                                            <li>you have new information to add to this application</li>
                                            <li>information you provided previously has changed</li>
                                        </ul>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about this application</a></p>
                                        <h2 class="govuk-heading-m">If you need to contact us</h2>
                                        <p class="govuk-body">Unless you've anything to update in this application you should wait for us to contact you.</p>
                                        {{ govukDetails({
                                            summaryText: "View the different ways to contact CICA",
                                            html: contact
                                        })}}
                                        <h2 class="govuk-heading-m">Help us improve this service</h2>
                                        <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                        <p class="govuk-body">It does not ask for any details about this case and has no effect on this application.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                    `
                                        },
                                        incapable: {
                                            nonDeceased: `{% set mobilePhoneNumber = "||/answers/p-rep-confirmation-method/q-rep-telephone-number||" %}
                                            {% set emailAddress = "||/answers/p-rep-confirmation-method/q-rep-email-address||" %}
                                            {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                            {% if mobilePhoneNumber %}
                                            {% set contactMethod =  mobilePhoneNumber %}
                                            {% else %}
                                            {% set contactMethod =  emailAddress %}
                                            {% endif %}
                                            {% if caseReferenceNumber %}
                                            {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                            {% else %}
                                            {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                            {% endif %}
                                            {% set contact %}
                                                {% include 'contact.njk' %}
                                            {% endset %}
                                            <p class="govuk-body">All links on this page open in a new tab.</p>
                                            {{ govukPanel({
                                            titleText: "Application submitted",
                                            html: html
                                            })}}
                                            <p class="govuk-body">Thank you for submitting this application.</p>
                                            
                                            <h2 class="govuk-heading-m">Send certified documents to prove the person with legal authority can act on the victim’s behalf</h2>
                                            <p class="govuk-body">This proof should be a certified copy of a:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>power of attorney document they’re named on</li>
                                                <li>court order showing they have legal authority to act on behalf of the victim</li>
                                            </ul>
                                            <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity – such as a solicitor. <a class="govuk-link" target="_blank" href="https://www.gov.uk/certifying-a-document">Discover more information about certifying documents (opens in new tab)</a> if you’re still unsure about sending these to us.</p>
                                            <p class="govuk-body">You should email your documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                            <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                            <p class="govuk-body">United Kingdom</p>
                                            <h2 class="govuk-heading-m">What happens next</h2>
                                            <p class="govuk-body">We will:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>ask the police for evidence</li>
                                                <li>ask for medical information if required</li>
                                                <li>ask you for more information if we need it</li>
                                                <li>make a decision</li>
                                                <li>send our decision letter by post</li>
                                            </ul>
                                            <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about the victim's injuries and recovery.</p>
                                            <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                            {{ govukWarningText({
                                            text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                            iconFallbackText: "Warning"
                                            }) }}
                                            <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                            <p class="govuk-body">You should send us any updates using our contact form.</p>
                                            <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>your contact or personal details change</li>
                                                <li>you stop using or change representative</li>
                                                <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                                <li>you have new information to add to your application</li>
                                                <li>information you provided previously has changed</li>
                                            </ul>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                            <h2 class="govuk-heading-m">Contact us</h2>
                                            <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                            {{ govukDetails({
                                                summaryText: "View the different ways to contact CICA",
                                                html: contact
                                            })}}
                                            <h2 class="govuk-heading-m">Help us improve this service</h2>
                                            <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                            <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                        `,
                                            deceased: `{% set mobilePhoneNumber = "||/answers/p-rep-confirmation-method/q-rep-telephone-number||" %}
                                            {% set emailAddress = "||/answers/p-rep-confirmation-method/q-rep-email-address||" %}
                                            {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                            {% if mobilePhoneNumber %}
                                            {% set contactMethod =  mobilePhoneNumber %}
                                            {% else %}
                                            {% set contactMethod =  emailAddress %}
                                            {% endif %}
                                            {% if caseReferenceNumber %}
                                            {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                            {% else %}
                                            {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                            {% endif %}
                                            {% set contact %}
                                                {% include 'contact.njk' %}
                                            {% endset %}
                                            <p class="govuk-body">All links on this page open in a new tab.</p>
                                            {{ govukPanel({
                                            titleText: "Application submitted",
                                            html: html
                                            })}}
                                            <p class="govuk-body">Thank you for submitting this application.</p>
                                            
                                            <h2 class="govuk-heading-m">Send certified documents to prove the person with legal authority can act on the claimant’s behalf</h2>
                                            <p class="govuk-body">This proof should be a certified copy of a:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>power of attorney document they’re named on</li>
                                                <li>court order showing they have legal authority to act on behalf of the claimant</li>
                                            </ul>
                                            <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity – such as a solicitor. <a class="govuk-link" target="_blank" href="https://www.gov.uk/certifying-a-document">Discover more information about certifying documents (opens in new tab)</a> if you’re still unsure about sending these to us.</p>
                                            <p class="govuk-body">You should email these documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                            <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                            <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                            <p class="govuk-body">United Kingdom</p>
                                            <h2 class="govuk-heading-m">What happens next</h2>
                                            <p class="govuk-body">We will:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>ask the police for evidence</li>
                                                <li>ask for proof of funeral costs if required</li>
                                                <li>ask you for more information if we need it</li>
                                                <li>make a decision</li>
                                                <li>send our decision letter by post</li>
                                            </ul>
                                            <p class="govuk-body">We aim to make a decision within 12 months but it can take longer.</p>
                                            <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                            {{ govukWarningText({
                                            text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                            iconFallbackText: "Warning"
                                            }) }}
                                            <h2 class="govuk-heading-m">Sending updated information about this application</h2>
                                            <p class="govuk-body">You should send us any updates using our contact form.</p>
                                            <p class="govuk-body">If any information in this application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                            <ul class="govuk-list govuk-list--bullet">
                                                <li>your contact or personal details change</li>
                                                <li>any change of representative</li>
                                                <li>the claomant gets compensation or money from any other sources after you apply in relation to the incident</li>
                                                <li>you have new information to add to this application</li>
                                                <li>information you provided previously has changed</li>
                                            </ul>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about this application</a></p>
                                            <h2 class="govuk-heading-m">If you need to contact us</h2>
                                            <p class="govuk-body">Unless you've anything to update in this application you should wait for us to contact you.</p>
                                            {{ govukDetails({
                                                summaryText: "View the different ways to contact CICA",
                                                html: contact
                                            })}}
                                            <h2 class="govuk-heading-m">Help us improve this service</h2>
                                            <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                            <p class="govuk-body">It does not ask for any details about this case and has no effect on this application.</p>
                                            <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                        `
                                        }
                                    },
                                    child: `{% set mobilePhoneNumber = "||/answers/p-rep-confirmation-method/q-rep-telephone-number||" %}
                                        {% set emailAddress = "||/answers/p-rep-confirmation-method/q-rep-email-address||" %}
                                        {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                        {% if mobilePhoneNumber %}
                                        {% set contactMethod =  mobilePhoneNumber %}
                                        {% else %}
                                        {% set contactMethod =  emailAddress %}
                                        {% endif %}
                                        {% if caseReferenceNumber %}
                                        {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                        {% else %}
                                        {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                        {% endif %}
                                        {% set contact %}
                                            {% include 'contact.njk' %}
                                        {% endset %}
                                        <p class="govuk-body">All links on this page open in a new tab.</p>
                                        {{ govukPanel({
                                        titleText: "Application submitted",
                                        html: html
                                        })}}
                                        <p class="govuk-body">Thank you for submitting this application.</p>
                                        
                                        <h2 class="govuk-heading-m">Send proof of who has parental responsibility to apply on the victim’s behalf</h2>
                                        <p class="govuk-body">This proof can be one of the following documents:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>the victim’s full birth certificate</li>
                                            <li>adoption documents</li>
                                            <li>a parental responsibility agreement</li>
                                            <li>a court order</li>
                                        </ul>
                                        <p class="govuk-body">You should copy the document in one of these ways to send to us:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>take a photo</li>
                                            <li>scan a copy</li>
                                            <li>make a photocopy</li>
                                        </ul>
                                        <p class="govuk-body">You should email your documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                        <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                        <p class="govuk-body">United Kingdom</p>
                                        <h2 class="govuk-heading-m">What happens next</h2>
                                        <p class="govuk-body">We will:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>ask the police for evidence</li>
                                            <li>ask for medical information if required</li>
                                            <li>ask you for more information if we need it</li>
                                            <li>make a decision</li>
                                            <li>send our decision letter by post</li>
                                        </ul>
                                        <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about the victim's injuries and recovery.</p>
                                        <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                        {{ govukWarningText({
                                        text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                        iconFallbackText: "Warning"
                                        }) }}
                                        <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                        <p class="govuk-body">You should send us any updates using our contact form.</p>
                                        <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>your contact or personal details change</li>
                                            <li>you stop using or change representative</li>
                                            <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                            <li>you have new information to add to your application</li>
                                            <li>information you provided previously has changed</li>
                                        </ul>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                        <h2 class="govuk-heading-m">Contact us</h2>
                                        <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                        {{ govukDetails({
                                            summaryText: "View the different ways to contact CICA",
                                            html: contact
                                        })}}
                                        <h2 class="govuk-heading-m">Help us improve this service</h2>
                                        <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                        <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                    `,
                                    noauthority: `{% set mobilePhoneNumber = "||/answers/p-rep-confirmation-method/q-rep-telephone-number||" %}
                                        {% set emailAddress = "||/answers/p-rep-confirmation-method/q-rep-email-address||" %}
                                        {% set caseReferenceNumber = "||/answers/system/case-reference||" %}
                                        {% if mobilePhoneNumber %}
                                        {% set contactMethod =  mobilePhoneNumber %}
                                        {% else %}
                                        {% set contactMethod =  emailAddress %}
                                        {% endif %}
                                        {% if caseReferenceNumber %}
                                        {% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}
                                        {% else %}
                                        {% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}
                                        {% endif %}
                                        {% set contact %}
                                            {% include 'contact.njk' %}
                                        {% endset %}
                                        <p class="govuk-body">All links on this page open in a new tab.</p>
                                        {{ govukPanel({
                                        titleText: "Application submitted",
                                        html: html
                                        })}}
                                        <p class="govuk-body">Thank you for submitting this application.</p>
                                        <h2 class="govuk-heading-m">Send certified documents to prove who has legal authority to act on the victim’s behalf</h2>
                                        <p class="govuk-body">We understand this might not be confirmed as yet. Unfortunately, we’re unable to progress the application any further until we have these details though. You can send this to us at a later date.</p>
                                        <p class="govuk-body">This proof should be a certified copy of a:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>power of attorney document you’re named on</li>
                                            <li>court order showing you have legal authority to act on behalf of the victim</li>
                                        </ul>
                                        <p class="govuk-body">To certify a document as a true copy of the original document, you need to get it signed and dated by someone in a professional capacity – such as a solicitor.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.gov.uk/certifying-a-document">Discover more information about certifying documents</a> if you’re still unsure about sending these to us.</p>
                                        <p class="govuk-body">You should email your documents to us at <a href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk.</a></p>
                                        <p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p>
                                        <p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p>
                                        <p class="govuk-body">United Kingdom</p>
                                        <h2 class="govuk-heading-m">What happens next</h2>
                                        <p class="govuk-body">We will:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>ask the police for evidence</li>
                                            <li>ask for medical information if required</li>
                                            <li>ask you for more information if we need it</li>
                                            <li>make a decision</li>
                                            <li>send our decision letter by post</li>
                                        </ul>
                                        <p class="govuk-body">We aim to make a decision within 12 months but it can take longer. We may have to wait until there’s enough information about the victim's injuries and recovery.</p>
                                        <p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter</a></p>
                                        {{ govukWarningText({
                                        text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                                        iconFallbackText: "Warning"
                                        }) }}
                                        <h2 class="govuk-heading-m">Sending updated information about your application</h2>
                                        <p class="govuk-body">You should send us any updates using our contact form.</p>
                                        <p class="govuk-body">If any information in your application changes, you need to <strong>contact us immediately</strong> to let us know. This may include:</p>
                                        <ul class="govuk-list govuk-list--bullet">
                                            <li>your contact or personal details change</li>
                                            <li>you stop using or change representative</li>
                                            <li>you get compensation or money from any other sources after you apply in relation to the incident</li>
                                            <li>you have new information to add to your application</li>
                                            <li>information you provided previously has changed</li>
                                        </ul>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://contact-the-cica.form.service.justice.gov.uk/">Send an update about your application</a></p>
                                        <h2 class="govuk-heading-m">Contact us</h2>
                                        <p class="govuk-body">As we've only received this application, we will now carry out necessary initial enquiries relating to this. Unless you've anything new to add or update in the application, we kindly ask that you wait for us to contact you.</p>
                                        {{ govukDetails({
                                            summaryText: "View the different ways to contact CICA",
                                            html: contact
                                        })}}
                                        <h2 class="govuk-heading-m">Help us improve this service</h2>
                                        <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                                        <p class="govuk-body">It does not ask for any details about your case and has no effect on your application.</p>
                                        <p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>
                                    `
                                }
                            }
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
                    description: [
                        '|l10nt',
                        ['|role.all', 'mainapplicant', 'adult', 'nonDeceased'],
                        'confirmation.description.mainapplicant.adult.nonDeceased',
                        ['|role.all', 'mainapplicant', 'adult', 'deceased'],
                        'confirmation.description.mainapplicant.adult.deceased',
                        ['|role.all', 'mainapplicant', 'child', 'nonDeceased'],
                        'confirmation.description.mainapplicant.child.nonDeceased',
                        [
                            'or',
                            ['|role.all', 'mainapplicant', 'child', 'deceased', 'childOver12'],
                            ['|role.all', 'mainapplicant', 'child', 'deceased', 'childUnder12']
                        ],
                        'confirmation.description.mainapplicant.child.deceased',
                        ['|role.all', 'rep', 'adult', 'capable', 'nonDeceased'],
                        'confirmation.description.rep.adult.capable.nonDeceased',
                        ['|role.all', 'rep', 'adult', 'capable', 'deceased'],
                        'confirmation.description.rep.adult.capable.deceased',
                        ['|role.all', 'rep', 'noauthority'],
                        'confirmation.description.rep.noauthority',
                        ['|role.all', 'rep', 'adult', 'incapable', 'nonDeceased'],
                        'confirmation.description.rep.adult.incapable.nonDeceased',
                        ['|role.all', 'rep', 'adult', 'incapable', 'deceased'],
                        'confirmation.description.rep.adult.incapable.deceased',
                        ['|role.all', 'rep', 'child'],
                        'confirmation.description.rep.child',
                        ['|role.all', 'adult', 'nonDeceased'],
                        'confirmation.description.adult.nonDeceased',
                        ['|role.all', 'adult', 'deceased'],
                        'confirmation.description.adult.deceased'
                    ]
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
