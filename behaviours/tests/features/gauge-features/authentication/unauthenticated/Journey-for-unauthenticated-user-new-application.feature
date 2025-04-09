@Journey-for-authenticated-user-new-application @authentication
Feature: Journey for unauthenticated user starting a new application

Scenario: the user begins a new application.
Given the user authenticates with OIDC
And the user creates an application for compensation
And the user accepts all cookies
Then the user is on page "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the user is on page "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user continues
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user starts a new application
Given the user is on page "p-applicant-are-you-18-or-over"
When the user creates an application for compensation
Then the user is on page "p-applicant-who-are-you-applying-for"
And the answer "myself" is unchecked