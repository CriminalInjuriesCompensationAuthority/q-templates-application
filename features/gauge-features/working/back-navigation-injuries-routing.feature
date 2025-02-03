@back-navigation-injuries-routing @legacy
Feature: back-navigation-injuries-routing

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
And the user answers 'false' to the question "q-applicant-are-you-18-or-over"
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
And the user answers "2009-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
When the user answers the question
Then the application is in the state "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the application is in the state "p-applicant-enter-your-address"
And the user answers '10 bank st' to the question "q-applicant-building-and-street"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
When the user answers the question
Then the application is in the state "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the application is in the state "p--context-residency-and-nationality"
When the user advances the application
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
And the user answers 'true' to the question "q-applicant-british-citizen"
When the user answers the question
Then the application is in the state "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the application is in the state "p--context-mainapplicant-details"
When the user advances the application
Then the application is in the state "p-mainapplicant-parent"

Scenario: the user is on page p-mainapplicant-parent.
Given the application is in the state "p-mainapplicant-parent"
And the user answers 'false' to the question "q-mainapplicant-parent"
When the user answers the question
Then the application is in the state "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the application is in the state "p--has-legal-authority"
And the user answers 'false' to the question "q--has-legal-authority"
When the user answers the question
Then the application is in the state "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the application is in the state "p--context-authority"
When the user advances the application
Then the application is in the state "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the application is in the state "p-mainapplicant-enter-your-name"
And the user answers 'miss' to the question "title"
And the user answers 'parental' to the question "q-mainapplicant-first-name"
And the user answers 'responsibility' to the question "q-mainapplicant-last-name"
When the user answers the question
Then the application is in the state "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the application is in the state "p-mainapplicant-enter-your-address"
And the user answers '10 main street' to the question "q-mainapplicant-building-and-street"
And the user answers 'glasgow' to the question "q-mainapplicant-town-or-city"
And the user answers 'ma1' to the question "q-mainapplicant-postcode"
When the user answers the question
Then the application is in the state "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the application is in the state "p-mainapplicant-enter-your-telephone-number"
And the user answers '077924562728' to the question "q-mainapplicant-enter-your-telephone-number"
When the user answers the question
Then the application is in the state "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the application is in the state "p-mainapplicant-relationship"
And the user answers 'mother' to the question "q-mainapplicant-relationship"
When the user answers the question
Then the application is in the state "p-mainapplicant-shared-responsibility"

Scenario: the user is on page p-mainapplicant-shared-responsibility.
Given the application is in the state "p-mainapplicant-shared-responsibility"
And the user answers 'false' to the question "q-mainapplicant-shared-responsibility"
When the user answers the question
Then the application is in the state "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the application is in the state "p-mainapplicant-care-order"
And the user answers 'false' to the question "q-mainapplicant-care-order"
When the user answers the question
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user advances the application
Then the application is in the state "p-rep-type"

Scenario: the user is on page p-rep-type.
Given the application is in the state "p-rep-type"
And the user answers 'SOLS' to the question "q-rep-type"
When the user answers the question
Then the application is in the state "p-rep-confirmation-method"

Scenario: the user is on page p-rep-confirmation-method.
Given the application is in the state "p-rep-confirmation-method"
And the user answers 'email' to the question "q-rep-confirmation-method"
And the user answers 'foo.bar@somewhere.com' to the question "q-rep-email-address"
When the user answers the question
Then the application is in the state "p-rep-name"

Scenario: the user is on page p-rep-name.
Given the application is in the state "p-rep-name"
And the user answers 'mr' to the question "title"
And the user answers 'rep' to the question "q-rep-first-name"
And the user answers 'supportorg' to the question "q-rep-last-name"
When the user answers the question
Then the application is in the state "p-rep-organisation-address"

Scenario: the user is on page p-rep-organisation-address.
Given the application is in the state "p-rep-organisation-address"
And the user answers 'SUPP' to the question "q-rep-organisation-name"
And the user answers '10 main street' to the question "q-rep-building-and-street"
And the user answers 'glasgow' to the question "q-rep-town-or-city"
And the user answers 'ma1' to the question "q-rep-postcode"
When the user answers the question
Then the application is in the state "p-rep-telephone-number"

Scenario: the user is on page p-rep-telephone-number.
Given the application is in the state "p-rep-telephone-number"
And the user answers '07712312344' to the question "q-rep-telephone-number"
When the user answers the question
Then the application is in the state "p-rep-reference-number"

