import React from "react";
import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";

const TodoItem = ({
  id,
  name,
  editingTodoId,
  setEditingTodoId,
  editTaskName,
  setEditTaskName,
  updateTodo,
  deleteTodo,
}) => (
  <li key={id} className="todoItem">
    {editingTodoId === id ? (
      <>
        <input
          type="text"
          name="newName"
          id="newName"
          className="editInput"
          value={editTaskName}
          onChange={(e) => setEditTaskName(e.target.value)}
        />
        <div className="btnWrap">
          <button type="button" onClick={() => updateTodo(id)}>
            <SaveOutlined />
          </button>
          <button type="button" onClick={() => setEditingTodoId(null)}>
            <CloseOutlined />
          </button>
        </div>
      </>
    ) : (
      <>
        <div className="textWrap">
          <p>{name}</p>
        </div>
        <div className="btnWrap">
          <button
            type="button"
            onClick={() => {
              setEditingTodoId(id);
              setEditTaskName(name);
            }}
          >
            <EditOutlined />
          </button>
          <button type="button" onClick={() => deleteTodo(id)}>
            <DeleteOutlined />
          </button>
        </div>
      </>
    )}
  </li>
);

export default TodoItem;
