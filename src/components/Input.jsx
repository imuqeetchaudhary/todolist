import React, { useContext, useRef, useEffect } from "react";
import { HandleChangeContext, NewTodosContext } from "./Context";

const Input = () => {
  const newTodo = useContext(NewTodosContext);
  const handleChange = useContext(HandleChangeContext);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      value={newTodo.title}
      placeholder="New Todo Item"
      autoComplete="off"
      onChange={handleChange}
      ref={inputRef}
    />
  );
};

export default Input;
