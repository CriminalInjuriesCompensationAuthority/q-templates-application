@back-navigation-details-routing @legacy @back-navigation
Feature: back-navigation-details-routing

Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the user is on page "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the user is on page "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user continues
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the user is on page "p-applicant-are-you-18-or-over"
And the user answers 'false' to the question "q-applicant-are-you-18-or-over"
When the user continues
Then the user is on page "p-applicant-under-18"

Scenario: the user is on page p-applicant-under-18.
Given the user is on page "p-applicant-under-18"
When the user selects previous page
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the user is on page "p-applicant-are-you-18-or-over"
And the user answers 'true' to the question "q-applicant-are-you-18-or-over"
When the user continues
Then the user is on page "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the user is on page "p--was-the-crime-reported-to-police"
And the user answers 'false' to the question "q--was-the-crime-reported-to-police"
When the user continues
Then the user is on page "p-applicant-you-cannot-get-compensation"

Scenario: the user is on page p-applicant-you-cannot-get-compensation.
Given the user is on page "p-applicant-you-cannot-get-compensation"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user selects previous page
Then the user is on page "p-applicant-you-cannot-get-compensation"

Scenario: the user is on page p-applicant-you-cannot-get-compensation.
Given the user is on page "p-applicant-you-cannot-get-compensation"
When the user selects previous page
Then the user is on page "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the user is on page "p--was-the-crime-reported-to-police"
And the user answers 'true' to the question "q--was-the-crime-reported-to-police"
When the user continues
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user selects previous page
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user selects previous page
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user selects previous page
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
And the user answers 'true' to the question "q-applicant-fatal-claim"
When the user continues
Then the user is on page "p-applicant-claim-type"

Scenario: the user is on page p-applicant-claim-type.
Given the user is on page "p-applicant-claim-type"
When the user selects previous page
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
And the user answers 'false' to the question "q-applicant-fatal-claim"
When the user continues
Then the user is on page "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the user is on page "p-applicant-applied-before-for-this-crime"
And the user answers 'false' to the question "q-applicant-applied-before-for-this-crime"
When the user continues
Then the user is on page "p-applicant-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-someone-else-applied-before-for-this-crime.
Given the user is on page "p-applicant-someone-else-applied-before-for-this-crime"
And the user answers 'no' to the question "q-applicant-someone-else-applied-before-for-this-crime"
When the user continues
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user advances the application
Then the user is on page "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the user is on page "p-applicant-confirmation-method"
And the user answers 'none' to the question "q-applicant-confirmation-method"
When the user continues
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
And the user answers 'miss' to the question "q-applicant-title"
And the user answers 'test' to the question "q-applicant-first-name"
And the user answers 'testcase' to the question "q-applicant-last-name"
When the user continues
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
And the user answers 'false' to the question "q-applicant-have-you-been-known-by-any-other-names"
When the user continues
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
And the user answers "01 01 1990" to the question "q-applicant-enter-your-date-of-birth"
When the user continues
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user continues
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user selects previous page
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user selects previous page
Then the user is on page "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the user is on page "p-applicant-confirmation-method"
And the user answers 'email' to the question "q-applicant-confirmation-method"
And the user inputs their email address to the question "q-applicant-enter-your-email-address"
When the user continues
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
And the user answers 'miss' to the question "q-applicant-title"
And the user answers 'test' to the question "q-applicant-first-name"
And the user answers 'testcase' to the question "q-applicant-last-name"
When the user continues
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
And the user answers 'true' to the question "q-applicant-have-you-been-known-by-any-other-names"
And the user answers 'test' to the question "q-applicant-what-other-names-have-you-used"
When the user continues
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user selects previous page
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
And the user answers 'false' to the question "q-applicant-have-you-been-known-by-any-other-names"
When the user continues
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
And the user answers "01 01 1990" to the question "q-applicant-enter-your-date-of-birth"
When the user continues
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user continues
Then the user is on page "p-applicant-enter-your-telephone-number"