Scenario: the user is on page p-rep-reference-number.
Given the application is in the state "p-rep-reference-number"
And the user answers 'false' to the question "q-rep-has-reference-number"
When the user answers the question
Then the application is in the state "p--before-you-continue"

Scenario: the user is on page p--before-you-continue.
Given the application is in the state "p--before-you-continue"
When the user advances the application
Then the application is in the state "p-applicant-did-the-crime-happen-once-or-over-time"

Scenario: the user is on page p-applicant-did-the-crime-happen-once-or-over-time.
Given the application is in the state "p-applicant-did-the-crime-happen-once-or-over-time"
And the user answers 'once' to the question "q-applicant-did-the-crime-happen-once-or-over-time"
When the user answers the question
Then the application is in the state "p-applicant-when-did-the-crime-happen"

Scenario: the user is on page p-applicant-when-did-the-crime-happen.
Given the application is in the state "p-applicant-when-did-the-crime-happen"
And the user answers "2024-01-01T00:00:00.000Z" to the question "q-applicant-when-did-the-crime-happen"
When the user answers the question
Then the application is in the state "p-applicant-where-did-the-crime-happen"

Scenario: the user is on page p-applicant-where-did-the-crime-happen.
Given the application is in the state "p-applicant-where-did-the-crime-happen"
And the user answers 'scotland' to the question "q-applicant-where-did-the-crime-happen"
When the user answers the question
Then the application is in the state "p-applicant-where-in-scotland-did-it-happen"

Scenario: the user is on page p-applicant-where-in-scotland-did-it-happen.
Given the application is in the state "p-applicant-where-in-scotland-did-it-happen"
And the user answers 'glasgow' to the question "q-applicant-scottish-town-or-city"
And the user answers 'central' to the question "q-applicant-scottish-location"
When the user answers the question
Then the application is in the state "p--when-was-the-crime-reported-to-police"

Scenario: the user is on page p--when-was-the-crime-reported-to-police.
Given the application is in the state "p--when-was-the-crime-reported-to-police"
And the user answers "2024-01-01T00:00:00.000Z" to the question "q--when-was-the-crime-reported-to-police"
When the user answers the question
Then the application is in the state "p--which-police-force-is-investigating-the-crime"

Scenario: the user is on page p--which-police-force-is-investigating-the-crime.
Given the application is in the state "p--which-police-force-is-investigating-the-crime"
And the user answers 'manch' to the question "q-police-force-id"
Then the application is in the state "p--which-police-force-is-investigating-the-crime"

Scenario: the user is on page p--which-police-force-is-investigating-the-crime.
Given the application is in the state "p--which-police-force-is-investigating-the-crime"
And the user answers '10000140' to the question "q-police-force-id"
When the user answers the question
Then the application is in the state "p--whats-the-crime-reference-number"

Scenario: the user is on page p--whats-the-crime-reference-number.
Given the application is in the state "p--whats-the-crime-reference-number"
And the user answers 'cr123456' to the question "q--whats-the-crime-reference-number"
When the user answers the question
Then the application is in the state "p-applicant-incident-type"

Scenario: the user is on page p-applicant-incident-type.
Given the application is in the state "p-applicant-incident-type"
And the user answers 'PHYS' to the question "q-applicant-incident-type"
When the user answers the question
Then the application is in the state "p-applicant-describe-incident"

Scenario: the user is on page p-applicant-describe-incident.
Given the application is in the state "p-applicant-describe-incident"
And the user answers 'false' to the question "q-applicant-describe-incident"
When the user answers the question
Then the application is in the state "p--context-offender"

Scenario: the user is on page p--context-offender.
Given the application is in the state "p--context-offender"
When the user advances the application
Then the application is in the state "p-offender-do-you-know-the-name-of-the-offender"

Scenario: the user is on page p-offender-do-you-know-the-name-of-the-offender.
Given the application is in the state "p-offender-do-you-know-the-name-of-the-offender"
And the user answers 'false' to the question "q-offender-do-you-know-the-name-of-the-offender"
When the user answers the question
Then the application is in the state "p--context-physical-injuries"

Scenario: the user is on page p--context-physical-injuries.
Given the application is in the state "p--context-physical-injuries"
When the user advances the application
Then the application is in the state "p-applicant-are-you-claiming-for-physical-injuries"

