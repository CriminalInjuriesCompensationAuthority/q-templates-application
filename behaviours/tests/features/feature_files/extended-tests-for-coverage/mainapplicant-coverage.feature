@coverage
Feature: mainapplicant:applicant.child:12-and-over email extended coverage journey

Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the user is on page "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the user is on page "p-applicant-who-are-you-applying-for"
And the user answers 'someone-else' to the question "q-applicant-who-are-you-applying-for"
When the user continues
Then the user is on page "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the user is on page "p-applicant-are-you-18-or-over"
And the user answers 'false' to the question "q-applicant-are-you-18-or-over"
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
Then the user is on page "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the user is on page "p-proxy-someone-else-applied-before-for-this-crime"
And the user answers 'false' to the question "q-proxy-someone-else-applied-before-for-this-crime"
When the user continues
Then the user is on page "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the user is on page "p--context-applicant-details"
When the user advances the application
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
And the user answers "01 01 2009" to the question "q-applicant-enter-your-date-of-birth"
When the user continues
Then the user is on page "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the user is on page "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user continues
Then the user is on page "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the user is on page "p--context-residency-and-nationality"
When the user advances the application
Then the user is on page "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the user is on page "p-applicant-british-citizen"
And the user answers 'false' to the question "q-applicant-british-citizen"
When the user continues
Then the user is on page "p-applicant-british-citizen-relative"

Scenario: the user is on page p-applicant-british-citizen-relative.
Given the user is on page "p-applicant-british-citizen-relative"
And the user answers 'true' to the question "q-applicant-british-citizen-relative"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-british-citizen-relative"

Scenario: the user is on page p-applicant-british-citizen-relative.
Given the user is on page "p-applicant-british-citizen-relative"
And the user answers 'false' to the question "q-applicant-british-citizen-relative"
When the user continues
Then the user is on page "p-applicant-ordinarily-resident"

Scenario: the user is on page p-applicant-ordinarily-resident.
Given the user is on page "p-applicant-ordinarily-resident"
And the user answers 'true' to the question "q-applicant-ordinarily-resident"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-ordinarily-resident"

Scenario: the user is on page p-applicant-ordinarily-resident.
Given the user is on page "p-applicant-ordinarily-resident"
And the user answers 'false' to the question "q-applicant-ordinarily-resident"
When the user continues
Then the user is on page "p-applicant-eu-citizen"

Scenario: the user is on page p-applicant-eu-citizen.
Given the user is on page "p-applicant-eu-citizen"
And the user answers 'true' to the question "q-applicant-eu-citizen"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-eu-citizen"

Scenario: the user is on page p-applicant-eu-citizen.
Given the user is on page "p-applicant-eu-citizen"
And the user answers 'false' to the question "q-applicant-eu-citizen"
When the user continues
Then the user is on page "p-applicant-eu-citizen-relative"

Scenario: the user is on page p-applicant-eu-citizen-relative.
Given the user is on page "p-applicant-eu-citizen-relative"
And the user answers 'true' to the question "q-applicant-eu-citizen-relative"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-eu-citizen-relative"

Scenario: the user is on page p-applicant-eu-citizen-relative.
Given the user is on page "p-applicant-eu-citizen-relative"
And the user answers 'false' to the question "q-applicant-eu-citizen-relative"
When the user continues
Then the user is on page "p-applicant-eea-citizen"

Scenario: the user is on page p-applicant-eea-citizen.
Given the user is on page "p-applicant-eea-citizen"
And the user answers 'true' to the question "q-applicant-eea-citizen"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-eea-citizen"

Scenario: the user is on page p-applicant-eea-citizen.
Given the user is on page "p-applicant-eea-citizen"
And the user answers 'false' to the question "q-applicant-eea-citizen"
When the user continues
Then the user is on page "p-applicant-eea-citizen-relative"

Scenario: the user is on page p-applicant-eea-citizen-relative.
Given the user is on page "p-applicant-eea-citizen-relative"
And the user answers 'true' to the question "q-applicant-eea-citizen-relative"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-eea-citizen-relative"

