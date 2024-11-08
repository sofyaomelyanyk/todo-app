import { useState } from "react";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./styles.css";
import bgImage from "./assets/images/bg-3.png";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");
  const [editTaskName, setEditTaskName] = useState("");

  const createTodo = () => {
    const newTodo = {
      id: Date.now(),
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

  const handleChangeTaskName = (e) => {
    setEditTaskName(e.target.value);
  };

  console.log(todos.length);

  return (
    <>
      <div className="bgImage">
        <img src={bgImage} alt="" />
      </div>
      <div className="App">
        <div className="inputContainer">
          <input
            placeholder="Add a new task"
            type="text"
            name="name"
            id="name"
            value={newTaskName}
            onChange={(e) => handleSetTaskName(e)}
          />

          <button
            type="button"
            disabled={!newTaskName.trim()}
            onClick={() => createTodo()}
          >
            <PlusOutlined />
          </button>
        </div>
        {todos.length > 0 ? (
          <ul className="todoList">
            {!!todos.length &&
              todos.map(({ id, name }) => (
                <li key={id} className="todoItem">
                  {editingTodoId === id ? (
                    <>
                      <input
                        type="text"
                        name="newName"
                        id="newName"
                        className="editInput"
                        value={editTaskName}
                        onChange={(e) => handleChangeTaskName(e)}
                      />
                      <div className="btnWrap">
                        <button type="button" onClick={() => updateTodo(id)}>
                          <SaveOutlined />
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingTodoId(null)}
                        >
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
              ))}
          </ul>
        ) : (
          <div className="noTaskWrap">
            <p>You have no any todos yet</p>
          </div>
        )}
      </div>
    </>
  );
}
