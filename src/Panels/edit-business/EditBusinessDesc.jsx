import React from "react";

const EditBusinessDesc = ({ handleInputChange, details, formItem }) => {
  const servSignValue = details?.[formItem.servSign] ?? "";

  return (
    <textarea
      onChange={handleInputChange}
      style={{ minHeight: `150px` }}
      className="form-control"
      defaultValue={servSignValue}
    />
  );
};

export default EditBusinessDesc;
