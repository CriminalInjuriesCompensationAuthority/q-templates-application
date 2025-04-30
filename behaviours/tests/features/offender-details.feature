@applicant:adult:self @applicant:adult:self.deceased
Feature: Offender details flow

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects the "About the offender" task
    Given the user is on page "p-task-list"
    When the user selects "About the offender"
    Then the user is on page "context-offender"

          ##########################################################  OFFENDER HAPPY PATH ##########################################################

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user is on the offender details context page
    Given the user is on page "context-offender"
    When the user selects "Continue"
    Then the user is on page "offender-do-you-know-the-name-of-the-offender"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects whether or not they know the name of the offender
    Given the user is on page "offender-do-you-know-the-name-of-the-offender"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_offender_about-the-offender" task status will be marked as "Completed"