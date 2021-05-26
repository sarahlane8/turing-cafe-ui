describe ('Homepage', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it('should render a header on pageload', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should render a form on pageload', () => {
    cy.get('form').should('be.visible')
      .get('form > input:first').invoke('attr', 'placeholder').should('contain', 'Name')
      .get('form >input').eq(1).invoke('attr', 'placeholder').should('contain', 'Date (mm/dd)')
      .get('form >input').eq(2).invoke('attr', 'placeholder').should('contain', 'Time')
      .get('form >input:last').invoke('attr', 'placeholder').should('contain', 'Number of guests')
      .get('button').contains('Make Reservation')
  })
})
