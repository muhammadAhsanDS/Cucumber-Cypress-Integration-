import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the OrangeHRM dashboard is loaded", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(3000);

    // Login Process
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('exist')
        .type('Admin', { delay: 30 });
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123', { delay: 50 });
    cy.get('.oxd-button').click();
    cy.wait(1500);
});

When("the user types in the search box", () => {
    cy.get('.oxd-main-menu-search').should('be.visible');
    cy.log("Search Box Loaded");
    cy.wait(1000);
    cy.get('.oxd-input').type('My Info{Enter}');
    cy.wait(1000);
});

Then("the search box displays the entered text", () => {
    cy.get('.oxd-input').should('have.value', 'My Info');
    cy.log("Search Query Verified");
});

Then("the search results are visible", () => {
    cy.get('.oxd-main-menu-item').should('be.visible');
    cy.log("Search Results Visible");
    cy.wait(1000);
});

Then("the search result labeled is displayed", () => {
    cy.get('.oxd-main-menu-item > .oxd-text').should('have.text', 'My Info');
    cy.log("Search Result Matched");
    cy.wait(1000);
});

When("the user clicks on the search result", () => {
    cy.get('.oxd-main-menu-item').click();
    cy.wait(1000);
});

Then("the corresponding section is loaded", () => {
    cy.get('.orangehrm-edit-employee-name > .oxd-text').should('be.exist');
    cy.log("My Info Section Loaded");
});
