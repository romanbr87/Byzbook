import React, { useEffect } from "react";

const EditBusinessImg = ({ imgSign,image,handleInputChange }) => {
  const imageUrl = imgSign ? URL.createObjectURL(image) : image?.gsx$logo;


  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
    <img src={imageUrl} className="m-1" alt="logo" style={{maxHeight:`300px`, maxWidth: '300px'}} />
    <input
      onChange={(e) => handleInputChange(e, `img`)}
      type="file"
      className="form-control col"
      />
      </div>
  );
};

export default EditBusinessImg;
