@Journey-for-unauthenticated-user-signing-in @legacy
Feature: Journey for unauthenticated user signing in

Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the application is in the state "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the application is in the state "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user answers the question
Then the application is in the state "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the application is in the state "p-applicant-are-you-18-or-over"
And the user answers 'true' to the question "q-applicant-are-you-18-or-over"
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
Then the application is in the state "p-applicant-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-someone-else-applied-before-for-this-crime.
Given the application is in the state "p-applicant-someone-else-applied-before-for-this-crime"
And the user answers 'no' to the question "q-applicant-someone-else-applied-before-for-this-crime"
When the user answers the question
Then the application is in the state "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the application is in the state "p--context-applicant-details"
When the user advances the application
Then the application is in the state "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the application is in the state "p-applicant-confirmation-method"
And the user answers 'text' to the question "q-applicant-confirmation-method"
And the user answers '07712312344' to the question "q-applicant-enter-your-telephone-number"
When the user answers the question
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
And the user answers 'create a gov.uk one login to save your progress' to the question "q-applicant-have-you-been-known-by-any-other-names"
Then the application is in the state "p--/sign-in-or-create"

Scenario: the user is on page p--/sign-in-or-create.
Given the application is in the state "p--/sign-in-or-create"
And the user answers 'accept analytics cookies' to the question "q--/sign-in-or-create"
Then the application is in the state "p--sign-in-or-create"

Scenario: the user is on page p--sign-in-or-create.
Given the application is in the state "p--sign-in-or-create"
And the user answers 'sign in' to the question "q--sign-in-or-create"
Then the application is in the state "p--enter-email"

Scenario: the user is on page p--enter-email.
Given the application is in the state "p--enter-email"
And the user answers 'cica.developer@gmail.com' to the question "q--enter-email"
When the user answers the question
Then the application is in the state "p--enter-password"

Scenario: the user is on page p--enter-password.
Given the application is in the state "p--enter-password"
And the user answers 'b7fa3c3c-cb60-4e51-850a-0d357597b998' to the question "q--enter-password"
When the user answers the question
Then the application is in the state "p--enter-authenticator-app-code"

Scenario: the user is on page p--enter-authenticator-app-code.
Given the application is in the state "p--enter-authenticator-app-code"
When the user advances the application
Then the application is in the state "p--updated-terms-and-conditions"

Scenario: the user is on page p--updated-terms-and-conditions.
Given the application is in the state "p--updated-terms-and-conditions"
When the user advances the application
Then the application is in the state "p--/account/sign-in/success"

Scenario: the user is on page p--/account/sign-in/success.
Given the application is in the state "p--/account/sign-in/success"
When the user advances the application
