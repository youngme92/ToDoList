const toDoForm = document.querySelector(".toDoForm-js"),
    toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList-js");

const TODOS_LS = "ToDos";

let toDos = [];

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
                parsedToDos.forEach(function(toDo){
                    paintToDo(toDo.text);
                });
            
    };
};

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
};

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDos){
        return toDos.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
};

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
};

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
};

init();
