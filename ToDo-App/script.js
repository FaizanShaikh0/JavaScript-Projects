
const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskTitle = taskInput.value.trim(); // Trim whitespace

    if (taskTitle === '') {
        alert('Please Enter New Task');
        return; // Exit early if input is empty
    }

    const listItem = document.createElement('li');
    listItem.classList.add('li-text');
    listItem.textContent = taskTitle; // Use textContent for security


    let iconContainer = document.createElement('span');
    iconContainer.classList.add('icon-container'); 

    let editIcon = document.createElement('span');
    editIcon.innerHTML = '<i class="fas fa-edit"></i>';
    editIcon.classList.add('edit-icon');

    editIcon.addEventListener('click', function () {
        // console.log(taskTitle)
        taskInput.value = taskTitle
        listItem.remove()
    });

    iconContainer.appendChild(editIcon);

    let deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fas fa-trash"></i>';
    deleteIcon.classList.add('delete-icon');

    deleteIcon.addEventListener('click', function () {
        listItem.remove();
    });

    iconContainer.appendChild(deleteIcon);

    listItem.appendChild(iconContainer);

    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear input field

});

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

// #B9E7DD

// --------------------------------------------------------------------------------------------------------------------------


// const taskInput = document.getElementById("task-input");
// const taskForm = document.getElementById("task-form");
// const taskList = document.getElementById("task-list");

// Function to create a new task item
/*function createTaskElement(taskTitle) {
    const listItem = document.createElement('li');
    listItem.innerHTML = taskTitle;

    let editIcon = document.createElement('span');
    editIcon.innerHTML = '<i class="fas fa-edit"></i>';
    editIcon.classList.add('edit-icon');
    editIcon.addEventListener('click', function () {
        // Implement edit functionality here
        const newTitle = prompt("Enter new task title:", taskTitle);
        if (newTitle !== null) {
            listItem.innerHTML = newTitle;
            listItem.appendChild(editIcon);
            listItem.appendChild(deleteIcon);
        }
    });
    listItem.appendChild(editIcon);

    let deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fas fa-trash"></i>';
    deleteIcon.classList.add('delete-icon');
    deleteIcon.addEventListener('click', function () {
        // Implement delete functionality here
        listItem.remove();
    });
    listItem.appendChild(deleteIcon);

    return listItem;
}


// Event listener for form submission
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskTitle = taskInput.value;
    if (taskTitle.trim() !== '') {
        const listItem = createTaskElement(taskTitle);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});

// Event listener for toggling task completion
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});*/
