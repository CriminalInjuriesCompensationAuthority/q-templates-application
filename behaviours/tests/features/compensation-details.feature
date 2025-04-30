@applicant:adult:self @applicant:adult:self.deceased
Feature: Other compensation details

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects the "Other compensation" task
    Given the user is on page "p-task-list"
    When the user selects "Other compensation"
    Then the user is on page "context-compensation"

        ##########################################################  OTHER COMPENSATION HAPPY PATH ##########################################################

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user is on the other compensation context page
    Given the user is on page "context-compensation"
    When the user selects "Continue"
    Then the user is on page "applicant-have-you-applied-to-us-before"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters whether or not they have applied before
    Given the user is on page "applicant-have-you-applied-to-us-before"
    When the user selects "Yes"
    And the user enters "Test" into textBox "Enter your previous reference number if you know it (optional)"
    And the user selects "Continue"
    Then the user is on page "applicant-have-you-applied-for-or-received-any-other-compensation"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters whether or not they've received other compensation
    Given the user is on page "applicant-have-you-applied-for-or-received-any-other-compensation"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-who-did-you-apply-to"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters who they received compensation from
    Given the user is on page "applicant-who-did-you-apply-to"
    When the user enters "Test" into textBox "Tell us more about the compensation or damages"
    And the user selects "Continue"
    Then the user is on page "applicant-has-a-decision-been-made"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters whether or not a decision has been made
    Given the user is on page "applicant-has-a-decision-been-made"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-how-much-was-award"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters how much they were awarded
    Given the user is on page "applicant-how-much-was-award"
    When the user enters "Test" into textBox "Tell us how much you were awarded and what it was for"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_other-compensation" task status will be marked as "Completed"