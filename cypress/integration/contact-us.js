/// <reference types="Cypress" />

describe("Test Contact Us form via webdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    //cy.get('#contact-us').click({force: true});
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("joedoe@gmail.com");
    cy.get('textarea.feedback-input').type("Lorem ipsum dolor sit amet.");
    cy.get('[type="submit"]').click();
  });
  it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    //cy.get('#contact-us').click({force: true});
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('textarea.feedback-input').type("Lorem ipsum dolor sit amet.");
    cy.get('[type="submit"]').click();
  });
});