Scenario: the user is on page p-applicant-enter-your-telephone-number.
Given the user is on page "p-applicant-enter-your-telephone-number"
And the user inputs their telephone number to the question "q-applicant-enter-your-telephone-number"
When the user continues
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-telephone-number"

Scenario: the user is on page p-applicant-enter-your-telephone-number.
Given the user is on page "p-applicant-enter-your-telephone-number"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user selects previous page
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user selects previous page
Then the user is on page "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the user is on page "p-applicant-confirmation-method"
And the user answers 'text' to the question "q-applicant-confirmation-method"
And the user inputs their telephone number to the question "q-applicant-enter-your-telephone-number"
When the user continues
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user advances the application
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user advances the application
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user advances the application
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user advances the application
Then the user is on page "p-applicant-enter-your-email-address"

Scenario: the user is on page p-applicant-enter-your-email-address.
Given the user is on page "p-applicant-enter-your-email-address"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user selects previous page
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user selects previous page
Then the user is on page "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the user is on page "p-applicant-confirmation-method"
When the user selects previous page
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user selects previous page
Then the user is on page "p-applicant-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-someone-else-applied-before-for-this-crime.
Given the user is on page "p-applicant-someone-else-applied-before-for-this-crime"
When the user selects previous page
Then the user is on page "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the user is on page "p-applicant-applied-before-for-this-crime"
When the user selects previous page
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user selects previous page
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user selects previous page
Then the user is on page "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the user is on page "p--was-the-crime-reported-to-police"
When the user selects previous page
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the user is on page "p-applicant-are-you-18-or-over"
When the user selects previous page
Then the user is on page "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the user is on page "p-applicant-who-are-you-applying-for"
And the user answers 'someone-else' to the question "q-applicant-who-are-you-applying-for"
When the user continues
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the user is on page "p-applicant-are-you-18-or-over"
And the user answers 'false' to the question "q-applicant-are-you-18-or-over"
When the user continues
Then the user is on page "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the user is on page "p--was-the-crime-reported-to-police"
When the user advances the application
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user advances the application
Then the user is on page "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the user is on page "p-applicant-applied-before-for-this-crime"
When the user advances the application
Then the user is on page "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the user is on page "p-proxy-someone-else-applied-before-for-this-crime"
And the user answers 'false' to the question "q-proxy-someone-else-applied-before-for-this-crime"
When the user continues
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user advances the application
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user advances the application
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user advances the application
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user advances the application
Then the user is on page "p-applicant-can-handle-affairs"

Scenario: the user is on page p-applicant-can-handle-affairs.
Given the user is on page "p-applicant-can-handle-affairs"
And the user answers 'false' to the question "q-applicant-capable"
When the user continues
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user advances the application
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user advances the application
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
And the user answers 'true' to the question "q-applicant-british-citizen"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user advances the application
Then the user is on page "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the user is on page "p--has-legal-authority"
And the user answers 'true' to the question "q--has-legal-authority"
When the user continues
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user advances the application
Then the user is on page "p-mainapplicant-confirmation-method"

Scenario: the user is on page p-mainapplicant-confirmation-method.
Given the user is on page "p-mainapplicant-confirmation-method"
And the user answers 'email' to the question "q-mainapplicant-confirmation-method"
And the user inputs their email address to the question "q-mainapplicant-enter-your-email-address"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the user is on page "p-mainapplicant-enter-your-name"
And the user answers 'miss' to the question "q-mainapplicant-title"
And the user answers 'test' to the question "q-mainapplicant-first-name"
And the user answers 'testcase' to the question "q-mainapplicant-last-name"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the user is on page "p-mainapplicant-enter-your-address"
And the user answers '10 bank st' to the question "q-mainapplicant-building-and-street"
And the user answers 'glasgow' to the question "q-mainapplicant-town-or-city"
And the user answers 'ma1' to the question "q-mainapplicant-postcode"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the user is on page "p-mainapplicant-enter-your-telephone-number"
And the user inputs their telephone number to the question "q-mainapplicant-enter-your-telephone-number"
When the user continues
Then the user is on page "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the user is on page "p-mainapplicant-relationship"
When the user selects previous page
Then the user is on page "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the user is on page "p-mainapplicant-enter-your-telephone-number"
When the user selects previous page
Then the user is on page "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the user is on page "p-mainapplicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the user is on page "p-mainapplicant-enter-your-name"
When the user selects previous page
Then the user is on page "p-mainapplicant-confirmation-method"

