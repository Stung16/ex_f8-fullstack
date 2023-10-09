const SEVERAPI = `https://xljxjj-8080.csb.app/todos`;
const add_todo_btn = document.querySelector(".btn-add");
const box_add_task = document.querySelector(".box-add-task");
const btn_save = box_add_task.querySelector(".save-btn");
const btn_cancel = box_add_task.querySelector(".cancel-btn");
const task_list = document.querySelector(".task-list");

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

console.log(
  postTodo().then((reponse) => {
    console.log(reponse);
  })
);

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

  btn_save.addEventListener("click", () => {
    const inputEl = box_add_task.querySelector(".add-input");
    const valueInput = inputEl.value;
    const html = `
    <div class="task-item">
      <p class="task-title"></p>
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
    if (!valueInput) {
      alert("vui lòng nhập todo");
    } else {
      const task_item = document.createElement("div");
      task_item.innerHTML = html;
      task_list.append(task_item);
      task_item.querySelector(".task-title").innerText = valueInput;
      inputEl.value = "";
      box_add_task.classList.remove("show");
    }
  });
}
add_todo_list();
