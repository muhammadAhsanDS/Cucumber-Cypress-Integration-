import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const familyName = "Doe";
const friendName = "Smith";
const phone1 = "1234567890";
const phone2 = "0987654321";
const phone3 = "5678901234";

// Log in and navigate to the "My Info" section
Given("the user navigates to the {string} section", (section) => {
  if (section === "My Info") {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(3000);

    // Login steps
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist').type('Admin', { delay: 30 });
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123', { delay: 50 });
    cy.get('.oxd-button').should('be.visible').click();
    cy.wait(1500);

    // Navigate to "My Info"
    cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click();
    cy.wait(1000);
  }
});

// Open the specified tab
When("the user opens the {string} tab", (tabName) => {
  if (tabName === "Contact Details") {
    cy.get(':nth-child(3) > .orangehrm-tabs-item').should('be.visible').click();
    cy.wait(1000);
  }
});

// Add new contact details
Then("the user adds contact details with family name, friend name, and phone numbers", () => {
  cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').should('be.visible').click();
  cy.wait(1000);

  // Family name
  cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(familyName, { delay: 300 })
    .should('have.value', familyName);

  // Friend name
  cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(friendName, { delay: 300 })
    .should('have.value', friendName);

  // Phone numbers
  cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(phone1, { delay: 300 });
  cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(phone2, { delay: 300 });
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(phone3, { delay: 300 });

  cy.wait(1000);
});

// Submit the contact form
Then("the user submits the contact form", () => {
  cy.get('.oxd-button--secondary').should('be.visible').click();
  cy.wait(3000);
  cy.log("Contact details added and form submitted.");
});

// Delete an existing contact
Then("the user deletes the existing contact", () => {
  cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)')
    .should('be.visible')
    .click();
  cy.wait(1000);

  cy.get('.oxd-button--label-danger').should('be.visible').click();
  cy.wait(1000);

  cy.log("Contact Information Deleted");
});
