import React from "react";
import Button from "./Button";

const List = ({ todos, handleDeleteClick }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          <input id={todo.id} onClick={handleDeleteClick} type="checkbox" />
          <p>{todo.title}</p>
          <Button className={"edit"}>Edit</Button>
        </div>
      ))}
    </div>
  );
};

export default List;
