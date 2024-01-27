import React, { useState, useEffect } from "react";
import SearchPanel from "../Panels/SearchPanel";
import Grouping from "./homepage/Grouping";
import Businesses from "./homepage/Businesses";
import useFetch from "../hooks/useFetch";
import useCities from "../hooks/useCities";
import { fetchData, soryByAtrr } from "../api";
import "../styles/style.css";
import { apiRouteList } from "../utils/api-routes";

export default function HomePage(props) {

  const [filter, setFilter] = useState({});
  const text =
    "ברוכים הבאים לאינדקס העסקים הגדול במדינה. כאן תוכלו למצוא מידע עדכני ומפורט ככל האפשר על העסקים השונים";
  const { data } = useFetch("/"); // types
  const { cities } = useCities();

  const types = soryByAtrr(data?.types, "gsx$type");
  const [businesses, setBusinesses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var dataForServer = Object.assign({}, filter);
    delete dataForServer.grouping;
    dataForServer.active = true;

    fetchData(`${apiRouteList.business}getBusinessesBySearch`, "POST", { data: dataForServer })
      .then((dataFromServer) => {
        setBusinesses(dataFromServer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setBusinesses(() => data?.businesses);
    //console.log(data);
  }, [data]);
  //

  if (!cities || !types) return <React.Fragment>NULL</React.Fragment>;
  return (
    <div className="bg1 w_100" style={{marginTop: "-30px"}}>
      <div
        className="jumbotron p-2 radius1 d-flex flex-column"
        style={{ padding: "0", borderRadius: "0" }}
      >
        <h3
          className=" p-3 fs_27 bgc1 fs_color1 mb-1 radius3"
          id="title"
          style={{ textAlign: "center" }}
        >
          אינדקס עסקים
        </h3>
        <p className="fs_15  ls4 p-3 radius2  text-center bg-primary text-light  ">
          {text}
        </p>
      </div>
      <div className="bgc3 p-2 radius2">
        <SearchPanel
          cities={cities}
          types={types}
          filter={filter}
          setFilter={setFilter}
          handleSubmit={handleSubmit}
        />
        <Grouping filter={filter} setFilter={setFilter} />
      </div>
      <Businesses
        className={`d-flex`}
        businesses={businesses}
        types={types}
        filter={filter}
      />
    </div>
  );
}
