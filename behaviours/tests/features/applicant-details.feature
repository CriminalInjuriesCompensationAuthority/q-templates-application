Feature: Applicant details flow

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects the "Your details" task
    Given the user is on page "p-task-list"
    When the user selects "Your details"
    Then the user is on page "context-applicant-details"

        ##########################################################  APPLICANT DETAILS HAPPY PATH ##########################################################

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user is on the applicant details context page
  Given the user is on page "context-applicant-details"
  When the user selects "Continue"
  Then the user is on page "applicant-confirmation-method"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user confirms how they'd like to be contacted
  Given the user is on page "applicant-confirmation-method"
  When the user selects "Email"
  And the user enters "foo@bar.com" into textBox "Email address"
  And the user selects "Continue"
  Then the user is on page "applicant-enter-your-name"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters the applicant's name
  Given the user is on page "applicant-enter-your-name"
  When the user enters "Miss" into textBox "Title"
  And the user enters "Test" into textBox "First name"
  And the user enters "Testcase" into textBox "Last name"
  And the user selects "Continue"
  Then the user is on page "applicant-have-you-been-known-by-any-other-names"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user selects whether the applicant have ever been known as another name
  Given the user is on page "applicant-have-you-been-known-by-any-other-names"
  When the user selects "No"
  And the user selects "Continue"
  Then the user is on page "applicant-enter-your-date-of-birth"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters the name(s) the applicant has previously been known as
  Given the user is on page "applicant-enter-your-date-of-birth"
  When the user enters "31" into textBox "Day"
  And the user enters "3" into textBox "Month"
  And the user enters "1990" into textBox "Year"
  And the user selects "Continue"
  Then the user is on page "applicant-enter-your-address"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters the applicant's address
  Given the user is on page "applicant-enter-your-address"
  When the user enters "10 Bank St" into textBox "Address line 1"
  And the user enters "Glasgow" into textBox "Town"
  And the user enters "MA1" into the postcode textbox
  And the user selects "Continue"
  Then the user is on page "applicant-enter-your-telephone-number"

  @applicant:adult:self @applicant:adult:self.deceased
  Scenario: the user enters the applicant's phone number
  Given the user is on page "applicant-enter-your-telephone-number"
  When the user enters "07799000000" into textBox "Enter your telephone number (optional)"
  And the user selects "Continue"
  Then the user is on page "task-list"
  And the "t_applicant_personal-details" task status will be marked as "Completed"