@Journey-to-check-empty-answers-on-someone-else-residency-pages @legacy
Feature: Journey to check empty answers on someone else residency pages

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
And the user answers "1990-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
When the user answers the question
Then the application is in the state "p-applicant-can-handle-affairs"

Scenario: the user is on page p-applicant-can-handle-affairs.
Given the application is in the state "p-applicant-can-handle-affairs"
And the user answers 'true' to the question "q-applicant-capable"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the application is in the state "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-telephone-number"

Scenario: the user is on page p-applicant-enter-your-telephone-number.
Given the application is in the state "p-applicant-enter-your-telephone-number"
And the user answers '01234567890' to the question "q-applicant-enter-your-telephone-number"
When the user answers the question
Then the application is in the state "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the application is in the state "p--context-residency-and-nationality"
When the user advances the application
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
When the user advances the application
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
And the user answers 'true' to the question "q-applicant-british-citizen"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
And the user answers 'false' to the question "q-applicant-british-citizen"
When the user answers the question
Then the application is in the state "p-applicant-british-citizen-relative"

Scenario: the user is on page p-applicant-british-citizen-relative.
Given the application is in the state "p-applicant-british-citizen-relative"
When the user advances the application
Then the application is in the state "p-applicant-british-citizen-relative"

Scenario: the user is on page p-applicant-british-citizen-relative.
Given the application is in the state "p-applicant-british-citizen-relative"
And the user answers 'true' to the question "q-applicant-british-citizen-relative"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-british-citizen-relative"

Scenario: the user is on page p-applicant-british-citizen-relative.
Given the application is in the state "p-applicant-british-citizen-relative"
And the user answers 'false' to the question "q-applicant-british-citizen-relative"
When the user answers the question
Then the application is in the state "p-applicant-ordinarily-resident"

Scenario: the user is on page p-applicant-ordinarily-resident.
Given the application is in the state "p-applicant-ordinarily-resident"
When the user advances the application
Then the application is in the state "p-applicant-ordinarily-resident"

Scenario: the user is on page p-applicant-ordinarily-resident.
Given the application is in the state "p-applicant-ordinarily-resident"
And the user answers 'true' to the question "q-applicant-ordinarily-resident"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-ordinarily-resident"

Scenario: the user is on page p-applicant-ordinarily-resident.
Given the application is in the state "p-applicant-ordinarily-resident"
And the user answers 'false' to the question "q-applicant-ordinarily-resident"
When the user answers the question
Then the application is in the state "p-applicant-eu-citizen"

Scenario: the user is on page p-applicant-eu-citizen.
Given the application is in the state "p-applicant-eu-citizen"
When the user advances the application
Then the application is in the state "p-applicant-eu-citizen"

Scenario: the user is on page p-applicant-eu-citizen.
Given the application is in the state "p-applicant-eu-citizen"
And the user answers 'true' to the question "q-applicant-eu-citizen"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-eu-citizen"

Scenario: the user is on page p-applicant-eu-citizen.
Given the application is in the state "p-applicant-eu-citizen"
And the user answers 'false' to the question "q-applicant-eu-citizen"
When the user answers the question
Then the application is in the state "p-applicant-eu-citizen-relative"

Scenario: the user is on page p-applicant-eu-citizen-relative.
Given the application is in the state "p-applicant-eu-citizen-relative"
When the user advances the application
Then the application is in the state "p-applicant-eu-citizen-relative"

Scenario: the user is on page p-applicant-eu-citizen-relative.
Given the application is in the state "p-applicant-eu-citizen-relative"
And the user answers 'true' to the question "q-applicant-eu-citizen-relative"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-eu-citizen-relative"

Scenario: the user is on page p-applicant-eu-citizen-relative.
Given the application is in the state "p-applicant-eu-citizen-relative"
And the user answers 'false' to the question "q-applicant-eu-citizen-relative"
When the user answers the question
Then the application is in the state "p-applicant-eea-citizen"

Scenario: the user is on page p-applicant-eea-citizen.
Given the application is in the state "p-applicant-eea-citizen"
When the user advances the application
Then the application is in the state "p-applicant-eea-citizen"

