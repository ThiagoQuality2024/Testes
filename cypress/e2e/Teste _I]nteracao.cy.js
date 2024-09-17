describe('inspecionando Elementos', () => {
  it('1 Fase', () => {
    cy.visit('https://negociosbrasil.com.br/');
    cy.xpath('//*[@id="menu-item-10683"]').click();
    cy.wait(2000);
    cy.url().should('include', 'anuncios');
    cy.get('#input-filter-listings-search').type('imoveis{enter}');
    cy.xpath('//*[@id="main"]/div[3]/div/div').contains('1 - 23 de 23 resultado(s)');
    cy.get('.custom-select.custom-select-sm').select('Menor preço'); //Interagir com comandos dentro de menu suspenso.
  
   
  


})

  it ('2 Fase', () => {
       cy.visit('https://negociosbrasil.com.br/');
       cy.get('#primary-menu').contains('Comprar Empresa').should('be.visible');
       cy.get('#primary-menu').contains('Vender Empresa').should('be.visible');
       cy.get('#primary-menu').contains('Corretores de Negócios').should('be.visible');
       cy.get('#primary-menu').contains('Blog').should('be.visible');
  })

it ('3 Fase', () => {
  cy.request('https://negociosbrasil.com.br/').then((response) => {expect(response.status).to.eq(200);

})

})

})