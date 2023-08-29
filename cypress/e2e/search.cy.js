describe('Search elements', () =>{
    beforeEach(() =>{
        cy.visit('http://www.automationpractice.pl/index.php');
    })
    it('search for elements with multiple result', ()=>{
        cy.search('dress')
        cy.fixture('result').then((result) =>{
            cy.get(result.tittle).should('contain', 'dress')
        })
    })

    it('search for element with no results', () =>{
        /*cy.fixture('index').then((index) =>{
            cy.get(index.searchBox).type('qwert')
            cy.get(index.searchButton).click()
        }) */ //se pasa todo a commands.js
        cy.search('qwert')
        cy.fixture('result').then((result) =>{
            cy.get(result.alert).should('contain', 'No results were found for your search')
        })
    })

    it('search for element with special code', () =>{
        cy.readFile('cypress/support/text/search.txt').then((text) =>{
            cy.search(text)
        })
    cy.fixture('result').then((result) =>{
    cy.get(result.alert).should('contain', 'No results were found for your search')
    })
})
})