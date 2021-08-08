/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.info_links_footer > :nth-child(5) > a').click();
    cy.get('#ContactUsFrm_first_name').type("Joe");
    cy.get('#ContactUsFrm_email').type("joedoe@gmail.com");
    cy.get('#ContactUsFrm_enquiry').type("Lorem ipsum dolor sit amet");
    cy.get('.col-md-6 > .btn').click();
  });
});