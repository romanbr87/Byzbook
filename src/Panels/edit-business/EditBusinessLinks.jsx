import React from "react";

const EditBusinessLinks = ({
  updatedServSign,
  formItem,
  details,
  handleInputChange,
}) => {
  const servSignValue = details?.[formItem.servSign] ?? "";

  return (
    <div className="d-flex flex-column">
      {formItem?.inputs?.map((item, i) => {
        let updatedValue =
          details?.[item?.servSign] === "null" ? "" : details?.[item?.servSign];

        return (
          <div key={i}>
            <label htmlFor={item?.labelTxt}>{item?.labelTxt}</label>
            <input
              type="text"
              defaultValue={updatedValue}
              className="form-control"
              onChange={(e) => handleInputChange(e, "links", item.servSign)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EditBusinessLinks;
