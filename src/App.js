import "./App.css";
import React, { useState } from "react";
import ToDoBox from "./components/ToDoBox";

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

  const [todos, setTodos] = useState(todosArray);
  const [newTodo, setNewTodo] = useState({ id: null, title: "" });

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

  return (
    <div className="App">
      <ToDoBox
        todos={todos}
        newTodo={newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
