const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on("after:screenshot", (details) => {
        console.log("Screenshot taken: ", details.path);
      });

      return config;
    },
    reporter: "mochawesome", 
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome", 
      overwrite: false, 
      html: true, 
      json: true, 
    },
    screenshotsFolder: "cypress/reports/screenshots", 
  },
});
