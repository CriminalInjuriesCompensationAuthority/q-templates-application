@applicant:adult:self.deceased
Feature: Funeral cost details flow

  @applicant:adult:self.deceased
  Scenario: the user selects the "About the person who died" task on the task list
    Given the user is on page "p-task-list"
    When the user selects "Funeral costs"
    Then the user is on page "context-funeral-costs"

        ##########################################################  DECEASED DETAILS HAPPY PATH ##########################################################

  @applicant:adult:self.deceased
  Scenario: the user continues past the "context-funeral-costs" context screen.
    Given the user is on page "context-funeral-costs"
    When the user selects "Continue"
    Then the user is on page "applicant-funeral-costs-paid"

  @applicant:adult:self.deceased
  Scenario: the user answers the question "Are you responsible for paying for the funeral"
    Given the user is on page "applicant-funeral-costs-paid"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "applicant-funeral-costs-other-contributor"

  @applicant:adult:self.deceased
  Scenario: the user answers the question "Is anyone else contributing to the cost of the funeral?" and is redirected back to the task list.
    Given the user is on page "applicant-funeral-costs-other-contributor"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_funeral-costs" task status will be marked as "Completed"
