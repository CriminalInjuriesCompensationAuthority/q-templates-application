@rep-foster-carer-applicant-child-12-and-over-deceased-full-claim-sms @legacy @rep @foster-carer
Feature: rep-foster-carer.applicant-child-12-and-over-deceased-full-claim sms

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
And the user answers 'true' to the question "q-applicant-fatal-claim"
When the user continues
Then the user is on page "p-applicant-claim-type"

Scenario: the user is on page p-applicant-claim-type.
Given the user is on page "p-applicant-claim-type"
And the user answers 'false' to the question "q-applicant-claim-type"
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
And the user answers 'pudding lane' to the question "q-applicant-building-and-street-2"
And the user answers 'shepherds bush' to the question "q-applicant-building-and-street-3"
And the user answers 'glasgow' to the question "q-applicant-town-or-city"
And the user answers 'ma1' to the question "q-applicant-postcode"
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
When the user selects the task "t_mainapplicant_authority"
Then the user is on page "p--context-mainapplicant-details"

Scenario: the user is on page p--context-mainapplicant-details.
Given the user is on page "p--context-mainapplicant-details"
When the user advances the application
Then the user is on page "p-mainapplicant-parent"

Scenario: the user is on page p-mainapplicant-parent.
Given the user is on page "p-mainapplicant-parent"
And the user answers 'false' to the question "q-mainapplicant-parent"
When the user continues
Then the user is on page "p--has-parental-responsibility"

Scenario: the user is on page p--has-parental-responsibility.
Given the user is on page "p--has-parental-responsibility"
And the user answers 'false' to the question "q--has-parental-responsibility"
When the user continues
Then the user is on page "p--context-authority"

Scenario: the user is on page p--context-authority.
Given the user is on page "p--context-authority"
When the user advances the application
Then the user is on page "p-mainapplicant-enter-your-name"

Scenario: the user is on page p-mainapplicant-enter-your-name.
Given the user is on page "p-mainapplicant-enter-your-name"
And the user answers 'miss' to the question "q-mainapplicant-title"
And the user answers 'parental' to the question "q-mainapplicant-first-name"
And the user answers 'responsibility' to the question "q-mainapplicant-last-name"
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
And the user inputs their telephone number to the question "q-mainapplicant-enter-your-telephone-number"
When the user continues
Then the user is on page "p-mainapplicant-relationship"

Scenario: the user is on page p-mainapplicant-relationship.
Given the user is on page "p-mainapplicant-relationship"
And the user answers 'mother' to the question "q-mainapplicant-relationship"
When the user continues
Then the user is on page "p-mainapplicant-shared-responsibility"

Scenario: the user is on page p-mainapplicant-shared-responsibility.
Given the user is on page "p-mainapplicant-shared-responsibility"
And the user answers 'false' to the question "q-mainapplicant-shared-responsibility"
When the user continues
Then the user is on page "p-mainapplicant-care-order"

Scenario: the user is on page p-mainapplicant-care-order.
Given the user is on page "p-mainapplicant-care-order"
And the user answers 'false' to the question "q-mainapplicant-care-order"
When the user continues
Then the user is on page "p-task-list"
And the "t_mainapplicant_authority" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_rep_details"
Then the user is on page "p--context-rep-details"

Scenario: the user is on page p--context-rep-details.
Given the user is on page "p--context-rep-details"
When the user advances the application
Then the user is on page "p-rep-type"

Scenario: the user is on page p-rep-type.
Given the user is on page "p-rep-type"
And the user answers 'FC' to the question "q-rep-type"
When the user continues
Then the user is on page "p-rep-confirmation-method"

Scenario: the user is on page p-rep-confirmation-method.
Given the user is on page "p-rep-confirmation-method"
And the user answers 'text' to the question "q-rep-confirmation-method"
And the user inputs their telephone number to the question "q-rep-telephone-number"
When the user continues
Then the user is on page "p-rep-name"

Scenario: the user is on page p-rep-name.
Given the user is on page "p-rep-name"
And the user answers 'mr' to the question "q-rep-title"
And the user answers 'FC' to the question "q-rep-first-name"
And the user answers 'carer' to the question "q-rep-last-name"
When the user continues
Then the user is on page "p-rep-address"

Scenario: the user is on page p-rep-address.
Given the user is on page "p-rep-address"
And the user answers '10 main street' to the question "q-rep-building-and-street"
And the user answers 'glasgow' to the question "q-rep-town-or-city"
And the user answers 'ma1' to the question "q-rep-postcode"
When the user continues
Then the user is on page "p-rep-email-address"

Scenario: the user is on page p-rep-email-address.
Given the user is on page "p-rep-email-address"
And the user inputs their email address to the question "q-rep-email-address"
When the user continues
Then the user is on page "p-task-list"
And the "t_rep_details" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_relationship-to-deceased"
Then the user is on page "p--context-relationship-to-deceased"

Scenario: the user is on page p--context-relationship-to-deceased.
Given the user is on page "p--context-relationship-to-deceased"
When the user advances the application
Then the user is on page "p-applicant-relationship-to-deceased"

Scenario: the user is on page p-applicant-relationship-to-deceased.
Given the user is on page "p-applicant-relationship-to-deceased"
And the user answers 'parent' to the question "q-applicant-relationship-to-deceased"
When the user continues
Then the user is on page "p-applicant-living-together"

