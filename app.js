// Defining UI variables from the index.html
const form =  document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Function to load all event listeners

loadEventListeners();


// This eventlistener is specifically to hold all functions that take place within the component
function loadEventListeners(){
    // Adding a task event
    form.addEventListener('submit', addTask);
    // Removing the task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks)
}

// Add task function 
function addTask(e){
    if (taskInput.value === ''){
        alert('Add task');
    }

    // Creating LI element
    const li = document.createElement('li');

    // Adding class to new LI
    li.className = 'collection-item';

    // Creating text node & append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Creating new link element for LI
    const link = document.createElement('a');

    // Add class name (secondary-content specific for the materialize library for adding items to the right of the content)
    link.className = 'delete-item secondary-content';

    // Adding icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Appending the link to the LI
    li.appendChild(link);

    // Appending the li to the list (ul) area
    taskList.appendChild(li);


    // Clear the input
    taskInput.value = '';

    console.log(li);
    e.preventDefault();
}

function removeTask(e){

if (e.target.parentElement.classList.contains
    ('delete-item')) {
    if(confirm('Are you sure you want to delete this task?')) {
        e.target.parentElement.parentElement.remove();
  }
 }
}

// function to clear all tasks at once
function clearTasks(){
    // taskList.innerHTML = '';

    // Faster - in a whileLoop (removing each one individually)
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// function to filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach
(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
    } else {
        task.style.display = 'none';
    }
  });
}