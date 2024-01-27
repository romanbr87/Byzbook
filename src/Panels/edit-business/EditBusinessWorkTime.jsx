import React from "react";

const EditBusinessWorkTime = ({ details, formItem, handleInputChange }) => {
  //   const numberOfInputs =
  const servSignValue = details?.[formItem.servSign] ?? "";
  return [1, 2, 3].map((item, i) => {
    return (
      <input
        type="text"
        key={i}
        className="form-control"
        defaultValue={servSignValue[i]}
        onChange={(e) => handleInputChange(e, "workHour", i)}
      />
    );
  });
};

export default EditBusinessWorkTime;
