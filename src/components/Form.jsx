import React, { useContext } from "react";
import { HandleChangeContext, HandleSubmitContext } from "./Context";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const handleChange = useContext(HandleChangeContext);
  const handleSubmit = useContext(HandleSubmitContext);

  return (
    <form className="item" onSubmit={handleSubmit}>
      <Input handleChange={handleChange} />
      <Button className={"add-item"}>+</Button>
    </form>
  );
};

export default Form;
