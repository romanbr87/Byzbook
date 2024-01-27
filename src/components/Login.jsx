import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getPost, serverURL } from "../api";
import { content } from "../utils/content/content";
import { isBrowser } from "react-device-detect";
import "../styles/style.css";
import "../styles/App.css";
import { apiRouteList } from "../utils/api-routes";
export default function Login() {
  const user = useSelector((state) => state.user);
  const nav = useNavigate();

  const [formValues, setFormValues] = useState({});
  const iconStyle = { backgroundColor: "#ffde6c", color: "#d17d00" };
  const authContent = content?.find((item) => item.name === `auth-content`);
  const loginContent = authContent.login;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = formValues;

    getPost(`${apiRouteList.auth}login`, reqBody)
      //.then (data => data.success ? window.location.href = "/" : alert ("אחד מהנתונים שהכנסת שגוי"))
      .then((data) => {
        if (data.success) {
          alert("אומת");
          window.location.href = "/";
        } else alert("אחד מהנתונים שהכנסת שגוי");
      })
      .catch((e) => {
        alert("תקלה בשרת");
        console.log(e);
      });
  }; //*/

  const handleInputChange = async (e, labelText) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [labelText]: value,
    }));
  };
  const handleError = (e) => {
    console.log(e);
    alert("!@");
    return true;
  }; //*/

  useEffect(() => {
    if (user.role === "admin") nav("/");
  });

  return (
    <React.Fragment>
      <div className="fluid-container">
        <div className="row">
          {isBrowser && <div className="w_35" />}
          <div className="align-items-center justify-content-center text-center col align-self-center mt-5">
            <form
              className={`bg1 text-center border border-white p-2 ${
                isBrowser && "w_50"
              }`}
              method="post"
              onSubmit={handleSubmit}
              onError={handleError}
              noValidate
            >
              <div className="panel-heading">
                <h1 className="fs_30 radius1 p-1 text-center bgc1 fs_color1">
                  כניסה
                </h1>
              </div>
              <div className="d-flex flex-column gap-1">
                {loginContent.form?.map((formItem, formIndex) => {
                  return (
                    <div
                      key={formIndex}
                      className="bgc7 radius2  fs_color1 p-2"
                    >
                      <label className="control-label fs_18  p-1 w_100">
                        {formItem.label}
                      </label>

                      <input
                        type={formItem.type}
                        value={formValues[formItem.name]}
                        className="form-control"
                        placeholder={formItem.placeholder}
                        title={formItem.label}
                        onChange={(e) => handleInputChange(e, formItem.name)}
                        name="username"
                        {...(formItem.required ? { required: true } : {})}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                type="submit"
                className="btn3 p-2 w_30 fs_18 radius2"
                style={{ marginBottom: "-2px", marginTop: "10px" }}
              >
                כניסה
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
