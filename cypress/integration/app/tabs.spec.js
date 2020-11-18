/// <reference types="cypress" />

context('Tabs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100');
  })

  it('Default Page', () => {
    cy.contains("Good Memories");
    cy.get('ion-title').should('contain', 'Good Memories');
    cy.url().should('include', '/good-memories');
  })

  it('Bad Memories', () => {
    cy.get('#tab-button-bad').click();
    cy.contains("Bad Memories");
    cy.get('ion-title').should('contain', 'Bad Memories');
    cy.url().should('include', '/bad-memories');
  })

  it('New Memory', () => {
    cy.get('#new-memory-button').click({force: true});
    cy.addTitle('That day');
  })

  it('Take A Picture', () => {
    cy.get('#new-memory-button').click({force: true});
    cy.addTitle('That day');

    cy.get('ion-select.md').click();
    cy.get('#alert-input-1-1 > .alert-button-inner > .alert-radio-icon').click();

    cy.get('.alert-button-group > :nth-child(2)').click();

    cy.get('#add-memory-btn').click();
  })
})