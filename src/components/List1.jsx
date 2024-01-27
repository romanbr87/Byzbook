import React from "react";
import BusinessCard from "../Panels/BusinessCard";
import { divideArray } from "../api";
import "../styles/style.css";
import { useMediaQuery } from "react-responsive";

export default function List1(props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const soryByName = (arr) =>
    arr.sort((a, b) => a?.gsx$name?.localeCompare(b?.gsx$name));

  const searchText = () => {
    let text = "";
    if (props?.search || props?.city || props?.type) text = "תוצאות החיפוש ";
    if (props?.search) text += " של " + props.search;
    if (props?.city) text += " ב" + props.city;
    if (props?.type) text += " מטיפוס " + props.type;

    return text;
  };

  return (
    <div className=" w_100 p-3 radius3">
      {searchText() && <h3 className="pageTitle searchText">{searchText()}</h3>}
      {props.list.length === 0
        ? ""
        : props.filterBy === undefined
        ? divideArray(3, soryByName(props.list)).map((items, i) => (
            <div
              key={"A" + i}
              className="row radius2 bg-secondary p-2 cursor-off  gap-2 mb-2"
            >
              {items.map((item, j) => (
                <BusinessCard
                  key={"B" + (i * 3 + j)}
                  data={item}
                  isLinkable={true}
                  className={isMobile? '': 'w_33'}
                  idx={i * 3 + j}
                />
              ))}
            </div>
          ))
        : props.filterBy.map(
            (attr) =>
              props.filterFunc(attr, props.list).length != 0 && (
                <div className="w_100 align-items-center radius3">
                  <h2 className="bgc8 p-2 fs_color1 dec-off fw-bold text-center radius5 w_50 pageTitle">
                    {attr}
                  </h2>
                  {divideArray(
                    3,
                    soryByName(props.filterFunc(attr, props.list))
                  ).map((items, i) => (
                    <div
                      key={"A" + i}
                      className="row text-center"
                    >
                      {items.map((item, j) => (
                        <BusinessCard
                          key={"B" + (i * 3 + j)}
                          data={item}
                          isLinkable={true}
                          className="col-lg-4 col-md-4"
                          idx={i * 3 + j}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              )
          )}
    </div>
  );
}
