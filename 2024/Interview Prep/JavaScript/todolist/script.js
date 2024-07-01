document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
    } else {
      alert("Please enter a todo item");
    }
  });
todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName.toLowerCase() === "button") {
        const todoItem = target.parentElement;
      if (target.innerText === "Edit") {
        const todoItem = target.parentElement;
        const todoText = todoItem.querySelector("span").innerText;
        todoInput.value = todoText;
        todoList.removeChild(todoItem);
      } else if (target.innerText === "Remove") {
        const todoItem = target.parentElement;
        todoList.removeChild(todoItem);
      }
    }
});

  function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    todoItem.innerHTML = `<span>${todoText}</span>`;
    editButton.innerText = "Edit";
    removeButton.innerText = "Remove";

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
