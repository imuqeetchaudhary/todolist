import React, { useState } from "react";

const List = () => {
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
    <div>
      <div className="box" id="heading">
        <h1>To Do List Items</h1>
      </div>

      <div className="box">
        {todos.map((todo) => (
          <div className="item" key={todo.id}>
            <input type="checkbox" />
            <p>{todo.title}</p>
          </div>
        ))}

        <form className="item" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo.title}
            placeholder="New Todo Item"
            autoComplete="off"
            onChange={handleChange}
          />
          <button type="submit">+</button>
        </form>
      </div>
    </div>
  );
};

export default List;
