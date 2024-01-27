import React, { useState, useEffect } from "react";

import { isBrowser } from "react-device-detect";
import List1 from "../List1";
import List2 from "../List2";

import { Provider } from "../../api";
import "../../styles/style.css";

export default function Businesses({ businesses, types, filter }) {
  const [user, setUser] = useState({});

  const List = (listProps) => {
    return isBrowser ? <List1 {...listProps} /> : <List2 {...listProps} />;
  };

  const findTypeById = (ID) => {
    let type = types.find((e) => e._id === ID);
    return type.gsx$type;
  };

  const filterAlphabeticaly = (letter, arr) =>
    arr.filter((item) => item.gsx$name.charAt(0) === letter);
  const filterByType = (type, arr) =>
    arr.filter((item) => findTypeById(item.gsx$type) === type);

  const listData = () => {
    let data = { search: filter.searchText };
    if (filter?.type) data.type = findTypeById(filter.type);
    if (filter?.city) data.city = filter.city;

    return data;
  };

  const searchText = () => {
    let text = "";
    if (filter?.searchText || filter?.city || filter?.type)
      text = "תוצאות החיפוש ";
    if (filter?.searchText) text += " של " + filter.searchText;
    if (filter?.city) text += " ב" + filter.city;
    if (filter?.type) text += " מטיפוס " + findTypeById(filter.type);

    return text;
  };

  if (!types || businesses === undefined) return <h1>NULL</h1>;
  return (
    <div className="d-flex w_100 align-items-center flex-column justify-content-center mb-4">
      {businesses?.length === 0 && (
        <h2 className="pageTitle">{searchText()}</h2>
      )}
      {businesses?.length === 0 ? (
        ""
      ) : (
        <Provider value={setUser}>
          {filter.grouping === "none" || !filter.grouping ? (
            <List list={businesses} filterBy={undefined} {...listData()}></List>
          ) : filter.grouping === "alphabetical" ? (
            <List
              list={businesses}
              filterBy={"אבגדהוזחטיכלמנסעפצקרשת".split("")}
              filterFunc={filterAlphabeticaly}
              {...listData()}
            ></List>
          ) : (
            filter.grouping === "categories" && (
              <List
                list={businesses}
                filterBy={types.map((type) => type.gsx$type)}
                filterFunc={filterByType}
                {...listData()}
              ></List>
            )
          )}
        </Provider>
      )}
    </div>
  );
}
