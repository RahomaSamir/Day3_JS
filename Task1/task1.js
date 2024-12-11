const addButton = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


// Add a new task
addButton.addEventListener("click",() => {
    const taskText = todoInput.value.trim();
    if(taskText){
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.classList.add("done-btn");
        doneBtn.addEventListener("click",()=>{
            taskSpan.classList.toggle("done");
            listItem.classList.toggle("highlight");
      
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("Delete-btn");
        deleteBtn.addEventListener("click",()=>{
            todoList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(doneBtn);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        todoInput.value = ""; // Clear input field
    }
});