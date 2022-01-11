import "./App.css";
import React, { useState } from "react";
import ToDoBox from "./components/ToDoBox";

// Contexts

export const TodosContext = React.createContext();
export const NewTodosContext = React.createContext();
export const IsOpenContext = React.createContext();
export const TodoIdContext = React.createContext();

function App() {
  const todosArray = [
    {
      id: 1,
      title: "ToDo 1",
    },
    {
      id: 2,
      title: "ToDo 2",
    },
    {
      id: 3,
      title: "ToDo 3",
    },
  ];

  // States

  const [todos, setTodos] = useState(todosArray);
  const [newTodo, setNewTodo] = useState({ id: null, title: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [editTodo, setEditTodo] = useState({ id: null, title: "" });

  // Handler Functions

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo({ id: null, title: "" });
  };

  const handleChange = (e) => {
    setNewTodo({ id: Date.now(), title: e.target.value });
  };

  const handleDeleteClick = (e) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== +e.target.id;
      })
    );
  };

  const togglePopup = (e) => {
    setIsOpen(!isOpen);
    setTodoId(+e.target.parentNode.firstChild.id);
  };

  const handleEditClick = (e) => {
    const newArray = todos;

    newArray.forEach((todo) => {
      if (todo.id === todoId) {
        todo.title = editTodo.title;
      }
    });

    setTodos(newArray);
    setIsOpen(!isOpen);
  };

  const handleEditChange = (e) => {
    setEditTodo({ id: todoId, title: e.target.value });
  };

  return (
    <div className="App">
      <TodosContext.Provider value={todos}>
        <NewTodosContext.Provider value={newTodo}>
          <IsOpenContext.Provider value={isOpen}>
            <TodoIdContext.Provider value={todoId}>
              <ToDoBox
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
                togglePopup={togglePopup}
                handleEditChange={handleEditChange}
              />
            </TodoIdContext.Provider>
          </IsOpenContext.Provider>
        </NewTodosContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
