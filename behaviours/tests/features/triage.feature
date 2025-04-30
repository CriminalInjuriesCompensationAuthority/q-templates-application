Feature: Triage flow

  Scenario Outline: The user goes to the Claim criminal injuries compensation site
    Given the user is a "<user>" user
    When the user goes to "claim criminal injuries compensation"
    And the user selects "Accept all cookies"
    Then the user is on page "start-or-resume"

  @applicant:adult:self
    Examples:
      | user |
      | applicant:adult:self |

  @applicant:adult:self.deceased
    Examples:
      | user |
      | applicant:adult:self.deceased |

  @applicant:child:proxy
    Examples:
      | user |
      | applicant:child:proxy |

  @applicant:child:proxy.deceased
    Examples:
      | user |
      | applicant:child:proxy |

  @proxyCascadeBug
    Examples:
      | user |
      | proxyCascadeBug |

  @applicant:adult:self @applicant:adult:self.deceased @proxyCascadeBug
  Scenario: the user selects whether to start a new application or resume an existing one
  Given the user is on page "start-or-resume"
  When the user selects "Start a new application"
  And the user selects "Continue"
  Then the user is on page "applicant-who-are-you-applying-for"

          ##########################################################  TRIAGE HAPPY PATH ##########################################################

  @applicant:adult:self @applicant:adult:self.deceased @proxyCascadeBug
  Scenario: the user selects who I am applying for
  Given the user is on page "applicant-who-are-you-applying-for"
  When the user selects "Myself"
  And the user selects "Continue"
  Then the user is on page "applicant-are-you-18-or-over"

  @applicant:adult:self @applicant:adult:self.deceased @proxyCascadeBug
  Scenario: the user selects whether or not I'm over 18
  Given the user is on page "applicant-are-you-18-or-over"
  When the user selects "Yes"
  And the user selects "Continue"
  Then the user is on page "was-the-crime-reported-to-police"

  @applicant:adult:self @applicant:adult:self.deceased @proxyCascadeBug
  Scenario: the user selects whether or not the crime was reported to police
  Given the user is on page "was-the-crime-reported-to-police"
  When the user selects "Yes"
  And the user selects "Continue"
  Then the user is on page "context-crime-ref-no"

  @applicant:adult:self @applicant:adult:self.deceased @proxyCascadeBug
  Scenario: the user confirms they understand they'll be asked for a crime reference
  Given the user is on page "context-crime-ref-no"
  When the user selects "Continue"
  Then the user is on page "applicant-fatal-claim"

  Scenario Outline: the user selects whether they are applying for personal injury or a bereavement
    Given the user is on page "applicant-fatal-claim"
    When the user selects "<answer>"
    And the user selects "Continue"
    Then the user is on page "<page>"

    @applicant:adult:self @proxyCascadeBug
    Examples:
      | answer | page |
      | I am applying because I was the victim of a violent crime | applicant-applied-before-for-this-crime |

    @applicant:adult:self.deceased
    Examples:
      | answer | page |
      | I am applying because someone died due to a violent crime | applicant-claim-type |

  @applicant:adult:self @proxyCascadeBug
  Scenario: the user confirms they have not applied for this crime before
    Given the user is on page "applicant-applied-before-for-this-crime"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "applicant-someone-else-applied-before-for-this-crime"

  @applicant:adult:self @proxyCascadeBug
  Scenario: the user confirms nobody else has applied for this crime
    Given the user is on page "applicant-someone-else-applied-before-for-this-crime"
    When the user selects "No"
    And the user selects "Continue"
    Then the user is on page "p-task-list"
    And the "t-about-application" task status will be marked as "Completed"
    And the "t_applicant_personal-details" task status will be marked as "Incomplete"

  @applicant:adult:self.deceased
  Scenario: the user selects whether they are make a full claim or a funeral expenses claim
    Given the user is on page "applicant-claim-type"
    When the user selects "I want to make a full claim"
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t-about-application" task status will be marked as "Completed"
    And the "t_applicant_personal-details" task status will be marked as "Incomplete"