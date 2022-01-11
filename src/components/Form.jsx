import React, { useContext } from "react";
import { HandleSubmitContext } from "./Context";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const handleSubmit = useContext(HandleSubmitContext);

  return (
    <form className="item" onSubmit={handleSubmit}>
      <Input />
      <Button className={"add-item"}>+</Button>
    </form>
  );
};

export default Form;
