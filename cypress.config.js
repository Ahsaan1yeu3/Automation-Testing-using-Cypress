const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    "reporter":"mochawesome",
    "reporterOptions":{
        "charts":true,
        "overwrite":false,
        "html":false,
        "json":true,
        "reportDir":"cypress/reports"
    },
    defaultCommandTimeout:3000,
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      // implement node event listeners here
    },
  },
});
