import React from "react";
import "../styles/style.css";
import "../styles/bootstrap-social.css";
import { isBrowser } from "react-device-detect";

const whatsappURL = isBrowser ? "https://web.whatsapp.com/" : "whatsapp://";

export default function SiteBtnPanel(props) {
  const emptyVal = (val) => val == undefined || val == null || val.trim() == "";
  const col = 12 / Object.values(props).filter((e) => e != null).length;
  const colClassName =
    "buttonDiv col-lg-" +
    col +
    " col-md-" +
    col +
    " col-ms-" +
    col +
    " col-xs-" +
    col;

  return (
    <div className="d-flex align-items-center justify-content-center gap-1">
      {props.gsx$website && (
        <div className="col-s">
          <a
            title="אתר"
            href={
              emptyVal(props.gsx$website)
                ? "javascript:void(0)"
                : props.gsx$website
            }
            className="btn btn-social-icon btn-facebook"
          >
            <span className=" card hover1 fa fa-fw fa-globe"></span>
          </a>
        </div>
      )}
      {props.gsx$facebook && (
        <div className="col-s">
          <a
            title="דף פייסבוק"
            href={
              emptyVal(props.gsx$facebook)
                ? "javascript:void(0)"
                : props.gsx$facebook
            }
            className="btn btn-social-icon btn-facebook"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span className=" card fa fa-fw fa-facebook"></span>
          </a>
        </div>
      )}
      {props.gsx$instagram && (
        <div className="col-s">
          <a
            title="דף אינסטגרם"
            href={
              emptyVal(props.gsx$instagram)
                ? "javascript:void(0)"
                : props.gsx$instagram
            }
            className="btn btn-social-icon btn-instagram"
          >
            <span className=" card fa fa-fw fa-instagram"></span>
          </a>
        </div>
      )}
      {props.gsx$whatsapp && (
        <div className="col-s">
          <a
            title="ווטסאפ"
            href={
              emptyVal(props.gsx$whatsapp)
                ? "javascript:void(0)"
                : whatsappURL + "send?phone=+972" + props.gsx$whatsapp
            }
            className="btn btn-social-icon btn-instagram"
            style={{ backgroundColor: "#06d755" }}
          >
            <span className="fa fa-fw fa-whatsapp"></span>
          </a>
        </div>
      )}
    </div>
  );
}
