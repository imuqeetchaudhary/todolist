import React, { useContext } from "react";
import { TogglePopupContext } from "../App";

const Popup = ({ children }) => {
  const togglePopup = useContext(TogglePopupContext);

  return (
    <div className="popup-box">
      <div className="pop-box">
        <span className="close-icon" onClick={togglePopup}>
          x
        </span>
        {children}
      </div>
    </div>
  );
};

export default Popup;
