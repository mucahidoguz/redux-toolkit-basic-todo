import React, { useState } from "react";
import { add, remove, toggleCompleted } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import "./App.css";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  const onDelete = (id: string) => {
    dispatch(remove(id));
  };

  const toggle = (id: string) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="App">
      <h1>Redux Toolkit ToDo</h1>
      <input
        className="todoEnter"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button className="btn btn-success mx-3" onClick={onSave}>
        Save
      </button>
      <ul className="todoUl">
        {todos.map((todo) => (
          <li className="todoLi" key={todo.id}>
            <span> {todo.title}</span>
            <div className="todoBtn mx-0 my-1 mb-3">
              <button
                className="btn btn-sm btn-danger mx-2"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => toggle(todo.id)}
              >
                {todo.completed ? "Mark Not Completed" : "Mark Completed"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
