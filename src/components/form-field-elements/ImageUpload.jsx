import React from 'react'

const ImageUpload = ({handleFileChange}) => {
  return (
    <div className="d-flex gap-1 p-1">
    <label className="p-2 bgc4 fs_color2" htmlFor="">
      {" "}
      העלאת תמונה
    </label>
    <input
      type="file"
      className="form-control p-1"
      onChange={handleFileChange}
    />
  </div>
  )
}

export default ImageUpload