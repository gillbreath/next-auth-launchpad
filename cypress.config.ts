import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  env: {
    // use a strong random value:
    // run `$ openssl rand -base64 32` on the command line
    "INSECURE_TESTING_PASSWORD": ""
  }
});
