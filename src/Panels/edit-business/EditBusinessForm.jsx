import React, { useEffect, useState } from "react";
import EditBusinessStatus from "./EditBusinessStatus";
import CityList from "../../Element/CityList";
import EditBusinessPhone from "./EditBusinessPhone";
import EditBusinessLinks from "./EditBusinessLinks";
import EditBusinessWorkTime from "./EditBusinessWorkTime";
import TagsInput from "../../Element/TagsInput";
import EditBusinessImg from "./EditBusinessImg";
import EditBusinessDesc from "./EditBusinessDesc";

const EditBusinessForm = ({
  imgSign,
  setImgSign,
  details,
  setDetails,
  formItem,
  servSignValue,
}) => {
  const handleInputChange = (e, sign, val, i = undefined) => {
    const value = e?.target?.value ?? e;
    let arr = details[formItem?.servSign];
    if (sign === "toggle" || sign === `tags`) {
      setDetails((prevState) => ({
        ...prevState,
        [formItem?.servSign]: value,
      }));
    } else if (sign === `img`) {
      setImgSign(true);
      setDetails((prevState) => ({
        ...prevState,
        [formItem?.servSign]: e.target.files[0],
      }));
    } else if (sign === `tel` || sign === "workHour") {
      arr[val] = value;
      setDetails((prevState) => ({
        ...prevState,
        [formItem?.servSign]: arr,
      }));
    } else if (sign === `links`) {
      setDetails((prevState) => ({
        ...prevState,
        [val]: value,
      }));
    } else {
      setDetails((prevState) => ({
        ...prevState,
        [formItem?.servSign]: value,
      }));
    }
  };
  let updatedServSign = servSignValue === 'null' ? '' : servSignValue
  return (
    <div className=" cursor border1 radius2 fs_color1 align-items-center p-2 row gap-1 w_100 justify-content-center">
      <label
        htmlFor=""
        className={`text-center bgc2 p-1 radius2
      ${formItem?.type === `workArray` ? "w_50" : "w_33"}`}
      >
        {formItem?.labelTxt}
      </label>
      {formItem?.type === `text` || formItem?.type === `email` ? (
        <input
          type={formItem?.type}
          value={updatedServSign}
          onChange={(e) => handleInputChange(e)}
          className="form-control col"
        />
      ) : formItem?.type === `toggle` ? (
        <EditBusinessStatus
          handleInputChange={handleInputChange}
          servSignValue={servSignValue}
        />
      ) : formItem?.type === `city` ? (
        <CityList
          sign={`editForm`}
          handleInputChange={handleInputChange}
          servSignValue={servSignValue}
        />
      ) : formItem?.type === `phone` ? (
        <EditBusinessPhone
          handleInputChange={handleInputChange}
          formItem={formItem}
          details={details}
          servSignValue={servSignValue}
        />
      ) : formItem?.type === `links` ? (
        <EditBusinessLinks updatedServSign={updatedServSign}
          handleInputChange={handleInputChange}
          details={details}
          formItem={formItem}
        />
      ) : formItem?.type === `workArray` ? (
        <EditBusinessWorkTime
          handleInputChange={handleInputChange}
          details={details}
          formItem={formItem}
        />
      ) : formItem?.type === `tags` ? (
        <TagsInput
          handleInputChange={handleInputChange}
        />
      ) : formItem?.type === `img` ? (
        <EditBusinessImg
          imgSign={imgSign}
          image={details.gsx$logo}
          handleInputChange={handleInputChange}
        />
      ) : formItem?.type === `textarea` ? (
        <EditBusinessDesc
          handleInputChange={handleInputChange}
          details={details}
          formItem={formItem}
        />
      ) : (
        ``
      )}
    </div>
  );
};

export default EditBusinessForm;
