# Specification writing guide

## Given, When, Then

The following spec

```
   Given the user is on page "p--new-or-existing-application"
   When they answer "Start a new application" to question "q--new-or-existing-application"
   And they "Continue"
   Then the user is on page "p-applicant-fatal-claim"
   Given the user is on page "p-applicant-fatal-claim"
   When they answer "No" to question "q-applicant-fatal-claim"
   And they "Continue"
   Then the user is on page "p--was-the-crime-reported-to-police"
```

can be rewritten as

```
   Given the user is on page "p--new-or-existing-application"
   When they answer "Start a new application" to question "q--new-or-existing-application"
   And they "Continue"
   Then the user is on page "p-applicant-fatal-claim"
   When they answer "No" to question "q-applicant-fatal-claim"
   And they "Continue"
   Then the user is on page "p--was-the-crime-reported-to-police"
```

omitting the Second '\* Given the user is on page "p-applicant-fatal-claim"' step

## Select \<select> element specification syntax

The following steps will be parsed correctly

```
   When they answer "{Head, face or neck}" to question "q-applicant-physical-injury"
   When they answer "Head, face or neck" to question "q-applicant-physical-injury"
   When they answer "{Head, face or neck}, {Arms or hands}" to question "q-applicant-physical-injury"
   When they answer "{Head, face or neck},{Arms or hands}" to question "q-applicant-physical-injury"
```

## Entering a date

```
   When they answer "2022-04-28T00:00:00.000Z" to question "q--when-was-the-crime-reported-to-police"
```

This is the current format for entering a date as an answer to a question.
The standard is ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
