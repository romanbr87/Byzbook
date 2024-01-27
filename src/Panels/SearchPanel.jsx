import React, { useEffect, useRef } from "react";
import { isBrowser } from "react-device-detect";
import { isEqual } from "lodash";
import { FaSearch } from "react-icons/fa";
export default function SearchPanel({
  cities,
  types,
  filter,
  setFilter,
  handleSubmit,
}) {
  const searchTextRef = useRef();
  const cityRef = useRef(!cities ? {} : cities[0]);
  const typeRef = useRef(!types ? {} : types[0]);

  const checkCityRef = useRef(false);
  const checkTypeRef = useRef(false);

  const setParams = (e) => {
    //
    let data = {
      ...(checkTypeRef.current.checked && { type: typeRef.current.value }),
      ...(checkCityRef.current.checked && {
        city: cityRef.current.value
          ? cityRef.current.value
          : !cities
          ? {}
          : cities[0],
      }),
      searchText: searchTextRef.current.value,
    };

    if (
      !checkTypeRef.current.checked &&
      !checkCityRef.current.checked &&
      searchTextRef.current.value.trim() === ""
    ) {
      e.preventDefault();
      alert("לא נבחרו פרמטרים לחיפוש");
      return;
    }

    console.clear();

    var newFilterData = {};
    Object.assign(newFilterData, filter);
    delete newFilterData.type;
    delete newFilterData.city;
    Object.assign(newFilterData, data);

    if (isEqual(newFilterData, filter)) {
      alert("החיפוש זהה לחיפוש הקודם");
      e.preventDefault();
      return;
    }

    setFilter(() => newFilterData);
  };

  useEffect(() => {
    setFilter((prev) => {
      return {
        ...prev,
        searchText: "",
      };
    });
  }, []);

  if (!types) return <></>;
  return (
    <div className="d-flex flex-column align-items-center">
      <label
        className={`bgc1 p-2 fs_color1 fs_21 ls4  radius1 mb-1 p-2 text-center 
      ${isBrowser ? "w_50" : "w_90"}`}
      >
        חיפוש עסקים
      </label>
      <div className="d-flex align-items-center justify-content-center text-center">
        <form
          className={
            isBrowser
              ? "row"
              : "d-flex align-items-center justify-content-center text-center"
          }
          role="search"
          onSubmit={handleSubmit}
        >
          <div className="row w_100  gap-1 mb-1  align-items-center  justify-content-center text-center">
            <div className="col-sm">
              <label className="p-2 fs_18 mb-1 bgc1 w_100 text-center fs_color1">
                חיפוש לפי סוג עסק
              </label>
              <div
                className="form-group input-group form-group-sm"
                style={{ direction: "ltr" }}
              >
                <select className="form-control p-2" ref={typeRef}>
                  {types?.map((current) => {
                    return (
                      <option key={current?.gsx$type} value={current?._id}>
                        {current?.gsx$type}
                      </option>
                    );
                  })}
                </select>

                <span className="input-group-addon bg-light p-2 ">
                  <input
                    className="form-check-input"
                    style={{ marginLeft: "5px", verticalAlign: "middle" }}
                    type="checkbox"
                    ref={checkTypeRef}
                  />
                </span>
              </div>
            </div>

            <div className="col-sm">
              <label className="p-2 fs_18 mb-1 bgc1 w_100 text-center fs_color1">
                חיפוש לפי יישוב
              </label>
              <div
                className="form-group input-group form-group-sm"
                style={{ direction: "ltr" }}
              >
                <select className="form-control p-2" ref={cityRef}>
                  {cities?.map((city) => {
                    return (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    );
                  })}
                </select>
                <span className="input-group-addon bg-light p-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    style={{ marginLeft: "5px", verticalAlign: "middle" }}
                    ref={checkCityRef}
                  />
                </span>
              </div>
            </div>

            <div className="col-sm ">
              <label className="p-2 fs_18 bgc1 mb-1 w_100 text-center fs_color1">
                טקסט חופשי
              </label>
              <div
                className="form-group input-group input-group-sm"
                style={{ direction: "ltr" }}
              >
                <div className="input-group-btn">
                  <button
                    className=" p-2 btn1"
                    type="submit"
                    title="לחפש עסקים"
                    onClick={setParams}
                  >
                    <FaSearch size={27} />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control input-sm p-2"
                  placeholder="חיפוש"
                  name="חיפוש"
                  ref={searchTextRef}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
