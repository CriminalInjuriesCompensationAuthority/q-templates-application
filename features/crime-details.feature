Feature: Crime details flow

  @applicant:adult:self @taskList
  Scenario: the user selects the "About the crime" task
    Given the application is in the state "p-task-list"
    And the status of "t_applicant_about-the-crime__completion-status" is "incomplete"
    And the status of "t_applicant_about-the-crime__applicability-status" is "applicable"
    When the user initialises the "#t_applicant_about-the-crime" state
    Then the application is in the state "p--before-you-continue"

  @applicant:adult:self @context @taskList @linear
  Scenario: the user is on the crime details context page
    Given the application is in the state "p--before-you-continue"
    When the user advances the application
    Then the application is in the state "p-applicant-did-the-crime-happen-once-or-over-time"

  @applicant:adult:self @closedQuestion @taskList @linear
  Scenario: the user selects whether the crime happened once or over a period of time
    Given the application is in the state "p-applicant-did-the-crime-happen-once-or-over-time"
    When the user answers 'over-a-period-of-time' to the question "q-applicant-did-the-crime-happen-once-or-over-time"
    And the user answers the question
    Then the application is in the state "p-applicant-when-did-the-crime-start"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters when the crime started
    Given the application is in the state "p-applicant-when-did-the-crime-start"
    When the user answers 'June 2015' to the question "q-applicant-when-did-the-crime-start"
    And the user answers the question
    Then the application is in the state "p-applicant-when-did-the-crime-stop"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters when the crime stopped
    Given the application is in the state "p-applicant-when-did-the-crime-stop"
    When the user answers 'September 2016' to the question "q-applicant-when-did-the-crime-stop"
    And the user answers the question
    Then the application is in the state "p-applicant-select-reasons-for-the-delay-in-making-your-application"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters where there has been a delay in them applying
    Given the application is in the state "p-applicant-select-reasons-for-the-delay-in-making-your-application"
    When the user answers 'Test' to the question "q-applicant-explain-reason-for-delay-application"
    And the user answers the question
    Then the application is in the state "p-applicant-where-did-the-crime-happen"

  @applicant:adult:self @closedQuestion @taskList @linear
  Scenario: the user enters where the crime happened
    Given the application is in the state "p-applicant-where-did-the-crime-happen"
    When the user answers 'scotland' to the question "q-applicant-where-did-the-crime-happen"
    And the user answers the question
    Then the application is in the state "p-applicant-where-in-scotland-did-it-happen"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters where in scotland the crime happened
    Given the application is in the state "p-applicant-where-in-scotland-did-it-happen"
    When the user answers 'Test' to the question "q-applicant-scottish-town-or-city"
    And the user answers 'Test' to the question "q-applicant-scottish-location"
    And the user answers the question
    Then the application is in the state "p--when-was-the-crime-reported-to-police"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters when the crime was reported
    Given the application is in the state "p--when-was-the-crime-reported-to-police"
    When the user answers '01 January 2024' to the question "q-when-was-the-crime-reported-to-police"
    And the user answers the question
    Then the application is in the state "p--which-police-force-is-investigating-the-crime"

  @applicant:adult:self @closedQuestion @taskList @linear
  Scenario: the user enters which police force is investigating the crime
    Given the application is in the state "p--which-police-force-is-investigating-the-crime"
    When the user answers '10000001' to the question "q-police-force-id"
    And the user answers the question
    Then the application is in the state "p--whats-the-crime-reference-number"

  @applicant:adult:self @openQuestion @taskList @linear
  Scenario: the user enters the crime reference number
    Given the application is in the state "p--whats-the-crime-reference-number"
    When the user answers 'TEST' to the question "q--whats-the-crime-reference-number"
    And the user answers the question
    Then the application is in the state "p-applicant-incident-type"

  @applicant:adult:self @reveal @openQuestion @taskList @linear
  Scenario: the user selects the type of incident
    Given the application is in the state "p-applicant-incident-type"
    When the user answers 'ARSN' to the question "q-applicant-incident-type"
    And the user answers 'AORV' to the question "q-applicant-incident-type"
    And the user answers the question
    Then the application is in the state "p-applicant-describe-incident"

  @applicant:adult:self @closedQuestion @taskList @linear
  Scenario: the user selects whether or not they want to describe the incident
    Given the application is in the state "p-applicant-describe-incident"
    When the user answers 'true' to the question "q-applicant-describe-incident"
    And the user answers the question
    Then the application is in the state "p-applicant-incident-description"

  @applicant:adult:self @openQuestion @taskList
  Scenario: the user describes the incident
    Given the application is in the state "p-applicant-incident-description"
    When the user answers 'TEST' to the question "q-applicant-incident-description"
    And the user answers the question
    Then the application is in the state "p-task-list"
    And the status of "t_applicant_about-the-crime__completion-status" is "completed"