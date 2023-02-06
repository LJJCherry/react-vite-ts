import { defineConfig } from "cypress";
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    },
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
  e2e: {}
});
