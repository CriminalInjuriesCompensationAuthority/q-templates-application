@Journey-for-authenticated-user-starting-fresh-application @authentication
Feature: Journey for authenticated user starting fresh application

Scenario: the user begins a new application after authenticating.
Given the user authenticates with OIDC
And the user creates an application for compensation
And the user accepts all cookies
Then the user is on page "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the user is on page "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user continues
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user navigates to sign-in-or-create
Given the user is on page "p-applicant-are-you-18-or-over"
And the user navigates to page "/account/sign-in"
Then the user is on page "sign-in-or-create"

Scenario: the user is on page "sign-in-or-create"
Given the user is on page "sign-in-or-create"
And the user accepts analytics cookies
And the user selects sign in
And the user enters their one-login email
And the user continues
And the user enters their one-login password
And the user continues
And the user enters their security code
And the user continues
Then the user is on optional page "updated-terms-and-conditions"

Scenario: the user is on optional page "updated-terms-and-conditions"
Given the user is on optional page "updated-terms-and-conditions"
When the user continues from the optional page "updated-terms-and-conditions"
Then the user is on page "/account/sign-in/success"

Scenario: the user is on page "/account/sign-in/success"
Given the user is on page "/account/sign-in/success"
When the user advances the application
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user starts a new application
Given the user is on page "p-applicant-are-you-18-or-over"
When the user creates an application for compensation
Then the user is on page "p-applicant-who-are-you-applying-for"
And the answer "myself" is unchecked