Scenario: the user is on page p-applicant-are-you-claiming-for-physical-injuries.
Given the application is in the state "p-applicant-are-you-claiming-for-physical-injuries"
And the user answers 'true' to the question "q-applicant-are-you-claiming-for-physical-injuries"
When the user answers the question
Then the application is in the state "p-applicant-physical-injury"

Scenario: the user is on page p-applicant-physical-injury.
Given the application is in the state "p-applicant-physical-injury"
And the user answers 'upper' to the question "q-applicant-physical-injury"
When the user answers the question
Then the application is in the state "p-applicant-physical-injury-upper"

Scenario: the user is on page p-applicant-physical-injury-upper.
Given the application is in the state "p-applicant-physical-injury-upper"
And the user answers 'head' to the question "q-applicant-physical-injury-upper"
When the user answers the question
Then the application is in the state "p-applicant-physical-injury-upper-head"

Scenario: the user is on page p-applicant-physical-injury-upper-head.
Given the application is in the state "p-applicant-physical-injury-upper-head"
And the user answers 'phyinj-146' to the question "q-applicant-physical-injuries"
When the user answers the question
Then the application is in the state "p-applicant-infections"

Scenario: the user is on page p-applicant-infections.
Given the application is in the state "p-applicant-infections"
And the user answers 'no' to the question "q-applicant-infections"
When the user answers the question
Then the application is in the state "p--context-pregnancy"

Scenario: the user is on page p--context-pregnancy.
Given the application is in the state "p--context-pregnancy"
When the user advances the application
Then the application is in the state "p-applicant-pregnancy-loss"

Scenario: the user is on page p-applicant-pregnancy-loss.
Given the application is in the state "p-applicant-pregnancy-loss"
And the user answers 'no' to the question "q-applicant-pregnancy-loss"
When the user answers the question
Then the application is in the state "p--context-dmi-details"

Scenario: the user is on page p--context-dmi-details.
Given the application is in the state "p--context-dmi-details"
When the user advances the application
Then the application is in the state "p-applicant-do-you-have-disabling-mental-injury"

Scenario: the user is on page p-applicant-do-you-have-disabling-mental-injury.
Given the application is in the state "p-applicant-do-you-have-disabling-mental-injury"
And the user answers 'false' to the question "q-applicant-do-you-have-disabling-mental-injury"
When the user answers the question
Then the application is in the state "p--context-crime-impact"

Scenario: the user is on page p--context-crime-impact.
Given the application is in the state "p--context-crime-impact"
When the user advances the application
Then the application is in the state "p-applicant-over-16"

Scenario: the user is on page p-applicant-over-16.
Given the application is in the state "p-applicant-over-16"
And the user answers 'true' to the question "q-applicant-over-16"
When the user answers the question
Then the application is in the state "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the application is in the state "p-applicant-job-when-crime-happened"
And the user answers 'true' to the question "q-applicant-job-when-crime-happened"
When the user answers the question
Then the application is in the state "p-applicant-unable-to-work"

Scenario: the user is on page p-applicant-unable-to-work.
Given the application is in the state "p-applicant-unable-to-work"
And the user answers 'true' to the question "q-applicant-unable-to-work"
When the user answers the question
Then the application is in the state "p-applicant-unable-to-work-duration"

Scenario: the user is on page p-applicant-unable-to-work-duration.
Given the application is in the state "p-applicant-unable-to-work-duration"
And the user answers 'true' to the question "q-applicant-unable-to-work-duration"
When the user answers the question
Then the application is in the state "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the application is in the state "p-applicant-future-work"
And the user answers 'yes' to the question "q-applicant-future-work"
Then the application is in the state "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the application is in the state "p-applicant-future-work"
When the user selects previous page
Then the application is in the state "p-applicant-unable-to-work-duration"

Scenario: the user is on page p-applicant-unable-to-work-duration.
Given the application is in the state "p-applicant-unable-to-work-duration"
When the user selects previous page
Then the application is in the state "p-applicant-unable-to-work"

Scenario: the user is on page p-applicant-unable-to-work.
Given the application is in the state "p-applicant-unable-to-work"
When the user selects previous page
Then the application is in the state "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the application is in the state "p-applicant-job-when-crime-happened"
And the user answers 'true' to the question "q-applicant-job-when-crime-happened"
When the user answers the question
Then the application is in the state "p-applicant-unable-to-work"

