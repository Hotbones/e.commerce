describe('Login', () =>{
    beforeEach(() =>{
        cy.visit('http://www.automationpractice.pl/index.php')
    })
    it('Login with incorrect email', ()=>{
        cy.login('something','other')
        cy.fixture('login').then((login) =>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address')
        })
    })
})
