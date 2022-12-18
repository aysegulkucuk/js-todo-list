var todos = [
  {
    id: "1231312",
    text: "Drink 2L of water",
    done: false,
  },
  {
    id: "1231313",
    text: "15 mins yoga",
    done: false,
  },
  {
    id: "1231314",
    text: "Reading book",
    done: true,
  },
];

showTodoList();

document.getElementById("todo_form").addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});

function addToDo() {
  var todoInput = document.getElementById("todo_input").value;
  if (todoInput) {
    todos.push({
      id: Date.now(),
      text: todoInput,
      done: false,
    });

    showTodoList();
    document.getElementById("todo_input").value = "";
  }
}

function removeTodo(id) {
  var todoIndex = todos.findIndex(function (todo) {
    if (todo.id === id) return todo;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }

  showTodoList();
}

function romoveAllTodos() {
  todos = [];
  document.querySelector(".todo_list").innerHTML = "";

  showTodoList();
}

function showTodoList() {
  document.querySelector(".todo_list").innerHTML = "";

  todos.forEach(function (todo) {
    var todoItem = document.createElement("li");
    var todoItemText = document.createTextNode(todo.text);
    todoItem.setAttribute("id", todo.id);

    var toggle = document.createElement("input");
    toggle.setAttribute("type", "checkbox");

    if (todo.done) {
      toggle.setAttribute("checked", true);
    }

    toggle.addEventListener("change", (e) => {
      e.preventDefault();
      toggleTodoStatus(todo.id);
    });

    var todoRemoveButton = document.createElement("button");
    todoRemoveButton.innerHTML = "Remove";
    todoRemoveButton.onclick = function () {
      removeTodo(todo.id);
    };

    if (todo.done) {
      todoItem.setAttribute("class", "done");
    }

    todoItem.appendChild(toggle);
    todoItem.appendChild(todoItemText);
    todoItem.appendChild(todoRemoveButton);

    document.querySelector(".todo_list").appendChild(todoItem);
  });
}

function toggleTodoStatus(id) {
  var todoIndex = todos.findIndex(function (todo) {
    if (todo.id === id) return todo;
  });

  if (todoIndex > -1) {
    todos[todoIndex].done = !todos[todoIndex].done;
  }

  showTodoList();
}
