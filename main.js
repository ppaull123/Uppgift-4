const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const smallText = document.querySelector("#smallText");
let paragraph = document.querySelector("p");
let completedTasks = 0;
const listArray = [];


addTaskBtn.addEventListener("click", addNewTask);

function addNewTask() {
    let taskText = taskInput.value.trim()
        const listStatusObject = {
        text: taskText,
        completed: false
    };
    listArray.push(listStatusObject);

    if (taskText.length == 0) {
        smallText.textContent = "You need to write something to add a new task!";
        return;
    }

    else {
        smallText.textContent = "";
    }

    taskText = taskInput.value.trim();

    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn");

    itemSpan.innerText = taskText;
    deleteBtn.innerHTML = "&#128465";
    deleteBtn.style.marginLeft = "20px";

    listItem.appendChild(itemSpan);
    taskList.appendChild(listItem);
    listItem.appendChild(deleteBtn)


    taskInput.value = "";


itemSpan.addEventListener("click", function() {
    if (!itemSpan.classList.contains("completed")) {
        itemSpan.classList.add("completed");
        listStatusObject.completed = true;
        completedTasks++;
        paragraph.textContent = `You have ${completedTasks} tasks completed`;
    } else {
        itemSpan.classList.remove("completed");
        listStatusObject.completed = false;
        completedTasks--;
        paragraph.textContent = `You have ${completedTasks} tasks completed`;
    }

console.log(listArray)
});

deleteBtn.addEventListener("click", function () {
    if (itemSpan.classList.contains("completed")) {
        completedTasks--;
    }
    listItem.remove();
    paragraph.textContent = `You have ${completedTasks} tasks completed`;


    const index = listArray.map(t => t.text).indexOf(itemSpan.innerText);
    if (index > -1) {
        listArray.splice(index, 1);
    }
    console.log(listArray)
})

};