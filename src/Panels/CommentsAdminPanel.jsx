import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { fetchData } from "../api";
import CheckBox from "../Element/CheckBox";
import useFetch from "../hooks/useFetch";
import "../styles/style.css";
import { apiRouteList } from "../utils/api-routes";

export default function CommentsAdminPanel(props) {
  const [list, setList] = useState([]);
  const [defaultList, setDefaultList] = useState();

  const { data } = useFetch(`${apiRouteList.comment}commentsAdmin`);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(`${apiRouteList.comment}commentsAdmin`, "put", { data: list })
      .then((data) => {
        setDefaultList(list);
        //setList(list);
      })
      .catch((err) => {
        alert("לא ניתן לעדכן את הערכים");
      });
  };

  const changeItemByIndex = (i) => {
    setList((currentList) => {
      return currentList.map((item, index) =>
        index === i ? { ...item, gsx$active: !currentList[i].gsx$active } : item
      );
    });
  };

  const cancelChange = () => {
    setList(defaultList);
    var list1 = defaultList?.map((e) => e.gsx$active);
  };

  useEffect(() => {
    if (list?.length === 0 && data) {
      const ourData = data?.data;
      setList(ourData);
      setDefaultList(ourData);
    }
  }, [data, list]);

  return (
    <div className={`w_100 radius2`} style={props.style}>
      <form className="radius3" onSubmit={handleSubmit}>
        <div className="table-responsive radius2">
          <table
            className="table table-bordered table-striped table-condensed"
            style={{ backgroundColor: "white" }}
          >
            <caption>
              <div>
                <h3 className="title  text-center" style={{ padding: "100xp" }}>
                  {list.length} תגובות
                </h3>
              </div>
            </caption>
            <thead>
              <tr>
                {1 == 2 && (
                  <th className="text-right" style={{ width: "60px" }}>
                    #
                  </th>
                )}
                <th className="text-right" style={{ width: "30px" }}>
                  השבתה/הפעלה
                </th>
                <td style={{ width: "90px" }}>כינוי המגיב</td>
                <th className="text-right">תגובות</th>
                <th className="text-right" style={{ width: "90px" }}>
                  עסק
                </th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, i) => (
                <tr key={"i" + i}>
                  <td className="col-centered">
                    <CheckBox
                      className="col-centered"
                      value={item.gsx$active}
                      dataOn="מופעל"
                      dataOff="מושבת"
                      onChange={(e) => changeItemByIndex(i)}
                    ></CheckBox>
                  </td>
                  {1 == 2 && <td>{i + 1}</td>}
                  <td>{item.gsx$userName}</td>
                  <td style={isMobile ? { width: "30px" } : {}}>
                    {item.gsx$comment}
                  </td>
                  <td>
                    <a href={"/page/" + item.gsx$refID.gsx$link}>
                      {item.gsx$refID.gsx$name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="d-flex " colSpan="100">
                  <button type="submit" className="btn btn-primary pull-left">
                    להגיש שינויים
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger pull-right"
                    onClick={cancelChange}
                  >
                    ביטול
                  </button>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </form>
    </div>
  );
}
