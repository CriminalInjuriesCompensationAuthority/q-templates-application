Feature: Main applicant details appear when multiple proxy cascades are caused

  @proxyCascadeBug
  Scenario: the user selects the "About your application" task
    Given the user is on page "p-task-list"
    When the user selects "About your application"
    Then the user is on page "applicant-who-are-you-applying-for"

  @proxyCascadeBug
  Scenario: the user causes a cascade by selecting "someone else"
    Given the user is on page "applicant-who-are-you-applying-for"
    When the user selects "Someone else"
    And the user selects "Continue"
    Then the user is on page "applicant-are-you-18-or-over"

  @proxyCascadeBug
  Scenario: the user selects whether or not I'm over 18
    Given the user is on page "applicant-are-you-18-or-over"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "was-the-crime-reported-to-police"

  @proxyCascadeBug
  Scenario: the user selects whether or not the crime was reported to police
    Given the user is on page "was-the-crime-reported-to-police"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "context-crime-ref-no"

  @proxyCascadeBug
  Scenario: the user confirms they understand they'll be asked for a crime reference
    Given the user is on page "context-crime-ref-no"
    When the user selects "Continue"
    Then the user is on page "applicant-fatal-claim"

  @proxyCascadeBug
  Scenario: the user selects whether they are applying for personal injury or a bereavement
    Given the user is on page "applicant-fatal-claim"
    When the user selects "I am applying on behalf of someone who was the victim of a violent crime"
    And the user selects "Continue"
    Then the user is on page "applicant-applied-before-for-this-crime"

  @proxyCascadeBug
  Scenario: the user confirms they have not applied for this crime before
    Given the user is on page "applicant-applied-before-for-this-crime"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "proxy-someone-else-applied-before-for-this-crime"

  @proxyCascadeBug
  Scenario: the user confirms nobody else has applied for this crime
    Given the user is on page "proxy-someone-else-applied-before-for-this-crime"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-task-list"
    And the "t-about-application" task status will be marked as "Completed"
    And the "t_applicant_personal-details" task status will be marked as "Incomplete"


  @proxyCascadeBug
  Scenario: the user selects the "About your application" task
    Given the user is on page "p-task-list"
    When the user selects "About your application"
    Then the user is on page "applicant-who-are-you-applying-for"

  @proxyCascadeBug
  Scenario: the user selects whether to start a new application or resume an existing one
    Given the user is on page "start-or-resume"
    When the user selects "Start a new application"
    And the user selects "Continue"
    Then the user is on page "applicant-who-are-you-applying-for"

  @proxyCascadeBug
  Scenario: the user selects "Myself" causing a further proxy cascade
    Given the user is on page "applicant-who-are-you-applying-for"
    When the user selects "Myself"
    And the user selects "Continue"
    Then the user is on page "applicant-are-you-18-or-over"

  @proxyCascadeBug
  Scenario: the user selects whether or not I'm over 18
    Given the user is on page "applicant-are-you-18-or-over"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "was-the-crime-reported-to-police"

  @proxyCascadeBug
  Scenario: the user selects whether or not the crime was reported to police
    Given the user is on page "was-the-crime-reported-to-police"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "context-crime-ref-no"

  @proxyCascadeBug
  Scenario: the user confirms they understand they'll be asked for a crime reference
    Given the user is on page "context-crime-ref-no"
    When the user selects "Continue"
    Then the user is on page "applicant-fatal-claim"

  @proxyCascadeBug
  Scenario: the user selects whether they are applying for personal injury or a bereavement
    Given the user is on page "applicant-fatal-claim"
    When the user selects "I am applying because I was the victim of a violent crime"
    And the user selects "Continue"
    Then the user is on page "applicant-applied-before-for-this-crime"

  @proxyCascadeBug
  Scenario: the user confirms they have not applied for this crime before
    Given the user is on page "applicant-applied-before-for-this-crime"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "applicant-someone-else-applied-before-for-this-crime"

  @proxyCascadeBug
  Scenario: the user should not see a section with a null title.
    Given the user is on page "applicant-someone-else-applied-before-for-this-crime"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-task-list"
    And the "t-about-application" task status will be marked as "Completed"
    And there is no section with a "null" title.