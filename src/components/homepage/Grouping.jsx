import React from "react";
import { isBrowser } from "react-device-detect";
export default function Grouping({ filter, setFilter }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className={
          isBrowser ? "col-lg-offset-8 col-md-offset-8 w_40 " : "w_100"
        }
        style={{ marginBottom: "10px" }}
      >
        <div className="form-group form-group-sm text-center p-2 mr-1">
          <label className="bgc1 fs_color1 p-2 fs_15 mt-1 mb-1 w_100 text-center p-2">
            הצג לפי{" "}
          </label>
          <select
            value={!filter.grouping ? "none" : filter.Grouping}
            className="form-control p-2 text-center radius1 "
            onChange={(e) =>
              setFilter((prev) => {
                return {
                  ...prev,
                  grouping: e.target.value,
                };
              })
            }
            style={{ direction: "rtl" }}
          >
            <option value="none">הצג את כל העסקים ביחד</option>
            <option value="alphabetical">לפי סדר אלפבתי</option>
            <option value="categories">לפי קטגוריות</option>
          </select>
        </div>
      </div>
    </div>
  );
}