Scenario: the user is on page p-applicant-eea-citizen-relative.
Given the user is on page "p-applicant-eea-citizen-relative"
And the user answers 'false' to the question "q-applicant-eea-citizen-relative"
When the user continues
Then the user is on page "p-applicant-other-citizen"

Scenario: the user is on page p-applicant-other-citizen.
Given the user is on page "p-applicant-other-citizen"
And the user answers 'true' to the question "q-applicant-other-citizen"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-other-citizen"

Scenario: the user is on page p-applicant-other-citizen.
Given the user is on page "p-applicant-other-citizen"
And the user answers 'false' to the question "q-applicant-other-citizen"
When the user continues
Then the user is on page "p-applicant-armed-forces"

Scenario: the user is on page p-applicant-armed-forces.
Given the user is on page "p-applicant-armed-forces"
And the user answers 'true' to the question "q-applicant-armed-forces"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-armed-forces"

Scenario: the user is on page p-applicant-armed-forces.
Given the user is on page "p-applicant-armed-forces"
And the user answers 'false' to the question "q-applicant-armed-forces"
When the user continues
Then the user is on page "p-applicant-armed-forces-relative"

Scenario: the user is on page p-applicant-armed-forces-relative.
Given the user is on page "p-applicant-armed-forces-relative"
And the user answers 'true' to the question "q-applicant-armed-forces-relative"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user selects previous page
Then the user is on page "p-applicant-armed-forces-relative"

Scenario: the user is on page p-applicant-armed-forces-relative.
Given the user is on page "p-applicant-armed-forces-relative"
And the user answers 'false' to the question "q-applicant-armed-forces-relative"
When the user continues
Then the user is on page "p-applicant-victim-human-trafficking"

Scenario: the user is on page p-applicant-victim-human-trafficking.
Given the user is on page "p-applicant-victim-human-trafficking"
And the user answers 'true' to the question "q-applicant-victim-human-trafficking"
When the user continues
Then the user is on page "p-applicant-applied-for-asylum"

Scenario: the user is on page p-applicant-applied-for-asylum.
Given the user is on page "p-applicant-applied-for-asylum"
And the user answers 'true' to the question "q-applicant-applied-for-asylum"
When the user continues
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user advances the application
Then the user is on page "p-mainapplicant-parent"

Scenario: the user is on page p-mainapplicant-parent.
Given the user is on page "p-mainapplicant-parent"
And the user answers 'true' to the question "q-mainapplicant-parent"
When the user continues
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user advances the application
Then the user is on page "p-mainapplicant-confirmation-method"

Scenario: the user is on page p-mainapplicant-confirmation-method.
Given the user is on page "p-mainapplicant-confirmation-method"
And the user answers 'email' to the question "q-mainapplicant-confirmation-method"
And the user answers 'foo.bar@somewhere.com' to the question "q-mainapplicant-enter-your-email-address"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the user is on page "p-mainapplicant-enter-your-name"
And the user answers 'mr' to the question "q-mainapplicant-title"
And the user answers 'main' to the question "q-mainapplicant-first-name"
And the user answers 'applicant' to the question "q-mainapplicant-last-name"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the user is on page "p-mainapplicant-enter-your-address"
And the user answers '10 main street' to the question "q-mainapplicant-building-and-street"
And the user answers 'glasgow' to the question "q-mainapplicant-town-or-city"
And the user answers 'ma1' to the question "q-mainapplicant-postcode"
When the user continues
Then the user is on page "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the user is on page "p-mainapplicant-enter-your-telephone-number"
And the user answers '07712312344' to the question "q-mainapplicant-enter-your-telephone-number"
When the user continues
Then the user is on page "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the user is on page "p-mainapplicant-relationship"
And the user answers 'father' to the question "q-mainapplicant-relationship"
When the user continues
Then the user is on page "p-mainapplicant-shared-responsibility"

