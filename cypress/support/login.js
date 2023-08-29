Cypress.Commands.add('login', (email, password) =>{
    cy.fixture('login').then((login) =>{
        cy.get(login.loginLink).click()
        cy.get(login.email).type(email)
        cy.get(login.pass).type(password)
        cy.get(login.logingButton).click()
    })
})