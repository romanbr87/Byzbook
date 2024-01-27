import React, { useState, useEffect } from "react";
import { isBrowser } from "react-device-detect";
import "../styles/style.css";
import { fetchData } from "../api";
import useFetch from "../hooks/useFetch";
import { apiRouteList } from "../utils/api-routes";
import { BsTrash3Fill } from "react-icons/bs";

export default function ContactmessagesPanel(props) {
  const [list, setList] = useState([]);
  const { data } = useFetch(`${apiRouteList.messages}contactmessages`);

  const delMsg = (obj) => {
    var res = window.confirm("האם ברצונך למחוק את ההודעה?");
    if (!res) return;

    fetchData(`${apiRouteList.messages}deletemessage`, "put", { data: obj._id })
      .then((e) => {
        var arr = [...list];
        arr = arr.filter((e) => e._id !== obj._id);
        setList(arr);
        alert("ההודעה נמחק");
      })
      .catch((e) => {
        alert("לא ניתן למחוק את ההודעה");
      });
  };

  const MessagesItem = ({ element }) => {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="title text-center">
          {element?.gsx$title || "ללא הודעה"}
        </h1>
        <div className="p-2" style={{ marginTop: "-3%" }}>
          {element.gsx$sendersName && (
            <span className="text caption fs_color1">
              שם: {element.gsx$sendersName}
            </span>
          )}
          <br />
          {element.gsx$contactEmail && (
            <span className="text caption fs_color1">
              אימייל ליצירת קשר:&nbsp;
              <a
                className="dec-off fs_color1 overflow_hidden"
                href={"mailto:" + element.gsx$contactEmail}
              >
                {element.gsx$contactEmail}
              </a>
            </span>
          )}
          <br />
          {element.gsx$contactPhone && (
            <span className="text caption fs_color1">
              טלפון ליצירת קשר:&nbsp;
              <a
                className="dec-off fs_color1"
                href={"tel:" + element.gsx$contactPhone}
              >
                {element.gsx$contactPhone}
              </a>
            </span>
          )}
          <div style={{ minHeight: "50px" }}>
            <label className="text fs_color1">הודעה: </label>
            <span className="text fs_color1">{element.gsx$message}</span>
          </div>
        </div>
        <div className="panel-footer">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => delMsg(element)}
          >
            למחוק הודעה
          </button>
        </div>
        <hr />
      </div>
    );
  };

  useEffect(() => {
    if (data && list.length === 0) {
      setList(data.data);
    }
  }, [data, list]);

  return (
    <div className="w-100">
      {isBrowser ? (
        <table className="table table-bordered table-striped table-condensed">
          <caption className="title text-center">{list.length} הודעות</caption>
          <thead>
            <tr>
              <td style={{ width: "10px" }}>מחיקה</td>
              <th>הודעה</th>
              <th style={{ width: "15%" }}>שם</th>
              <th style={{ width: "25%" }}>אימייל</th>
              <th style={{ width: "14%" }}>טלפון</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr className="col-sm" key={i}>
                <td>
                  <BsTrash3Fill
                    size={20}
                    onClick={() => delMsg(item)}
                    style={{
                      fontSize: "20px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  />
                </td>
                <td>{item.gsx$message}</td>
                <td>{item.gsx$sendersName}</td>
                <td>
                  <a href={"mailto:" + item.gsx$contactEmail}>
                    {item.gsx$contactEmail}
                  </a>
                </td>
                <td>
                  <a href={"tel:" + item.gsx$contactPhone}>
                    {item.gsx$contactPhone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-100">
          {list.map((item, i) => (
            <MessagesItem element={item} key={"i" + i} />
          ))}
        </div>
      )}
    </div>
  );
}
