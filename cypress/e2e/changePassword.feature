Feature: Password Management

  Scenario: User changes password successfully
    Given the OrangeHRM dashboard is loaded
    Then the password fields are visible
    When the user enters their current password
    Then the user enters a new password
    Then the user confirms the new password
    Then the submit button becomes enabled
    Then the user logs the confirmation message
    When the user clicks the cancel button
