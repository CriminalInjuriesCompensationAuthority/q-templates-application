@applicant:adult:self
Feature: Treatment details flow

  @applicant:adult:self
  Scenario: the user selects the "about your treatment" task on the task list
    Given the user is on page "p-task-list"
    When the user selects "Your treatment"
    Then the user is on page "context-treatment"

        ##########################################################  TREATMENT DETAILS HAPPY PATH ##########################################################

  @applicant:adult:self
  Scenario: the user is on the treatment details context page
    Given the user is on page "context-treatment"
    When the user selects "Continue"
    Then the user is on page "applicant-treatment-for-physical-injuries"

  @applicant:adult:self
  Scenario: the user enters what treatment they are receiving for physical injuries
    Given the user is on page "applicant-treatment-for-physical-injuries"
    When the user enters "Test" into textBox "What treatment are you receiving for your physical injuries?"
    And the user selects "Continue"
    Then the user is on page "applicant-select-treatments"

  @applicant:adult:self
  Scenario: the user enters what treatment they are receiving for their DMI
    Given the user is on page "applicant-select-treatments"
    When the user selects "CBT (cognitive behavioural therapy)"
    And the user selects "Continue"
    Then the user is on page "applicant-has-your-treatment-finished-dmi"

  @applicant:adult:self
  Scenario: the user selects whether or not their treatment is finished
    Given the user is on page "applicant-has-your-treatment-finished-dmi"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-are-you-registered-with-gp"


  @applicant:adult:self
  Scenario: the user selects whether or not they're registered with a GP
    Given the user is on page "applicant-are-you-registered-with-gp"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-have-you-seen-a-gp"


  @applicant:adult:self
  Scenario: the user selects whether or not they've seen a GP for their injuries
    Given the user is on page "applicant-have-you-seen-a-gp"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "gp-enter-your-address"

  @applicant:adult:self
  Scenario: the user enters their GPs address details
    Given the user is on page "gp-enter-your-address"
    When the user enters "Test Surgery" into textBox "Practice name"
    When the user enters "10 Bank St" into textBox "Address line 1"
    And the user enters "Glasgow" into textBox "Town"
    And the user enters "MA1" into the postcode textbox
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_about-treatment" task status will be marked as "Completed"