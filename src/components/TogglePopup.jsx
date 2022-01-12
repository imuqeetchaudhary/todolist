import React, { useContext, useEffect, useRef } from "react";
import {
  HandleEditClickContext,
  HandleEditChangeContext,
  SelectedTodoContext,
} from "./Context";
import Popup from "./Popup";

const TogglePopup = () => {
  const handleEditClick = useContext(HandleEditClickContext);
  const handleEditChange = useContext(HandleEditChangeContext);
  const selectedTodo = useContext(SelectedTodoContext);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Popup>
        <form onSubmit={handleEditClick}>
          <input
            type="text"
            placeholder="Updated Todo Name Here"
            value={selectedTodo.title}
            onChange={handleEditChange}
            ref={inputRef}
          />
          <button className="add-item">+</button>
        </form>
      </Popup>
    </div>
  );
};

export default TogglePopup;