Scenario: the user is on page p-mainapplicant-shared-responsibility.
Given the user is on page "p-mainapplicant-shared-responsibility"
And the user answers 'true' to the question "q-mainapplicant-shared-responsibility"
And the user answers 'test' to the question "q-mainapplicant-shared-responsibility-name"
When the user continues
Then the user is on page "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the user is on page "p-mainapplicant-care-order"
And the user answers 'false' to the question "q-mainapplicant-care-order"
When the user continues
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
And the user answers "01 01 2025" to the question "q-applicant-when-did-the-crime-start"
When the user continues
Then the user is on page "p-applicant-when-did-the-crime-stop"

Scenario: the user is on page p-applicant-when-did-the-crime-stop.
Given the user is on page "p-applicant-when-did-the-crime-stop"
And the user answers "01 2025" to the question "q-applicant-when-did-the-crime-stop"
When the user continues
Then the user is on page "p-applicant-where-did-the-crime-happen"

Scenario: the user is on page p-applicant-where-did-the-crime-happen.
Given the user is on page "p-applicant-where-did-the-crime-happen"
When the user selects previous page
Then the user is on page "p-applicant-when-did-the-crime-stop"

Scenario: the user is on page p-applicant-when-did-the-crime-stop.
Given the user is on page "p-applicant-when-did-the-crime-stop"
When the user selects previous page
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
And the user answers 'wales' to the question "q-applicant-where-did-the-crime-happen"
When the user continues
Then the user is on page "p-applicant-where-in-wales-did-it-happen"

Scenario: the user is on page p-applicant-where-in-wales-did-it-happen.
Given the user is on page "p-applicant-where-in-wales-did-it-happen"
And the user answers 'glasgow' to the question "q-applicant-welsh-town-or-city"
And the user answers 'central' to the question "q-applicant-welsh-location"
When the user continues
Then the user is on page "p--when-was-the-crime-reported-to-police"

Scenario: the user is on page p--when-was-the-crime-reported-to-police.
Given the user is on page "p--when-was-the-crime-reported-to-police"
And the user answers "01 01 2024" to the question "q--when-was-the-crime-reported-to-police"
When the user continues
Then the user is on page "p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police"

Scenario: the user is on page p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.
Given the user is on page "p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police"
And the user answers 'other' to the question 'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
And the user answers "reason" to the question "q-applicant-explain-reason-for-delay-reporting"
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
And the user answers 'true' to the question "q-applicant-describe-incident"
When the user continues
Then the user is on page "p-applicant-incident-description"

Scenario: the user is on page p-applicant-incident-description.
Given the user is on page "p-applicant-incident-description"
And the user answers 'test' to the question "q-applicant-incident-description"
When the user continues
Then the user is on page "p--context-offender"

Scenario: the user is on page p--context-offender.
Given the user is on page "p--context-offender"
When the user advances the application
Then the user is on page "p-offender-do-you-know-the-name-of-the-offender"

Scenario: the user is on page p-offender-do-you-know-the-name-of-the-offender.
Given the user is on page "p-offender-do-you-know-the-name-of-the-offender"
And the user answers 'true' to the question "q-offender-do-you-know-the-name-of-the-offender"
And the user answers 'offender name' to the question "q-offender-enter-offenders-name" 
When the user continues
Then the user is on page "p-offender-do-you-have-contact-with-offender"

Scenario: the user is on page p-offender-do-you-have-contact-with-offender.
Given the user is on page "p-offender-do-you-have-contact-with-offender"
And the user answers 'false' to the question "q-offender-do-you-have-contact-with-offender"
When the user continues
Then the user is on page "p--context-physical-injuries"

Scenario: the user is on page p--context-physical-injuries.
Given the user is on page "p--context-physical-injuries"
When the user selects previous page
Then the user is on page "p-offender-do-you-have-contact-with-offender"

Scenario: the user is on page p-offender-do-you-have-contact-with-offender.
Given the user is on page "p-offender-do-you-have-contact-with-offender"
And the user answers 'true' to the question "q-offender-do-you-have-contact-with-offender"
When the user continues
Then the user is on page "p-offender-describe-contact-with-offender"

