before(function () {
    cy.fixture('example.json').as('test_data'); // Load fixture and alias it
});

it("Read File using fixtures", function () {
    // Use 'function()' to maintain the Mocha context
    cy.fixture('example.json').then((data) => {
        cy.log(data.name); // Log data from the fixture file
        cy.log(data.email);
    });

    // Access fixture data from the Mocha context
    cy.log(this.test_data.name);
    cy.log(this.test_data.email);
});
it('readfile using read files',()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)

    })
})
it("write fule demo",()=>{
    cy.writeFile('ahsaan.txt','hello jeeee\n')
    cy.writeFile('ahsaan.txt','i am learning cypress',{flag:'a+'})
})