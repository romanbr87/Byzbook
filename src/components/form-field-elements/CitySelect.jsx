import React from 'react'
import CityList from '../../Element/CityList'

const CitySelect = ({handleInputChange,changeVal,notEmptyVal,}) => {
  return (
    <div className="formInput row ">
                  <div className="d-flex gap-1">
                    <div className="col-sm w_100">
                      <label className="label1 bgc1 text-light fs_15 p-1 w-100 radius1">
                        יישוב
                      </label>
                      <CityList
                        handleInputChange={handleInputChange}
                        changeVal={changeVal}
                        notEmptyVal={notEmptyVal}
                      ></CityList>
                    </div>
                    <div className="col-sm w_100">
                      <div className="d-flex flex-column">
                        <label className="label1 bgc1 text-light fs_15 p-1 w-100 radius1">
                          כתובת
                        </label>

                        <input
                          type="text"
                          className="form-control w_100 radius1"
                          placeholder="רחוב ומספר בית"
                          onChange={(e) =>
                            handleInputChange(e, `כתובת`, `gsx$address`)
                          }
                          style={{ direction: "rtl" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default CitySelect