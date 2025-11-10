import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
  env: {
    // set the same value here as in .env
    // use a strong random value:
    // run `$ openssl rand -base64 32` (or similar) on the command line
    "INSECURE_TESTING_PASSWORD": ""
  }
});
