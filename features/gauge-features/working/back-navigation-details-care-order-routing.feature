@back-navigation-details-care-order-routing @legacy
Feature: back-navigation-details-care-order-routing

Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the application is in the state "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the application is in the state "p-applicant-who-are-you-applying-for"
And the user answers 'someone-else' to the question "q-applicant-who-are-you-applying-for"
When the user answers the question
Then the application is in the state "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the application is in the state "p-applicant-are-you-18-or-over"
And the user answers 'false' to the question "q-applicant-are-you-18-or-over"
When the user answers the question
Then the application is in the state "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the application is in the state "p--was-the-crime-reported-to-police"
And the user answers 'true' to the question "q--was-the-crime-reported-to-police"
When the user answers the question
Then the application is in the state "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the application is in the state "p--context-crime-ref-no"
When the user advances the application
Then the application is in the state "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the application is in the state "p-applicant-fatal-claim"
And the user answers 'false' to the question "q-applicant-fatal-claim"
When the user answers the question
Then the application is in the state "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the application is in the state "p-applicant-applied-before-for-this-crime"
And the user answers 'false' to the question "q-applicant-applied-before-for-this-crime"
When the user answers the question
Then the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"
And the user answers 'false' to the question "q-proxy-someone-else-applied-before-for-this-crime"
When the user answers the question
Then the application is in the state "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the application is in the state "p--context-applicant-details"
When the user advances the application
Then the application is in the state "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the application is in the state "p-applicant-enter-your-name"
And the user answers 'miss' to the question "title"
And the user answers 'test' to the question "q-applicant-first-name"
And the user answers 'testcase' to the question "q-applicant-last-name"
When the user answers the question
Then the application is in the state "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the application is in the state "p-applicant-have-you-been-known-by-any-other-names"
And the user answers 'false' to the question "q-applicant-have-you-been-known-by-any-other-names"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the application is in the state "p-applicant-enter-your-date-of-birth"
And the user answers "2009-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the application is in the state "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user answers the question
Then the application is in the state "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the application is in the state "p--context-residency-and-nationality"
When the user advances the application
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
And the user answers 'true' to the question "q-applicant-british-citizen"
When the user answers the question
Then the application is in the state "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the application is in the state "p--context-mainapplicant-details"
When the user advances the application
Then the application is in the state "p-mainapplicant-parent"

Scenario: the user is on page p-mainapplicant-parent.
Given the application is in the state "p-mainapplicant-parent"
And the user answers 'false' to the question "q-mainapplicant-parent"
When the user answers the question
Then the application is in the state "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the application is in the state "p--has-legal-authority"
And the user answers 'false' to the question "q--has-legal-authority"
When the user answers the question
Then the application is in the state "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the application is in the state "p--context-authority"
When the user advances the application
Then the application is in the state "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the application is in the state "p-mainapplicant-enter-your-name"
And the user answers 'miss' to the question "title"
And the user answers 'parental' to the question "q-mainapplicant-first-name"
And the user answers 'responsibility' to the question "q-mainapplicant-last-name"
When the user answers the question
Then the application is in the state "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the application is in the state "p-mainapplicant-enter-your-address"
And the user answers '10 main street' to the question "q-mainapplicant-building-and-street"
And the user answers 'glasgow' to the question "q-mainapplicant-town-or-city"
And the user answers 'ma1' to the question "q-mainapplicant-postcode"
When the user answers the question
Then the application is in the state "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the application is in the state "p-mainapplicant-enter-your-telephone-number"
And the user answers '07712312344' to the question "q-mainapplicant-enter-your-telephone-number"
When the user answers the question
Then the application is in the state "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the application is in the state "p-mainapplicant-relationship"
And the user answers 'mother' to the question "q-mainapplicant-relationship"
When the user answers the question
Then the application is in the state "p-mainapplicant-shared-responsibility"

Scenario: the user is on page p-mainapplicant-shared-responsibility.
Given the application is in the state "p-mainapplicant-shared-responsibility"
And the user answers 'false' to the question "q-mainapplicant-shared-responsibility"
When the user answers the question
Then the application is in the state "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the application is in the state "p-mainapplicant-care-order"
And the user answers 'false' to the question "q-mainapplicant-care-order"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the application is in the state "p-mainapplicant-care-order"
When the user selects previous page
Then the application is in the state "p-mainapplicant-shared-responsibility"

Scenario: the user is on page p-mainapplicant-shared-responsibility.
Given the application is in the state "p-mainapplicant-shared-responsibility"
When the user advances the application
Then the application is in the state "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the application is in the state "p-mainapplicant-care-order"
And the user answers 'true' to the question "q-mainapplicant-care-order"
When the user answers the question
