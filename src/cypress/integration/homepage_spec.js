describe ('Homepage', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  )}

  it('should render a header on pageload', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })
})