Scenario: the user is on page p-mainapplicant-confirmation-method.
Given the user is on page "p-mainapplicant-confirmation-method"
When the user selects previous page
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user selects previous page
Then the user is on page "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the user is on page "p--has-legal-authority"
When the user selects previous page
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
When the user selects previous page
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-applicant-can-handle-affairs"

Scenario: the user is on page p-applicant-can-handle-affairs.
Given the user is on page "p-applicant-can-handle-affairs"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user selects previous page
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user selects previous page
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user selects previous page
Then the user is on page "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the user is on page "p-proxy-someone-else-applied-before-for-this-crime"
When the user selects previous page
Then the user is on page "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the user is on page "p-applicant-applied-before-for-this-crime"
When the user selects previous page
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user selects previous page
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user selects previous page
Then the user is on page "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the user is on page "p--was-the-crime-reported-to-police"
When the user selects previous page
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the user is on page "p-applicant-are-you-18-or-over"
And the user answers 'true' to the question "q-applicant-are-you-18-or-over"
When the user continues
Then the user is on page "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the user is on page "p--was-the-crime-reported-to-police"
When the user advances the application
Then the user is on page "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the user is on page "p--context-crime-ref-no"
When the user advances the application
Then the user is on page "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the user is on page "p-applicant-fatal-claim"
When the user advances the application
Then the user is on page "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the user is on page "p-applicant-applied-before-for-this-crime"
When the user advances the application
Then the user is on page "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the user is on page "p-proxy-someone-else-applied-before-for-this-crime"
When the user advances the application
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user advances the application
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
When the user advances the application
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
When the user advances the application
Then the user is on page "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
When the user advances the application
Then the user is on page "p-applicant-can-handle-affairs"

Scenario: the user is on page p-applicant-can-handle-affairs.
Given the user is on page "p-applicant-can-handle-affairs"
And the user answers 'true' to the question "q-applicant-capable"
When the user continues
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user advances the application
Then the user is on page "p-applicant-enter-your-telephone-number"

Scenario: the user is on page p-applicant-enter-your-telephone-number.
Given the user is on page "p-applicant-enter-your-telephone-number"
When the user advances the application
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user advances the application
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
When the user advances the application
Then the user is on page "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the user is on page "p--context-rep-details"
When the user advances the application
Then the user is on page "p-rep-type"

Scenario: the user is on page p-rep-type.
Given the user is on page "p-rep-type"
And the user answers 'SOLS' to the question "q-rep-type"
When the user continues
Then the user is on page "p-rep-confirmation-method"

Scenario: the user is on page p-rep-confirmation-method.
Given the user is on page "p-rep-confirmation-method"
And the user answers 'email' to the question "q-rep-confirmation-method"
And the user inputs their email address to the question "q-rep-email-address"
When the user continues
Then the user is on page "p-rep-name"

Scenario: the user is on page p-rep-name.
Given the user is on page "p-rep-name"
And the user answers 'miss' to the question "q-rep-title"
And the user answers 'test' to the question "q-rep-first-name"
And the user answers 'testcase' to the question "q-rep-last-name"
When the user continues
Then the user is on page "p-rep-organisation-address"

Scenario: the user is on page p-rep-organisation-address.
Given the user is on page "p-rep-organisation-address"
And the user answers 'test' to the question "q-rep-organisation-name"
And the user answers '10 bank st' to the question "q-rep-building-and-street"
And the user answers 'glasgow' to the question "q-rep-town-or-city"
And the user answers 'ma1' to the question "q-rep-postcode"
When the user continues
Then the user is on page "p-rep-telephone-number"

