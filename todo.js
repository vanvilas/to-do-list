function createTask(text) {
    if (!text || text.trim() === '') return null;

    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    return li;
}

module.exports = { createTask }; 