describe("Navigation", () => {
  const baseUrl = Cypress.config().baseUrl;

  it("should redirect from protected routes", () => {
    cy.visit("/dashboard");
    cy.url().should(
      "eq",
      baseUrl + "/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fdashboard",
    );
  });

  it("should not redirect unprotected routes", () => {
    cy.visit("/content/about");
    cy.url().should("eq", baseUrl + "/content/about");
  });

  it("should return 401 from protected apis", () => {
    cy.request({
      method: "GET",
      url: "/api/protected",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it("should redirect after logout", () => {
    cy.visit("/auth/signout");
    cy.get("#submitButton")
      .click()
      .then(() => {
        cy.url().should("eq", baseUrl + "/");
      });
  });
});
