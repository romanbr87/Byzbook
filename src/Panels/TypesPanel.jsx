import React, { useState, useRef } from "react";
import TypesInputPanel from "../Element/TypesInputPanel";
import { fetchData } from "../api";
import { useEffect } from "react";
import "../styles/style.css";
import useFetch from "../hooks/useFetch";
import { apiRouteList } from "../utils/api-routes";

export default function TypesPanel(props) {
  const [types, setTypes] = useState([]);
  const [editable, setEditable] = useState(false);

  const newVal = useRef();

  const { data } = useFetch(`${apiRouteList.types}types`);

  const deleteVal = async (id) => {
    let index = findIndexOfTypeById(id);
    let val = types[index].gsx$type;
    let res = await fetchData(`${apiRouteList.types}deletetype`, "put", { data: id });

    if (!res) {
      alert("לא ניתן למחוק את הערך");
      return false;
    }

    var arr = [...types].filter((e, i) => i !== index);
    setTypes(arr);

    alert("ערך " + val + " נמחק");
    return true;
  };

  const updateVal = async (val, id) => {
    let index = findIndexOfTypeById(id);
    let sameVal = types.find((e) => e.gsx$type === val);
    if (sameVal !== undefined) {
      alert("הערך קיים במערכת");
      return false;
    }

    let res = await fetchData(`${apiRouteList.types}updatetype`, "put", {
      data: { val: val, id: id },
    });

    if (!res) {
      alert("לא ניתן לעדכן את הערך");
      return false;
    }

    var arr = [...types];
    arr[index].gsx$type = val;
    setTypes(arr);

    alert("הערך עודכן");
    return true;
  };

  const addNewVal = () => {
    const val = newVal.current.value;
    if (val.trim() === "") {
      alert("לא ניתן להוסיף ערך ריק");
      return;
    }

    fetchData(`${apiRouteList.types}addnewtype`, "post", { data: val })
      .then((data) => {
        setTypes([...types, data]);
        alert("הערך " + val + " התווסף לטבלה");
        newVal.current.value = "";
        setEditable(false);
      })
      .catch((err) => alert("לא ניתן להוסיף ערך קיים"));
  };

  const findIndexOfTypeById = (ID) => {
    let type = types.find((e) => e._id === ID);
    return types.indexOf(type);
  };

  useEffect(() => {
    //console.log (props.types);
    setTypes(data?.types);
  }, [data]);

  return (
    <div className="bg1">
      <div className={props.className} style={props.style}>
        <div className="bgc2 p-2 radius3 cursor-off">
          <div className="panel-heading">
            <h4 className="text-white title text-center">
              מסך עריכת סוגי עסקים
            </h4>
          </div>

          <div className="panel-body row gap-1 align-items-center justify-content-center  text-center">
            {types
              ?.sort((a, b) => Math.sign(a.gsx$type.localeCompare(b.gsx$type)))
              ?.map((type, i) => {
                return (
                  <TypesInputPanel
                    key={type.gsx$type}
                    type={type}
                    index={i}
                    updateVal={updateVal}
                    deleteVal={deleteVal}
                  ></TypesInputPanel>
                );
              })}
            {editable ? (
              <div className="input-group " style={{ direction: "ltr" }}>
                <div className="input-group-btn" style={{ direction: "ltr" }}>
                  <button
                    className="btn btn-default btn-sm"
                    onClick={(e) => {
                      setEditable(false);
                      newVal.current.value = "";
                    }}
                  >
                    <i
                      className="glyphicon glyphicon-remove"
                      style={{ color: "red" }}
                    ></i>
                  </button>
                  <button
                    className="btn btn-default btn-sm"
                    onClick={addNewVal}
                  >
                    <i
                      className="glyphicon glyphicon-ok"
                      style={{ color: "green" }}
                    ></i>
                  </button>
                </div>

                <input
                  type="text"
                  className="form-control input-sm"
                  placeholder="הכנס ערך"
                  ref={newVal}
                />
                <span className="input-group-addon">ערך חדש</span>
              </div>
            ) : (
              <button
                className="btn1 w_50 text-center fs_12 ls2 p-2 radius3 mt-1 shadow"
                onClick={(e) => setEditable(true)}
              >
                הוספת ערך חדש
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