Scenario: the user is on page p-offender-describe-contact-with-offender.
Given the user is on page "p-offender-describe-contact-with-offender"
And the user answers 'description' to the question "q-offender-describe-contact-with-offender"
When the user continues
Then the user is on page "p--context-physical-injuries"

Scenario: the user is on page p--context-physical-injuries.
Given the user is on page "p--context-physical-injuries"
When the user advances the application
Then the user is on page "p-applicant-are-you-claiming-for-physical-injuries"

Scenario: the user is on page p-applicant-are-you-claiming-for-physical-injuries.
Given the user is on page "p-applicant-are-you-claiming-for-physical-injuries"
And the user answers 'false' to the question "q-applicant-are-you-claiming-for-physical-injuries"
When the user continues
Then the user is on page "p-applicant-infections"

Scenario: the user is on page p-applicant-infections.
Given the user is on page "p-applicant-infections"
And the user answers 'yes' to the question "q-applicant-infections"
When the user continues
Then the user is on page "p-applicant-select-non-sa-infections"

Scenario: the user is on page p-applicant-select-non-sa-infections.
Given the user is on page "p-applicant-select-non-sa-infections"
And the user answers 'phyinj-141' to the question "q-applicant-physical-injuries"
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
And the user answers 'false' to the question "q-applicant-do-you-have-disabling-mental-injury"
When the user continues
Then the user is on page "p--context-crime-impact"

Scenario: the user is on page p--context-crime-impact.
Given the user is on page "p--context-crime-impact"
When the user advances the application
Then the user is on page "p-applicant-over-16"

Scenario: the user is on page p-applicant-over-16.
Given the user is on page "p-applicant-over-16"
And the user answers 'true' to the question "q-applicant-over-16"
When the user continues
Then the user is on page "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the user is on page "p-applicant-job-when-crime-happened"
And the user answers 'false' to the question "q-applicant-job-when-crime-happened"
When the user continues
Then the user is on page "p-applicant-work-details-option"

Scenario: the user is on page p-applicant-work-details-option.
Given the user is on page "p-applicant-work-details-option"
And the user answers 'education' to the question "q-applicant-work-details-option"
When the user continues
Then the user is on page "p-applicant-affected-daily-capacity"

Scenario: the user is on page p-applicant-affected-daily-capacity.
Given the user is on page "p-applicant-affected-daily-capacity"
And the user answers 'false' to the question "q-applicant-affected-daily-capacity"
When the user continues
Then the user is on page "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the user is on page "p-applicant-future-work"
And the user answers 'no' to the question "q-applicant-future-work"
When the user continues
Then the user is on page "p-applicant-affect-on-daily-life-dmi"

Scenario: the user is on page p-applicant-affect-on-daily-life-dmi.
Given the user is on page "p-applicant-affect-on-daily-life-dmi"
And the user answers 'how the injuries have affected' to the question "q-applicant-affect-on-daily-life-dmi"
When the user continues
Then the user is on page "p--context-special-expenses"

Scenario: the user is on page p--context-special-expenses.
Given the user is on page "p--context-special-expenses"
When the user advances the application
Then the user is on page "p-applicant-special-expenses"

Scenario: the user is on page p-applicant-special-expenses.
Given the user is on page "p-applicant-special-expenses"
And the user answers 'true' to the question "q-applicant-special-expenses"
When the user continues
Then the user is on page "p--context-treatment"

Scenario: the user is on page p--context-treatment.
Given the user is on page "p--context-treatment"
When the user advances the application
Then the user is on page "p-applicant-are-you-registered-with-gp"

Scenario: the user is on page p-applicant-are-you-registered-with-gp.
Given the user is on page "p-applicant-are-you-registered-with-gp"
When the user selects previous page
Then the user is on page "p--context-treatment"

Scenario: the user is on page p--context-treatment.
Given the user is on page "p--context-treatment"
When the user selects previous page
Then the user is on page "p-applicant-special-expenses"

