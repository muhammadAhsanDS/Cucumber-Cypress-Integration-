Feature: Contact Management

  Scenario: Add a new contact in the My Info section
    Given the user navigates to the "My Info" section
    When the user opens the "Contact Details" tab
    Then the user adds contact details with family name, friend name, and phone numbers
    Then the user submits the contact form

  Scenario: Delete a contact from the My Info section
    Given the user navigates to the "My Info" section
    When the user opens the "Contact Details" tab
    Then the user deletes the existing contact
