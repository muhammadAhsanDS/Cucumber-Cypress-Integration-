import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";


Given("User will do login",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(3000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin', { delay: 30 });
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin');
    cy.log("Username Matched");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123', { delay: 50 });
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'admin123');
    cy.log("Password Matched");
    cy.get('.oxd-button').should('be.visible');
    cy.get('.oxd-button').click();
    cy.wait(1500);
  
  })
  When("he check dashboard is correctly loaded and check everything",()=>{
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    cy.wait(1000)
    cy.log("Successfully logged in and loaded Dashboard")
    cy.get(':nth-child(1) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Time at Work')
    cy.log("Time at Work (Child1 )Loaded")
    cy.wait(1000)
    cy.get(':nth-child(2) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','My Actions')
    cy.log("My Actions (Child2 )Loaded")
    cy.wait(1000)
    cy.get(':nth-child(3) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Quick Launch')
    cy.log("Quick Launch (Child3 )Loaded")
    cy.wait(1000)
    cy.get(':nth-child(4) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Buzz Latest Posts')
    cy.log("Buzz Latest Posts (Child4 )Loaded")
    cy.wait(1000)
    cy.get(':nth-child(5) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Employees on Leave Today')
    cy.log("Employees on Leave Today (Child5 )Loaded")
    cy.wait(1000)
    cy.get(':nth-child(6) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(6) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Employee Distribution by Sub Unit')
    cy.log("Employee Distribution by Sub Unit (Child6 )Loaded")
    cy.wait(1000)
    cy.get(':nth-child(7) > .oxd-sheet').should('be.visible')
    cy.get(':nth-child(7) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Employee Distribution by Location')
    cy.log("Employee Distribution by Location (Child7 )Loaded")
    cy.wait(1000)
  })
  Then("Logout from website",()=>{
    cy.get('.oxd-userdropdown-tab').click()
    cy.wait(1000)
    cy.get('.oxd-dropdown-menu').find('li').then(($li)=>{
    cy.wait(1000)
    expect($li).to.have.length(4)
    })
    cy.wait(1000)
    cy.get('.oxd-dropdown-menu').should('be.visible')
    cy.wait(1000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').should('have.text','Logout')
    cy.log("Menu Loaded")
    cy.wait(1000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(1000)
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000)
    cy.log("Successfully Logged Out") 
  })