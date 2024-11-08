import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const TodoInput = ({ newTaskName, handleSetTaskName, createTodo }) => (
  <div className="inputContainer">
    <input
      placeholder="Add a new task"
      type="text"
      name="name"
      id="name"
      value={newTaskName}
      onChange={handleSetTaskName}
    />
    <button type="button" disabled={!newTaskName.trim()} onClick={createTodo}>
      <PlusOutlined />
    </button>
  </div>
);

export default TodoInput;
