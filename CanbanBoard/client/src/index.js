const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const inProgressLane = document.getElementById("in-progress-lane")
const doneLane =  document.getElementById("done-lane")
const user = localStorage.getItem("user")

window.onload = async () => {
    // prevent not logged user to use (idk default value)
    if (!user || user === "undefined" || user === null || user === "null" || user === "") {
        window.location.replace("./")
        return
    }

    addTaskHtml("Anton", "Get groceries", "todo")
    addTaskHtml("Anton", "Feed the dogs", "todo")
    addTaskHtml("Anton", "Mow the lawn", "todo")

    addTaskHtml("Anton", "Play WOW", "in progress")
    addTaskHtml("Anton", "Drink beer", "done")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    addTaskHtml(user, value, "todo")
    input.value = "";
});

form.addEventListener("reset", (e) => {
    e.preventDefault();

    localStorage.setItem("user", undefined)
    window.location.replace("./")
})

const addTaskHtml = (author, description, group) => {
    if (!description || !author || !group) return

    const authorContainer = document.createElement("h4")
    authorContainer.innerText = author

    const bottomContainer = document.createElement("div")
    bottomContainer.classList.add("task-bottom")
    bottomContainer.appendChild(authorContainer)

    if (author === user) {
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-button")
        deleteButton.setAttribute("type", "submit")
        deleteButton.innerText = "delete"
        deleteButton.addEventListener("click", () => {
            newTask.remove()
        })

        bottomContainer.appendChild(deleteButton)
    }

    const descriptionContainer = document.createElement("p")
    descriptionContainer.innerText = description;

    const newTask = document.createElement("div")
    newTask.classList.add("task")
    newTask.appendChild(descriptionContainer)
    newTask.appendChild(bottomContainer)

    if (user === author) {
        newTask.setAttribute("draggable", "true")
        newTask.addEventListener("dragstart", () => {
            newTask.classList.add("is-dragging");
        });
        newTask.addEventListener("dragend", () => {
            newTask.classList.remove("is-dragging");
        });
        newTask.style.cursor = "move"
    }

    switch (group) {
        case "todo": {
            todoLane.appendChild(newTask)
            break
        }
        case "in progress": {
            inProgressLane.appendChild(newTask)
            break
        }
        case "done": {
            doneLane.appendChild(newTask)
            break
        }
        default: {
            console.warn("unknown group")
            break
        }
    }
}