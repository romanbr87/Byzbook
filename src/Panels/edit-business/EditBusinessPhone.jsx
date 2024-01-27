import React, { useEffect } from "react";

const EditBusinessPhone = ({ index, details, handleInputChange, formItem }) => {
  const servSignValue = details?.[formItem.servSign] ?? "";

  return [1, 2, 3].map((item, i) => (
    <input
      type="tel"
      key={i}
      defaultValue={servSignValue[i]}
      className="form-control col-sm"
      onChange={(e) => handleInputChange(e, `tel`, i)}
    />
  ));
};

export default EditBusinessPhone;
