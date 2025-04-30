@applicant:adult:self.deceased
Feature: Relationship to deceased flow

  @applicant:adult:self.deceased
  Scenario: the user selects the "Your relationship to the person who died" task on the task list
    Given the user is on page "p-task-list"
    When the user selects "Your relationship to the person who died"
    Then the user is on page "context-relationship-to-deceased"

        ##########################################################  RELATIONSHIP TO DECEASED HAPPY PATH ##########################################################

 @applicant:adult:self.deceased
  Scenario: the user continues past the "context-relationship-to-deceased" context screen.
    Given the user is on page "context-relationship-to-deceased"
    When the user selects "Continue"
    Then the user is on page "applicant-relationship-to-deceased"

 @applicant:adult:self.deceased
  Scenario: the user answers the question "What is your relationship to the person who died?"
    Given the user is on page "applicant-relationship-to-deceased"
    When the user selects "Parent"
    And the user selects "Continue"
    Then the user is on page "applicant-living-together"

 @applicant:adult:self.deceased
  Scenario: the user answers the question "Were you living with the person who died?"
    Given the user is on page "applicant-living-together"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-financial-help"

 @applicant:adult:self.deceased
  Scenario: the user answers the question "Were relying on the person who died for financial help?"
    Given the user is on page "applicant-financial-help"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-physical-help"

 @applicant:adult:self.deceased
  Scenario: the user answers the question "Were relying on the person who died for physical help?"
    Given the user is on page "applicant-physical-help"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "other-claimants"

 @applicant:adult:self.deceased
  Scenario: the user answers the question "Are you aware of someone else who might apply?"
    Given the user is on page "other-claimants"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_relationship-to-deceased" task status will be marked as "Completed"