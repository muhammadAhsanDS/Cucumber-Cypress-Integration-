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

When("the user opens the user dropdown menu", () => {
    cy.get('.oxd-userdropdown-tab').click();
    cy.wait(1000);
});

Then("the dropdown menu displays 4 items", () => {
    cy.get('.oxd-dropdown-menu').find('li').then(($li) => {
        cy.wait(1000);
        expect($li).to.have.length(4);
    });
});

Then("the first item is labeled {string}", (menuItemText) => {
    cy.get(':nth-child(1) > .oxd-userdropdown-link').should('have.text', menuItemText);
    cy.log("Menu Loaded");
    cy.wait(1000);
});

When("the user clicks on {string}", (menuItemText) => {
    cy.get(':nth-child(1) > .oxd-userdropdown-link')
        .should('have.text', menuItemText)
        .click();
    cy.wait(1000);
});

Then("the About dialog is displayed", () => {
    cy.get('.oxd-dialog-container-default--inner > .oxd-sheet').should('be.visible');
    cy.log("About Page Loaded");
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'About');
    cy.wait(1000);
});

Then("the About dialog contains company information", () => {
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-text').should('have.text', 'OrangeHRM');
    cy.get('.oxd-grid-2 > :nth-child(4) > .oxd-text').should('have.text', 'OrangeHRM OS 5.7');
    cy.log("Company Information Verified");
});
