@back-navigation-independent-minor @legacy
Feature: back-navigation-independent-minor

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
When the user selects previous page
Then the application is in the state "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the application is in the state "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user answers the question
Then the application is in the state "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the application is in the state "p-applicant-are-you-18-or-over"
And the user answers 'false' to the question "q-applicant-are-you-18-or-over"
When the user answers the question
Then the application is in the state "p-applicant-under-18"

Scenario: the user is on page p-applicant-under-18.
Given the application is in the state "p-applicant-under-18"
And the user answers 'true' to the question "q-applicant-under-18"
When the user answers the question
Then the application is in the state "p-applicant-what-do-you-want-to-do"

Scenario: the user is on page p-applicant-what-do-you-want-to-do.
Given the application is in the state "p-applicant-what-do-you-want-to-do"
And the user answers 'close' to the question "q-applicant-what-do-you-want-to-do"
When the user answers the question
Then the application is in the state "p--transition-apply-when-18"

Scenario: the user is on page p--transition-apply-when-18.
Given the application is in the state "p--transition-apply-when-18"
When the user selects previous page
Then the application is in the state "p-applicant-what-do-you-want-to-do"

Scenario: the user is on page p-applicant-what-do-you-want-to-do.
Given the application is in the state "p-applicant-what-do-you-want-to-do"
And the user answers 'call-back' to the question "q-applicant-what-do-you-want-to-do"
When the user answers the question
Then the application is in the state "p--transition-request-a-call-back"

Scenario: the user is on page p--transition-request-a-call-back.
Given the application is in the state "p--transition-request-a-call-back"
When the user selects previous page
Then the application is in the state "p-applicant-what-do-you-want-to-do"

Scenario: the user is on page p-applicant-what-do-you-want-to-do.
Given the application is in the state "p-applicant-what-do-you-want-to-do"
And the user answers 'call-us' to the question "q-applicant-what-do-you-want-to-do"
When the user answers the question
Then the application is in the state "p--transition-contact-us"

Scenario: the user is on page p--transition-contact-us.
Given the application is in the state "p--transition-contact-us"
When the user selects previous page
Then the application is in the state "p-applicant-what-do-you-want-to-do"

Scenario: the user is on page p-applicant-what-do-you-want-to-do.
Given the application is in the state "p-applicant-what-do-you-want-to-do"
When the user selects previous page
Then the application is in the state "p-applicant-under-18"

Scenario: the user is on page p-applicant-under-18.
Given the application is in the state "p-applicant-under-18"
And the user answers 'false' to the question "q-applicant-under-18"
When the user answers the question
Then the application is in the state "p--transition-someone-18-or-over-to-apply"

Scenario: the user is on page p--transition-someone-18-or-over-to-apply.
Given the application is in the state "p--transition-someone-18-or-over-to-apply"
And the user answers 'start a new application' to the question "transition"
