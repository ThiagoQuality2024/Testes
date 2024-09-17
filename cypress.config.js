const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/Relatorio',
      overwrite: false,
      html: true,
      json: false,
      charts: true,
      timestamp: "mmddyyyy_HHMMss" }
  },
});