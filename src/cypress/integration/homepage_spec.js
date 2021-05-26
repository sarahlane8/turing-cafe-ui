describe ('Homepage', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it('should render a header on pageload', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should render a form on pageload', () => {
    cy.get()
  })
})
