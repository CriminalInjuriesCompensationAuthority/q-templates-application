Feature: Check your answers and declaration

  @applicant:adult:self
  Scenario: the user selects the "Check your answers and submit application" task
    Given the user is on page "p-task-list"
    When the user selects "Check your answers and submit application"
    Then the user is on page "check-your-answers"

  @applicant:adult:self
  Scenario: the user selects the "Check your answers and submit application" task
    Given the user is on page "check-your-answers"
    When the user selects "Continue"
    Then the user is on page "applicant-declaration"

  @applicant:adult:self
  Scenario: the user selects the "Check your answers and submit application" task
    Given the user is on page "applicant-declaration"
    When the user selects "I have read and understood the declaration"
    And the user selects "Agree and submit"
    Then the user is on page "confirmation"
    And the user has completed the application