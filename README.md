# Cucumber and Cypress Integration for BDD

This repository demonstrates a step-by-step guide to integrate **Cypress** with **Cucumber** for Behavior-Driven Development (BDD). It uses the **OrangeHRM** website as the application under test, showcasing real-world scenarios such as login, dashboard functionalities, and more.

## Features Covered

- **About Page Testing**: `about.feature` and `about.js`
- **Change Password Flow**: `changePassword.feature` and `changePassword.js`
- **Contact Page Testing**: `contact.feature` and `contact.js`
- **Dashboard Functionalities**: `dashboard.feature` and `dashboard.js`
- **Login Validation**: `login.feature` and `login.js`
- **Search Functionalities**: `search.feature` and `search.js`

## Application Under Test

This project is designed to test various features of the **OrangeHRM** website, a popular HR management system. The scenarios demonstrate how to automate and validate key functionalities of this platform using Cypress and Cucumber.

## Key Highlights

- **BDD Implementation**: Using Gherkin syntax in `.feature` files for writing test scenarios.
- **Cucumber Preprocessor Integration**: Enabling Cypress to understand `.feature` files.
- **Automated Screenshots**: Captures screenshots on test failures for debugging.
- **JSON Reports**: Configured for generating detailed JSON test reports.
- **Esbuild Preprocessor**: Ensures efficient transpilation and bundling of files.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadAhsanDS/Cucumber-Cypress-Integration.git
   cd Cucumber-Cypress-Integration
