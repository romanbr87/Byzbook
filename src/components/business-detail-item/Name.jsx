import React from 'react'

const Name = ({data}) => {
  return (
    <>
    {data?.gsx$name && (
      <span className="bgc7 p-2 text-light radius2 w_50 fs_18 text-center ls4">
        {data?.gsx$name ?? "Default Name"}
      </span>
    )}
    </>
  )
}

export default Name