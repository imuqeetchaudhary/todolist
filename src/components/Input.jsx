import React, { useContext } from "react";
import { NewTodosContext } from "../App";

const Input = ({ handleChange }) => {
  const newTodo = useContext(NewTodosContext);

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
