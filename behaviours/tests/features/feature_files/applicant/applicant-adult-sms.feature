@applicant-adult-sms @legacy @applicant
Feature: applicant adult sms

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
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user advances the application
Then the user is on page "p-applicant-confirmation-method"

Scenario: the user is on page p-applicant-confirmation-method.
Given the user is on page "p-applicant-confirmation-method"
And the user answers 'text' to the question "q-applicant-confirmation-method"
And the user answers '07712312344' to the question "q-applicant-enter-your-telephone-number"
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
And the user answers "01 01 2007" to the question "q-applicant-enter-your-date-of-birth"
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
And the user answers 'foo.bar@somewhere.com' to the question "q-applicant-enter-your-email-address"
When the user continues
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user advances the application
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
And the user answers 'true' to the question "q-applicant-british-citizen"
When the user continues
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
And the user answers "01 01 2020" to the question "q-applicant-when-did-the-crime-happen"
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
And the user answers "01 01 2020" to the question "q--when-was-the-crime-reported-to-police"
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
Then the user is on page "p--context-offender"

Scenario: the user is on page p--context-offender.
Given the user is on page "p--context-offender"
When the user advances the application
Then the user is on page "p-offender-do-you-know-the-name-of-the-offender"

Scenario: the user is on page p-offender-do-you-know-the-name-of-the-offender.
Given the user is on page "p-offender-do-you-know-the-name-of-the-offender"
And the user answers 'false' to the question "q-offender-do-you-know-the-name-of-the-offender"
When the user continues
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
And the user answers 'upper' to the question "q-applicant-physical-injury"
When the user continues
Then the user is on page "p-applicant-physical-injury-upper"

Scenario: the user is on page p-applicant-physical-injury-upper.
Given the user is on page "p-applicant-physical-injury-upper"
And the user answers 'head' to the question "q-applicant-physical-injury-upper"
When the user continues
Then the user is on page "p-applicant-physical-injury-upper-head"

Scenario: the user is on page p-applicant-physical-injury-upper-head.
Given the user is on page "p-applicant-physical-injury-upper-head"
And the user answers 'phyinj-122' to the question "q-applicant-physical-injuries"
When the user continues
Then the user is on page "p-applicant-infections"

Scenario: the user is on page p-applicant-infections.
Given the user is on page "p-applicant-infections"
And the user answers 'no' to the question "q-applicant-infections"
When the user continues
Then the user is on page "p--context-pregnancy"

Scenario: the user is on page p--context-pregnancy.
Given the user is on page "p--context-pregnancy"
When the user advances the application
Then the user is on page "p-applicant-pregnancy-loss"

Scenario: the user is on page p-applicant-pregnancy-loss.
Given the user is on page "p-applicant-pregnancy-loss"
And the user answers 'no' to the question "q-applicant-pregnancy-loss"
When the user continues
Then the user is on page "p--context-dmi-details"

Scenario: the user is on page p--context-dmi-details.
Given the user is on page "p--context-dmi-details"
When the user advances the application
Then the user is on page "p-applicant-do-you-have-disabling-mental-injury"

Scenario: the user is on page p-applicant-do-you-have-disabling-mental-injury.
Given the user is on page "p-applicant-do-you-have-disabling-mental-injury"
And the user answers 'true' to the question "q-applicant-do-you-have-disabling-mental-injury"
When the user continues
Then the user is on page "p-applicant-mental-injury-duration"

Scenario: the user is on page p-applicant-mental-injury-duration
Given the user is on page "p-applicant-mental-injury-duration"
And the user answers 'true' ("more than 6 weeks") to the question 'q-applicant-mental-injury-duration'
When the user continues 
Then the user is on page "p--context-crime-impact"

Scenario: the user is on page p--context-crime-impact.
Given the user is on page "p--context-crime-impact"
When the user advances the application
Then the user is on page "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the user is on page "p-applicant-job-when-crime-happened"
And the user answers 'true' to the question "q-applicant-job-when-crime-happened"
When the user continues
Then the user is on page "p-applicant-unable-to-work"

Scenario: the user is on page p-applicant-unable-to-work.
Given the user is on page "p-applicant-unable-to-work"
And the user answers 'false' to the question "q-applicant-unable-to-work"
When the user continues
Then the user is on page "p-applicant-affect-on-daily-life-dmi"

Scenario: the user is on page p-applicant-affect-on-daily-life-dmi.
Given the user is on page "p-applicant-affect-on-daily-life-dmi"
And the user answers 'how the injuries have affected' to the question "q-applicant-affect-on-daily-life-dmi"
When the user continues
Then the user is on page "p--context-treatment"

Scenario: the user is on page p--context-treatment.
Given the user is on page "p--context-treatment"
When the user advances the application
Then the user is on page "p-applicant-treatment-for-physical-injuries"

Scenario: the user is on page p-applicant-treatment-for-physical-injuries.
Given the user is on page "p-applicant-treatment-for-physical-injuries"
And the user answers 'the treatment i am receiving for my physical injuries' to the question "q-applicant-treatment-for-physical-injuries"
When the user continues
Then the user is on page "p-applicant-select-treatments"

