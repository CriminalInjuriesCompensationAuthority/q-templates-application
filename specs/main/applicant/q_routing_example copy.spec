# Journey for applicant adult

## applicant:adult email notification
* Given the user is on page "p--new-or-existing-application"
* When they answer "Start a new application" to question "q--new-or-existing-application"
* And they "Continue"
* Then the user is on page "p-applicant-fatal-claim"
* Given the user is on page "p-applicant-fatal-claim"
* When they answer "No" to question "q-applicant-fatal-claim"
* And they "Continue"
* Then the user is on page "p--was-the-crime-reported-to-police"
* Given the user is on page "p--was-the-crime-reported-to-police"
* When they answer "Yes" to question "q--was-the-crime-reported-to-police"
* And they "Continue"
* Then the user is on page "p-applicant-has-crime-reference-number"
* Given the user is on page "p-applicant-has-crime-reference-number"
* When they answer "Yes" to question "q-applicant-has-crime-reference-number"
* And they "Continue"
* Then the user is on page "p-applicant-who-are-you-applying-for"
* Given the user is on page "p-applicant-who-are-you-applying-for"
* When they answer "Myself" to question "q-applicant-who-are-you-applying-for"
* And they "Continue"
* Then the user is on page "p-applicant-are-you-18-or-over"
* Given the user is on page "p-applicant-are-you-18-or-over"
* When they answer "Yes" to question "q-applicant-are-you-18-or-over"
* And they "Continue"
* Then the user is on page "p-applicant-british-citizen-or-eu-national"
* When they answer "Yes" to question "q-applicant-british-citizen-or-eu-national"
* And they "Continue"
* Then the user is on page "p--context-applicant-details"
* Given the user is on page "p--context-applicant-details"
* And they "Continue"
* Then the user is on page "p-applicant-confirmation-method"
* Given the user is on page "p-applicant-confirmation-method"
* When they answer "Email" to question "q-applicant-confirmation-method"
* And they answer <file:/specs/data/email_recipient.txt> to question "q-applicant-enter-your-email-address"
* And they "Continue"
* Then the user is on page "p-applicant-enter-your-name"
* Given the user is on page "p-applicant-enter-your-name"
* When they answer "Miss" to question "q-applicant-title"
* And they answer "Test" to question "q-applicant-first-name"
* And they answer "Testcase" to question "q-applicant-last-name"
* And they "Continue"
* Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"
* Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
* When they answer "No" to question "q-applicant-have-you-been-known-by-any-other-names"
* And they "Continue"
* Then the user is on page "p-applicant-enter-your-date-of-birth"
* Given the user is on page "p-applicant-enter-your-date-of-birth"
* When they answer "1990-03-31T00:00:00.000Z" to question "q-applicant-enter-your-date-of-birth"
* And they "Continue"
* Then the user is on page "p-applicant-enter-your-address"
* Given the user is on page "p-applicant-enter-your-address"
* When they answer "Alexander Bain House" to question "q-applicant-building-and-street"
* And they answer "15 York Street" to question "q-applicant-building-and-street-2"
* And they answer "Financial District" to question "q-applicant-building-and-street-3"
* And they answer "Glasgow" to question "q-applicant-town-or-city"
* And they answer "City of Glasgow" to question "q-applicant-county"
* And they answer "G2 8JQ" to question "q-applicant-postcode"
* And they "Continue"
* Then the user is on page "p-applicant-enter-your-telephone-number"
* When they answer <file:/specs/data/sms_recipient.txt> to question "q-applicant-enter-your-telephone-number"
* And they "Continue"
* Then the user is on page "p--before-you-continue"
* Given the user is on page "p--before-you-continue"
* And they "Continue"
* Then the user is on page "p-applicant-incident-type"
* Given the user is on page "p-applicant-incident-type"
* When they answer "Physical assault" to question "q-applicant-incident-type"
* And they "Continue"
* Then the user is on page "p-applicant-did-the-crime-happen-once-or-over-time"
* Given the user is on page "p-applicant-did-the-crime-happen-once-or-over-time"
* When they answer "Once" to question "q-applicant-did-the-crime-happen-once-or-over-time"
* And they "Continue"
* Then the user is on page "p-applicant-when-did-the-crime-happen"
* Given the user is on page "p-applicant-when-did-the-crime-happen"
* When they answer "2022-04-28T00:00:00.000Z" to question "q-applicant-when-did-the-crime-happen"
* And they "Continue"
* Then the user is on page "p-applicant-where-did-the-crime-happen"
* Given the user is on page "p-applicant-where-did-the-crime-happen"
* When they answer "Scotland" to question "q-applicant-where-did-the-crime-happen"
* And they "Continue"
* Then the user is on page "p-applicant-where-in-scotland-did-it-happen"
* Given the user is on page "p-applicant-where-in-scotland-did-it-happen"
* When they answer "Glasgow" to question "q-applicant-scottish-town-or-city"
* And they answer "Central" to question "q-applicant-scottish-location"
* And they "Continue"
* Then the user is on page "p--when-was-the-crime-reported-to-police"
* Given the user is on page "p--when-was-the-crime-reported-to-police"
* When they answer "2022-04-28T00:00:00.000Z" to question "q--when-was-the-crime-reported-to-police"
* And they "Continue"
* Then the user is on page "p--which-police-force-is-investigating-the-crime"
* Given the user is on page "p--which-police-force-is-investigating-the-crime"
* When they answer "Greater Manchester Police" to question "q-police-force-id"
* And they "Continue"
* Then the user is on page "p--whats-the-crime-reference-number"
* Given the user is on page "p--whats-the-crime-reference-number"
* When they answer "CR123456" to question "q--whats-the-crime-reference-number"
* And they "Continue"
* Then the user is on page "p-applicant-describe-incident"
* Given the user is on page "p-applicant-describe-incident"
* When they answer "No" to question "q-applicant-describe-incident"
* And they "Continue"
* Then the user is on page "p--context-offender"
* Given the user is on page "p--context-offender"
* And they "Continue"
* Then the user is on page "p-offender-do-you-know-the-name-of-the-offender"
* Given the user is on page "p-offender-do-you-know-the-name-of-the-offender"
* When they answer "No" to question "q-offender-do-you-know-the-name-of-the-offender"
* And they "Continue"
* Then the user is on page "p--context-physical-injuries"
* Given the user is on page "p--context-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-are-you-claiming-for-physical-injuries"
* Given the user is on page "p-applicant-are-you-claiming-for-physical-injuries"
* When they answer "Yes" to question "q-applicant-are-you-claiming-for-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury"
* Given the user is on page "p-applicant-physical-injury"
* When they answer "{Head, face or neck}, {Arms or hands}" to question "q-applicant-physical-injury"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-upper"
* Given the user is on page "p-applicant-physical-injury-upper"
* When they answer "{Head or brain}, {Eye or eyesight}, {Ear or hearing}" to question "q-applicant-physical-injury-upper"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-upper-head"
* Given the user is on page "p-applicant-physical-injury-upper-head"
* When they answer "{Quadriplegia or tetraplegia (paralysis of all 4 limbs)}, {Other}" to question "q-applicant-physical-injuries"
* When they answer "an alternative Brain Injury" to question "q-applicant-physical-injuries-upper-head-other"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-upper-eye"
* Given the user is on page "p-applicant-physical-injury-upper-eye"
* When they answer "{Damaged or detached retina}" to question "q-applicant-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-upper-ear"
* Given the user is on page "p-applicant-physical-injury-upper-ear"
* When they answer "{Broken ear bone}" to question "q-applicant-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-arms"
* Given the user is on page "p-applicant-physical-injury-arms"
* When they answer "{Arm},{Skin},{Tissue}" to question "q-applicant-physical-injury-arms"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-arms-arm"
* Given the user is on page "p-applicant-physical-injury-arms-arm"
* When they answer "{Hemiplegia (paralysis of one side of the the body)}" to question "q-applicant-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-arms-skin"
* Given the user is on page "p-applicant-physical-injury-arms-skin"
* When they answer "Scars" to question "q-applicant-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-physical-injury-arms-muscle"
* Given the user is on page "p-applicant-physical-injury-arms-muscle"
* When they answer "Cartilage" to question "q-applicant-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-infections"
* Given the user is on page "p-applicant-infections"
* When they answer "No" to question "q-applicant-infections"
* And they "Continue"
* Then the user is on page "p--context-pregnancy"
* Given the user is on page "p--context-pregnancy"
* And they "Continue"
* Then the user is on page "p-applicant-pregnancy-loss"
* Given the user is on page "p-applicant-pregnancy-loss"
* When they answer "No" to question "q-applicant-pregnancy-loss"
* And they "Continue"
* Then the user is on page "p--context-dmi-details"
* Given the user is on page "p--context-dmi-details"
* And they "Continue"
* Then the user is on page "p-applicant-do-you-have-disabling-mental-injury"
* Given the user is on page "p-applicant-do-you-have-disabling-mental-injury"
* When they answer "No" to question "q-applicant-do-you-have-disabling-mental-injury"
* And they "Continue"
* Then the user is on page "p--context-crime-impact"
* Given the user is on page "p--context-crime-impact"
* And they "Continue"
* Then the user is on page "p-applicant-job-when-crime-happened"
* Given the user is on page "p-applicant-job-when-crime-happened"
* When they answer "Yes" to question "q-applicant-job-when-crime-happened"
* And they "Continue"
* Then the user is on page "p-applicant-unable-to-work"
* Given the user is on page "p-applicant-unable-to-work"
* When they answer "No" to question "q-applicant-unable-to-work"
* And they "Continue"
* Then the user is on page "p-applicant-affect-on-daily-life-dmi"
* Given the user is on page "p-applicant-affect-on-daily-life-dmi"
* When they answer "How the injuries have affected their daily life" to question "q-applicant-affect-on-daily-life-dmi"
* And they "Continue"
* Then the user is on page "p--context-treatment"
* Given the user is on page "p--context-treatment"
* And they "Continue"
* Then the user is on page "p-applicant-treatment-for-physical-injuries"
* Given the user is on page "p-applicant-treatment-for-physical-injuries"
* When they answer "The treatment I am receiving for my physical injuries" to question "q-applicant-treatment-for-physical-injuries"
* And they "Continue"
* Then the user is on page "p-applicant-has-your-treatment-finished-dmi"
* Given the user is on page "p-applicant-has-your-treatment-finished-dmi"
* When they answer "Yes" to question "q-applicant-has-your-treatment-finished-dmi"
* And they "Continue"
* Then the user is on page "p-applicant-are-you-registered-with-gp"
* Given the user is on page "p-applicant-are-you-registered-with-gp"
* When they answer "Yes" to question "q-applicant-are-you-registered-with-gp"
* And they "Continue"
* Then the user is on page "p-applicant-have-you-seen-a-gp"
* Given the user is on page "p-applicant-have-you-seen-a-gp"
* When they answer "Yes" to question "q-applicant-have-you-seen-a-gp"
* And they "Continue"
* Then the user is on page "p-gp-enter-your-address"
* Given the user is on page "p-gp-enter-your-address"
* When they answer "GP Practice" to question "q-gp-organisation-name"
* And they answer "GP Building" to question "q-gp-building-and-street"
* And they answer "GP Street" to question "q-gp-building-and-street-2"
* And they answer "GP Street Line 3" to question "q-gp-building-and-street-3"
* And they answer "GP Town" to question "q-gp-town-or-city"
* And they answer "GP County" to question "q-gp-county"
* And they answer "GP1 1GP" to question "q-gp-postcode"
* And they "Continue"
* Then the user is on page "p-applicant-dentist-visited"
* Given the user is on page "p-applicant-dentist-visited"
* When they answer "Yes" to question "q-applicant-dentist-visited"
* And they "Continue"
* Then the user is on page "p-applicant-dentist-address"
* Given the user is on page "p-applicant-dentist-address"
* When they answer "Dentist Practice" to question "q-applicant-dentist-organisation-name"
* And they answer "Dentist Building" to question "q-applicant-dentist-address-building-and-street"
* And they answer "Dentist Street" to question "q-applicant-dentist-address-building-and-street-2"
* And they answer "Dentist Street Line 3" to question "q-applicant-dentist-address-building-and-street-3"
* And they answer "Dentist Town" to question "q-applicant-dentist-address-town-or-city"
* And they answer "Dentist County" to question "q-applicant-dentist-address-county"
* And they answer "DP1 1DP" to question "q-applicant-dentist-address-postcode"
* And they "Continue"
* Then the user is on page "p--context-compensation"
* Given the user is on page "p--context-compensation"
* And they "Continue"
* Then the user is on page "p-applicant-have-you-applied-to-us-before"
* Given the user is on page "p-applicant-have-you-applied-to-us-before"
* When they answer "No" to question "q-applicant-have-you-applied-to-us-before"
* And they "Continue"
* Then the user is on page "p-applicant-have-you-applied-for-or-received-any-other-compensation"
* Given the user is on page "p-applicant-have-you-applied-for-or-received-any-other-compensation"
* When they answer "No" to question "q-applicant-have-you-applied-for-or-received-any-other-compensation"
* And they "Continue"
* Then the user is on page "p-applicant-applied-for-other-compensation-briefly-explain-why-not"
* Given the user is on page "p-applicant-applied-for-other-compensation-briefly-explain-why-not"
* When they answer "Did not apply for other forms of compensation" to question "q-applicant-applied-for-other-compensation-briefly-explain-why-not"
* And they "Continue"
* Then the user is on page "p--context-additional-info"
* Given the user is on page "p--context-additional-info"
* And they "Continue"
* Then the user is on page "p-applicant-provide-additional-information"
* Given the user is on page "p-applicant-provide-additional-information"
* When they answer "No" to question "q-applicant-provide-additional-information"
* And they "Continue"
* Then the user is on page "p--check-your-answers"
* Given the user is on page "p--check-your-answers"
* And they "Continue"
* Then the user is on page "p-applicant-declaration"
* Given the user is on page "p-applicant-declaration"
* Assert page content contains <file:/specs/main/applicant/content/declaration.txt>
* When they answer "I have read and understood the declaration" to question "q-applicant-declaration"
* And they "Agree and submit"
* Then the user is on page "p--confirmation"
* Given the user is on page "p--confirmation"
* Assert page content contains <file:/specs/main/applicant/content/confirmation.txt>
* Assert page content contains a valid CRN

