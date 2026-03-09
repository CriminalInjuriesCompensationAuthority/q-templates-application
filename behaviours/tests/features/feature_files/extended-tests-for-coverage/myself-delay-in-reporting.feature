@coverage @capp-90
Feature: myself adult delay in reporting crime to police

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
And the user answers 'true' to the question "q-applicant-are-you-18-or-over"
When the user continues
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
And the user answers 'dont-know' to the question "q-applicant-someone-else-applied-before-for-this-crime"
When the user continues
Then the user is on page "p--new-application"

Scenario: the user is on page p--new-application.
Given the user is on page "p--new-application"
And the user answers 'continue' to the question "q-new-application"
When the user continues
Then the user is on page "p-task-list"
And the "t-about-application" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_personal-details"
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user advances the application
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
And the user answers 'mr' to the question "q-applicant-title"
And the user answers 'test' to the question "q-applicant-first-name"
And the user answers 'case' to the question "q-applicant-last-name"
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
Then the user is on page "p-applicant-contact-preference"

Scenario: the user is on page p-applicant-contact-preference.
Given the user is on page "p-applicant-contact-preference"
And the user answers 'E' to the question "q-applicant-contact-preference"
And the user inputs their email address to the question "q-applicant-enter-your-email-address"
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
Then the user is on page "p-task-list"
And the "t_applicant_personal-details" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_residency-and-nationality"
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user advances the application
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
And the user answers 'true' to the question "q-applicant-british-citizen"
When the user continues
Then the user is on page "p-task-list"
And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_about-the-crime"
Then the user is on page "p--before-you-continue"

Scenario: the user is on page p--before-you-continue.
Given the user is on page "p--before-you-continue"
When the user advances the application
Then the user is on page "p-applicant-did-the-crime-happen-once-or-over-time"

Scenario: the user is on page p-applicant-did-the-crime-happen-once-or-over-time.
Given the user is on page "p-applicant-did-the-crime-happen-once-or-over-time"
And the user answers 'over-a-period-of-time' to the question "q-applicant-did-the-crime-happen-once-or-over-time"
When the user continues
Then the user is on page "p-applicant-when-did-the-crime-start"

Scenario: the user is on page p-applicant-when-did-the-crime-start.
Given the user is on page "p-applicant-when-did-the-crime-start"
And the user answers "01 01 2000" to the question "q-applicant-when-did-the-crime-start"
When the user continues
Then the user is on page "p-applicant-when-did-the-crime-stop"

Scenario: the user is on page p-applicant-when-did-the-crime-stop.
Given the user is on page "p-applicant-when-did-the-crime-stop"
And the user answers "01 2000" to the question "q-applicant-when-did-the-crime-stop"
When the user continues
Then the user is on page "p-applicant-where-did-the-crime-happen"

Scenario: the user is on page p-applicant-where-did-the-crime-happen.
Given the user is on page "p-applicant-where-did-the-crime-happen"
And the user answers 'england' to the question "q-applicant-where-did-the-crime-happen"
When the user continues
Then the user is on page "p-applicant-where-in-england-did-it-happen"

Scenario: the user is on page p-applicant-where-in-england-did-it-happen.
Given the user is on page "p-applicant-where-in-england-did-it-happen"
And the user answers 'london' to the question "q-applicant-english-town-or-city"
And the user answers 'central' to the question "q-applicant-english-location"
When the user continues
Then the user is on page "p--when-was-the-crime-reported-to-police"

Scenario: the user is on page p--when-was-the-crime-reported-to-police.
Given the user is on page "p--when-was-the-crime-reported-to-police"
And the user answers "01 01 2025" to the question "q--when-was-the-crime-reported-to-police"
When the user continues
Then the user is on page "p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police"

Scenario: the user is on page p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police - submitting with no answer shows a required error, submitting over 500 characters shows a length error, and a valid answer continues to the next page.
Given the user is on page "p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police"
When the user continues
And the user answers 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' to the question "q-applicant-explain-reason-for-delay-reporting"
When the user continues
And the user answers 'I was unable to report the crime sooner due to its impact on my health.' to the question "q-applicant-explain-reason-for-delay-reporting"
When the user continues
Then the user is on page "p--which-police-force-is-investigating-the-crime"
