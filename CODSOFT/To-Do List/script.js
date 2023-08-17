document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', addTask);

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
            updateLocalStorage();
        }
    });
    loadTasks();
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskText}<span class="delete-btn">Delete</span>`;
            taskList.appendChild(li);
            taskInput.value = '';
            updateLocalStorage();
        }
    }
    function updateLocalStorage() {
        const tasks = [];
        const taskElements = taskList.querySelectorAll('li');
        taskElements.forEach(function (taskElement) {
            tasks.push(taskElement.textContent.replace('Delete', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function (task) {
            const li = document.createElement('li');
            li.innerHTML = `${task}<span class="delete-btn">Delete</span>`;
            taskList.appendChild(li);
        });
    }
});
