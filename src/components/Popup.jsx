import React from "react";

const Popup = ({ children, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="pop-box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        {children}
      </div>
    </div>
  );
};

export default Popup;
