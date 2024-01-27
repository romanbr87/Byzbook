import React from 'react'

const WorkHours = ({data}) => {
  return (
    <div className="row w_100 bg-light p-2 shadow radius2 d-flex align-items-center">
    <h2 className="h2 col fs_21 fs_color5 text-center radius2  ls5">
      שעות עבודה
    </h2>
    <div className="bgc5 col p-2 radius1 d-flex flex-column align-items-center gap-1 ">
      {data?.gsx$worktime?.map((item, i) => (
        <label className="text-black shadow ls3 p-1 fs_15" key={i}>
          {item}
        </label>
      ))}
    </div>
  </div>
  )
}

export default WorkHours