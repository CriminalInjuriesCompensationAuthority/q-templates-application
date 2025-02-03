@Journey-to-check-empty-answers-on-required-fields-are-disallowed @legacy
Feature: Journey to check empty answers on required fields are disallowed

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
And the user answers 'email' to the question "q-applicant-confirmation-method"
And the user answers 'foo.bar@somewhere.com' to the question "q-applicant-enter-your-email-address"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the application is in the state "p-applicant-enter-your-name"
And the user answers '  ' to the question "title"
And the user answers '  ' to the question "q-applicant-first-name"
And the user answers '  ' to the question "q-applicant-last-name"
When the user answers the question
And the user answers 'mr' to the question "title"
And the user answers '  ' to the question "q-applicant-first-name"
And the user answers '  ' to the question "q-applicant-last-name"
When the user answers the question
And the user answers 'test' to the question "q-applicant-first-name"
And the user answers '  ' to the question "q-applicant-last-name"
When the user answers the question
And the user answers 'case' to the question "q-applicant-last-name"
When the user answers the question
Then the application is in the state "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the application is in the state "p-applicant-have-you-been-known-by-any-other-names"
And the user answers 'false' to the question "q-applicant-have-you-been-known-by-any-other-names"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the application is in the state "p-applicant-enter-your-date-of-birth"
And the user answers "1990-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the application is in the state "p-applicant-enter-your-address"
And the user answers '    ' to the question "q-applicant-building-and-street"
And the user answers '    ' to the question "q-applicant-town-or-city"
When the user answers the question
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers '   ' to the question "q-applicant-town-or-city"
When the user answers the question
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user answers the question
