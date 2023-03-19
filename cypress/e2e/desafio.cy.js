///<reference types= "cypress"/>

describe('Acessar site e validar texto Nossas soluções_', () => {
  it('Validar texto Nossas soluções_', () => {
    cy.visit('https://www.verity.com.br/')
    cy.title()
    cy.contains('Nossas soluções_')
      .should('be.visible')
  })
})

describe('Acessar site e validar texto Culture e Tech', () => {
  it('validar texto Culture e Tech', () => {
    cy.viewport(1280, 800)
    cy.visit('https://www.verity.com.br/')
    cy.title()
    cy.contains('PT')
      .should('be.visible')
      .click()
    cy.get('#comp-l0b60nwv-dropdown-option-1')
      .click()
    cy.scrollTo(0, 1400)
    cy.contains('Culture and Tech')
          .should('be.visible')
          .click()
  })
})


describe('Acessar contatos e informar dados', () => {
  it('Acessar site com sucesso', () => {
    cy.viewport(1280, 800)
    cy.visit('https://www.verity.com.br/')
    cy.get('#comp-kevyodnk5label').click()
    cy.get('#input_comp-kwz6tqej').type("Paulo Cesar da Silva Junior")
    cy.get('#input_comp-kwz6tqf7').type('juniorpaulo.23@gmail.com')
    cy.get('#input_comp-kwz6tqfe').type('19-999574736')
    cy.get('#textarea_comp-kwz6tqfr').type('Ser aprovador na vaga de analista de teste')
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="buttonElement"]').click()
    cy.title()
    cy.contains('Nosso Contato_').should('be.visible')
  })

})


