/// <reference types="cypress" />

context('Tabs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100');
  })

  it('Default Page', () => {
    cy.contains("Good Memories");
    cy.get('ion-title')
      .should('be.visible')
      .should('contain', 'Good Memories');
    cy.url().should('include', '/good-memories');
  })

  it('Bad Memories', () => {
    cy.get('#tab-button-bad')
      .should('be.visible').click();
    cy.contains("Bad Memories");
    cy.get('ion-title')
      .should('be.visible')
      .should('contain', 'Bad Memories');
    cy.url().should('include', '/bad-memories');
  })

  it('New Memory', () => {
    cy.get('#new-memory-button')
      .should('be.visible')
      .click({force: true});
    cy.addTitle('That day');
  })

  it('Take A Picture', () => {
    cy.get('#new-memory-button')
      .should('be.visible')
      .click({force: true});
    cy.addTitle('That day');

    // Select Bad Memory In The Drop Down Menu
    cy.get('ion-select.md').click(); // Open Modal
    // Select Bad Memory
    cy.get('#alert-input-1-1 > .alert-button-inner > .alert-radio-icon').click();
    // Validate
    // cy.get('.alert-button-group > :nth-child(2)').click();
    cy.contains('OK').should('be.visible').click();

    // cy.get('#add-memory-btn').debug().click();
    cy.contains('Add Memory').should('be.visible').click();
  })
})