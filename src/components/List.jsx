import React, { useContext } from "react";
import { IsOpenContext, TodosContext } from "../App";
import TogglePopup from "./TogglePopup";

const List = ({
  handleDeleteClick,
  handleEditClick,
  togglePopup,
  handleEditChange,
}) => {
  const todos = useContext(TodosContext);
  const isOpen = useContext(IsOpenContext);

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
      {isOpen && (
        <TogglePopup
          togglePopup={togglePopup}
          handleEditClick={handleEditClick}
          handleEditChange={handleEditChange}
        />
      )}
    </div>
  );
};

export default List;
