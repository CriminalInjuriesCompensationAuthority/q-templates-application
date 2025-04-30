@applicant:adult:self.deceased
Feature: Deceased details flow

  @applicant:adult:self.deceased
  Scenario: the user selects the "About the person who died" task on the task list
    Given the user is on page "p-task-list"
    When the user selects "About the person who died"
    Then the user is on page "context-deceased-details"

        ##########################################################  DECEASED DETAILS HAPPY PATH ##########################################################

  @applicant:adult:self.deceased
  Scenario: the user continues past the "context-deceased-details" context screen.
    Given the user is on page "context-deceased-details"
    When the user selects "Continue"
    Then the user is on page "deceased-name"


  @applicant:adult:self.deceased
  Scenario: the user enters the deceased person's name
    Given the user is on page "deceased-name"
    When the user enters "Mr" into textBox "Title"
    And the user enters "Deceased" into textBox "First name"
    And the user enters "Testcase" into textBox "Last name"
    And the user selects "Continue"
    Then the user is on page "deceased-date-of-birth"


  @applicant:adult:self.deceased
  Scenario: the user enters the deceased person's date of birth
    Given the user is on page "deceased-date-of-birth"
    When the user enters "1" into textBox "Day"
    And the user enters "1" into textBox "Month"
    And the user enters "2000" into textBox "Year"
    And the user selects "Continue"
    Then the user is on page "deceased-date-of-death"


  @applicant:adult:self.deceased
  Scenario: the user enters the deceased person's date of death
    Given the user is on page "deceased-date-of-death"
    When the user enters "1" into textBox "Day"
    And the user enters "1" into textBox "Month"
    And the user enters "2010" into textBox "Year"
    And the user selects "Continue"
    Then the user is on page "deceased-address"

  @applicant:adult:self.deceased
  Scenario: the user enters the deceased person's address
    Given the user is on page "deceased-address"
    When the user enters "Buchanan Wharf" into textBox "Address line 1"
    And the user enters "Glasgow" into textBox "Town"
    And the user enters "G5 8AQ" into the postcode textbox
    And the user selects "Continue"
    Then the user is on page "task-list"
    And the "t_applicant_about-who-died" task status will be marked as "Completed"