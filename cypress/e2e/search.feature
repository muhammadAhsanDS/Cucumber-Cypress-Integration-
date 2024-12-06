Feature: Search Functionality

  Scenario: Search for "My Info" in the main menu
    Given the OrangeHRM dashboard is loaded
    When the user types in the search box
    Then the search box displays the entered text
    Then the search results are visible
    Then the search result labeled is displayed
    When the user clicks on the search result
    Then the corresponding section is loaded
