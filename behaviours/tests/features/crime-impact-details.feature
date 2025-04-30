@applicant:adult:self
Feature: Crime impact flow

  @applicant:adult:self
  Scenario: the user selects the "The impact the injuries have had" task
    Given the user is on page "task-list"
    When the user selects "The impact the injuries have had"
    Then the user is on page "info-context-crime-impact"

        ##########################################################  CRIME IMPACT HAPPY PATH ##########################################################

  @applicant:adult:self
  Scenario: the user is on the crime details context page
    Given the user is on page "info-context-crime-impact"
    When the user selects "Continue"
    Then the user is on page "applicant-job-when-crime-happened"

  @applicant:adult:self
  Scenario: the user selects if they have a job when the crime happened
    Given the user is on page "applicant-job-when-crime-happened"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-unable-to-work"

  @applicant:adult:self
  Scenario: the user selects if they were unable to work after the crime
    Given the user is on page "applicant-unable-to-work"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-unable-to-work-duration"

  @applicant:adult:self
  Scenario: the user selects the duration of time they were unable to work
    Given the user is on page "applicant-unable-to-work-duration"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-affect-on-daily-life-dmi"

  @applicant:adult:self
  Scenario: the user enters how the crime affected their daily life
    Given the user is on page "applicant-affect-on-daily-life-dmi"
    When the user enters "Test" into textBox "Briefly say how your injuries have affected your daily life"
    And the user selects "Continue"
    Then the user is on page "context-special-expenses"

  @applicant:adult:self
  Scenario: the user is on the special expenses context page
    Given the user is on page "context-special-expenses"
    When the user selects "Continue"
    Then the user is on page "applicant-special-expenses"

  @applicant:adult:self
  Scenario: the user selects whether or not they have incurred special expenses
    Given the user is on page "applicant-special-expenses"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_impact-of-injuries" task status will be marked as "Completed"