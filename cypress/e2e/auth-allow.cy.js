describe("Navigation", () => {
  const baseUrl = Cypress.config().baseUrl;

  beforeEach(()=>{
    // use a strong random value:
    // `$ openssl rand -base64 32` on the command line
    // set in cypress.config.ts and .env
    const insecureTestingPassword = Cypress.env("INSECURE_TESTING_PASSWORD");
    cy.visit("/auth/signin");
    cy.get("#input-password-for-insecure-testing-provider").type(insecureTestingPassword);
    cy.get("#submitButton").click();
  });

  it("should have a cookie after successful auth", () => {
    cy.getCookie("authjs.callback-url").should("have.property", "value", "http%3A%2F%2Flocalhost%3A3000");
  });

  it("should return 200 from protected apis after successful auth", () => {
    cy.request({
      method: "GET",
      url: "/api/protected",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should not redirect protected routes after successful auth", () => {
    cy.visit("/dashboard");
    cy.url().should("eq", baseUrl + "/dashboard");
  });

});
