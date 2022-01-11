import React from "react";

const Button = ({ className, children }) => {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
};

export default Button;
