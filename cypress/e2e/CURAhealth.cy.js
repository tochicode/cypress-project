describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    //Start process
    cy.get('body')
    cy.get('#btn-make-appointment').click()

    //Login to your profile
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

    //Make Appointment
    cy.get("#combo_facility").select('Seoul CURA Healthcare Center')
    cy.get("#chk_hospotal_readmission").click()
    cy.get('#radio_program_none').click()
    cy.get('#txt_visit_date').click()
    cy.get(':nth-child(4) > :nth-child(5)').click()
    cy.get('#txt_comment').type("I would like my consulting doctor to be Dr. Lee Jun Hee")
    cy.get('#btn-book-appointment').click()

    // Confirmation message
    cy.get("h2").should('have.text', 'Appointment Confirmation');
    cy.get('.lead').should('contain.text', 'Please be informed that your appointment has been booked as following:');

    // Check the success message after booking
    cy.contains('Please be informed that your appointment has been booked as following').should('exist');
  })
})