describe('hero suite', () => {
  beforeEach(() => {
    cy.server() // enable response stubbing
    // cy.route({
    //   method: 'GET', // Route all GET requests
    //   url: 'http://localhost:3000/products', // that have a URL that matches '/users/*'
    //   response: [{
    //     id: 1,
    //     title: 'Mocked Tomato'
    //   }] // and force the response to be: []
    // })

    // cy.fixture('activities.json').as('activitiesJSON')
    // cy.route('GET', 'activities/*', '@activitiesJSON')

    cy.fixture('heroes/list.json').as('heroesList')
    cy.route('GET', 'http://localhost:3000/products', '@heroesList');

    cy.visit('http://localhost:4200')
    cy.screenshot()
  })

  it('should have hero list length 1', () => {
    cy.get('.product-item')
      .its('length')
      .should('eq',1)
  })
})