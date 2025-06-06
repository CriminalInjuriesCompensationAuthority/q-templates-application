@Journey-for-unauthenticated-user-signing-in-via-dashboard @authentication
Feature: Journey for unauthenticated user signing in via going to /account/dashboard

Scenario: the user begins a new application.
Given the user authenticates with OIDC
And the user creates an application for compensation
Then the user is on page "p-applicant-who-are-you-applying-for"

Scenario: the user navigates to account/dashboard
Given the user is on page "p-applicant-who-are-you-applying-for"
When the user navigates to page "/account/dashboard"
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
Then the user is on page "/account/dashboard"