Scenario: the user is on page p-applicant-special-expenses.
Given the user is on page "p-applicant-special-expenses"
When the user selects previous page
Then the user is on page "p--context-special-expenses"

Scenario: the user is on page p--context-special-expenses.
Given the user is on page "p--context-special-expenses"
When the user selects previous page
Then the user is on page "p-applicant-affect-on-daily-life-dmi"

Scenario: the user is on page p-applicant-affect-on-daily-life-dmi.
Given the user is on page "p-applicant-affect-on-daily-life-dmi"
When the user selects previous page
Then the user is on page "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the user is on page "p-applicant-future-work"
When the user selects previous page
Then the user is on page "p-applicant-affected-daily-capacity"

Scenario: the user is on page p-applicant-affected-daily-capacity.
Given the user is on page "p-applicant-affected-daily-capacity"
When the user selects previous page
Then the user is on page "p-applicant-work-details-option"

Scenario: the user is on page p-applicant-work-details-option.
Given the user is on page "p-applicant-work-details-option"
When the user selects previous page
Then the user is on page "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the user is on page "p-applicant-job-when-crime-happened"
When the user selects previous page
Then the user is on page "p-applicant-over-16"

Scenario: the user is on page p-applicant-over-16.
Given the user is on page "p-applicant-over-16"
When the user selects previous page
Then the user is on page "p--context-crime-impact"

Scenario: the user is on page p--context-crime-impact.
Given the user is on page "p--context-crime-impact"
When the user selects previous page
Then the user is on page "p-applicant-do-you-have-disabling-mental-injury"

Scenario: the user is on page p-applicant-do-you-have-disabling-mental-injury.
Given the user is on page "p-applicant-do-you-have-disabling-mental-injury"
And the user answers 'true' to the question "q-applicant-do-you-have-disabling-mental-injury"
When the user continues
Then the user is on page "p-applicant-mental-injury-duration"

Scenario: the user is on page p-applicant-mental-injury-duration.
Given the user is on page "p-applicant-mental-injury-duration"
And the user answers 'true' to the question "q-applicant-mental-injury-duration"
When the user continues
Then the user is on page "p--context-crime-impact"

Scenario: the user is on page p--context-crime-impact.
Given the user is on page "p--context-crime-impact"
When the user advances the application
Then the user is on page "p-applicant-over-16"

Scenario: the user is on page p-applicant-over-16.
Given the user is on page "p-applicant-over-16"
And the user answers 'true' to the question "q-applicant-over-16"
When the user continues
Then the user is on page "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the user is on page "p-applicant-job-when-crime-happened"
And the user answers 'false' to the question "q-applicant-job-when-crime-happened"
When the user continues
Then the user is on page "p-applicant-work-details-option"

Scenario: the user is on page p-applicant-work-details-option.
Given the user is on page "p-applicant-work-details-option"
And the user answers 'education' to the question "q-applicant-work-details-option"
When the user continues
Then the user is on page "p-applicant-affected-daily-capacity"

Scenario: the user is on page p-applicant-affected-daily-capacity.
Given the user is on page "p-applicant-affected-daily-capacity"
And the user answers 'true' to the question "q-applicant-affected-daily-capacity"
When the user continues
Then the user is on page "p-applicant-affect-duration"

Scenario: the user is on page p-applicant-affect-duration.
Given the user is on page "p-applicant-affect-duration"
And the user answers 'true' to the question "q-applicant-affect-duration"
When the user continues
Then the user is on page "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the user is on page "p-applicant-future-work"
When the user selects previous page
Then the user is on page "p-applicant-affect-duration"

Scenario: the user is on page p-applicant-affect-duration.
Given the user is on page "p-applicant-affect-duration"
And the user answers 'false' to the question "q-applicant-affect-duration"
When the user continues
Then the user is on page "p-applicant-affect-future-duration"

