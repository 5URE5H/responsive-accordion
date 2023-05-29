import React from "react";
import ReactDOM from "react-dom";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className="loader-container">
      <div className="loader"></div>
    </div>,
    document.getElementById("loader")
  );
};
