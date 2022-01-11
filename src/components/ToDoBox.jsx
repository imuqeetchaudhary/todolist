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
  handleEditClick,
  togglePopup,
  isOpen,
  handleEditChange,
}) => {
  return (
    <div>
      <Heading />

      <div className="box">
        <List
          todos={todos}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
          togglePopup={togglePopup}
          isOpen={isOpen}
          handleEditChange={handleEditChange}
        />

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
