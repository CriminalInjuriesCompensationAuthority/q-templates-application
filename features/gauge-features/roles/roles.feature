Feature: Testing the logic behind roles and that transitioning into the roles is possible
  @roles @proxy
  Scenario: the user activates the proxy role
#    ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else']
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    When the user answers the question
    Then the "proxy" role should evaluate to be "true"

  @roles @myself
  Scenario: the user activates the myself role
#    ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'myself']
    Given the user creates an application for compensation
    And the user answers "myself" to the question "q-applicant-who-are-you-applying-for"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | myself |
      | capable |

  @roles @child
  Scenario: the user activates the child role
#    ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', false]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-are-you-18-or-over"
    When the user answers the question
    Then the "child" role should evaluate to be "true"

  @roles @adult
  Scenario: the user activates the adult role
#    ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    When the user answers the question
    Then the "adult" role should evaluate to be "true"

  @roles @mainapplicant
  Scenario: the user activates the mainapplicant role 1
#    ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "child" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2025-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    Then the "childUnder12" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-mainapplicant-parent"
    When the user answers the question
    Then the "mainapplicant" role should evaluate to be "true"

  @roles @mainapplicant
  Scenario: the user activates the mainapplicant role 2
#    ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2000-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    And the user answers the question
    And the "incapable" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q--has-legal-authority"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | mainapplicant |
      | authority |

  @roles @rep
  Scenario: the user activates the rep role 1
#    ['and',
#      ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
#      ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', false],
#      ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
#      ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
#    ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "child" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2025-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    Then the "childUnder12" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-mainapplicant-parent"
    And the user answers the question
    And the user answers "false" to the question "q--has-legal-authority"
    When the user answers the question
    Then the "rep" role should evaluate to be "true"

  @roles @rep
  Scenario: the user activates the rep role 2
#    ['and',
#        ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
#        ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
#        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
#        ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', true]
#    ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2000-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    And the user answers the question
    And the "incapable" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q--has-legal-authority"
    And the user answers the question
    And the user answers "true" to the question "q--represents-legal-authority"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | authority |
      | rep |

  @roles @rep
  Scenario: the user activates the rep role 3
#    ['and',
#      ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
#      ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
#      ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
#      ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
#    ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2000-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    And the user answers the question
    And the "incapable" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q--has-legal-authority"
    And the user answers the question
    And the user answers "false" to the question "q--represents-legal-authority"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | noauthority |
      | rep |

  @roles @rep
  Scenario: the user activates the rep role 4
#    ['and',
#      ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
#      ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
#      ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', true]
#    ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2000-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "true" to the question "q-applicant-capable"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | capable |
      | rep |

  @roles @noauthority
  Scenario: the user activates the noauthority role
#     ['and',
#     ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
#     ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
#     ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2000-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    And the user answers the question
    And the "incapable" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q--has-legal-authority"
    And the user answers the question
    And the user answers "false" to the question "q--represents-legal-authority"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | noauthority |
      | rep |

  @roles @incapable
  Scenario: the user activates the incapable role
#    ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', false]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "1980-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    When the user answers the question
    Then the "incapable" role should evaluate to be "true"

  @roles @capable
  Scenario: the user activates the capable role 1
#    ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', true]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "1980-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "true" to the question "q-applicant-capable"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | capable |
      | rep |

  @roles @capable
  Scenario: the user activates the capable role 2
#    ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'myself']
    Given the user creates an application for compensation
    And the user answers "myself" to the question "q-applicant-who-are-you-applying-for"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | capable |
      | myself |

  @roles @authority
  Scenario: the user activates the authority role 1
#    ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "1980-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    And the user answers the question
    And the "incapable" role should evaluate to be "true"
    And the user answers "10 bank st" to the question "q-applicant-building-and-street"
    And the user answers "pudding lane" to the question "q-applicant-building-and-street-2"
    And the user answers "shepherds bush" to the question "q-applicant-building-and-street-3"
    And the user answers "glasgow" to the question "q-applicant-town-or-city"
    And the user answers "ma1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q--has-legal-authority"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | mainapplicant |
      | authority |

  @roles @authority
  Scenario: the user activates the authority role 2
#    ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', true]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "1980-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-capable"
    And the user answers the question
    And the "incapable" role should evaluate to be "true"
    And the user answers "10 bank st" to the question "q-applicant-building-and-street"
    And the user answers "pudding lane" to the question "q-applicant-building-and-street-2"
    And the user answers "shepherds bush" to the question "q-applicant-building-and-street-3"
    And the user answers "glasgow" to the question "q-applicant-town-or-city"
    And the user answers "ma1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q--has-legal-authority"
    And the user answers the question
    And the user answers "true" to the question "q--represents-legal-authority"
    When the user answers the question
    Then the following roles should all evaluate to be "true"
      | rep |
      | authority |

  @roles @deceased
  Scenario: the user activates the deceased role
