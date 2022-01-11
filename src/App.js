import "./App.css";
import React, { useState } from "react";
import List from "./components/List";

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
    setNewTodo({ id: todos.length + 1, title: e.target.value });
  };

  return (
    <div className="App">
      <List
        todos={todos}
        newTodo={newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
