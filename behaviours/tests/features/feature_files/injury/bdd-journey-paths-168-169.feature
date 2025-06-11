@injury
Feature: Injuries


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
And the user answers 'email' to the question "q-applicant-confirmation-method"
And the user answers 'foo@bar.com' to the question "q-applicant-enter-your-email-address"
When the user continues
Then the user is on page "p-applicant-enter-your-name"


Scenario: the user is on page p-applicant-enter-your-name.
Given the user is on page "p-applicant-enter-your-name"
And the user answers 'Mr' to the question "q-applicant-title"
And the user answers 'Foo' to the question "q-applicant-first-name"
And the user answers 'Bar' to the question "q-applicant-last-name"
When the user continues
Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"


Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
And the user answers 'true' to the question "q-applicant-have-you-been-known-by-any-other-names"
And the user answers 'Mr Biz Baz' to the question "q-applicant-what-other-names-have-you-used"
When the user continues
Then the user is on page "p-applicant-enter-your-date-of-birth"


Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the user is on page "p-applicant-enter-your-date-of-birth"
And the user answers '01 01 1970' to the question "q-applicant-enter-your-date-of-birth"
When the user continues
Then the user is on page "p-applicant-enter-your-address"


Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
And the user answers '1 Foo Lane' to the question "q-applicant-building-and-street"
And the user answers 'Flat 2/3' to the question "q-applicant-building-and-street-2"
And the user answers 'FooLocality' to the question "q-applicant-building-and-street-3"
And the user answers 'FooCity' to the question "q-applicant-town-or-city"
And the user answers 'G1 1XX' to the question "q-applicant-postcode"
When the user continues
Then the user is on page "p-applicant-enter-your-telephone-number"


Scenario: the user is on page p-applicant-enter-your-telephone-number.
Given the user is on page "p-applicant-enter-your-telephone-number"
And the user answers '01632 960 001' to the question "q-applicant-enter-your-telephone-number"
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
And the user answers '01 01 2020' to the question "q-applicant-when-did-the-crime-happen"
When the user continues
Then the user is on page "p-applicant-select-reasons-for-the-delay-in-making-your-application"


Scenario: the user is on page p-applicant-select-reasons-for-the-delay-in-making-your-application.
Given the user is on page "p-applicant-select-reasons-for-the-delay-in-making-your-application"
And the user answers 'some reason' to the question "q-applicant-explain-reason-for-delay-application"
When the user continues
Then the user is on page "p-applicant-where-did-the-crime-happen"


Scenario: the user is on page p-applicant-where-did-the-crime-happen.
Given the user is on page "p-applicant-where-did-the-crime-happen"
And the user answers 'england' to the question "q-applicant-where-did-the-crime-happen"
When the user continues
Then the user is on page "p-applicant-where-in-england-did-it-happen"


Scenario: the user is on page p-applicant-where-in-england-did-it-happen.
Given the user is on page "p-applicant-where-in-england-did-it-happen"
And the user answers 'Some town' to the question "q-applicant-english-town-or-city"
And the user answers 'Some location' to the question "q-applicant-english-location"
When the user continues
Then the user is on page "p--when-was-the-crime-reported-to-police"


Scenario: the user is on page p--when-was-the-crime-reported-to-police.
Given the user is on page "p--when-was-the-crime-reported-to-police"
And the user answers '01 01 2020' to the question "q--when-was-the-crime-reported-to-police"
When the user continues
Then the user is on page "p--which-police-force-is-investigating-the-crime"


Scenario: the user is on page p--which-police-force-is-investigating-the-crime.
Given the user is on page "p--which-police-force-is-investigating-the-crime"
And the user answers '10000147' to the question "q-police-force-id"
When the user continues
Then the user is on page "p--whats-the-crime-reference-number"


Scenario: the user is on page p--whats-the-crime-reference-number.
Given the user is on page "p--whats-the-crime-reference-number"
And the user answers 'abc123' to the question "q--whats-the-crime-reference-number"
When the user continues
Then the user is on page "p-applicant-incident-type"


Scenario: the user is on page p-applicant-incident-type.
Given the user is on page "p-applicant-incident-type"
And the user answers 'AORV' to the question "q-applicant-incident-type"
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


Scenario: the user is on page p--context-physical-injuries.
Given the user is on page "p--context-physical-injuries"
When the user advances the application
Then the user is on page "p-applicant-are-you-claiming-for-physical-injuries"


Scenario: the user is on page p-applicant-are-you-claiming-for-physical-injuries.
Given the user is on page "p-applicant-are-you-claiming-for-physical-injuries"
And the user answers 'true' to the question "q-applicant-are-you-claiming-for-physical-injuries"
When the user continues
Then the user is on page "p-applicant-physical-injury"


Scenario: the user is on page p-applicant-physical-injury.
Given the user is on page "p-applicant-physical-injury"
And the user answers 'torso' to the question "q-applicant-physical-injury"
And the user answers 'arms' to the question "q-applicant-physical-injury"
When the user continues
Then the user is on page "p-applicant-physical-injury-torso"


Scenario: the user is on page p-applicant-physical-injury-torso.
Given the user is on page "p-applicant-physical-injury-torso"
And the user answers 'shoulder' to the question "q-applicant-physical-injury-torso"
When the user continues
Then the user is on page "p-applicant-physical-injury-torso-shoulder"


Scenario: the user is on page p-applicant-physical-injury-torso-shoulder.
Given the user is on page "p-applicant-physical-injury-torso-shoulder"
And the user answers 'phyinj-100' to the question "q-applicant-physical-injuries"
When the user continues
Then the user is on page "p-applicant-physical-injury-arms"


Scenario: the user is on page p-applicant-physical-injury-arms.
Given the user is on page "p-applicant-physical-injury-arms"
And the user answers 'skin' to the question "q-applicant-physical-injury-arms"
When the user continues
Then the user is on page "p-applicant-physical-injury-arms-skin"


Scenario: the user is on page p-applicant-physical-injury-arms-skin.
Given the user is on page "p-applicant-physical-injury-arms-skin"
And the user answers 'phyinj-107' to the question "q-applicant-physical-injuries"
When the user continues
Then the user is on page "p-applicant-infections"