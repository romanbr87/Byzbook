import React from 'react'
import { isBrowser } from 'react-device-detect'

const Links = ({data}) => {
  return (
    <div className="row w_100 bg-light p-2 shadow radius2 d-flex align-items-center">
          <h2 className="h2 col fs_21 fs_color5 text-center radius2  ls5">
            קישורים
          </h2>
          <div className=" bgc5 col p-2 radius1 d-flex flex-column gap-1 align-items-center">
            {data?.gsx$website && (
              <a
                href={data?.gsx$website}
                className={`dec-off btn1 p-1 radius2 cursor p-2 shadow fs_15 fw-bold ls3 text-white
                ${isBrowser ? "w_50" : "w_100"}`}
              >
                אתר
              </a>
            )}
            {data?.gsx$facebook && (
              <a
                href={data?.gsx$facebook}
                className={`dec-off btn1 p-1 radius2 cursor p-2 shadow fs_15 fw-bold ls3 text-white
                ${isBrowser ? "w_50" : "w_100"}`}
              >
                פייסבוק
              </a>
            )}
            {data?.gsx$instagram && (
              <a
                href={data?.gsx$instagram}
                className={`dec-off btn1 p-1 radius2 cursor p-2 shadow fs_15 fw-bold ls3 text-white
                ${isBrowser ? "w_50" : "w_100"}`}
              >
                אינסטגרם
              </a>
            )}
          </div>
        </div>
  )
}

export default Links