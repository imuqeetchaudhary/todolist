import React from "react";
import Form from "./Form";

const List = ({
  newTodo,
  todos,
  handleChange,
  handleSubmit,
  handleDeleteClick,
}) => {
  return (
    <div>
      <div className="box" id="heading">
        <h1>To Do List Items</h1>
      </div>

      <div className="box">
        {todos.map((todo) => (
          <div className="item" key={todo.id}>
            <input id={todo.id} onClick={handleDeleteClick} type="checkbox" />
            <p>{todo.title}</p>
          </div>
        ))}

        <Form
          newTodo={newTodo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default List;
