@rep-foster-carer-applicant-child-12-and-over-deceased-full-claim-sms @legacy
Feature: rep-foster-carer.applicant-child-12-and-over-deceased-full-claim sms

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
And the user answers 'true' to the question "q-applicant-fatal-claim"
When the user answers the question
Then the application is in the state "p-applicant-claim-type"

Scenario: the user is on page p-applicant-claim-type.
Given the application is in the state "p-applicant-claim-type"
And the user answers 'false' to the question "q-applicant-claim-type"
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
And the user answers 'pudding lane' to the question "q-applicant-building-and-street-2"
And the user answers 'shepherds bush' to the question "q-applicant-building-and-street-3"
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
And the user answers '07712312344' to the question "q-mainapplicant-enter-your-telephone-number"
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
And the user answers 'FC' to the question "q-rep-type"
When the user answers the question
Then the application is in the state "p-rep-confirmation-method"

Scenario: the user is on page p-rep-confirmation-method.
Given the application is in the state "p-rep-confirmation-method"
And the user answers 'text' to the question "q-rep-confirmation-method"
And the user answers '07712312344' to the question "q-rep-telephone-number"
When the user answers the question
Then the application is in the state "p-rep-name"

Scenario: the user is on page p-rep-name.
Given the application is in the state "p-rep-name"
And the user answers 'mr' to the question "title"
And the user answers 'FC' to the question "q-rep-first-name"
And the user answers 'carer' to the question "q-rep-last-name"
When the user answers the question
Then the application is in the state "p-rep-address"

Scenario: the user is on page p-rep-address.
Given the application is in the state "p-rep-address"
And the user answers '10 main street' to the question "q-rep-building-and-street"
And the user answers 'glasgow' to the question "q-rep-town-or-city"
And the user answers 'ma1' to the question "q-rep-postcode"
When the user answers the question
Then the application is in the state "p-rep-email-address"

Scenario: the user is on page p-rep-email-address.
Given the application is in the state "p-rep-email-address"
And the user answers 'foo.bar@somewhere.com' to the question "q-rep-email-address"
When the user answers the question
Then the application is in the state "p--context-relationship-to-deceased"

Scenario: the user is on page p--context-relationship-to-deceased.
Given the application is in the state "p--context-relationship-to-deceased"
When the user advances the application
Then the application is in the state "p-applicant-relationship-to-deceased"

Scenario: the user is on page p-applicant-relationship-to-deceased.
Given the application is in the state "p-applicant-relationship-to-deceased"
And the user answers 'parent' to the question "q-applicant-relationship-to-deceased"
When the user answers the question
Then the application is in the state "p-applicant-living-together"

Scenario: the user is on page p-applicant-living-together.
Given the application is in the state "p-applicant-living-together"
And the user answers 'true' to the question "q-applicant-living-together"
When the user answers the question
Then the application is in the state "p-applicant-financial-help"

Scenario: the user is on page p-applicant-financial-help.
Given the application is in the state "p-applicant-financial-help"
And the user answers 'true' to the question "q-applicant-financial-help"
When the user answers the question
Then the application is in the state "p-applicant-physical-help"

Scenario: the user is on page p-applicant-physical-help.
Given the application is in the state "p-applicant-physical-help"
And the user answers 'true' to the question "q-applicant-physical-help"
When the user answers the question
Then the application is in the state "p-other-claimants"

Scenario: the user is on page p-other-claimants.
Given the application is in the state "p-other-claimants"
And the user answers 'true' to the question "q-other-claimants"
When the user answers the question
Then the application is in the state "p-other-claimants-details"

Scenario: the user is on page p-other-claimants-details.
Given the application is in the state "p-other-claimants-details"
And the user answers 'no one' to the question "q-other-claimants-details"
When the user answers the question
Then the application is in the state "p--context-deceased-details"

Scenario: the user is on page p--context-deceased-details.
Given the application is in the state "p--context-deceased-details"
When the user advances the application
Then the application is in the state "p-deceased-name"

