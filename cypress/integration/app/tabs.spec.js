/// <reference types="cypress" />

context('Tabs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100')
  })

  it('go through tabs', () => {
    cy.visit('http://localhost:8100/');
    cy.get('#tab-button-bad').click();
    cy.get('#tab-button-good').click();
  })
})