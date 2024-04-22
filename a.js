// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div class="actions">
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        attachTaskListeners(taskItem);
    }
}

// Function to attach event listeners to task buttons
function attachTaskListeners(taskItem) {
    const editBtn = taskItem.querySelector('.editBtn');
    const deleteBtn = taskItem.querySelector('.deleteBtn');

    editBtn.addEventListener('click', () => {
        const taskText = taskItem.querySelector('span');
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskText.textContent = newText.trim();
        }
    });

    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });
}