Scenario: the user is on page p-applicant-unable-to-work.
Given the application is in the state "p-applicant-unable-to-work"
And the user answers 'false' to the question "q-applicant-unable-to-work"
When the user answers the question
Then the application is in the state "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the application is in the state "p-applicant-future-work"
And the user answers 'yes' to the question "q-applicant-future-work"
Then the application is in the state "p-applicant-future-work"

Scenario: the user is on page p-applicant-future-work.
Given the application is in the state "p-applicant-future-work"
When the user selects previous page
Then the application is in the state "p-applicant-unable-to-work"

Scenario: the user is on page p-applicant-unable-to-work.
Given the application is in the state "p-applicant-unable-to-work"
When the user selects previous page
Then the application is in the state "p-applicant-job-when-crime-happened"

Scenario: the user is on page p-applicant-job-when-crime-happened.
Given the application is in the state "p-applicant-job-when-crime-happened"
When the user selects previous page
Then the application is in the state "p-applicant-over-16"

Scenario: the user is on page p-applicant-over-16.
Given the application is in the state "p-applicant-over-16"
When the user selects previous page
Then the application is in the state "p--context-crime-impact"

Scenario: the user is on page p--context-crime-impact.
Given the application is in the state "p--context-crime-impact"
When the user selects previous page
Then the application is in the state "p-applicant-do-you-have-disabling-mental-injury"

Scenario: the user is on page p-applicant-do-you-have-disabling-mental-injury.
Given the application is in the state "p-applicant-do-you-have-disabling-mental-injury"
When the user selects previous page
Then the application is in the state "p--context-dmi-details"

Scenario: the user is on page p--context-dmi-details.
Given the application is in the state "p--context-dmi-details"
When the user selects previous page
Then the application is in the state "p-applicant-pregnancy-loss"

Scenario: the user is on page p-applicant-pregnancy-loss.
Given the application is in the state "p-applicant-pregnancy-loss"
When the user selects previous page
Then the application is in the state "p--context-pregnancy"

Scenario: the user is on page p--context-pregnancy.
Given the application is in the state "p--context-pregnancy"
When the user selects previous page
Then the application is in the state "p-applicant-infections"

Scenario: the user is on page p-applicant-infections.
Given the application is in the state "p-applicant-infections"
When the user selects previous page
Then the application is in the state "p-applicant-physical-injury-upper-head"

Scenario: the user is on page p-applicant-physical-injury-upper-head.
Given the application is in the state "p-applicant-physical-injury-upper-head"
When the user selects previous page
Then the application is in the state "p-applicant-physical-injury-upper"

Scenario: the user is on page p-applicant-physical-injury-upper.
Given the application is in the state "p-applicant-physical-injury-upper"
When the user selects previous page
Then the application is in the state "p-applicant-physical-injury"

Scenario: the user is on page p-applicant-physical-injury.
Given the application is in the state "p-applicant-physical-injury"
When the user selects previous page
Then the application is in the state "p-applicant-are-you-claiming-for-physical-injuries"

Scenario: the user is on page p-applicant-are-you-claiming-for-physical-injuries.
Given the application is in the state "p-applicant-are-you-claiming-for-physical-injuries"
When the user selects previous page
Then the application is in the state "p--context-physical-injuries"

Scenario: the user is on page p--context-physical-injuries.
Given the application is in the state "p--context-physical-injuries"
When the user selects previous page
Then the application is in the state "p-offender-do-you-know-the-name-of-the-offender"

Scenario: the user is on page p-offender-do-you-know-the-name-of-the-offender.
Given the application is in the state "p-offender-do-you-know-the-name-of-the-offender"
When the user selects previous page
Then the application is in the state "p--context-offender"

Scenario: the user is on page p--context-offender.
Given the application is in the state "p--context-offender"
When the user selects previous page
Then the application is in the state "p-applicant-describe-incident"

Scenario: the user is on page p-applicant-describe-incident.
Given the application is in the state "p-applicant-describe-incident"
When the user selects previous page
Then the application is in the state "p-applicant-incident-type"

Scenario: the user is on page p-applicant-incident-type.
Given the application is in the state "p-applicant-incident-type"
When the user selects previous page
Then the application is in the state "p--whats-the-crime-reference-number"

Scenario: the user is on page p--whats-the-crime-reference-number.
Given the application is in the state "p--whats-the-crime-reference-number"
When the user selects previous page
Then the application is in the state "p--which-police-force-is-investigating-the-crime"

