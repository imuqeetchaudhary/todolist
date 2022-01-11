import React, { useContext } from "react";
import { HandleChangeContext, NewTodosContext } from "./Context";

const Input = () => {
  const newTodo = useContext(NewTodosContext);
  const handleChange = useContext(HandleChangeContext);

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
