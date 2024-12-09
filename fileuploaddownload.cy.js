/// <reference types='cypress'/>
/// <reference types="cypress-downloadfile"/>
it( 'file upload test',()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('download')
})

it('file download test',()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})