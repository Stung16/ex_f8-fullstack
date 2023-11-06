import React, {useEffect, useState } from "react";
import client from "../configs/Client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form_listTodo({todo,apiKey,getTodos}) {
  console.log(todo);
  const [dele,setdele] = useState(false)
  const [edit,setEdit] = useState(false)
  const [updateValue,setupdateValue] = useState(todo.todo)
  const [completed,setCompleted]=useState(todo.isCompleted)


  const handleDelete = async() => {
    const { data, response } = await client.delete(`/todos/${todo._id}`, apiKey);
    if(response.ok) {
      toast.success(`${data.message}`)
      setdele(true)
      getTodos(apiKey)
    } else {
      localStorage.clear();
      toast.error("có lỗi xảy ra vui lòng reload lại!!!");
    }
  }
  useEffect(() => {
    setupdateValue(todo.todo)
  },[todo.todo])
  const handleUpdateTodo =async () => {
    const { data, response } = await client.patch(`/todos/${todo._id}`,{todo:updateValue}, apiKey);
    if(response.ok) {
      toast.success(`${data.message}`)
        getTodos(apiKey)
    } else {
      localStorage.clear();
      toast.error("có lỗi xảy ra vui lòng reload lại!!!");
    }
    setEdit(!edit)
    setupdateValue(todo.todo)

  }


  const handleEdit = async() => {
    setEdit(true)
  }

  const changeValueUpdate = (e) => {
    setupdateValue(e.target.value)
  }


  return (
    <React.Fragment>
      <input className="todo-complete" value={updateValue} readOnly={!edit} onChange={changeValueUpdate} />
      <div className="infor-todo">
        {edit && <div className="complete">
          <label htmlFor="checkbox">Not Completed</label>
          <input
            type="checkbox"
            id="checkbox"
          />
        </div>}
        <div className="options">
          {edit && <button className="option exit"onClick={() => {
            setEdit(!edit)
          }}>Thoát</button>}
          {!edit && <button className="option fix" onClick={handleEdit}>Sửa</button>}
          {edit && <button className="option update" onClick={handleUpdateTodo}>Update</button>}
          <button className="option dele" onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    </React.Fragment>
  );
}


/**
 * 
 * import React, { useState } from "react";
import client from "../configs/Client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form_addTodo() {
  const [value, setValue] = useState({
    todo: "",
  });
  const apiKey = localStorage.getItem("apiKey");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (apiKey) {
        const {todo} = value
      const { data, response } = await client.post("/todos", { todo }, apiKey);
      console.log(data, response);
    } else {
      const { todo } = value;
      if (todo) {
        toast.error("Có lỗi sảy ra vui lòng Reload lại!!!");
      } else {
        toast.warning("todo cần 2 ký tự trở lên");
      }
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      todo: e.target.value,
    });
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="input-todo">
          <input
            type="text"
            name="todo"
            placeholder="Thêm một việc làm mới"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-add">
            Thêm mới
          </button>
          <ToastContainer />
        </div>
        <hr />
      </form>
    </div>
  );
}

 */