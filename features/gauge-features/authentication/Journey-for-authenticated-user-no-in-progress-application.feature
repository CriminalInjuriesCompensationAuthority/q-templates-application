@Journey-for-authenticated-user @legacy
Feature: Journey for authenticated user

Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the application is in the state "p-applicant-who-are-you-applying-for"

Scenario: the user is on page p-applicant-who-are-you-applying-for.
Given the application is in the state "p-applicant-who-are-you-applying-for"
And the user answers 'myself' to the question "q-applicant-who-are-you-applying-for"
When the user answers the question
Then the application is in the state "p--/sign-in-or-create"

Scenario: the user is on page p--/sign-in-or-create.
Given the application is in the state "p--/sign-in-or-create"
And the user answers 'accept analytics cookies' to the question "q--/sign-in-or-create"
Then the application is in the state "p--sign-in-or-create"

Scenario: the user is on page p--sign-in-or-create.
Given the application is in the state "p--sign-in-or-create"
And the user answers 'sign in' to the question "q--sign-in-or-create"
Then the application is in the state "p--enter-email"

Scenario: the user is on page p--enter-email.
Given the application is in the state "p--enter-email"
And the user answers 'cica.developer@gmail.com' to the question "q--enter-email"
When the user answers the question
Then the application is in the state "p--enter-password"

Scenario: the user is on page p--enter-password.
Given the application is in the state "p--enter-password"
And the user answers 'b7fa3c3c-cb60-4e51-850a-0d357597b998' to the question "q--enter-password"
When the user answers the question
Then the application is in the state "p--enter-authenticator-app-code"

Scenario: the user is on page p--enter-authenticator-app-code.
Given the application is in the state "p--enter-authenticator-app-code"
When the user advances the application
Then the application is in the state "p--updated-terms-and-conditions"

Scenario: the user is on page p--updated-terms-and-conditions.
Given the application is in the state "p--updated-terms-and-conditions"
When the user advances the application
Then the application is in the state "p--/account/sign-in/success"

Scenario: the user is on page p--/account/sign-in/success.
Given the application is in the state "p--/account/sign-in/success"
When the user advances the application
Scenario: the user begins a new application.
Given the user creates an application for compensation
Then the application is in the state "p--/sign-in-or-create"

Scenario: the user is on page p--/sign-in-or-create.
Given the application is in the state "p--/sign-in-or-create"
And the user answers 'accept analytics cookies' to the question "q--/sign-in-or-create"
Then the application is in the state "p--sign-in-or-create"

Scenario: the user is on page p--sign-in-or-create.
Given the application is in the state "p--sign-in-or-create"
And the user answers 'sign in' to the question "q--sign-in-or-create"
Then the application is in the state "p--enter-email"

Scenario: the user is on page p--enter-email.
Given the application is in the state "p--enter-email"
And the user answers 'cica.developer@gmail.com' to the question "q--enter-email"
When the user answers the question
Then the application is in the state "p--enter-password"

Scenario: the user is on page p--enter-password.
Given the application is in the state "p--enter-password"
And the user answers 'b7fa3c3c-cb60-4e51-850a-0d357597b998' to the question "q--enter-password"
When the user answers the question
Then the application is in the state "p--enter-authenticator-app-code"

Scenario: the user is on page p--enter-authenticator-app-code.
Given the application is in the state "p--enter-authenticator-app-code"
When the user advances the application
Then the application is in the state "p--updated-terms-and-conditions"

Scenario: the user is on page p--updated-terms-and-conditions.
Given the application is in the state "p--updated-terms-and-conditions"
When the user advances the application
Then the application is in the state "p--/sign-in-or-create"

Scenario: the user is on page p--/sign-in-or-create.
Given the application is in the state "p--/sign-in-or-create"
And the user answers 'accept analytics cookies' to the question "q--/sign-in-or-create"
Then the application is in the state "p--sign-in-or-create"

Scenario: the user is on page p--sign-in-or-create.
Given the application is in the state "p--sign-in-or-create"
And the user answers 'sign in' to the question "q--sign-in-or-create"
Then the application is in the state "p--enter-email"

Scenario: the user is on page p--enter-email.
Given the application is in the state "p--enter-email"
And the user answers 'cica.developer@gmail.com' to the question "q--enter-email"
When the user answers the question
Then the application is in the state "p--enter-password"

Scenario: the user is on page p--enter-password.
Given the application is in the state "p--enter-password"
And the user answers 'b7fa3c3c-cb60-4e51-850a-0d357597b998' to the question "q--enter-password"
When the user answers the question
Then the application is in the state "p--enter-authenticator-app-code"

Scenario: the user is on page p--enter-authenticator-app-code.
Given the application is in the state "p--enter-authenticator-app-code"
When the user advances the application
Then the application is in the state "p--updated-terms-and-conditions"

Scenario: the user is on page p--updated-terms-and-conditions.
Given the application is in the state "p--updated-terms-and-conditions"
When the user advances the application
Scenario: the user begins a new application.
Given the user creates an application for compensation
