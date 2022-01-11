import React, { useContext } from "react";
import { HandleEditClickContext, HandleEditChangeContext } from "./Context";
import Popup from "./Popup";

const TogglePopup = () => {
  const handleEditClick = useContext(HandleEditClickContext);
  const handleEditChange = useContext(HandleEditChangeContext);

  return (
    <div>
      <Popup>
        <form onSubmit={handleEditClick}>
          <input
            type="text"
            placeholder="Updated Todo Name Here"
            onChange={handleEditChange}
          />
          <button className="add-item">+</button>
        </form>
      </Popup>
    </div>
  );
};

export default TogglePopup;
