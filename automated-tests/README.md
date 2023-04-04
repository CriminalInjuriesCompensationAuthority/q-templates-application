# Gauge Taiko Routing and Browser Tests

## Getting started

Read the docs [gauge](https://gauge.org/gauge-taiko/)

### Install

-   `npm install -g @getgauge/cli`
-   clone this directory
-   `npm install`

The specs/data directory contains two file that you can use to override the default dummy email and mobile phone number
email_recipient and sms_recipient respectively.

The env/test.properties file conatins the following variables

-   `application_entry_point_url = https://some-env/apply`
-   `environment = [local, dev, uat, prod]`
    setting the environment to local will ignore the CRN check assertion.

Note: when running on localHost DISABLE your VPN!

## Run the scripts

`guage run specs\some-dir\some-spec.spec`

### Adding scripts which will be run on PRODUCTION!

Ensure that you use the following data for applicants

-   Enter "Test" into textBox "First name" on page "applicant-enter-your-name"
-   Enter "Testcase" into textBox "Last name" on page "applicant-enter-your-name"

### Parallel Runs

`gauge run --parallel -n=4 specs\`
where -n=4 matches your cpu cores.

### Flaky tests

**_Recommended run command!_**

`gauge run --max-retries-count=3 --parallel -n=4 specs\main`

### Debugging

Install the VS code [Gauge Extrension](https://marketplace.visualstudio.com/items?itemName=getgauge.gauge)

Place a breakpoint within the code, for example within this function

`step('Select <answer> on page <pageId>', async function (answer, pageId) {`

And add a watch expression if you wish to pause test execution on a particular page, for example

`pageId === 'applicant-provide-additional-information'`

Navigate to the Specification or Scenario you wish to run and click Debug Spec or Debug Scenario

![Debug Scenario image](./images/debug_scenario.png)

If the Run Spec, Run Scenario headings are not being displayed withtin VSCode try diasbling the Gauge Extension and re-enabling.

## Specification writing guide

### Given, When, Then

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

### Select \<select> element specification syntax

The following steps will be parsed correctly

```
   When they answer "{Head, face or neck}" to question "q-applicant-physical-injury"
   When they answer "Head, face or neck" to question "q-applicant-physical-injury"
   When they answer "{Head, face or neck}, {Arms or hands}" to question "q-applicant-physical-injury"
   When they answer "{Head, face or neck},{Arms or hands}" to question "q-applicant-physical-injury"
```

### Entering a date

```
   When they answer "2022-04-28T00:00:00.000Z" to question "q--when-was-the-crime-reported-to-police"
```

This is the current format for entering a date as an answer to a question.
The standard is ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
