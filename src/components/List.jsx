import React, { useState } from "react";
import TogglePopup from "./TogglePopup";

const List = ({ todos, handleDeleteClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          <input id={todo.id} onClick={handleDeleteClick} type="checkbox" />
          <p>{todo.title}</p>
          <button className="edit" onClick={togglePopup}>
            Edit
          </button>
        </div>
      ))}
      {isOpen && <TogglePopup togglePopup={togglePopup} />}
    </div>
  );
};

export default List;
