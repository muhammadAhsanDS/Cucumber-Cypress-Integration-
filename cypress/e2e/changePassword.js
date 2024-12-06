import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let currentPassword = "admin123"; 
let newPassword = "NewPassword456";
let newPassword1 = "NewPassword456";

// Step: Load the OrangeHRM dashboard
Given("the OrangeHRM dashboard is loaded", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(3000);

    // Log in
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('exist')
        .type('Admin', { delay: 30 });
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type(currentPassword, { delay: 50 });
    cy.get('.oxd-button').click();
    cy.wait(1500);

    cy.get('.oxd-userdropdown-tab').click()
    cy.wait(1500);

    cy.contains('Change Password').click()
});

// Step: Verify password fields are visible
Then("the password fields are visible", () => {
  cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label')
    .should('have.text', 'Current Password');
  cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .should('exist');
});

// Step: Enter current password
When("the user enters their current password", () => {
  cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(currentPassword, { delay: 300 })
    .should('have.value', currentPassword);
});

// Step: Enter new password
Then("the user enters a new password", () => {
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(newPassword, { delay: 300 });
});

// Step: Confirm new password
Then("the user confirms the new password", () => {
  cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(newPassword1, { delay: 300 });
});

// Step: Verify the submit button becomes enabled
Then("the submit button becomes enabled", () => {
  cy.get('.oxd-button--secondary').should('be.enabled');
  cy.wait(1000);
});

// Step: Log confirmation message
Then("the user logs the confirmation message", () => {
  cy.log("Password Entered and button enabled");
});

// Step: Click cancel button
When("the user clicks the cancel button", () => {
  cy.get('.oxd-button--ghost').click();
});