Scenario: the user is on page p-rep-telephone-number.
Given the user is on page "p-rep-telephone-number"
And the user inputs their telephone number to the question "q-rep-telephone-number"
When the user continues
Then the user is on page "p-rep-reference-number"

Scenario: the user is on page p-rep-reference-number.
Given the user is on page "p-rep-reference-number"
And the user answers 'false' to the question "q-rep-has-reference-number"
When the user selects previous page
Then the user is on page "p-rep-telephone-number"

Scenario: the user is on page p-rep-telephone-number.
Given the user is on page "p-rep-telephone-number"
When the user selects previous page
Then the user is on page "p-rep-organisation-address"

Scenario: the user is on page p-rep-organisation-address.
Given the user is on page "p-rep-organisation-address"
When the user selects previous page
Then the user is on page "p-rep-name"

Scenario: the user is on page p-rep-name.
Given the user is on page "p-rep-name"
When the user selects previous page
Then the user is on page "p-rep-confirmation-method"

Scenario: the user is on page p-rep-confirmation-method.
Given the user is on page "p-rep-confirmation-method"
When the user selects previous page
Then the user is on page "p-rep-type"

Scenario: the user is on page p-rep-type.
Given the user is on page "p-rep-type"
When the user selects previous page
Then the user is on page "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the user is on page "p--context-rep-details"
When the user selects previous page
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
When the user selects previous page
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-telephone-number"

Scenario: the user is on page p-applicant-enter-your-telephone-number.
Given the user is on page "p-applicant-enter-your-telephone-number"
When the user selects previous page
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-applicant-can-handle-affairs"

Scenario: the user is on page p-applicant-can-handle-affairs.
Given the user is on page "p-applicant-can-handle-affairs"
And the user answers 'false' to the question "q-applicant-capable"
When the user continues
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
When the user advances the application
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user advances the application
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
When the user advances the application
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user advances the application
Then the user is on page "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the user is on page "p--has-legal-authority"
And the user answers 'true' to the question "q--has-legal-authority"
When the user continues
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user advances the application
Then the user is on page "p-mainapplicant-confirmation-method"

Scenario: the user is on page p-mainapplicant-confirmation-method.
Given the user is on page "p-mainapplicant-confirmation-method"
When the user advances the application
Then the user is on page "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the user is on page "p-mainapplicant-enter-your-name"
When the user advances the application
Then the user is on page "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the user is on page "p-mainapplicant-enter-your-address"
And the user answers '10 bank st' to the question "q-mainapplicant-building-and-street"
And the user answers 'glasgow' to the question "q-mainapplicant-town-or-city"
And the user answers 'ma1' to the question "q-mainapplicant-postcode"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the user is on page "p-mainapplicant-enter-your-telephone-number"
When the user advances the application
Then the user is on page "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the user is on page "p-mainapplicant-relationship"
And the user answers 'father' to the question "q-mainapplicant-relationship"
When the user selects previous page
Then the user is on page "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the user is on page "p-mainapplicant-enter-your-telephone-number"
When the user selects previous page
Then the user is on page "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the user is on page "p-mainapplicant-enter-your-address"
When the user selects previous page
Then the user is on page "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the user is on page "p-mainapplicant-enter-your-name"
When the user selects previous page
Then the user is on page "p-mainapplicant-confirmation-method"

Scenario: the user is on page p-mainapplicant-confirmation-method.
Given the user is on page "p-mainapplicant-confirmation-method"
When the user selects previous page
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user selects previous page
Then the user is on page "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the user is on page "p--has-legal-authority"
And the user answers 'true' to the question "q--has-legal-authority"
When the user continues
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user selects previous page
Then the user is on page "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the user is on page "p--has-legal-authority"
And the user answers 'false' to the question "q--has-legal-authority"
When the user continues
Then the user is on page "p--represents-legal-authority"

Scenario: the user is on page p--represents-legal-authority.
Given the user is on page "p--represents-legal-authority"
And the user answers 'false' to the question "q--represents-legal-authority"
When the user continues
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user selects previous page
Then the user is on page "p--represents-legal-authority"
