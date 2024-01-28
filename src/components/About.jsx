import React, { useState } from "react";
import { isBrowser } from "react-device-detect";

import BusinessCard from "../Panels/BusinessCard";
import { getPost } from "../api";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../styles/style.css";

export default function About() {
  const { data } = useFetch("/about");
  const [isLoaded, setIsLoaded] = useState(false);

  const [business, setBusiness] = useState();
  const getBusiness = (e) => {
    e.preventDefault();

    getPost("/about")
      .then((business) => setBusiness(business.business))
      .catch((err) => alert("לא ניתן לקבל עסק חדש"));

    return true;
  };

  useEffect(() => {
    if (data) {
      setBusiness(data.business);
      setIsLoaded(true);
    }
  }, [data]);

  if (!isLoaded || !data) return <React.Fragment></React.Fragment>;

  return (
    <React.Fragment>
      <div
        className={isBrowser ? "container" : "container-fluid"}
        style={{ paddingBottom: "15em", paddingTop: "10px" }}
      >
        <div className="row typeEditor radius2">
          <div className="col-lg-6 col-md-6 radius2 mb-4">
            <div
              className={`${
                isBrowser ? "p-5" : ""
              } jumbotron d-flex flex-column gap-2 radius1  bg2  fs_color1`}
            >
              <h3
                className={`${
                  isBrowser ? "ls3" : "mt-2 ls5"
                } title fs_27 p-2  bgc2 radius2`}
                id="title"
                style={{
                  marginTop: "-30px",
                  textAlign: "center",
                }}
              >
                אודות ביזבוק
              </h3>
              <div className="bgc-custom1 fs_18 p-3 radius7 fs_color11">
                <p className="ls1 text-center ">
                  ברוכים הבאים לאתר ביזבוק, האתר הכי נפוץ וגדול לחיפוש עסקים
                  ברשת. באתר זה תוכלו לקבל מידע ומקיף ומעודכן ככל האפשר על
                  העסקים וכן תוכלו לעדכן בעצמכם מידע אם במקרה מצאתם מידע שאיננו
                  מעודכן.
                </p>
                <p className="ls1 text-center ">
                  האתר נותן שירות לכלל העסקים שמעוניינים לפרסם את עצמם באתר אך
                  הדגש הוא על עסקים זעירים עד בינוניים שלא פעם מעדיפים להשקיע
                  מזמנם לפרסום ברשתות החברתיות
                </p>
                <p className="ls1 text-center ">
                  אתם רואים פה בדף דוגמית של כרטיסיית עסק. בלחיצה על הכותרת של
                  העסק, תוכלו להגיע לדף העסק
                </p>
              </div>
            </div>
          </div>

          <div className={"col-lg-4 col-md-6 mt-3"}>
            <span
              className="btn btn-sm glyphicon glyphicon-refresh"
              style={{ top: "3px" }}
              onClick={getBusiness}
            />
            <BusinessCard
              data={business}
              isLinkable={true}
              style={{ marginTop: "-30px" }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
