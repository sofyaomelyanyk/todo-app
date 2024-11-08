import React from "react";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = ({
  todos,
  editingTodoId,
  setEditingTodoId,
  editTaskName,
  setEditTaskName,
  updateTodo,
  deleteTodo,
}) => (
  <ul className="todoList">
    {todos.map(({ id, name }) => (
      <TodoItem
        key={id}
        id={id}
        name={name}
        editingTodoId={editingTodoId}
        setEditingTodoId={setEditingTodoId}
        editTaskName={editTaskName}
        setEditTaskName={setEditTaskName}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
);

export default TodoList;
