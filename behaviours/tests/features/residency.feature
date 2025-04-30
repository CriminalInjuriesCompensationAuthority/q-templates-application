Feature: Applicant residency and nationality details

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects the "Your residency and nationality" task
    Given the user is on page "task-list"
    When the user selects "Your residency and nationality"
    Then the user is on page "context-residency-and-nationality"

      ##########################################################  RESIDENCY HAPPY PATH ##########################################################

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user is on the residency and nationality context page
    Given the user is on page "context-residency-and-nationality"
    When the user selects "Continue"
    Then the user is on page "applicant-british-citizen"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects whether or not the applicant is a british citizen
    Given the user is on page "applicant-british-citizen"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

    ##########################################################  RESIDENCY TEST SCENARIOS ##########################################################

  @residency @back
  Scenario: 3B- User selects no to the question "Were you a British citizen when the crime happened?"
    Given the user is on page "p-applicant-british-citizen"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-british-citizen-relative"

  @residency
  Scenario: 4A - User selects ‘Yes’ to the question "Were you a close relative of a British citizen when the crime happened?"
    Given the user is on page "p-applicant-british-citizen-relative"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 4B- Applicant selects 'No’ to the question ‘Were you a close relative of a British citizen when the crime happened?’
    Given the user is on page "p-applicant-british-citizen-relative"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-ordinarily-resident"

  @residency
  Scenario: 5A - User selects ‘Yes’ to the question "Were you ordinarily resident in the UK when the crime happened?"
    Given the user is on page "p-applicant-ordinarily-resident"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 5B- Applicant selects 'No’ to the question "Were you ordinarily resident in the UK when the crime happened?"
    Given the user is on page "p-applicant-ordinarily-resident"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-eu-citizen-relative"

  @residency
  Scenario: 6A - User selects ‘Yes’ to the question "Were you an EU citizen when the crime happened?"
    Given the user is on page "p-applicant-eu-citizen-relative"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 6B- Applicant selects 'No’ to the question "Were you an EU citizen when the crime happened?"
    Given the user is on page "p-applicant-eu-citizen-relative"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-eu-citizen-relative"

  @residency
  Scenario: 7A - User selects ‘Yes’ to the question "Were you in the UK legally because you were the family member of an EU citizen when the crime happened?"
    Given the user is on page "p-applicant-eu-citizen-relative"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 7B- Applicant selects 'No’ to the question "Were you in the UK legally because you were the family member of an EU citizen when the crime happened?"
    Given the user is on page "p-applicant-eu-citizen-relative"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-eea-citizen"

  @residency
  Scenario: 8A - User selects ‘Yes’ to the question "Were you a European Economic Area (EEA) citizen when the crime happened?"
    Given the user is on page "p-applicant-eea-citizen"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 8B- Applicant selects 'No’ to the question "Were you a European Economic Area (EEA) citizen when the crime happened?"
    Given the user is on page "p-applicant-eea-citizen"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-eea-citizen-relative"

  @residency
  Scenario: 9A - User selects ‘Yes’ to the question "Were you in the UK legally because you were the family member of an EEA citizen when the crime happened?"
    Given the user is on page "p-applicant-eea-citizen-relative"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 9B- Applicant selects 'No’ to the question "Were you in the UK legally because you were the family member of an EEA citizen when the crime happened?"
    Given the user is on page "p-applicant-eea-citizen-relative"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-other-citizen"

  @residency
  Scenario: 10A - User selects ‘Yes’ to the question "European Convention on the Compensation of Victims of Violent Crimes"
    Given the user is on page "p-applicant-other-citizen"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 10B- Applicant selects 'No’ to the question "European Convention on the Compensation of Victims of Violent Crimes"
    Given the user is on page "p-applicant-other-citizen"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-armed-forces"

  @residency
  Scenario: 11A - User selects ‘Yes’ to the question "Were you a member of the British Armed Forces when the crime happened?"
    Given the user is on page "p-applicant-armed-forces"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 11B- Applicant selects 'No’ to the question "Were you a member of the British Armed Forces when the crime happened?"
    Given the user is on page "p-applicant-armed-forces"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-armed-forces-relative"

  @residency
  Scenario: 12A - User selects ‘Yes’ to the question "Were you a close relative of a member of the British Armed Forces living together when the crime happened?"
    Given the user is on page "p-applicant-armed-forces-relative"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 12B- Applicant selects 'No’ to the question "Were you a close relative of a member of the British Armed Forces living together when the crime happened?"
    Given the user is on page "p-applicant-armed-forces-relative"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-victim-human-trafficking"

  @residency
  Scenario: 13A - User selects ‘Yes’ to the question "Have you been referred as a potential victim of human trafficking in the UK?"
    Given the user is on page "p-applicant-victim-human-trafficking"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "p-applicant-applied-for-asylum"

  @residency @back
  Scenario: 13B- Applicant selects 'No’ to the question "Have you been referred as a potential victim of human trafficking in the UK?"
    Given the user is on page "p-applicant-victim-human-trafficking"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-applicant-applied-for-asylum"

  @residency
  Scenario: 14A - User selects ‘Yes’ to the question "Have you applied for asylum in the UK?"
    Given the user is on page "p-applicant-applied-for-asylum"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"

  @residency @back
  Scenario: 14B- Applicant selects 'No’ to the question "Have you applied for asylum in the UK?"
    Given the user is on page "p-applicant-applied-for-asylum"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_residency-and-nationality" task status will be marked as "Completed"