Scenario: the user is on page p-applicant-affect-future-duration.
Given the user is on page "p-applicant-affect-future-duration"
And the user answers 'yes' to the question "q-applicant-affect-future-duration"
When the user continues
Then the user is on page "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the user is on page "p-applicant-future-work"
And the user answers 'no' to the question "q-applicant-future-work"
When the user continues
Then the user is on page "p-applicant-affect-on-daily-life-dmi"

Scenario: the user is on page p-applicant-affect-on-daily-life-dmi.
Given the user is on page "p-applicant-affect-on-daily-life-dmi"
And the user answers 'how the injuries have affected' to the question "q-applicant-affect-on-daily-life-dmi"
When the user continues
Then the user is on page "p--context-special-expenses"

Scenario: the user is on page p--context-special-expenses.
Given the user is on page "p--context-special-expenses"
When the user advances the application
Then the user is on page "p-applicant-special-expenses"

Scenario: the user is on page p-applicant-special-expenses.
Given the user is on page "p-applicant-special-expenses"
And the user answers 'true' to the question "q-applicant-special-expenses"
When the user continues
Then the user is on page "p--context-treatment"

Scenario: the user is on page p--context-treatment.
Given the user is on page "p--context-treatment"
When the user advances the application
Then the user is on page "p-applicant-select-treatments"

Scenario: the user is on page p-applicant-select-treatments.
Given the user is on page "p-applicant-select-treatments"
And the user answers 'cbt' to the question "q-applicant-select-treatments-dmi"
And the user answers 'emdr' to the question "q-applicant-select-treatments-dmi"
When the user continues
Then the user is on page "p-applicant-has-your-treatment-finished-dmi"

Scenario: the user is on page p-applicant-has-your-treatment-finished-dmi.
Given the user is on page "p-applicant-has-your-treatment-finished-dmi"
And the user answers 'true' to the question "q-applicant-has-your-treatment-finished-dmi"
When the user continues
Then the user is on page "p-applicant-are-you-registered-with-gp"

Scenario: the user is on page p-applicant-are-you-registered-with-gp.
Given the user is on page "p-applicant-are-you-registered-with-gp"
And the user answers 'false' to the question "q-applicant-are-you-registered-with-gp"
When the user continues
Then the user is on page "p-applicant-have-you-seen-a-gp"

Scenario: the user is on page p-applicant-have-you-seen-a-gp.
Given the user is on page "p-applicant-have-you-seen-a-gp"
And the user answers 'false' to the question "q-applicant-have-you-seen-a-gp"
When the user continues
Then the user is on page "p-applicant-medical-help"

Scenario: the user is on page p-applicant-medical-help.
Given the user is on page "p-applicant-medical-help"
When the user selects previous page
Then the user is on page "p-applicant-have-you-seen-a-gp"

Scenario: the user is on page p-applicant-have-you-seen-a-gp.
Given the user is on page "p-applicant-have-you-seen-a-gp"
When the user selects previous page
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
Then the user is on page "p-applicant-medical-help"

Scenario: the user is on page p-applicant-medical-help.
Given the user is on page "p-applicant-medical-help"
When the user selects previous page
Then the user is on page "p-gp-enter-your-address"

Scenario: the user is on page p-gp-enter-your-address.
Given the user is on page "p-gp-enter-your-address"
When the user selects previous page
Then the user is on page "p-applicant-have-you-seen-a-gp"

Scenario: the user is on page p-applicant-have-you-seen-a-gp.
Given the user is on page "p-applicant-have-you-seen-a-gp"
And the user answers 'false' to the question "q-applicant-have-you-seen-a-gp"
When the user continues
Then the user is on page "p-gp-enter-your-address"

Scenario: the user is on page p-gp-enter-your-address.
Given the user is on page "p-gp-enter-your-address"
And the user answers 'gp practice' to the question "q-gp-organisation-name"
And the user answers 'gp building' to the question "q-gp-building-and-street"
And the user answers 'gp town' to the question "q-gp-town-or-city"
And the user answers 'gp1 1gp' to the question "q-gp-postcode"
When the user continues
Then the user is on page "p-applicant-medical-help"

