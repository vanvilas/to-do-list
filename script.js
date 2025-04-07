const input = document.getElementById('new-task');
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const toggleBtn = document.getElementById('dark-toggle');

// carrega tarefas salvas
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(taskText => {
        taskList.appendChild(createTask(taskText));
    });

    // modo escuro salvo
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    }
};

// criar tarefa
function createTask(taskText) {
    if (!taskText) return null;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    return li;
}

function addTask() {
    const taskText = input.value.trim();
    const task = createTask(taskText);
    if (task) {
        taskList.appendChild(task);
        input.value = '';
        saveTasks();
    }
}

addBtn.addEventListener('click', addTask);

// Salvar tarefas
function saveTasks() {
    const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Alternar modo escuro
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});