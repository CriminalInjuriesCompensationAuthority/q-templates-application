Feature: Applicant details flow

  @mainApplicant:adult.incapable @taskList
  Scenario: the user selects the "Your details" task
    Given the application is in the state "p-task-list"
    And the status of "t_applicant_personal-details__completion-status" is "incomplete"
    And the status of "t_applicant_personal-details__applicability-status" is "applicable"
    When the user initialises the "#t_applicant_personal-details" state
    Then the application is in the state "p--context-applicant-details"

  @mainApplicant:adult.incapable @context @taskList @linear
  Scenario: the user is on the applicant details context page
  Given the application is in the state "p--context-applicant-details"
  When the user advances the application
  Then the application is in the state "p-applicant-enter-your-name"

    @mainApplicant:adult.incapable @openQuestion @taskList @linear
  Scenario: the user enters the applicant's name
    Given the application is in the state "p-applicant-enter-your-name"
    When the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    Then the application is in the state "p-applicant-have-you-been-known-by-any-other-names"

    @mainApplicant:adult.incapable @closedQuestion @taskList @linear
  Scenario: the user selects whether the applicant have ever been known as another name
    Given the application is in the state "p-applicant-have-you-been-known-by-any-other-names"
    When the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    Then the application is in the state "p-applicant-enter-your-date-of-birth"

    @mainApplicant:adult.incapable @openQuestion @taskList @linear
  Scenario: the user enters their date of birth
    Given the application is in the state "p-applicant-enter-your-date-of-birth"
    When the user answers "1970-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    Then the application is in the state "p-applicant-can-handle-affairs"

    @mainApplicant:adult.incapable @openQuestion @taskList @linear
  Scenario: the user enters whether or not the victim can handle their own affairs
    Given the application is in the state "p-applicant-can-handle-affairs"
    When the user answers "false" to the question "q-applicant-can-handle-affairs"
    And the user answers the question
    Then the application is in the state "p-applicant-enter-your-address"

    @mainApplicant:adult.incapable @openQuestion @taskList
  Scenario: the user enters the applicant's address
    Given the application is in the state "p-applicant-enter-your-address"
    When the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    When the user answers "Glasgow" to the question "q-applicant-town-or-city"
    When the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    Then the application is in the state "p-task-list"
    And the status of "t_applicant_personal-details__completion-status" is "completed"

    @mainApplicant:adult.incapable @openQuestion @linear
  Scenario: the user enters the applicant's address
    Given the application is in the state "p-applicant-enter-your-address"
    When the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    When the user answers "Glasgow" to the question "q-applicant-town-or-city"
    When the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    Then the application is in the state "p--context-residency-and-nationality"