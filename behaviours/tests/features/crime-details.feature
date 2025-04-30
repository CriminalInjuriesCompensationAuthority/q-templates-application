@applicant:adult:self @applicant:adult:self.deceased
Feature: Crime details flow

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects the "About the crime" task
    Given the user is on page "p-task-list"
    When the user selects "About the crime"
    Then the user is on page "before-you-continue"

##########################################################  CRIME DETAILS HAPPY PATH ##########################################################

  Scenario Outline: the user is on the crime details context page
    Given the user is on page "before-you-continue"
    When the user selects "Continue"
    Then the user is on page "<pageId>"

  @applicant:adult:self
    Examples:
      | pageId |
      | applicant-did-the-crime-happen-once-or-over-time |

  @applicant:adult:self.deceased
    Examples:
      | pageId |
      | applicant-when-did-the-crime-happen |

  @applicant:adult:self
  Scenario: the user selects whether the crime happened once or over a period of time
    Given the user is on page "applicant-did-the-crime-happen-once-or-over-time"
    When the user selects "Once"
    And the user selects "Continue"
    Then the user is on page "applicant-when-did-the-crime-happen"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters when the crime happened
    Given the user is on page "applicant-when-did-the-crime-happen"
    When the user enters "31" into textBox "Day"
    And the user enters "3" into textBox "Month"
    And the user enters "2024" into textBox "Year"
    And the user selects "Continue"
    Then the user is on page "applicant-where-did-the-crime-happen"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters where the crime happened
    Given the user is on page "applicant-where-did-the-crime-happen"
    When the user selects "Scotland"
    And the user selects "Continue"
    Then the user is on page "applicant-where-in-scotland-did-it-happen"

  Scenario Outline: the user enters where in scotland the crime happened
    Given the user is on page "applicant-where-in-scotland-did-it-happen"
    When the user enters "Test" into textBox "Town or city"
    And the user enters "Test" into textBox "Location"
    And the user selects "Continue"
    Then the user is on page "<pageId>"

  @applicant:adult:self
    Examples:
      | pageId |
      | info-when-was-the-crime-reported-to-police |

  @applicant:adult:self.deceased
    Examples:
      | pageId |
      | info-which-police-force-is-investigating-the-crime |

  @applicant:adult:self
  Scenario: the user enters when the crime was reported
    Given the user is on page "info-when-was-the-crime-reported-to-police"
    When the user enters "31" into textBox "Day"
    And the user enters "3" into textBox "Month"
    And the user enters "2024" into textBox "Year"
    And the user selects "Continue"
    Then the user is on page "which-police-force-is-investigating-the-crime"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects which police force is investigating the crime
    Given the user is on page "which-police-force-is-investigating-the-crime"
    When the user enters "Manch" into textBox "Which police force is investigating the crime?"
    And the user selects "Greater Manchester Police"
    And the user selects "Continue"
    Then the user is on page "info-whats-the-crime-reference-number"

  @applicant:adult:self
  Scenario: the user enters the crime reference number
    Given the user is on page "info-whats-the-crime-reference-number"
    When the user enters "Test" into textBox "What's the crime reference number?"
    And the user selects "Continue"
    Then the user is on page "applicant-incident-type"

  @applicant:adult:self.deceased
  Scenario: the user enters the crime reference number
    Given the user is on page "info-whats-the-crime-reference-number"
    When the user enters "Test" into textBox "What's the crime reference number?"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_about-the-crime" task status will be marked as "Completed"

  @applicant:adult:self
  Scenario: the user selects the type of incident
    Given the user is on page "applicant-incident-type"
    When the user selects "Physical assault"
    And the user selects "Continue"
    Then the user is on page "applicant-describe-incident"

  @applicant:adult:self
  Scenario: the user selects whether or not they want to describe the incident
    Given the user is on page "applicant-describe-incident"
    When the user selects "Yes"
    And the user selects "Continue"
    Then the user is on page "applicant-incident-description"

  @applicant:adult:self
  Scenario: the user describes the incident
    Given the user is on page "applicant-incident-description"
    When the user enters "Test" into textBox "Tell us about the crime"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_about-the-crime" task status will be marked as "Completed"