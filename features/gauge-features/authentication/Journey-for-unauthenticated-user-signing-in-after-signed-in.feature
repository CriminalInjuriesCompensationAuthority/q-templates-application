@Journey-for-unauthenticated-user-signing-in-after-signed-in @legacy
Feature: Journey for unauthenticated user signing in after signed in

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
