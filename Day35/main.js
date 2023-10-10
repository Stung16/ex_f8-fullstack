const SEVERAPI = `https://xljxjj-8080.csb.app/todos`;
const add_todo_btn = document.querySelector(".btn-add");
const box_add_task = document.querySelector(".box-add-task");
const btn_save = box_add_task.querySelector(".save-btn");
const btn_cancel = box_add_task.querySelector(".cancel-btn");
const task_list = document.querySelector(".task-list");
const task_list_done = document.querySelector(".task-list-done");

const getTodo = async () => {
  const response = await fetch(`${SEVERAPI}`);
  const data = await response.json();
  return data;
};

const postTodo = async (data) => {
  const response = await fetch(`${SEVERAPI}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const deleteTodo = async (id) => {
  const response = await fetch(`${SEVERAPI}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

const updateTodo = async (id, data) => {
  const response = await fetch(`${SEVERAPI}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

async function render() {
  const data = await getTodo();

  const todoComplete = data.filter((todos) => {
    return todos.status === true;
  });
  const todoUnComplete = data.filter((todos) => {
    return todos.status === false;
  });

  const todoCompleteHtml = data
    .map((todo) => {
      return `
      <div class="task-item">
      <p class="task-title">${todo.title}</p>
      <div class="task-option">
        <button class="btn-option delete-option">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="btn-option edit-option">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="btn-option complete-option">
          <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>`;
    })
    .join("");

  const todoUnCompleteHtml = todoUnComplete
    .map((todo) => {
      return `
      <div class="task-item">
      <p class="task-title">${todo.title}</p>
      <div class="task-option">
        <button class="btn-option delete-option">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="btn-option edit-option">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="btn-option complete-option">
          <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>`;
    })
    .join("");
  const task_item = document.createElement("div");
  task_item.innerHTML = todoUnCompleteHtml;
  task_list.append(task_item);

  const task_item_done = document.createElement("div");
  task_item_done.innerHTML = todoCompleteHtml;
  task_list_done.append(task_item_done);
}
render();

function add_todo_list() {
  add_todo_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    box_add_task.classList.add("show");
  });

  document.querySelector(".inner-box").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    box_add_task.classList.remove("show");
  });

  btn_cancel.addEventListener("click", () => {
    box_add_task.classList.remove("show");
  });

  btn_save.addEventListener("click", async (e) => {
    const inputEl = box_add_task.querySelector(".add-input");
    const valueInput = inputEl.value;
    if (!valueInput) {
      alert("vui lòng nhập todo");
    } else {
      const data = {
        status: "false"
      };
      if (valueInput) {
        data.title = valueInput;
      } else {
        return;
      }

      await postTodo(data);
      inputEl.value = "";
      box_add_task.classList.remove("show");
      render();
    }
  });
}
add_todo_list();