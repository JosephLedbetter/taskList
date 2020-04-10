// Defining UI variables from the index.html
const form =  document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter');
const taskInput = document.querySelector('#task');


// Function to load all event listeners

loadEventListeners();

function loadEventListeners(){
    // Adding a task event
    form.addEventListener('submit', addTask);
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

