import React, { useContext } from "react";
import {
  HandleDeleteClickContext,
  IsOpenContext,
  TodosContext,
  TogglePopupContext,
} from "./Context";
import TogglePopup from "./TogglePopup";

const List = () => {
  const todos = useContext(TodosContext);
  const isOpen = useContext(IsOpenContext);
  const handleDeleteClick = useContext(HandleDeleteClickContext);
  const togglePopup = useContext(TogglePopupContext);

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
      {isOpen && <TogglePopup />}
    </div>
  );
};

export default List;
