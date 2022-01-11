import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = ({ newTodo, handleSubmit, handleChange }) => {
  return (
    <form className="item" onSubmit={handleSubmit}>
      <Input newTodo={newTodo} handleChange={handleChange} />
      <Button />
    </form>
  );
};

export default Form;
