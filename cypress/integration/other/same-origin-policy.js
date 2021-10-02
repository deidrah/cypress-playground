/// <reference types="Cypress" />

describe("Cypress Web Security", () => {
  it("Validate visiting dwo different domains", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.visit("https://automationteststore.com/");
  });

  it("Validate visiting dwo different domains via user actions", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
  });
})