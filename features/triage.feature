Feature: Triage flow

  @applicant:adult:self @taskList @linear
  Scenario: the user begins a new application
    Given the user creates an application for compensation
    Then the application is in the state "p-applicant-who-are-you-applying-for"

  @applicant:adult:self @closedQuestion @taskList @linear
  Scenario Outline: the user selects who I am applying for
    Given the application is in the state "p-applicant-who-are-you-applying-for"
    When the user answers "<answer>" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    Then the application is in the state "p-applicant-are-you-18-or-over"

  @applicant:adult:self @closedQuestion @taskList @linear
    Examples:
      | answer |
      | myself |

  @mainApplicant:adult.incapable @closedQuestion @taskList @linear
    Examples:
      | answer |
      | someone-else |

  @applicant:adult:self @mainApplicant:adult.incapable @closedQuestion @taskList @linear
  Scenario: the user selects whether or not I'm over 18
    Given the application is in the state "p-applicant-are-you-18-or-over"
    When the user answers 'true' to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    Then the application is in the state "p--was-the-crime-reported-to-police"

  @applicant:adult:self @mainApplicant:adult.incapable @closedQuestion @taskList @linear
  Scenario: the user selects whether or not the crime was reported to police
    Given the application is in the state "p--was-the-crime-reported-to-police"
    When the user answers 'true' to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    Then the application is in the state "p--context-crime-ref-no"

  @applicant:adult:self @mainApplicant:adult.incapable @context @taskList @linear
  Scenario: the user confirms they understand they'll be asked for a crime reference
    Given the application is in the state "p--context-crime-ref-no"
    When the user advances the application
    Then the application is in the state "p-applicant-fatal-claim"

  @applicant:adult:self @mainApplicant:adult.incapable @closedQuestion @taskList @linear
  Scenario: the user selects whether they are applying for personal injury or a bereavement
    Given the application is in the state "p-applicant-fatal-claim"
    When the user answers 'false' to the question "q-applicant-fatal-claim"
    And the user answers the question
    Then the application is in the state "p-applicant-applied-before-for-this-crime"

  @applicant:adult:self @mainApplicant:adult.incapable @closedQuestion @taskList @linear
  Scenario Outline: the user confirms they have not applied for this crime before
    Given the application is in the state "p-applicant-applied-before-for-this-crime"
    When the user answers 'false' to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    Then the application is in the state "<section>"

  @applicant:adult:self @closedQuestion @taskList @linear
    Examples:
      | section |
      | p-applicant-someone-else-applied-before-for-this-crime |

  @mainApplicant:adult.incapable @closedQuestion @taskList @linear
    Examples:
      | section |
      | p-proxy-someone-else-applied-before-for-this-crime |

  @applicant:adult:self @closedQuestion @taskList
  Scenario: the user confirms nobody else has applied for this crime
    Given the application is in the state "p-applicant-someone-else-applied-before-for-this-crime"
    When the user answers 'false' to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    Then the application is in the state "p-task-list"
    And the status of "t-about-application__completion-status" is "completed"
    And the status of "t_applicant_personal-details__applicability-status" is "applicable"

  @applicant:adult:self @closedQuestion @linear
  Scenario: the user confirms nobody else has applied for this crime
    Given the application is in the state "p-applicant-someone-else-applied-before-for-this-crime"
    When the user answers 'false' to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    Then the application is in the state "p--context-applicant-details"

  @mainApplicant:adult.incapable @closedQuestion @taskList
  Scenario: the user confirms nobody else has applied for this crime
    Given the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"
    When the user answers 'false' to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    Then the application is in the state "p-task-list"
    And the status of "t-about-application__completion-status" is "completed"
    And the status of "t_applicant_personal-details__applicability-status" is "applicable"

  @mainApplicant:adult.incapable @closedQuestion @linear
  Scenario: the user confirms nobody else has applied for this crime
    Given the application is in the state "p-proxy-someone-else-applied-before-for-this-crime"
    When the user answers 'false' to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    Then the application is in the state "p--context-applicant-details"