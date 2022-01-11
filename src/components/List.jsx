import React from "react";

const List = ({ todos, handleDeleteClick }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          <input id={todo.id} onClick={handleDeleteClick} type="checkbox" />
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
