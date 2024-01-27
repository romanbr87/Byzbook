import React, { useState, useEffect } from "react";
import "../styles/style.css";
import {
  AiOutlineDelete,
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import {RxReset} from 'react-icons/rx'
export default function TypesInputPanel(props) {
  const [val, setVal] = useState(props.type.gsx$type);
  const [disableAccept, setDisableAccept] = useState(true);
  const [disableCancel, setDisableCancel] = useState(true);

  const buttonCss = (val) => (val ? { cursor: "not-allowed" } : {});
  const changeVal = (txt) => {
    if (txt !== val) setVal(txt);
    setDisableAccept(txt === props.type.gsx$type || txt.trim() == "");
    setDisableCancel(txt === props.type.gsx$type);
  };

  const loadData = () => {
    setDisableAccept(true);
    setDisableCancel(true);
    setVal(props.type.gsx$type);
  };

  const deleteVal = async () => {
    let con = window.confirm("האם ברצונך למחוק את הערך " + val + "?");
    if (con) {
      await props.deleteVal(props.type._id);
    }
  };

  const updateVal = async () => {
    if (val.trim() == "") {
      alert("לא ניתן לעדכן ערך ריק");
      return;
    }

    props.updateVal(val, props.type._id).then(() => {
      setDisableAccept(true);
      setDisableCancel(true);
    });
  };

  return (
    <div className="input-group d-flex  input-group-sm">
      <input
        type="text"
        className="form-control input-sm p-1 "
        placeholder="הכנס ערך"
        value={val}
        onChange={(e) => changeVal(e.target.value)}
      />

      <div className="input-group-btn">
        <button className="btn btn-default btn-sm" onClick={deleteVal}>
          <AiOutlineDelete size={20} className="card" />
        </button>
        <button
          disabled={disableCancel}
          className="btn btn-default btn-sm"
          onClick={loadData}
        >
          <RxReset className="card" size={20} />
        </button>
        <button
          className="btn btn-default btn-sm"
          disabled={disableAccept}
          onClick={updateVal}
          style={buttonCss(disableAccept)}
        >
          <AiOutlineCheckCircle className="card" size={20} />
        </button>
      </div>
    </div>
  );
}
