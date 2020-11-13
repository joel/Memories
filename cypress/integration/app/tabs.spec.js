/// <reference types="cypress" />

context('Tabs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100')
  })

  it('go through tabs', () => {
    cy.visit('http://localhost:8100/');
    cy.get('#tab-button-bad').click();
    cy.get('#new-memory-button').click({force: true});
    cy.get('#back-button').click();
    cy.get('#tab-button-good').click();
    cy.get('#new-memory-button').click();
    cy.get('#back-button').click();
    cy.get('#tab-button-good').click();
    cy.get('#new-memory-button').click();
    // cy.get('#take-photo-button').click();
    // cy.get('.close').click();
    // cy.get('.shutter-button').click();
    // cy.get('[data-cy=back').click()
  })
})