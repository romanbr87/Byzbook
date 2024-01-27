import React from 'react'

const TypeSelect = ({types,handleInputChange}) => {
  return (
    <div className="formInput row p-2 ">
    <div className="col-sm ">
      <div className="col-sm row gap-1">
        <label className="label1 bgc4 col-sm fs_color2 p-2 radius1">
          <span className="astrix">*</span>סוג עסק
        </label>
        <select
          className=" p-1 col-sm form-control mb-2"
          onChange={(e) =>
            handleInputChange(e, `סג עסק`, "gsx$type")
          }
        >
          {types?.map((e, j) => {
            return (
              <option key={e.gsx$type} value={e._id}>
                {j + 1 + ". " + e.gsx$type}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col-sm row gap-1">
        <label className="label1 bgc4 col-sm fs_color2 p-2 radius1">
          <span className="astrix">*</span>שם עסק
        </label>

        <input
          type="text"
          className="p-1 col-sm form-control"
          placeholder="שם עסק"
          onChange={(e) =>
            handleInputChange(e, `שם עסק`, `gsx$name`)
          }
          style={{ direction: "rtl" }}
          required
        />
      </div>
    </div>
  </div>
  )
}

export default TypeSelect