const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(e) {
        e.preventDefault();

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo')

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

        const completeButton = document.createElement('button')
        completeButton.innerHTML = '<i class="fas fa-check"></i>'
        completeButton.classList.add("completeBtn")
        todoDiv.appendChild(completeButton)

        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trashBtn")
        todoDiv.appendChild(trashButton)

        todoList.appendChild(todoDiv);

        todoInput.value = "";
}

function deleteTodo(e) {
    const item = e.target;
    if(item.classList[0] === "trashBtn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if (item.classList[0] === "completeBtn") {
        const todo =item.parentElement;
        todo.classList.add("completed")
    }
}
