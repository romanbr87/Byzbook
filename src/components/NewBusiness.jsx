import React, { useState, useEffect } from "react";
import { isEqual } from "lodash";
import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import useCities from "../hooks/useCities";

import "../styles/style.css";
import { content } from "../utils/content/content";
import TagsComponent from "../Element/TagsInput";
import Button from "../Element/Button";
import businessServices from "../services/business.service";
import ImageUpload from "./form-field-elements/ImageUpload";
import CitySelect from "./form-field-elements/CitySelect";
import PhoneContactSection from "./form-field-elements/PhoneContactSection";
import LinksSection from "./form-field-elements/LinksSection";
import WorkHours from "./form-field-elements/WorkHours";
import CommentsField from "./form-field-elements/CommentsField";
import TypeSelect from "./form-field-elements/TypeSelect";
import BusinessCard from "../Panels/BusinessCard"

export default function NewBusiness(props) {
  const navigate = useNavigate();

  const newBusinessContent = content.find(
    (item) => item.name === `new-business`
  );

  const contactForm = newBusinessContent.form.contact;
  const linksForm = newBusinessContent.form.links;
  const commentForm = newBusinessContent.form.comment;
  const workHoursForm = newBusinessContent.form.workHours;
  const descForm = newBusinessContent.form.desc;
  const [errMsg, setErrMsg] = useState({ state: false, text: `` });
  const [formValues, setFormValues] = useState({});
  const [err, setErr] = useState(null);
  const [list, setList] = useState(null);
  const [defaultData, setDefaultData] = useState(null);
  const [changed, setChanged] = useState();
  const [localData, setLocalData] = useState();
  const [editable, setEditable] = useState(true);
  const { data } = useFetch("/");
  const types =
    data?.types?.sort((a, b) => a.gsx$type.localeCompare(b.gsx$type)) || [];
  const { cities } = useCities();

  const text =
    "ברוכים הבאים למסך ערכית עסקים. כאן תוכלו לערוך את העסקים ולהוסיף עסקים חדשים. כל עסק ניתן להציג על המסך ולראות איך הוא נראה";
  const whetherEmpty = (val) => (val === "" || val === undefined ? null : val);
  const notEmptyVal = (key, idx) => {
    try {
      let val = idx != undefined ? localData[key][idx] : localData[key];
      return val === "" || val === null ? "" : val;
    } catch (e) {
      return undefined;
    }
  };

  const changeVal = (val, key) => {
    var obj = Object.assign({}, localData);
    let insertedVal = whetherEmpty(val);
    obj[key] = insertedVal;
    setLocalData(obj);
    checkValues(obj);
  };

  const checkValues = (data) => {
    var change = !isEqual(formValues, defaultData);
    setChanged(change);
    return change;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addNewBusiness();
  };

  const addNewBusiness = async () => {
    const data = formValues;
    if (data?.$gsx$type) data.gsx$type = types[0]?._id;
    if (data?.$gsx$city) data.gsx$city = cities[0];
    data.gsx$active = false;
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    try {
      businessServices.createBus(formData);
    }

    catch (err) {
      console.log(err);
    }

    window.location.href = "/"
  };

  useEffect(() => {
    console.clear();

    if (props.err) {
      setErr(props.err);
    } else if (
      list?.length === 0 ||
      cities?.length === 0 ||
      types?.length === 0
    ) {

      //setFormValues(data);
      //setLocalData (newBusinessData)
    }
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prevValues) => ({
      ...prevValues,
      file: file,
    }));
  };
  const handleInputChange = async (e, section, labelText, index) => {
    let value;

    if (section !== "tags" && labelText !== `gsx$logo`) {
      value = e.target.value;
    } else {
      value = e;
    }

    if (labelText === "gsx$logo") {
      value = e.target.files[0];
    }
    if (index !== null && index !== undefined && index < 3) {
      let updatedForm = { ...formValues };
      if (!updatedForm[labelText]) updatedForm[labelText] = [null, null, null];
      updatedForm[labelText][index] = value;
      value = updatedForm[labelText];
    }
    setFormValues((s) => ({ ...s, [labelText]: value }));
  };

  if (types?.length === 0) return <></>;
  return (
    <React.Fragment>
      <div className="container p-2 mb-5">
        <div className="row listRow1">
          <div className="col-sm d-flex flex-column bg-secondary align-items-center justify-content-center text-center radius8 p-3">
            <h2
              className="p-2 radius5 w_30 shadow fs_27 fw-bold bgc1 fs_color1 text-center"
              id="title"
            >
              עסק חדש
            </h2>

            {errMsg.state && <>{errMsg.text}</>}
            <form id="form" onSubmit={handleSubmit}>
              <TypeSelect
                handleInputChange={handleInputChange}
                types={types}
              />

              <ImageUpload handleFileChange={handleFileChange} />

              <CitySelect
                changeVal={changeVal}
                handleInputChange={handleInputChange}
                notEmptyVal={notEmptyVal}
              />
              {/* Phone Contact Section ----------------- */}
              <PhoneContactSection
                contactForm={contactForm}
                handleInputChange={handleInputChange}
              />
              {/* ---------------------------- */}
              <LinksSection
                handleInputChange={handleInputChange}
                linksForm={linksForm}
              />

              {/* ----------------------------------------- */}
              <CommentsField
                commentForm={commentForm}
                handleInputChange={handleInputChange}
              />
              {/* -------------------------- */}
              <label className="label1 text-white bgc8 radius2 p-1">
                {workHoursForm.title}
              </label>
              <WorkHours
                handleInputChange={handleInputChange}
                workHoursForm={workHoursForm}
              />

              <div className="">
                <label className="text-white fs_18">{descForm.label}</label>
                <textarea
                  className="form-control"
                  rows="5"
                  onChange={(e) => handleInputChange(e, `תיאור`, `gsx$desc`)}
                  placeholder={descForm.placeholder}
                  {...(descForm.required ? { required: true } : {})}
                ></textarea>
              </div>

              {/* ------------------------- */}

              <div className="d-flex  flex-column">
                <label className="bgc1 radius2 text-center fs_color1 ls2 fs_18  mt-3 mb-2 p-1">
                  תגיות
                </label>
                <TagsComponent
                  handleInputChange={handleInputChange}
                  setFormValues={setFormValues}
                />
              </div>

              {/* --------------------- */}
              <div className="mt-3 mb-3 d-flex align-items-center p-2 justify-content-center">
                <Button
                  type="submit"
                  className="btn2 btn radius2 w_50 btn-warning btn-md pull-left"
                  btnText={`שמירה`}
                />

              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
