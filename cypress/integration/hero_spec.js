describe('hero suite', () => {
  

  beforeEach(() => {
    

    cy.server() // enable response stubbing
    cy.route({
      method: 'GET', // Route all GET requests
      url: 'http://localhost:3000/products', // that have a URL that matches '/users/*'
      response: [{
        id: 1,
        title: 'Mocked Tomato'
      }] // and force the response to be: []
    })

    cy.visit('http://localhost:4200')
  })

  it('should have hero list length 1', () => {
    cy.get('.product-item')
      .its('length')
      .should('eq',1)
  })

})