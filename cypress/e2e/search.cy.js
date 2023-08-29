describe('Search elements', () =>{
    beforeEach(() =>{
        cy.visit('http://www.automationpractice.pl/index.php');
    })
    it('search for elements with multiple result', ()=>{
        cy.fixture('index').then((index) =>{
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click()
        })
        cy.fixture('result').then((result) =>{
            cy.get(result.tittle).should('contain', 'dress')
        })
    })

    it('search for element with no results', () =>{
        cy.fixture('index').then((index) =>{
            cy.get(index.searchBox).type('qwert')
            cy.get(index.searchButton).click()
        })
        cy.fixture('result').then((result) =>{
            cy.get(result.alert).should('contain', 'No results were found for your search')
        })
    })
})

