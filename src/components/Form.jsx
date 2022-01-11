import React from "react";

const Form = ({ newTodo, handleSubmit, handleChange }) => {
  return (
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
  );
};

export default Form;
