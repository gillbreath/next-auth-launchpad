describe("Navigation", () => {
  const baseUrl = Cypress.config().baseUrl;

  it("should redirect after successful auth", () => {
    cy.visit("/login");
    const insecureTestingPassword = Cypress.env("INSECURE_TESTING_PASSWORD");
    cy.get("#input-password-for-insecure-testing-provider").type(insecureTestingPassword);
    cy.get("#submit-for-insecure-testing-provider")
      .click()
      .then(()=>{

    cy.url().should("eq", baseUrl + "/dashboard");
    })
  });

});
