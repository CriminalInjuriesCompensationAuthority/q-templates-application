Feature: Applicant residency and nationality details

  @applicant:adult:self @taskList
  Scenario: the user selects the "Your residency and nationality" task
    Given the application is in the state "p-task-list"
    And the status of "t_applicant_residency-and-nationality__completion-status" is "incomplete"
    And the status of "t_applicant_residency-and-nationality__applicability-status" is "applicable"
    When the user initialises the "#t_applicant_residency-and-nationality" state
    Then the application is in the state "p--context-residency-and-nationality"

  @applicant:adult:self @mainApplicant:adult.incapable @context @taskList @linear
  Scenario: the user is on the applicant details context page
    Given the application is in the state "p--context-residency-and-nationality"
    When the user advances the application
    Then the application is in the state "p-applicant-british-citizen"

  @applicant:adult:self @mainApplicant:adult.incapable @closedQuestion @taskList
  Scenario: the user confirms how they'd like to be contacted
    Given the application is in the state "p-applicant-british-citizen"
    When the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    Then the application is in the state "p-task-list"
    And the status of "t_applicant_residency-and-nationality__completion-status" is "completed"

  Scenario Outline: the user confirms how they'd like to be contacted
    Given the application is in the state "p-applicant-british-citizen"
    When the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    Then the application is in the state "<section>"

  @applicant:adult:self @closedQuestion @linear
    Examples:
      | section |
      | p--before-you-continue |

  @mainApplicant:adult.incapable @closedQuestion @linear
    Examples:
      | section |
      | p--context-mainapplicant-details|