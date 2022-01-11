import React from "react";
import Form from "./Form";
import Heading from "./Heading";
import List from "./List";

const ToDoBox = ({
  newTodo,
  todos,
  handleChange,
  handleSubmit,
  handleDeleteClick,
}) => {
  return (
    <div>
      <Heading />

      <div className="box">
        <List todos={todos} handleDeleteClick={handleDeleteClick} />

        <Form
          newTodo={newTodo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ToDoBox;
