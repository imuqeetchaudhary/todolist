import React from "react";
import Form from "./Form";
import Heading from "./Heading";
import List from "./List";

const ToDoBox = ({
  handleChange,
  handleSubmit,
  handleDeleteClick,
  handleEditClick,
  togglePopup,
  handleEditChange,
}) => {
  return (
    <div>
      <Heading />

      <div className="box">
        <List
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
          togglePopup={togglePopup}
          handleEditChange={handleEditChange}
        />

        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ToDoBox;
