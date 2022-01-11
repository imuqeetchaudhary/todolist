import React from "react";
import Form from "./Form";
import Heading from "./Heading";
import List from "./List";

const ToDoBox = () => {
  return (
    <div>
      <Heading />

      <div className="box">
        <List />

        <Form />
      </div>
    </div>
  );
};

export default ToDoBox;
