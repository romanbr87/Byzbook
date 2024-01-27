import React, { useState, useEffect } from "react";
import useCities from "../hooks/useCities";
import "../styles/style.css";

export default function CityList(props) {
  const { cities } = useCities();

  const onKeyChangeSelVal = (e) => {
    var i = parseInt(e.target.value);
    var key = e.key;
    var code = e.charCode;
    if (key >= "א" && key <= "ת") {
      if (key != "ך" && key != "ם" && key != "ן" && key != "ף" && key != "ץ") {
        if (
          i + 1 < cities.length &&
          cities[i].startsWith(key) &&
          cities[i + 1].startsWith(key)
        ) {
          props.changeVal(cities[i + 1], "gsx$city");
        } else {
          var str = cities.find((e) => e.startsWith(key));
          props.changeVal(str, "gsx$city");
        }
      }
    }
  };
  //if (cities == null || cities == undefined) return (<p>null</p>)
  const onChangeHandler = (e, sign) => {
    if (props.sign === `editForm`) {
      props.handleInputChange(e);
    } else {
      props.handleInputChange(e, `יישוב`, `gsx$city`);
    }
  };

  return (
    <div className="col">
      <div className="longItem col-lg-6 col-md-6 col-sm-6 col-xs-6 w_100">
        <select
          className="form-control radius1"
          style={{ direction: "rtl" }}
          onChange={(e) => onChangeHandler(e)}
          onKeyPress={(e) => onKeyChangeSelVal(e)}
          value={props?.servSignValue}
        >
          {cities?.map((e, i) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