Scenario: the user is on page p-applicant-eea-citizen.
Given the application is in the state "p-applicant-eea-citizen"
And the user answers 'true' to the question "q-applicant-eea-citizen"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-eea-citizen"

Scenario: the user is on page p-applicant-eea-citizen.
Given the application is in the state "p-applicant-eea-citizen"
And the user answers 'false' to the question "q-applicant-eea-citizen"
When the user answers the question
Then the application is in the state "p-applicant-eea-citizen-relative"

Scenario: the user is on page p-applicant-eea-citizen-relative.
Given the application is in the state "p-applicant-eea-citizen-relative"
When the user advances the application
Then the application is in the state "p-applicant-eea-citizen-relative"

Scenario: the user is on page p-applicant-eea-citizen-relative.
Given the application is in the state "p-applicant-eea-citizen-relative"
And the user answers 'true' to the question "q-applicant-eea-citizen-relative"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-eea-citizen-relative"

Scenario: the user is on page p-applicant-eea-citizen-relative.
Given the application is in the state "p-applicant-eea-citizen-relative"
And the user answers 'false' to the question "q-applicant-eea-citizen-relative"
When the user answers the question
Then the application is in the state "p-applicant-other-citizen"

Scenario: the user is on page p-applicant-other-citizen.
Given the application is in the state "p-applicant-other-citizen"
When the user advances the application
Then the application is in the state "p-applicant-other-citizen"

Scenario: the user is on page p-applicant-other-citizen.
Given the application is in the state "p-applicant-other-citizen"
And the user answers 'true' to the question "q-applicant-other-citizen"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-other-citizen"

Scenario: the user is on page p-applicant-other-citizen.
Given the application is in the state "p-applicant-other-citizen"
And the user answers 'false' to the question "q-applicant-other-citizen"
When the user answers the question
Then the application is in the state "p-applicant-armed-forces"

Scenario: the user is on page p-applicant-armed-forces.
Given the application is in the state "p-applicant-armed-forces"
When the user advances the application
Then the application is in the state "p-applicant-armed-forces"

Scenario: the user is on page p-applicant-armed-forces.
Given the application is in the state "p-applicant-armed-forces"
And the user answers 'true' to the question "q-applicant-armed-forces"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-armed-forces"

Scenario: the user is on page p-applicant-armed-forces.
Given the application is in the state "p-applicant-armed-forces"
And the user answers 'false' to the question "q-applicant-armed-forces"
When the user answers the question
Then the application is in the state "p-applicant-armed-forces-relative"

Scenario: the user is on page p-applicant-armed-forces-relative.
Given the application is in the state "p-applicant-armed-forces-relative"
When the user advances the application
Then the application is in the state "p-applicant-armed-forces-relative"

Scenario: the user is on page p-applicant-armed-forces-relative.
Given the application is in the state "p-applicant-armed-forces-relative"
And the user answers 'true' to the question "q-applicant-armed-forces-relative"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-applicant-armed-forces-relative"

Scenario: the user is on page p-applicant-armed-forces-relative.
Given the application is in the state "p-applicant-armed-forces-relative"
And the user answers 'false' to the question "q-applicant-armed-forces-relative"
When the user answers the question
Then the application is in the state "p-applicant-victim-human-trafficking"

Scenario: the user is on page p-applicant-victim-human-trafficking.
Given the application is in the state "p-applicant-victim-human-trafficking"
When the user advances the application
Then the application is in the state "p-applicant-victim-human-trafficking"

Scenario: the user is on page p-applicant-victim-human-trafficking.
Given the application is in the state "p-applicant-victim-human-trafficking"
And the user answers 'true' to the question "q-applicant-victim-human-trafficking"
When the user answers the question
Then the application is in the state "p-applicant-applied-for-asylum"

Scenario: the user is on page p-applicant-applied-for-asylum.
Given the application is in the state "p-applicant-applied-for-asylum"
When the user advances the application
Then the application is in the state "p-applicant-applied-for-asylum"

Scenario: the user is on page p-applicant-applied-for-asylum.
Given the application is in the state "p-applicant-applied-for-asylum"
And the user answers 'true' to the question "q-applicant-applied-for-asylum"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user advances the application