Scenario: the user is on page p-applicant-select-treatments
Given the user is on page "p-applicant-select-treatments"
And the user answers 'cbt' to the question "q-applicant-select-treatments-dmi"
When the user continues
Then the user is on page "p-applicant-has-your-treatment-finished-dmi"

Scenario: the user is on page p-applicant-has-your-treatment-finished-dmi.
Given the user is on page "p-applicant-has-your-treatment-finished-dmi"
And the user answers 'true' to the question "q-applicant-has-your-treatment-finished-dmi"
When the user continues
Then the user is on page "p-applicant-are-you-registered-with-gp"

Scenario: the user is on page p-applicant-are-you-registered-with-gp.
Given the user is on page "p-applicant-are-you-registered-with-gp"
And the user answers 'true' to the question "q-applicant-are-you-registered-with-gp"
When the user continues
Then the user is on page "p-applicant-have-you-seen-a-gp"

Scenario: the user is on page p-applicant-have-you-seen-a-gp.
Given the user is on page "p-applicant-have-you-seen-a-gp"
And the user answers 'true' to the question "q-applicant-have-you-seen-a-gp"
When the user continues
Then the user is on page "p-gp-enter-your-address"

Scenario: the user is on page p-gp-enter-your-address.
Given the user is on page "p-gp-enter-your-address"
And the user answers 'gp practice' to the question "q-gp-organisation-name"
And the user answers 'gp building' to the question "q-gp-building-and-street"
And the user answers 'gp town' to the question "q-gp-town-or-city"
And the user answers 'gp1 1gp' to the question "q-gp-postcode"
When the user continues
Then the user is on page "p-applicant-dentist-visited"

Scenario: the user is on page p-applicant-dentist-visited.
Given the user is on page "p-applicant-dentist-visited"
And the user answers 'true' to the question "q-applicant-dentist-visited"
When the user continues
Then the user is on page "p-applicant-dentist-address"

Scenario: the user is on page p-applicant-dentist-address.
Given the user is on page "p-applicant-dentist-address"
And the user answers 'dentist practice' to the question "q-applicant-dentist-organisation-name"
And the user answers 'dentist building' to the question "q-applicant-dentist-address-building-and-street"
And the user answers 'dentist town' to the question "q-applicant-dentist-address-town-or-city"
And the user answers 'dp1 1dp' to the question "q-applicant-dentist-address-postcode"
When the user continues
Then the user is on page "p-applicant-medical-help"

Scenario: the user is on page p-applicant-medical-help
Given the user is on page "p-applicant-medical-help"
And the user answers "false" to the question "q-applicant-medical-help"
When the user continues
Then the user is on page "p--context-compensation"

Scenario: the user is on page p--context-compensation.
Given the user is on page "p--context-compensation"
When the user advances the application
Then the user is on page "p-applicant-have-you-applied-to-us-before"

Scenario: the user is on page p-applicant-have-you-applied-to-us-before.
Given the user is on page "p-applicant-have-you-applied-to-us-before"
And the user answers 'false' to the question "q-applicant-have-you-applied-to-us-before"
When the user continues
Then the user is on page "p-applicant-have-you-applied-for-or-received-any-other-compensation"

Scenario: the user is on page p-applicant-have-you-applied-for-or-received-any-other-compensation.
Given the user is on page "p-applicant-have-you-applied-for-or-received-any-other-compensation"
And the user answers 'false' to the question "q-applicant-have-you-applied-for-or-received-any-other-compensation"
When the user continues
Then the user is on page "p-applicant-applied-for-other-compensation-briefly-explain-why-not"

Scenario: the user is on page p-applicant-applied-for-other-compensation-briefly-explain-why-not.
Given the user is on page "p-applicant-applied-for-other-compensation-briefly-explain-why-not"
And the user answers 'did not apply for other forms of compensation' to the question "q-applicant-applied-for-other-compensation-briefly-explain-why-not"
When the user continues
Then the user is on page "p--context-additional-info"

Scenario: the user is on page p--context-additional-info.
Given the user is on page "p--context-additional-info"
When the user advances the application
Then the user is on page "p-applicant-provide-additional-information"

Scenario: the user is on page p-applicant-provide-additional-information.
Given the user is on page "p-applicant-provide-additional-information"
And the user answers 'false' to the question "q-applicant-provide-additional-information"
When the user continues
Then the user is on page "p--check-your-answers"

Scenario: the user is on page p--check-your-answers.
Given the user is on page "p--check-your-answers"
When the user advances the application
Then the user is on page "p-applicant-declaration"

Scenario: the user is on page p-applicant-declaration.
Given the user is on page "p-applicant-declaration"
And the user answers 'i-agree' to the question "q-applicant-declaration"
And the user selects "Agree and submit"
When the user continues
Then the user is on page "p--confirmation"
And the user has completed the application
