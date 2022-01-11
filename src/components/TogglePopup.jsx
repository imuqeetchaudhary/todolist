import React from "react";
import Popup from "./Popup";

const TogglePopup = ({togglePopup}) => {
  return (
    <div>
      <Popup
        content={
          <>
            <input type="text" placeholder="Updated Todo Name Here"></input>
            <button className="add-item">+</button>
          </>
        }
        handleClose={togglePopup}
      />
    </div>
  );
};

export default TogglePopup;
