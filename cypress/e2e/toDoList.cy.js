describe('To-Do-List', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });

    it('Adiciona uma nova tarefa à lista', () => {
        cy.get('input#new-task').type('Estudar Cypress');
        cy.get('button#add-task').click();
        cy.get('ul#task-list').should('contain', 'Estudar Cypress');
    });
});