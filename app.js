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
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Adding a task event
    form.addEventListener('submit', addTask);
    // Removing the task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks)
    // Completed task 
    taskList.addEventListener('click', completedTask)
}

// Get Tasks
// *** THIS SECTION IS MAKING SURE THAT WHEN THE 
function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
            // Creating LI element
    const li = document.createElement('li');

    // Adding class to new LI
    li.className = 'collection-item';

    // Creating text node & append to li
    li.appendChild(document.createTextNode(task));

    // Creating new link element for LI
    const link = document.createElement('a');
    const link2 = document.createElement('a');

    // Add class name (secondary-content specific for the materialize library for adding items to the right of the content)
    link.className = 'delete-item secondary-content';
    link2.className = 'completed-item secondary-content';

    // Adding icon html
    link.innerHTML = '<i class="fa fa-remove" style="color: red"></i>';
    link2.innerHTML = '<i class="fa fa-check-square" aria-hidden="true" style="color: #4848ff"></i>';

    // Appending the link to the LI
    li.appendChild(link);
    li.appendChild(link2);

    // Appending the li to the list (ul) area
    taskList.appendChild(li);

    });
};

// ______________________________________________________________________

// ADDING A TASK FUNCTION
// ADDING A TASK FUNCTION
// ADDING A TASK FUNCTION
// ADDING A TASK FUNCTION
function addTask(e){
    if (taskInput.value === '') {
        alert('Task is blank. Please input task you wish to add below');
    }

    // Creating LI element
    const li = document.createElement('li');

    // Adding class to new LI
    li.className = 'collection-item';

    // Creating text node & append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Creating new link element for LI
    const link = document.createElement('a');
    const link2 = document.createElement('a');


    // Add class name (secondary-content specific for the materialize library for adding items to the right of the content)
    link.className = 'delete-item secondary-content';
    link2.className = 'completed-item secondary-content';

    // Adding icon html
    link.innerHTML = '<i class="fa fa-remove" style="color: red"></i>';
    link2.innerHTML = '<i class="fa fa-check-square" aria-hidden="true" style="color: #4848ff"></i>';

    // Appending the link to the LI
    li.appendChild(link);
    li.appendChild(link2);

    // Appending the li to the list (ul) area
    taskList.appendChild(li);
 
storeTaskLocal(taskInput.value);

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}

const clock = $('.clock');
        setInterval(() => {
            const now = moment();
            const humanReadable = now.format('dddd, MMMM Do YYYY, hh:mm:ssA');
            $('#holder').text(humanReadable);
        }, 1000);



// STORE TASK IN LOCAL STORAGE FUNCTION 
function storeTaskLocal(task){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}
// ________________________________________________________________________

// REMOVING A 'TASK' FUNCTION
// REMOVING A 'TASK' FUNCTION
// REMOVING A 'TASK' FUNCTION

function removeTask(e){
if (e.target.parentElement.classList.contains
    ('delete-item')) {
    if(confirm('Are you sure you want to delete this task?')) {
        e.target.parentElement.parentElement.remove();
    // Removing task from LocalStorage
removeTaskFromLocalStorage(e.target.parentElement.parentElement)
  }
 }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}
// _________________________________________________________________________

// COMPLETED TASK 
// COMPLETED TASK 
// COMPLETED TASK 
// COMPLETED TASK 
// COMPLETED TASK 
// COMPLETED TASK 

function completedTask(e){
   console.log('click heard');
   if (e.target.parentElement.classList.contains
    ('completed-item')) {
        if(confirm('Do you wish to mark complete?')) {
        e.target.parentElement.parentElement.remove();
        console.log('task removed')
    } 
    const compTask =  e.target.parentElement.parentElement;
    console.log(compTask);
    document.querySelector('.completed-collection').appendChild(compTask)
    }
  }
  




// _________________________________________________________________________


// function to clear all tasks at once
function clearTasks(){
    // taskList.innerHTML = '';

    // Faster - in a whileLoop (removing each one individually)
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // Clearing Task from Local Storage
    clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
    localStorage.clear();
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


localStorage.removeItem('tasks')
