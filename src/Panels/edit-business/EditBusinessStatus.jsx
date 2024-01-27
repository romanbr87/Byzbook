import React from "react";

const EditBusinessStatus = ({ servSignValue, handleInputChange }) => {
  return (
    <div className="col">
      {servSignValue ? (
        <div className="d-flex gap-1">
          <button className="btn4 w_50 radius3 p-1 cursor-off">ON</button>
          <button
            onClick={(e) => handleInputChange(e, `toggle`, false)}
            className="btn2 w_50 radius3 p-1"
          >
            כבה
          </button>
        </div>
      ) : (
        <div className="d-flex gap-1">
          <button className="btn2 w_50 radius3 p-1">OFF</button>
          <button
            className="btn4 w_50 radius3 p-1"
            onClick={(e) => handleInputChange(e, `toggle`, true)}
          >
            הפעל
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBusinessStatus;
