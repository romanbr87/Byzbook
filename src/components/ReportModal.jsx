import React, { useState, useEffect, useRef } from "react";
import { fetchData } from "../api";
import "../styles/style.css";
import { apiRouteList } from "../utils/api-routes";
export default function ReportModal(props) {
  const [txt, setTxt] = useState("");
  const txtInput = useRef(null);

  useEffect(() => {
    if (txtInput.current) txtInput.current.focus();
  }, []);
  const submit = async (e) => {
    alert(txt);
    if (txt.trim() === "") {
      alert("לא ניתן להגיש טקסט ריק");
      return;
    }

    let data = {
      gsx$refId: props.user._id,
      gsx$desc: txt,
    };

    fetchData(`${apiRouteList.report}addreport`, "POST", data)
      .then(() => {
        alert("הדיווח הוגש בהצלחה");
        setTxt("");
      })
      .catch(() => {
        alert("הדיווח לא הוגש");
      });
  };
  const close = () => {
    setTxt(``);
    props.setReportModal({ show: false });
  };
  return (
    <div
      className="modal1 bg-light radius3 shadow border1 border-dark border-2  p-3"
      dir="rtl"
    >
      <div className="">
        <h4 className="bgc1 fs_color1 p-3 radius4 text-center">
          {"דיווח על העסק " + props.user.gsx$name}
        </h4>
      </div>
      <div>
        <textarea
          id="txtArea"
          className="form-control p-4 bg-white fs_18 ls4 radius3 mb-2 mt-2"
          rows="5"
          placeholder="דיווח"
          style={{ resize: "none", width: "100%", borderRadius: "0" }}
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          ref={txtInput}
        ></textarea>
      </div>
      <div className=" d-flex p-2 align-items-center justify-content-center gap-4">
        <button
          type="button"
          className="btn btn-secondary p-2 fs_15 ls3 "
          onClick={() => close()}
          // Add space to the right of the first button
        >
          לסגור X
        </button>
        <button
          type="button"
          className="btn btn-primary  p-2 fs_15 ls3 "
          onClick={submit}
          // Add space to the left of the second button
        >
          להגיש דיווח
        </button>
      </div>
    </div>
  );
}