Scenario: the user is on page p-deceased-name.
Given the application is in the state "p-deceased-name"
And the user answers 'mr' to the question "title"
And the user answers 'test' to the question "q-deceased-first-name"
And the user answers 'testcase' to the question "q-deceased-last-name"
When the user answers the question
Then the application is in the state "p-deceased-date-of-birth"

Scenario: the user is on page p-deceased-date-of-birth.
Given the application is in the state "p-deceased-date-of-birth"
And the user answers '31' to the question "q-deceased-date-of-birth"
And the user answers '12' to the question "q-deceased-date-of-birth"
And the user answers '1990' to the question "q-deceased-date-of-birth"
When the user answers the question
Then the application is in the state "p-deceased-date-of-death"

Scenario: the user is on page p-deceased-date-of-death.
Given the application is in the state "p-deceased-date-of-death"
And the user answers '31' to the question "q-deceased-date-of-death"
And the user answers '3' to the question "q-deceased-date-of-death"
And the user answers '2024' to the question "q-deceased-date-of-death"
When the user answers the question
Then the application is in the state "p-deceased-address"

Scenario: the user is on page p-deceased-address.
Given the application is in the state "p-deceased-address"
And the user answers 'dc building and street 1' to the question "q-deceased-building-and-street"
And the user answers 'dc building and street 2' to the question "q-deceased-building-and-street-2"
And the user answers 'dc building and street 3' to the question "q-deceased-building-and-street-3"
And the user answers 'dc town' to the question "q-deceased-town-or-city"
And the user answers 'dc ma1' to the question "q-deceased-postcode"
When the user answers the question
Then the application is in the state "p--context-funeral-costs"

Scenario: the user is on page p--context-funeral-costs.
Given the application is in the state "p--context-funeral-costs"
When the user advances the application
Then the application is in the state "p-applicant-funeral-costs-paid"

Scenario: the user is on page p-applicant-funeral-costs-paid.
Given the application is in the state "p-applicant-funeral-costs-paid"
And the user answers 'false' to the question "q-applicant-funeral-costs-paid"
When the user answers the question
Then the application is in the state "p-applicant-funeral-costs-other-contributor"

Scenario: the user is on page p-applicant-funeral-costs-other-contributor.
Given the application is in the state "p-applicant-funeral-costs-other-contributor"
And the user answers 'false' to the question "q-applicant-funeral-costs-other-contributor"
When the user answers the question
Then the application is in the state "p--before-you-continue"

Scenario: the user is on page p--before-you-continue.
Given the application is in the state "p--before-you-continue"
When the user selects previous page
Then the application is in the state "p-applicant-funeral-costs-other-contributor"

Scenario: the user is on page p-applicant-funeral-costs-other-contributor.
Given the application is in the state "p-applicant-funeral-costs-other-contributor"
When the user selects previous page
Then the application is in the state "p-applicant-funeral-costs-paid"

Scenario: the user is on page p-applicant-funeral-costs-paid.
Given the application is in the state "p-applicant-funeral-costs-paid"
And the user answers 'true' to the question "q-applicant-funeral-costs-paid"
When the user answers the question
Then the application is in the state "p-applicant-funeral-costs-other-contributor"

Scenario: the user is on page p-applicant-funeral-costs-other-contributor.
Given the application is in the state "p-applicant-funeral-costs-other-contributor"
And the user answers 'true' to the question "q-applicant-funeral-costs-other-contributor"
When the user answers the question
Then the application is in the state "p-applicant-funeral-costs-who-contributed"

Scenario: the user is on page p-applicant-funeral-costs-who-contributed.
Given the application is in the state "p-applicant-funeral-costs-who-contributed"
And the user answers 'who else has contributed to the funeral costs' to the question "q-applicant-funeral-costs-who-contributed"
When the user answers the question
Then the application is in the state "p-applicant-funeral-costs-total"

Scenario: the user is on page p-applicant-funeral-costs-total.
Given the application is in the state "p-applicant-funeral-costs-total"
And the user answers '12345.00' to the question "q-applicant-funeral-costs-total"
Then the application is in the state "p-applicant-funeral-costs-total"

Scenario: the user is on page p-applicant-funeral-costs-total.
Given the application is in the state "p-applicant-funeral-costs-total"
When the user selects previous page
Then the application is in the state "p-applicant-funeral-costs-who-contributed"

