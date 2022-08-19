describe("Home", () => {
  it("visit top page", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").contains("GitHub");
  });
});