Scenario: the user is on page p--which-police-force-is-investigating-the-crime.
Given the application is in the state "p--which-police-force-is-investigating-the-crime"
When the user selects previous page
Then the application is in the state "p--when-was-the-crime-reported-to-police"

Scenario: the user is on page p--when-was-the-crime-reported-to-police.
Given the application is in the state "p--when-was-the-crime-reported-to-police"
When the user selects previous page
Then the application is in the state "p-applicant-where-in-scotland-did-it-happen"

Scenario: the user is on page p-applicant-where-in-scotland-did-it-happen.
Given the application is in the state "p-applicant-where-in-scotland-did-it-happen"
When the user selects previous page
Then the application is in the state "p-applicant-where-did-the-crime-happen"

Scenario: the user is on page p-applicant-where-did-the-crime-happen.
Given the application is in the state "p-applicant-where-did-the-crime-happen"
When the user selects previous page
Then the application is in the state "p-applicant-when-did-the-crime-happen"

Scenario: the user is on page p-applicant-when-did-the-crime-happen.
Given the application is in the state "p-applicant-when-did-the-crime-happen"
When the user selects previous page
Then the application is in the state "p-applicant-did-the-crime-happen-once-or-over-time"

Scenario: the user is on page p-applicant-did-the-crime-happen-once-or-over-time.
Given the application is in the state "p-applicant-did-the-crime-happen-once-or-over-time"
When the user selects previous page
Then the application is in the state "p--before-you-continue"

Scenario: the user is on page p--before-you-continue.
Given the application is in the state "p--before-you-continue"
When the user selects previous page
Then the application is in the state "p-rep-reference-number"

Scenario: the user is on page p-rep-reference-number.
Given the application is in the state "p-rep-reference-number"
When the user selects previous page
Then the application is in the state "p-rep-telephone-number"

Scenario: the user is on page p-rep-telephone-number.
Given the application is in the state "p-rep-telephone-number"
When the user selects previous page
Then the application is in the state "p-rep-organisation-address"

Scenario: the user is on page p-rep-organisation-address.
Given the application is in the state "p-rep-organisation-address"
When the user selects previous page
Then the application is in the state "p-rep-name"

Scenario: the user is on page p-rep-name.
Given the application is in the state "p-rep-name"
When the user selects previous page
Then the application is in the state "p-rep-confirmation-method"

Scenario: the user is on page p-rep-confirmation-method.
Given the application is in the state "p-rep-confirmation-method"
When the user selects previous page
Then the application is in the state "p-rep-type"

Scenario: the user is on page p-rep-type.
Given the application is in the state "p-rep-type"
When the user selects previous page
Then the application is in the state "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the application is in the state "p--context-rep-details"
When the user selects previous page
Then the application is in the state "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the application is in the state "p-mainapplicant-care-order"
When the user selects previous page
Then the application is in the state "p-mainapplicant-shared-responsibility"

Scenario: the user is on page p-mainapplicant-shared-responsibility.
Given the application is in the state "p-mainapplicant-shared-responsibility"
When the user selects previous page
Then the application is in the state "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the application is in the state "p-mainapplicant-relationship"
When the user selects previous page
Then the application is in the state "p-mainapplicant-enter-your-telephone-number"

Scenario: the user is on page p-mainapplicant-enter-your-telephone-number.
Given the application is in the state "p-mainapplicant-enter-your-telephone-number"
When the user selects previous page
Then the application is in the state "p-mainapplicant-enter-your-address"

Scenario: the user is on page p-mainapplicant-enter-your-address.
Given the application is in the state "p-mainapplicant-enter-your-address"
When the user selects previous page
Then the application is in the state "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the application is in the state "p-mainapplicant-enter-your-name"
When the user selects previous page
Then the application is in the state "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the application is in the state "p--context-authority"
When the user selects previous page
Then the application is in the state "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the application is in the state "p--has-legal-authority"
When the user selects previous page
Then the application is in the state "p-mainapplicant-parent"

