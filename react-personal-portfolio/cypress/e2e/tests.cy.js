describe("Success tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Dark mode switch.", () => {
    cy.wait(5000);
    cy.get("[data-cy=switch-btn]").click();
    cy.get("[data-cy=git-btn]").should("have.class", "dark-header-button");
  });
  it("Redirect to form page", () => {
    cy.get("[data-cy=form-button]").click();
    cy.url().should("eq", "http://localhost:3000/contact-me");
  });
  it("Fill the form page, send the form and return the main page", () => {
    cy.get("[data-cy=form-button]").click();
    cy.url().should("eq", "http://localhost:3000/contact-me");
    cy.get("[data-cy=name-input]").type("Ahmet Can");
    cy.get("[data-cy=surname-input]").type("Yalçınkaya");
    cy.get("[data-cy=email-input]").type("ahmetcan.yalcinkaya55@gmail.com");
    cy.get("[data-cy=phone-input]").type("05340684100");
    cy.get("[data-cy=subject-input]").type("Workintech");
    cy.get("[data-cy=message-input]").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    cy.get("[data-cy=submit-btn]").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:3000/");
  });
});
