import { useState } from "react";
import { nanoid } from "nanoid";
import bgImage from "./assets/images/bg-3.png";
import "./styles.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoInput/TodoList/TodoList";
import NoTaskMessage from "./components/TodoInput/NoTaskMessage/NoTaskMessage";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");
  const [editTaskName, setEditTaskName] = useState("");

  const createTodo = () => {
    const newTodo = {
      id: nanoid(),
      name: newTaskName,
    };

    setTodos([...todos, newTodo]);
    setNewTaskName("");
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(({ id }) => id !== todoId);
    setTodos(newTodos);
  };

  const updateTodo = (todoId) => {
    const index = todos.findIndex(({ id }) => id === todoId);

    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        name: editTaskName,
      };

      setTodos(updatedTodos);
      setEditingTodoId(null);
      setEditTaskName("");
    }
  };

  const handleSetTaskName = (e) => {
    setNewTaskName(e.target.value);
  };

  return (
    <>
      <div className="bgImage">
        <img src={bgImage} alt="Flowers" />
      </div>
      <div className="App">
        <TodoInput
          newTaskName={newTaskName}
          handleSetTaskName={handleSetTaskName}
          createTodo={createTodo}
        />

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            editingTodoId={editingTodoId}
            setEditingTodoId={setEditingTodoId}
            editTaskName={editTaskName}
            setEditTaskName={setEditTaskName}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ) : (
          <NoTaskMessage />
        )}
      </div>
    </>
  );
}
