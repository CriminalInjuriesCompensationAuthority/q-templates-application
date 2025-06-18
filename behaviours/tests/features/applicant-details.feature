Feature: Applicant details flow

  @applicant:adult:self @mainApplicant:adult.incapable @taskList
  Scenario: the user selects the "Your details" task
    Given the user is on page "p-task-list"
    And the status of "t_applicant_personal-details__completion-status" is "incomplete"
    And the status of "t_applicant_personal-details__applicability-status" is "applicable"
    When the user initialises the "#t_applicant_personal-details" state
    Then the user is on page "p--context-applicant-details"

  @applicant:adult:self @mainApplicant:adult.incapable @context @taskList @linear
  Scenario: the user is on the applicant details context page
  Given the user is on page "p--context-applicant-details"
  When the user advances the application
  Then the user is on page "p-applicant-confirmation-method"

  @applicant:adult:self @reveal @openQuestion @taskList @linear
  Scenario: the user confirms how they'd like to be contacted
    Given the user is on page "p-applicant-confirmation-method"
    When the user answers "email" to the question "q-applicant-confirmation-method"
    And the user inputs their email address to the question "q-applicant-enter-your-email-address"
    And the user answers the question
    Then the user is on page "p-applicant-enter-your-name"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters the applicant's name
    Given the user is on page "p-applicant-enter-your-name"
    When the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    Then the user is on page "p-applicant-have-you-been-known-by-any-other-names"

  @applicant:adult:self @closedQuestion @taskList @linear
  Scenario: the user selects whether the applicant have ever been known as another name
    Given the user is on page "p-applicant-have-you-been-known-by-any-other-names"
    When the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    Then the user is on page "p-applicant-enter-your-date-of-birth"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters their date of birth
    Given the user is on page "p-applicant-enter-your-date-of-birth"
    When the user answers "01 01 1970" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    Then the user is on page "p-applicant-enter-your-address"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters the applicant's address
    Given the user is on page "p-applicant-enter-your-address"
    When the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    When the user answers "Glasgow" to the question "q-applicant-town-or-city"
    When the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    Then the user is on page "p-applicant-enter-your-telephone-number"

  @applicant:adult:self @openQuestion @taskList
  Scenario: the user enters the applicant's phone number
    Given the user is on page "p-applicant-enter-your-telephone-number"
    When the user inputs their telephone number to the question "q-applicant-enter-your-telephone-number"
    And the user answers the question
    Then the user is on page "p-task-list"
    And the status of "t_applicant_personal-details__completion-status" is "completed"

  @applicant:adult:self @openQuestion @linear
  Scenario: the user enters the applicant's phone number
    Given the user is on page "p-applicant-enter-your-telephone-number"
    When the user inputs their telephone number to the question "q-applicant-enter-your-telephone-number"
    And the user answers the question
    Then the user is on page "p--context-residency-and-nationality"