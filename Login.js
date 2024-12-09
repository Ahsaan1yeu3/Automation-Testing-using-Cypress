
it('my 1 test',()=>{
    cy.log(' 1 login test starts')
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname')
    cy.get('#pwd')
   cy.get('[type="submit"]')
   cy.log("1 login test end") 

})