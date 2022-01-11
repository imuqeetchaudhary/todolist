import React from "react";

const Input = ({ newTodo, handleChange }) => {
  return (
    <input
      type="text"
      value={newTodo.title}
      placeholder="New Todo Item"
      autoComplete="off"
      onChange={handleChange}
    />
  );
};

export default Input;
