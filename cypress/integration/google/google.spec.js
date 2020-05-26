it("Logs out some text", () => {
    console.log ("hello world")
})

it("Performs a Search", () => {
    cy.visit('https://www.google.co.uk')
    cy.get('[aria-label="Search"]').type('Falkor{enter}')
})


