@Journey-for-authenticated-user-starting-fresh-application @legacy
Feature: Journey for authenticated user starting fresh application

Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the application is in the state "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the application is in the state "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user answers the question
Scenario: the user begins a new application.
Given the user creates an application for compensation
