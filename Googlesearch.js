///<reference types="cypress"/>

it('google search 1 test',()=>{
    cy.log('1 test starts')
    cy.visit('https://www.google.com/')
    cy.get('gLFyf"').type('cypress{Enter}')
    cy.log('1 test end')
})
it('google search 2 test',()=>{
    cy.log('2nd test starts')
    cy.visit('https://www.google.com/')
    cy.get('gLFyf"').type('cypress{Enter}')
    cy.log('2nd test end')
})