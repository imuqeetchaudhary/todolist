import React from "react";
import Popup from "./Popup";

const TogglePopup = ({ togglePopup, handleEditClick, handleEditChange }) => {
  return (
    <div>
      <Popup handleClose={togglePopup}>
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
