describe('To-Do-List - Cenário Completo', () => {
    beforeEach(() => {
        cy.visit('https://vanvilas.github.io/to-do-list/');
    });

    it('Adiciona 3 tarefas, marca uma como concluída e apaga outra', () => {
        const tarefas = ['Estudar Cypress', 'Ler documentação', 'Fazer o post no LinkedIn'];

        // adiciona 3 tarefas
        tarefas.forEach((tarefa) => {
            cy.get('input[type="text"]').type(tarefa);
            cy.contains('Adicionar').click();
        });

        // verifica se todas foram adicionadas
        tarefas.forEach((tarefa) => {
            cy.contains(tarefa).should('exist');
        });

        // remove a primeira
        cy.contains('li', 'Estudar Cypress') // encontra o <li> específico que contém o texto
        .find('.delete-btn') //dentro dele, acha o botão
        .click(); // clica no botão

        // verifica se a primeira foi removida
        cy.contains('Estudar Cypress').should('not.exist');

        // as outras duas continuam
        cy.contains('Ler documentação').should('exist');
        cy.contains('Fazer o post no LinkedIn').should('exist');
    });
});