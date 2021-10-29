/// <reference types="cypress" />

describe("Teste da barra de navegação", () =>{
  it('Deve acessar área "Sobre mim" ao clicar no botão', () =>{
      //visitar o site
      cy.visit('/')
      //localizar elementos e clicar
      cy.get(`[title= 'Sobre mim']`).click()
      //validar se foi carregado a pagina(assertion)
      cy.url().should('contain', '/sobre-mim')
    
  })

  it('Deve acessar área "Serviço" ao clicar no botão', () =>{
    cy.visit('/')
    cy.get(`[title= 'Serviços']`).click()
    cy.url().should('contain', '/servicos')
})

  it.only('Deve acessar área "Channel" ao clicar no botão', () =>{
    cy.visit('/')
    cy.get(`[title= 'Channel']`).click()
    cy.url().should('contain', '/channel')
    cy.contains('cinza').scrollIntoView()
    cy.get('.medium-article-feed-layout-1').should('be.visible')
  })

  it('Deve acessar área "Contato" ao clicar no botão', () =>{
    cy.visit('/')
    cy.get(`[title= 'Contato']`).click()
    cy.url().should('contain', '/contato')
    cy.get().type('fulano')
  })
})