Feature: About Section Verification

  Scenario: Verify and load the About page
    Given the OrangeHRM dashboard is loaded
    When the user opens the user dropdown menu
    Then the dropdown menu displays 4 items
    Then the first item is labeled "About"
    When the user clicks on "About"
    Then the About dialog is displayed
    Then the About dialog contains company information
