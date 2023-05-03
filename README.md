# Represents a CICA Criminal Injuries Claim Application

## Installation

```
npm ci

```

## Automated testing

During installation a [bdd-template-test-framework](https://github.com/CriminalInjuriesCompensationAuthority/bdd-template-test-framework) is installed which is run during the npm test phase and insures the valadity or otherwise of the current version of the template.
The [bdd-template-test-framework](https://github.com/CriminalInjuriesCompensationAuthority/bdd-template-test-framework) is a node module which contains the Gauge and Taiko test framweork and additional bespoke code
designed to run any template specification in tandem with the q-router library or alternatively by spinning up a chromium web browser
and running UI tests.
Most, but not necessarily all, changes to the template should be reflected in the tests.

### Environment variables

The bdd test framework has default environment variables stored within the env/default directory within multiple files within the bdd module.

The key environment variables of note are

```
template_under_test = define-a-template-from-parent-project
log_level=info

run_ui_tests = false

# For UI tests
application_entry_point_url = http://localhost:3000/apply
# Change this to true to run test in headless mode in chrome
headless_chrome=true

# module externalisation config
STEP_IMPL_DIR = node_modules/bdd-template-test-framework/src

```


###

Within the project you will find a specs directory and a manifest.json file

The [manifest.json](./manifest.json) file contains the EnvironmentDir environment variable.

```
"EnvironmentDir": "node_modules/bdd-template-test-framework/env"
```

this points to the location of the installed bdd-template-test-framework module and is required.

### Specifications directory

The specs directory contains BDD journey scenarion steps which will be executed by the [bdd-template-test-framework](https://github.com/CriminalInjuriesCompensationAuthority/bdd-template-test-framework).

Add or update any [specification](https://docs.gauge.org/writing-specifications.html?os=linux&language=javascript&ide=vscode) following the existing bdd patterns and steps.
See the bdd-template-test-framework's [step_omplementation](https://github.com/CriminalInjuriesCompensationAuthority/bdd-template-test-framework/blob/main/src/step_implementation.js)
for the currently implemented steps.

### Example spec and associted step implementation

```

-   When they answer "Yes" to question "q-applicant-has-crime-reference-number"

```

```

step('When they answer <answer> to question <questionId>', async function(answer, questionId) {
if (runBrowserTests) {
await answerBrowserQuestion(questionnaire, currentBrowserTestPageId, questionId, answer);
} else {
answerQuestion(questionnaire, questionId, answer);
}
});

```

## Gauge VsCode extension

Install the [Gauge Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=getgauge.gauge) to run and debug tests within VS code.

### Creating new steps

It is a relatively trivial process to create a new spcecification step and corresponding step implementation.
See the bdd-template-test-framework [README.md](https://github.com/CriminalInjuriesCompensationAuthority/bdd-template-test-framework) for further instructions.
