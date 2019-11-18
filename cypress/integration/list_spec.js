import { createYield } from "typescript"

describe('testing the list', () => {
  it('should have list with length 2', () => {
    
    cy.visit('http://localhost:4200')
    cy.get(".hero-input")
      .its('length')
      .should("eq", 2);
  })

  it('should add Hulk to list', () => {
    cy.visit("http://localhost:4200")
    cy.get(".new-hero")
      .type("Hulk")
      .should("have.value", "Hulk")

    cy.get(".new-hero-add")
      .click()
    
    cy.get(".new-hero")
      .should("have.value", "");

    cy.get(".hero-input")
      .eq(2)
      .should("have.value", "Hulk");  
  })

  // should update
  it('should update our item' , () => {
    cy.visit("http://localhost:4200")
    cy.get(".hero-input")
      .eq(1)
      .should("have.value", "Captain Marvel")
      .type("s")
      ;

    cy.get('.hero-update')
      .eq(1)
      .click()

    cy.get(".hero-input")
      .eq(1)
      .should("have.value", "Captain Marvels");
  })

  // should remove
  it('should remove our item', () => {
    cy.visit("http://localhost:4200");
    cy.get(".hero-remove")
      .eq(1)
      .click();

    cy.get(".hero-input")
      .its("length")
      .should("eq", 1);
  })
})