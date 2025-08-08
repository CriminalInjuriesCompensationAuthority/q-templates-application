@separated-shoulder @speedbump
Feature: applicant adult sms speedbump surfaced for separated shoulder

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
And the user answers 'no' to the question "q-applicant-someone-else-applied-before-for-this-crime"
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
Then the user is on page "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the user is on page "p-applicant-confirmation-method"
And the user answers 'text' to the question "q-applicant-confirmation-method"
And the user inputs their telephone number to the question "q-applicant-enter-your-telephone-number"
When the user continues
Then the user is on page "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
And the user answers 'miss' to the question "q-applicant-title"
And the user answers 'test' to the question "q-applicant-first-name"
And the user answers 'testcase' to the question "q-applicant-last-name"
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
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user continues
Then the user is on page "p-applicant-enter-your-email-address"

Scenario: the user is on page p-applicant-enter-your-email-address.
Given the user is on page "p-applicant-enter-your-email-address"
And the user inputs their email address to the question "q-applicant-enter-your-email-address"
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
And the user answers 'once' to the question "q-applicant-did-the-crime-happen-once-or-over-time"
When the user continues
Then the user is on page "p-applicant-when-did-the-crime-happen"

Scenario: the user is on page p-applicant-when-did-the-crime-happen.
Given the user is on page "p-applicant-when-did-the-crime-happen"
And the user answers "01 01 2024" to the question "q-applicant-when-did-the-crime-happen"
When the user continues
Then the user is on page "p-applicant-where-did-the-crime-happen"

Scenario: the user is on page p-applicant-where-did-the-crime-happen.
Given the user is on page "p-applicant-where-did-the-crime-happen"
And the user answers 'scotland' to the question "q-applicant-where-did-the-crime-happen"
When the user continues
Then the user is on page "p-applicant-where-in-scotland-did-it-happen"

Scenario: the user is on page p-applicant-where-in-scotland-did-it-happen.
Given the user is on page "p-applicant-where-in-scotland-did-it-happen"
And the user answers 'glasgow' to the question "q-applicant-scottish-town-or-city"
And the user answers 'central' to the question "q-applicant-scottish-location"
When the user continues
Then the user is on page "p--when-was-the-crime-reported-to-police"

Scenario: the user is on page p--when-was-the-crime-reported-to-police.
Given the user is on page "p--when-was-the-crime-reported-to-police"
And the user answers "01 01 2024" to the question "q--when-was-the-crime-reported-to-police"
When the user continues
Then the user is on page "p--which-police-force-is-investigating-the-crime"

Scenario: the user is on page p--which-police-force-is-investigating-the-crime and selects Manchester police force.
Given the user is on page "p--which-police-force-is-investigating-the-crime"
And the user answers '10000140' to the question "q-police-force-id"
When the user continues
Then the user is on page "p--whats-the-crime-reference-number"

Scenario: the user is on page p--whats-the-crime-reference-number.
Given the user is on page "p--whats-the-crime-reference-number"
And the user answers 'cr123456' to the question "q--whats-the-crime-reference-number"
When the user continues
Then the user is on page "p-applicant-incident-type"

Scenario: the user is on page p-applicant-incident-type.
Given the user is on page "p-applicant-incident-type"
And the user answers 'PHYS' to the question "q-applicant-incident-type"
When the user continues
Then the user is on page "p-applicant-describe-incident"

Scenario: the user is on page p-applicant-describe-incident.
Given the user is on page "p-applicant-describe-incident"
And the user answers 'false' to the question "q-applicant-describe-incident"
When the user continues
Then the user is on page "p-task-list"
And the "t_applicant_about-the-crime" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_offender_about-the-offender"
Then the user is on page "p--context-offender"

Scenario: the user is on page p--context-offender.
Given the user is on page "p--context-offender"
When the user advances the application
Then the user is on page "p-offender-do-you-know-the-name-of-the-offender"

Scenario: the user is on page p-offender-do-you-know-the-name-of-the-offender.
Given the user is on page "p-offender-do-you-know-the-name-of-the-offender"
And the user answers 'false' to the question "q-offender-do-you-know-the-name-of-the-offender"
When the user continues
Then the user is on page "p-task-list"
And the "t_offender_about-the-offender" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_about-injuries"
Then the user is on page "p--context-physical-injuries"

Scenario: The user is telling us about their injuries
Given the user is on page "p--context-physical-injuries"
When the user continues 
Then the user is on page "p-applicant-are-you-claiming-for-physical-injuries"

Scenario: The user is telling us they have physical injuries
Given the user is on page "p-applicant-are-you-claiming-for-physical-injuries"
And the user answers 'true' to the question "q-applicant-are-you-claiming-for-physical-injuries"
When the user continues 
Then the user is on page "p-applicant-physical-injury"

Scenario: The user is telling us what was injured
Given the user is on page "p-applicant-physical-injury"
And the user answers 'torso' to the question "q-applicant-physical-injury"
When the user continues 
Then the user is on page "p-applicant-physical-injury-torso"

Scenario: The user is telling us their shoulder was injured
Given the user is on page "p-applicant-physical-injury-torso"
And the user answers 'shoulder' to the question 'q-applicant-physical-injury-torso'
When the user continues 
Then the user is on page "p-applicant-physical-injury-torso-shoulder"

Scenario: The user is telling us they have a separated shoulder
Given the user is on page "p-applicant-physical-injury-torso-shoulder"
And the user answers 'phyinj-062' ("separated shoulder") to the question 'q-applicant-physical-injuries'
When the user continues 
Then the user is on page "p-applicant-infections"

Scenario: The user did not get an infection as a result of the crime
Given the user is on page "p-applicant-infections"
And the user answers 'no' to the question 'q-applicant-infections'
When the user continues 
Then the user is on page "p--context-pregnancy"

Scenario: The user is telling us about pregnancy
Given the user is on page "p--context-pregnancy"
When the user continues 
Then the user is on page "p-applicant-pregnancy-loss"

Scenario: The user is telling us they did not lose a pregnancy
Given the user is on page "p-applicant-pregnancy-loss"
And the user answers 'no' to the question 'q-applicant-pregnancy-loss'
When the user continues 
Then the user is on page "p--context-dmi-details"

Scenario: The user is telling us about their mental health
Given the user is on page "p--context-dmi-details"
When the user continues 
Then the user is on page "p-applicant-do-you-have-disabling-mental-injury"

Scenario: The user is telling us they do have a DMI
Given the user is on page "p-applicant-do-you-have-disabling-mental-injury"
And the user answers 'true' to the question 'q-applicant-do-you-have-disabling-mental-injury'
When the user continues 
Then the user is on page "p-applicant-mental-injury-duration"

Scenario: The user is telling us their DMI lasted less than 6 weeks
Given the user is on page "p-applicant-mental-injury-duration"
And the user answers 'false' ('Less than 6 weeks') to the question 'q-applicant-mental-injury-duration'
When the user continues 
Then the user is on page "p-applicant-mental-injury-ongoing"

Scenario: The user is telling us their DMI is not ongoing
Given the user is on page "p-applicant-mental-injury-ongoing"
And the user answers 'false' to the question 'q-applicant-mental-injury-ongoing'
When the user continues 
Then the user is on page "p--context-injuries-not-eligible"

Scenario: The user may not be eligible for compensation
Given the user is on page "p--context-injuries-not-eligible"
When the user continues
Then the user is on page "p-task-list"