Scenario: the user is on page p-applicant-medical-help.
Given the user is on page "p-applicant-medical-help"
And the user answers 'true' to the question "q-applicant-medical-help"
When the user continues
Then the user is on page "p-applicant-treatment-address"

Scenario: the user is on page p-applicant-treatment-address.
Given the user is on page "p-applicant-treatment-address"
And the user answers 'treatment practice' to the question "q-applicant-treatment-organisation-name"
And the user answers 'treatment building' to the question "q-applicant-treatment-building-and-street"
And the user answers 'treatment town' to the question "q-applicant-treatment-town-or-city"
And the user answers 'tp1 1tp' to the question "q-applicant-treatment-postcode"
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
And the user answers 'true' to the question "q-applicant-have-you-applied-for-or-received-any-other-compensation"
When the user continues
Then the user is on page "p-applicant-who-did-you-apply-to"

Scenario: the user is on page p-applicant-who-did-you-apply-to.
Given the user is on page "p-applicant-who-did-you-apply-to"
And the user answers 'description' to the question "q-applicant-who-did-you-apply-to"
When the user continues
Then the user is on page "p-applicant-has-a-decision-been-made"

Scenario: the user is on page p-applicant-has-a-decision-been-made.
Given the user is on page "p-applicant-has-a-decision-been-made"
And the user answers 'true' to the question "q-applicant-has-a-decision-been-made"
When the user continues
Then the user is on page "p-applicant-how-much-was-award"

Scenario: the user is on page p-applicant-how-much-was-award.
Given the user is on page "p-applicant-how-much-was-award"
And the user answers 'true' to the question "q-how-much-was-award"
When the user continues
Then the user is on page "p--context-additional-info"

Scenario: the user is on page p--context-additional-info.
Given the user is on page "p--context-additional-info"
When the user selects previous page
Then the user is on page "p-applicant-how-much-was-award"

Scenario: the user is on page p-applicant-how-much-was-award.
Given the user is on page "p-applicant-how-much-was-award"
When the user selects previous page
Then the user is on page "p-applicant-has-a-decision-been-made"

Scenario: the user is on page p-applicant-has-a-decision-been-made.
Given the user is on page "p-applicant-has-a-decision-been-made"
And the user answers 'false' to the question "q-applicant-has-a-decision-been-made"
When the user continues
Then the user is on page "p-applicant-when-will-you-find-out"

Scenario: the user is on page p-applicant-when-will-you-find-out.
Given the user is on page "p-applicant-when-will-you-find-out"
And the user answers '12 2025' to the question "q-when-will-you-find-out"
When the user continues
Then the user is on page "p--context-additional-info"

Scenario: the user is on page p--context-additional-info.
Given the user is on page "p--context-additional-info"
When the user advances the application
Then the user is on page "p-applicant-provide-additional-information"

Scenario: the user is on page p-applicant-provide-additional-information.
Given the user is on page "p-applicant-provide-additional-information"
And the user answers 'true' to the question "q-applicant-provide-additional-information"
When the user continues
Then the user is on page "p-applicant-additional-information"

Scenario: the user is on page p-applicant-additional-information.
Given the user is on page "p-applicant-additional-information"
And the user answers 'description' to the question "q-applicant-additional-information"
When the user continues
Then the user is on page "p--check-your-answers"

Scenario: the user is on page p--check-your-answers.
Given the user is on page "p--check-your-answers"
When the user advances the application
Then the user is on page "p--context-paying-awards"

Scenario: the user is on page p--context-paying-awards.
Given the user is on page "p--context-paying-awards"
When the user advances the application
Then the user is on page "p-mainapplicant-declaration-12-and-over"

Scenario: the user is on page p-mainapplicant-declaration-12-and-over.
Given the user is on page "p-mainapplicant-declaration-12-and-over"
And the user answers 'i-agree-12-and-over' to the question "q-mainapplicant-declaration"
And the user selects "Agree and submit"
When the user continues
Then the user is on page "p--confirmation"
And the user has completed the application
