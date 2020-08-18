const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');


loadEventListeners();


function loadEventListeners(){
    form.addEventListener('submit', addTask);
    //remove task event
taskList.addEventListener('click' , removeTask);
//clear task
clearBtn.addEventListener('click', clearTask)

//filter task event

filter.addEventListener('keyup',filterTask)


}

function addTask(e){
    if (taskInput.value === ''){
    alert('Add a Task')
}
// taskList.addEventListener('click' , removeTask)

//create li
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

const link  = document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML= '<i class="fa fa-remove"></i>';
li.appendChild(link);

taskList.appendChild(li);

taskInput.value = '';


e.preventDefault();
}

//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
}
}

function clearTask(){
    //taskList.innerHTML='';
//faster way
while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }    
}

function filterTask(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        }else{
            task.style.display='none';
        }

    });
}