Scenario: the user is on page p-applicant-funeral-costs-who-contributed.
Given the application is in the state "p-applicant-funeral-costs-who-contributed"
When the user selects previous page
Then the application is in the state "p-applicant-funeral-costs-other-contributor"

Scenario: the user is on page p-applicant-funeral-costs-other-contributor.
Given the application is in the state "p-applicant-funeral-costs-other-contributor"
And the user answers 'false' to the question "q-applicant-funeral-costs-other-contributor"
When the user answers the question
Then the application is in the state "p-applicant-funeral-costs-total"

Scenario: the user is on page p-applicant-funeral-costs-total.
Given the application is in the state "p-applicant-funeral-costs-total"
And the user answers '12345' to the question "q-applicant-funeral-costs-total"
When the user answers the question
Then the application is in the state "p-context-funeral-costs-proof"

Scenario: the user is on page p-context-funeral-costs-proof.
Given the application is in the state "p-context-funeral-costs-proof"
When the user advances the application
Then the application is in the state "p--before-you-continue"

Scenario: the user is on page p--before-you-continue.
Given the application is in the state "p--before-you-continue"
When the user advances the application
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
Then the application is in the state "p--context-offender"

Scenario: the user is on page p--context-offender.
Given the application is in the state "p--context-offender"
When the user advances the application
Then the application is in the state "p-offender-do-you-know-the-name-of-the-offender"

Scenario: the user is on page p-offender-do-you-know-the-name-of-the-offender.
Given the application is in the state "p-offender-do-you-know-the-name-of-the-offender"
And the user answers 'false' to the question "q-offender-do-you-know-the-name-of-the-offender"
When the user answers the question
Then the application is in the state "p--context-compensation"

Scenario: the user is on page p--context-compensation.
Given the application is in the state "p--context-compensation"
When the user advances the application
Then the application is in the state "p-applicant-have-you-applied-to-us-before"

Scenario: the user is on page p-applicant-have-you-applied-to-us-before.
Given the application is in the state "p-applicant-have-you-applied-to-us-before"
And the user answers 'false' to the question "q-applicant-have-you-applied-to-us-before"
When the user answers the question
Then the application is in the state "p-applicant-have-you-applied-for-or-received-any-other-compensation"

Scenario: the user is on page p-applicant-have-you-applied-for-or-received-any-other-compensation.
Given the application is in the state "p-applicant-have-you-applied-for-or-received-any-other-compensation"
And the user answers 'false' to the question "q-applicant-have-you-applied-for-or-received-any-other-compensation"
When the user answers the question
Then the application is in the state "p-applicant-applied-for-other-compensation-briefly-explain-why-not"

Scenario: the user is on page p-applicant-applied-for-other-compensation-briefly-explain-why-not.
Given the application is in the state "p-applicant-applied-for-other-compensation-briefly-explain-why-not"
And the user answers 'did not apply for other forms of compensation' to the question "q-applicant-applied-for-other-compensation-briefly-explain-why-not"
When the user answers the question
Then the application is in the state "p--context-additional-info"

Scenario: the user is on page p--context-additional-info.
Given the application is in the state "p--context-additional-info"
When the user advances the application
Then the application is in the state "p-applicant-provide-additional-information"

Scenario: the user is on page p-applicant-provide-additional-information.
Given the application is in the state "p-applicant-provide-additional-information"
And the user answers 'false' to the question "q-applicant-provide-additional-information"
When the user answers the question
Then the application is in the state "p--check-your-answers"

Scenario: the user is on page p--check-your-answers.
Given the application is in the state "p--check-your-answers"
When the user advances the application
Then the application is in the state "p-rep-declaration-12-and-over-deceased"

Scenario: the user is on page p-rep-declaration-12-and-over-deceased.
Given the application is in the state "p-rep-declaration-12-and-over-deceased"
And the user answers 'i have read and understood the declaration' to the question "q-rep-declaration"
And the user selects "Agree and submit"
When the user answers the question
Then the application is in the state "p--confirmation"
And the user has completed the application
