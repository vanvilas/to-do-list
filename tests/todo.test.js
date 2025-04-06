/**
 * @jest-environment jsdom
 */

const { createTask } = require('../todo.js');

describe('Função createTask', () => {
    test('cria um elemento <li> com o texto correto', () => {
        const task = createTask('Estudar testes');
        expect(task).not.toBeNull();
        expect(task.tagName).toBe('LI');
        expect(task.textContent).toBe('Estudar testes');
    });

    test('retorna null para entrada vazia', () => {
        const task = createTask('');
        expect(task).toBeNull;
    });

    test('aplica a classe "done" ao clicar', () => {
        const task = createTask('Teste');
        document.body.appendChild(task);
        task.click();
        expect(task.classList.contains('done')).toBe(true);
    });
});