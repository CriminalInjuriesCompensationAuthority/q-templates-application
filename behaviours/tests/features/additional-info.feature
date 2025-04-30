@applicant:adult:self @applicant:adult:self.deceased
Feature: Additional info flow

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects the "Additional information" task
    Given the user is on page "p-task-list"
    When the user selects "Additional information"
    Then the user is on page "context-additional-info"

        ##########################################################  OTHER COMPENSATION HAPPY PATH ##########################################################

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user is on the other compensation context page
    Given the user is on page "context-additional-info"
    When the user selects "Continue"
    Then the user is on page "applicant-provide-additional-information"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters whether or not they have applied before
    Given the user is on page "applicant-provide-additional-information"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-additional-information"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters whether or not they have applied before
    Given the user is on page "applicant-additional-information"
    When the user enters "Test" into textBox "Enter additional information"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_additional-information" task status will be marked as "Completed"