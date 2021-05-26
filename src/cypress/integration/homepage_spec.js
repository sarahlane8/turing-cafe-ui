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

  it('should display existing reservation cards on page load', () => {
    cy.get('.card').should('have.length', 9)
      .get('.card:first').contains('Christie')
  })

  it('should show the input value as the user is typing', () => {
    cy.get('form >input:first').type('Sarah')
      .should('have.value', 'Sarah')
      .get('form >input').eq(1).type('06/24')
      .should('have.value', '06/24')
      .get('form >input').eq(2).type('7')
      .should('have.value', '7')
      .get('form >input:last').type('3')
      .should('have.value', '3')
  })

  it('should add a card when a reservation is made', () => {
    cy.get('.card').should('have.length', 9)
      .get('form >input:first').type('Sarah')
      .get('form >input').eq(1).type('06/24')
      .get('form >input').eq(2).type('7')
      .get('form >input:last').type('3')
      .get('button').click()
      .get('.card').should('have.length', 10)
  })

  it('should not add a card if an input field is left blank', () => {
    cy.get('.card').should('have.length', 9)
      .get('form >input:first').type('Sarah')
      .get('form >input').eq(1).type('06/24')
      .get('form >input').eq(2).type('7')
      .get('button').click()
      .get('.card').should('have.length', 9)
  })
})