Scenario: the user is on page p-mainapplicant-parent.
Given the application is in the state "p-mainapplicant-parent"
When the user selects previous page
Then the application is in the state "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the application is in the state "p--context-mainapplicant-details"
When the user selects previous page
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
When the user selects previous page
Then the application is in the state "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the application is in the state "p--context-residency-and-nationality"
When the user selects previous page
Then the application is in the state "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the application is in the state "p-applicant-enter-your-address"
When the user selects previous page
Then the application is in the state "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the application is in the state "p-applicant-enter-your-date-of-birth"
When the user selects previous page
Then the application is in the state "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the application is in the state "p-applicant-have-you-been-known-by-any-other-names"
When the user selects previous page
Then the application is in the state "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the application is in the state "p-applicant-enter-your-name"
When the user selects previous page
Then the application is in the state "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the application is in the state "p--context-applicant-details"
When the user selects previous page
Then the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"
When the user selects previous page
Then the application is in the state "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the application is in the state "p-applicant-applied-before-for-this-crime"
When the user selects previous page
Then the application is in the state "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the application is in the state "p-applicant-fatal-claim"
When the user selects previous page
Then the application is in the state "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the application is in the state "p--context-crime-ref-no"
When the user selects previous page
Then the application is in the state "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the application is in the state "p--was-the-crime-reported-to-police"
When the user selects previous page
Then the application is in the state "p-applicant-are-you-18-or-over"

Scenario: the user is on page p-applicant-are-you-18-or-over.
Given the application is in the state "p-applicant-are-you-18-or-over"
And the user answers 'true' to the question "q-applicant-are-you-18-or-over"
When the user answers the question
Then the application is in the state "p--was-the-crime-reported-to-police"

Scenario: the user is on page p--was-the-crime-reported-to-police.
Given the application is in the state "p--was-the-crime-reported-to-police"
When the user advances the application
Then the application is in the state "p--context-crime-ref-no"

Scenario: the user is on page p--context-crime-ref-no.
Given the application is in the state "p--context-crime-ref-no"
When the user advances the application
Then the application is in the state "p-applicant-fatal-claim"

Scenario: the user is on page p-applicant-fatal-claim.
Given the application is in the state "p-applicant-fatal-claim"
When the user advances the application
Then the application is in the state "p-applicant-applied-before-for-this-crime"

Scenario: the user is on page p-applicant-applied-before-for-this-crime.
Given the application is in the state "p-applicant-applied-before-for-this-crime"
When the user advances the application
Then the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"

Scenario: the user is on page p-proxy-someone-else-applied-before-for-this-crime.
Given the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"
When the user advances the application
Then the application is in the state "p--context-applicant-details"

Scenario: the user is on page p--context-applicant-details.
Given the application is in the state "p--context-applicant-details"
When the user advances the application
Then the application is in the state "p-applicant-enter-your-name"

Scenario: the user is on page p-applicant-enter-your-name.
Given the application is in the state "p-applicant-enter-your-name"
When the user advances the application
Then the application is in the state "p-applicant-have-you-been-known-by-any-other-names"

Scenario: the user is on page p-applicant-have-you-been-known-by-any-other-names.
Given the application is in the state "p-applicant-have-you-been-known-by-any-other-names"
When the user advances the application
Then the application is in the state "p-applicant-enter-your-date-of-birth"

Scenario: the user is on page p-applicant-enter-your-date-of-birth.
Given the application is in the state "p-applicant-enter-your-date-of-birth"
And the user answers "2000-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
When the user answers the question
Then the application is in the state "p-applicant-can-handle-affairs"

Scenario: the user is on page p-applicant-can-handle-affairs.
  Given the application is in the state "p-applicant-can-handle-affairs"
  And the user answers 'false' to the question "q-applicant-capable"
  When the user answers the question
  Then the application is in the state "p-applicant-enter-your-address"

Scenario: the user is on page p-applicant-enter-your-address.
Given the application is in the state "p-applicant-enter-your-address"
When the user advances the application
Then the application is in the state "p--context-residency-and-nationality"

Scenario: the user is on page p--context-residency-and-nationality.
Given the application is in the state "p--context-residency-and-nationality"
When the user advances the application
Then the application is in the state "p-applicant-british-citizen"

Scenario: the user is on page p-applicant-british-citizen.
Given the application is in the state "p-applicant-british-citizen"
When the user advances the application
Then the application is in the state "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the application is in the state "p--context-mainapplicant-details"
When the user advances the application
Then the application is in the state "p--has-legal-authority"

Scenario: the user is on page p--has-legal-authority.
Given the application is in the state "p--has-legal-authority"
And the user answers 'true' to the question "q--has-legal-authority"
When the user answers the question
Then the application is in the state "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the application is in the state "p--context-authority"
When the user advances the application
