const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

const ToDos_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(ToDos_KEY, JSON.stringify(toDos))
}

function eraseList(event){
    const li = event.target.parentElement;
    li.remove();
}

function painting(NewToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", eraseList)
    toDoList.appendChild(li);
    span.innerText= NewToDo;
}

function toDoSubmit(event){
    event.preventDefault();
    const NewToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(NewToDo);
    painting(NewToDo);
    saveToDos(NewToDo)
}

toDoForm.addEventListener("submit", toDoSubmit)

const savedToDos = localStorage.getItem(ToDos_KEY)

if(savedToDos!==null){ 
    const parsedTodos = JSON.parse(savedToDos)
    toDos = parsedTodos
    parsedTodos.forEach(painting)
}