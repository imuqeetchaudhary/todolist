import React from "react";

const List = ({ newTodo, todos, handleChange, handleSubmit }) => {
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
