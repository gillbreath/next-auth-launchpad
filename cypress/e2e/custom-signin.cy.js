describe("Navigation", () => {
  const baseUrl = Cypress.config().baseUrl;

  it("should redirect after successful auth", () => {
    cy.visit("/signin");
    cy.get("#input-email-for-insecure-testing-provider").type("test@example.com");
    cy.get("#input-password-for-insecure-testing-provider").type("password");
    cy.get(`button[type="submit"]`)
      .click()
      .then(()=>{

    cy.url().should("eq", baseUrl + "/dashboard");
    })
  });

});