Scenario: the user is on page p-applicant-living-together.
Given the user is on page "p-applicant-living-together"
And the user answers 'true' to the question "q-applicant-living-together"
When the user continues
Then the user is on page "p-applicant-financial-help"

Scenario: the user is on page p-applicant-financial-help.
Given the user is on page "p-applicant-financial-help"
And the user answers 'true' to the question "q-applicant-financial-help"
When the user continues
Then the user is on page "p-applicant-physical-help"

Scenario: the user is on page p-applicant-physical-help.
Given the user is on page "p-applicant-physical-help"
And the user answers 'true' to the question "q-applicant-physical-help"
When the user continues
Then the user is on page "p-other-claimants"

Scenario: the user is on page p-other-claimants.
Given the user is on page "p-other-claimants"
And the user answers 'true' to the question "q-other-claimants"
When the user continues
Then the user is on page "p-other-claimants-details"

Scenario: the user is on page p-other-claimants-details.
Given the user is on page "p-other-claimants-details"
And the user answers 'no one' to the question "q-other-claimants-details"
When the user continues
Then the user is on page "p-task-list"
And the "t_applicant_relationship-to-deceased" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_about-who-died"
Then the user is on page "p--context-deceased-details"

Scenario: the user is on page p--context-deceased-details.
Given the user is on page "p--context-deceased-details"
When the user advances the application
Then the user is on page "p-deceased-name"

Scenario: the user is on page p-deceased-name.
Given the user is on page "p-deceased-name"
And the user answers 'mr' to the question "q-deceased-title"
And the user answers 'test' to the question "q-deceased-first-name"
And the user answers 'testcase' to the question "q-deceased-last-name"
When the user continues
Then the user is on page "p-deceased-date-of-birth"

Scenario: the user is on page p-deceased-date-of-birth.
Given the user is on page "p-deceased-date-of-birth"
And the user answers "31 12 1990" to the question "q-deceased-date-of-birth"
When the user continues
Then the user is on page "p-deceased-date-of-death"

Scenario: the user is on page p-deceased-date-of-death.
Given the user is on page "p-deceased-date-of-death"
And the user answers "31 03 2004" to the question "q-deceased-date-of-death"
When the user continues
Then the user is on page "p-deceased-address"

Scenario: the user is on page p-deceased-address.
Given the user is on page "p-deceased-address"
And the user answers 'dc building and street 1' to the question "q-deceased-building-and-street"
And the user answers 'dc building and street 2' to the question "q-deceased-building-and-street-2"
And the user answers 'dc building and street 3' to the question "q-deceased-building-and-street-3"
And the user answers 'dc town' to the question "q-deceased-town-or-city"
And the user answers 'dc ma1' to the question "q-deceased-postcode"
When the user continues
Then the user is on page "p-task-list"
And the "t_applicant_about-who-died" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_funeral-costs"
Then the user is on page "p--context-funeral-costs"

Scenario: the user is on page p--context-funeral-costs.
Given the user is on page "p--context-funeral-costs"
When the user advances the application
Then the user is on page "p-applicant-funeral-costs-paid"

Scenario: the user is on page p-applicant-funeral-costs-paid.
Given the user is on page "p-applicant-funeral-costs-paid"
And the user answers 'false' to the question "q-applicant-funeral-costs-paid"
When the user continues
Then the user is on page "p-applicant-funeral-costs-other-contributor"

Scenario: the user is on page p-applicant-funeral-costs-other-contributor.
Given the user is on page "p-applicant-funeral-costs-other-contributor"
And the user answers 'false' to the question "q-applicant-funeral-costs-other-contributor"
When the user continues
Then the user is on page "p-task-list"
And the "t_applicant_funeral-costs" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_about-the-crime"
Then the user is on page "p--before-you-continue"

Scenario: the user is on page p--before-you-continue.
Given the user is on page "p--before-you-continue"
When the user advances the application
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
When the user selects the task "t_applicant_other-compensation"
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
Then the user is on page "p-task-list"
And the "t_applicant_other-compensation" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t_applicant_additional-information"
Then the user is on page "p--context-additional-info"

Scenario: the user is on page p--context-additional-info.
Given the user is on page "p--context-additional-info"
When the user advances the application
Then the user is on page "p-applicant-provide-additional-information"

Scenario: the user is on page p-applicant-provide-additional-information.
Given the user is on page "p-applicant-provide-additional-information"
And the user answers 'false' to the question "q-applicant-provide-additional-information"
When the user continues
Then the user is on page "p-task-list"
And the "t_applicant_additional-information" task status will be marked as "Completed"

Scenario: the user is on the task list
Given the user is on page "p-task-list"
When the user selects the task "t-check-your-answers"
Then the user is on page "p--check-your-answers"

Scenario: the user is on page p--check-your-answers.
Given the user is on page "p--check-your-answers"
When the user advances the application
Then the user is on page "p--context-paying-awards"

Scenario: the user is on page p--context-paying-awards.
Given the user is on page "p--context-paying-awards"
When the user advances the application
Then the user is on page "p-rep-declaration-12-and-over-deceased"

Scenario: the user is on page p-rep-declaration-12-and-over-deceased.
Given the user is on page "p-rep-declaration-12-and-over-deceased"
And the user answers 'i-agree-12-and-over' to the question "q-rep-declaration"
And the user selects "Agree and submit"
When the user continues
Then the user is on page "p--confirmation"
And the "t-check-your-answers" task status will be marked as "Completed"
And the user has completed the application
