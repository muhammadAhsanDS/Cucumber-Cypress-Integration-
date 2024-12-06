Feature: Orange HRM Login

  Scenario: User should be able to login
    Given Visit Orange HRM website
    When user provide username
    When user provide password
    Then click on login button to login into Orange HRM website
