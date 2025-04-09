# Gherkin-Cucumber-Playwright Journey tests

## Getting started

Read the docs [Cucumber-js](https://github.com/cucumber/cucumber-js/blob/main/docs/installation.md)

Configuration for the cucumber test runner is found in

-   `../cucumber.json`

Secrets for one login authentication tests in the browser must be provided in `./env/default/tests.secrets.js`

## Run the scripts

The scripts will run against the target specified in `../cucumber.json`: `router`, `dcs` or `cw`. When running against the browser screenshots can be saved to `./reports/cucumber` by modifying the `screenshotRegistry` array in `./tests/features/step_definitions/cwStepFunctions`.

### Legacy tests

To run all tests that represent a full journey use `npx cucumber-js --tags="@legacy"`. Further tests for authentication and postcode lookup can be run using `npx cucumber-js --tags="@postcode-lookup or @authentication"`. Coverage of all template sections can be reached by running `npx cucumber-js --tags="@legacy or @coverage or @injury"`.

### WIP: New test format

Scenarios use tags to plot their journey. Each tag is either a role (which will take a happy path through the app),
a specific section of the application or a cucumber hook reference.

To run the `applicant:adult:self.deceased` journey, run the following command:

`npx cucumber-js --tags="@applicant:adult:self.deceased"`

To run the `applicant:adult:self.deceased` journey and also test the residency and nationality flow, run the following command:

`npx cucumber-js --tags="@applicant:adult:self.deceased or @residency or @back"`

### Reports

Coverage reports can be found under `reports/templateCoverage/`. A separate folder will be generated for each target the tests are run against.
To verify the output datasets are unchanged set the `compareFixtures` variable to `true` in `cucumber.json` and run `npm run test:full` against the router.
To update the fixtures (when there is a required change in the data output) repeat the above with the `saveFixtures` variable set to `true` in `cucumber.json`. Once the tests have been run move the new `fullFixture.json` from `reports/fixtures/temp` into `report/fixtures`.
To run a check against a subset of the tests' outputs set the `savefixtures` variable to `true` and the `fullFixtureComparison` variable to `false`. This will generate a `partialFixture.json` file in `reports/fixtures/temp`. Move this file into `report/fixtures` before running the test again to compare the outputs.