#    ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
    Given the user creates an application for compensation
    And the user answers "myself" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    Then the following roles should all evaluate to be "true"
      | myself |
      | capable |
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-fatal-claim"
    When the user answers the question
    Then the "deceased" role should evaluate to be "true"

  @roles @nonDeceased
  Scenario: the user activates the nonDeceased role
#    ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', false],
    Given the user creates an application for compensation
    And the user answers "myself" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    Then the following roles should all evaluate to be "true"
      | myself |
      | capable |
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    When the user answers the question
    Then the "nonDeceased" role should evaluate to be "true"

  @roles @childUnder12
  Scenario: the user activates the childUnder12 role
#  [
#    'and',
#    [
#      '==',
#      '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
#      false
#    ],
#    [
#      'dateCompare',
#      '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
#      '<', // is less than ...
#      '-12', // 12 ...
#      'years' // years (before, due to the negative (-12) ...
#       // today's date (no second date given. defaults to today's date).
#    ]
#  ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "child" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2020-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    When the user answers the question
    Then the "childUnder12" role should evaluate to be "true"

  @roles @childOver12
  Scenario: the user activates the childOver12 role
#  [
#    'and',
#    [
#      '==',
#      '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
#      false
#    ],
#    [
#      'dateCompare',
#      '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
#      '>=', // is greater than or equeal too ...
#      '-12', // 12 ...
#      'years' // years (before, due to the negative (-12) ...
#      // today's date (no second date given. defaults to today's date).
#    ]
#  ]
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "child" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2013-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    When the user answers the question
    Then the "childOver12" role should evaluate to be "true"

  @roles @noContactMethod
  Scenario: the user activates the noContactMethod role 1
#    ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'none'],
    Given the user creates an application for compensation
    And the user answers "myself" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    Then the following roles should all evaluate to be "true"
      | myself |
      | capable |
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "none" to the question "q-applicant-confirmation-method"
    When the user answers the question
    Then the "noContactMethod" role should evaluate to be "true"

  @roles @noContactMethod
  Scenario: the user activates the noContactMethod role 2
#    ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'none']
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "child" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "Miss" to the question "q-applicant-title"
    And the user answers "Test" to the question "q-applicant-first-name"
    And the user answers "Testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "2025-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    Then the "childUnder12" role should evaluate to be "true"
    And the user answers "10 Bank St" to the question "q-applicant-building-and-street"
    And the user answers "Glasgow" to the question "q-applicant-town-or-city"
    And the user answers "MA1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-mainapplicant-parent"
    And the user answers the question
    And the "mainapplicant" role should evaluate to be "true"
    And the user advances the application
    And the user answers "none" to the question "q-mainapplicant-confirmation-method"
    When the user answers the question
    Then the "noContactMethod" role should evaluate to be "true"

  @roles @noContactMethod
  Scenario: the user activates the noContactMethod role 3
#    ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'none']
    Given the user creates an application for compensation
    And the user answers "someone-else" to the question "q-applicant-who-are-you-applying-for"
    And the user answers the question
    And the "proxy" role should evaluate to be "true"
    And the user answers "true" to the question "q-applicant-are-you-18-or-over"
    And the user answers the question
    And the "adult" role should evaluate to be "true"
    And the user answers "true" to the question "q--was-the-crime-reported-to-police"
    And the user answers the question
    And the user advances the application
    And the user answers "false" to the question "q-applicant-fatal-claim"
    And the user answers the question
    And the "nonDeceased" role should evaluate to be "true"
    And the user answers "false" to the question "q-applicant-applied-before-for-this-crime"
    And the user answers the question
    And the user answers "dont-know" to the question "q-proxy-someone-else-applied-before-for-this-crime"
    And the user answers the question
    And the user advances the application
    And the user answers "miss" to the question "title"
    And the user answers "test" to the question "q-applicant-first-name"
    And the user answers "testcase" to the question "q-applicant-last-name"
    And the user answers the question
    And the user answers "false" to the question "q-applicant-have-you-been-known-by-any-other-names"
    And the user answers the question
    And the user answers "1980-01-01T00:00:00.000Z" to the question "q-applicant-enter-your-date-of-birth"
    And the user answers the question
    And the user answers "true" to the question "q-applicant-capable"
    And the user answers the question
    And the following roles should all evaluate to be "true"
      | rep |
      | capable |
    And the user answers "10 bank st" to the question "q-applicant-building-and-street"
    And the user answers "glasgow" to the question "q-applicant-town-or-city"
    And the user answers "ma1" to the question "q-applicant-postcode"
    And the user answers the question
    And the user answers "01234567890" to the question "q-applicant-enter-your-telephone-number"
    And the user answers the question
    And the user advances the application
    And the user answers "true" to the question "q-applicant-british-citizen"
    And the user answers the question
    And the user advances the application
    And the user answers "SOLS" to the question "q-rep-type"
    And the user answers the question
    And the user answers "none" to the question "q-rep-confirmation-method"
    When the user answers the question
    Then the "noContactMethod" role should evaluate to be "true"









  





