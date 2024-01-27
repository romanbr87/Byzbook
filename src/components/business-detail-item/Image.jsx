import React from 'react'

const Image = ({data}) => {
  return (
    <div className="bgc1 p-2 radius3" style={{ height: `300px` }}>
    <img
      className="radius2"
      style={{ width: `100%`, height: `100%` }}
      src={data?.gsx$logo?.gsx$logo}
    />
  </div>
  )
}

export default Image