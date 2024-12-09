///<reference types ="cypress"/>

it("google search",()=>{
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type("automation step by step{Enter}")
    cy.get('[data-hveid="CBMQAA"] > .nPDzT > .YmvwI').click()
   
})