describe('To-Do-List', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });

    it('Adiciona uma nova tarefa à lista', () => {
        cy.get('input#taskInput').type('Estudar Cypress');
        cy.get('button').contains('Adicionar').click();
        cy.get('ul#taskList').should('contain', 'Estudar Cypress');
    });
});