import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

describe("OrangeHRM",()=>{
// it("Login",()=>{
Given("Visit Orange HRM website", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.wait(3000);
});

When("user provide username", () => {
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('Admin', { delay: 30 });
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin');
  cy.log("Username Matched");
});

When("user provide password", () => {
  
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123', { delay: 50 });
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'admin123');
  cy.log("Password Matched");
});

Then("click on login button to login into Orange HRM website", () => {
  cy.get('.oxd-button').should('be.visible');
  cy.get('.oxd-button').click();
  cy.wait(1500);
});


// })
})