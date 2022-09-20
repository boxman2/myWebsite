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
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function painting(NewToDo){
    const li = document.createElement("li");
    li.id = NewToDo.id;
    const span = document.createElement("span");
    span.innerText= NewToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", eraseList);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit(event){
    event.preventDefault();
    const NewToDo = toDoInput.value;
    toDoInput.value = "";
    const NewToDoOJ = {
        text: NewToDo,
        id : Date.now(),
    }
    toDos.push(NewToDoOJ);
    painting(NewToDoOJ);
    saveToDos()
}

toDoForm.addEventListener("submit", toDoSubmit)

const savedToDos = localStorage.getItem(ToDos_KEY)

if(savedToDos!==null){ 
    const parsedTodos = JSON.parse(savedToDos)
    toDos = parsedTodos
    parsedTodos.forEach(painting)
}