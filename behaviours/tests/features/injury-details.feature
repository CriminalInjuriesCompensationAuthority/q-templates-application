@applicant:adult:self
Feature: Injury details flow


  @applicant:adult:self
  Scenario: the user selects the "About your injuries" task on the task list.
    Given the user is on page "task-list"
    When the user selects "About your injuries"
    Then the user is on page "context-physical-injuries"

        ##########################################################  INJURY DETAILS HAPPY PATH ##########################################################

  @applicant:adult:self
  Scenario: the user is on the physical injuries context page
    Given the user is on page "context-physical-injuries"
    When the user selects "Continue"
    Then the user is on page "applicant-are-you-claiming-for-physical-injuries"

  @applicant:adult:self
  Scenario: the user selects whether or not they are claiming for physical injuries
    Given the user is on page "applicant-are-you-claiming-for-physical-injuries"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-physical-injury"

  @applicant:adult:self
  Scenario: the user selects what part of their body was injured
    Given the user is on page "applicant-physical-injury"
    When the user selects "Torso"
    And the user selects "Continue"
    Then the user is on page "applicant-physical-injury-torso"

  @applicant:adult:self
  Scenario: the user selects what part of their torso was injured
    Given the user is on page "applicant-physical-injury-torso"
    When the user selects "Shoulder"
    And the user selects "Continue"
    Then the user is on page "applicant-physical-injury-torso-shoulder"

  @applicant:adult:self
  Scenario: the user selects what part of their shoulder was injured
    Given the user is on page "applicant-physical-injury-torso-shoulder"
    When the user selects "Broken shoulder blade"
    And the user selects "Continue"
    Then the user is on page "applicant-infections"

  @applicant:adult:self
  Scenario: the user selects whether or not they had any infections
    Given the user is on page "applicant-infections"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-select-non-sa-infections"

  @applicant:adult:self
  Scenario: the user selects what kind of infection they had
    Given the user is on page "applicant-select-non-sa-infections"
    When the user selects "HIV"
    And the user selects "Continue"
    Then the user is on page "info-context-pregnancy"

  @applicant:adult:self
  Scenario: the user selects what kind of infection they had
    Given the user is on page "info-context-pregnancy"
    When the user selects "Continue"
    Then the user is on page "applicant-pregnancy-loss"

  @applicant:adult:self
  Scenario: the user selects what kind of infection they had
    Given the user is on page "applicant-pregnancy-loss"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "context-dmi-details"

  @applicant:adult:self
  Scenario: the user is on the DMI details context page
    Given the user is on page "context-dmi-details"
    When the user selects "Continue"
    Then the user is on page "applicant-do-you-have-disabling-mental-injury"

  @applicant:adult:self
  Scenario: the user selects whether or not they have a DMI
    Given the user is on page "applicant-do-you-have-disabling-mental-injury"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-mental-injury-duration"

  @applicant:adult:self
  Scenario: the user selects how long their DMI lasted
    Given the user is on page "applicant-mental-injury-duration"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_about-injuries" task status will be marked as "Completed"