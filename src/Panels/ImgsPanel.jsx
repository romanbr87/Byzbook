import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/style.css";
import { apiRouteList } from "../utils/api-routes";

export default function ImgsPanel(props) {
  const [imgModal, setImgModal] = useState({ show: false });
  const [myImg, setMyImg] = useState([]);

  const { data, setData } = useFetch(`${apiRouteList.images}imgs`);
  const imgs =
    data?.data.sort((a, b) =>
      a.gsx$refID?.gsx$name?.localeCompare(b.gsx$refID?.gsx$name)
    ) || [];

  return (
    <React.Fragment>
      <div className={props.className} style={props.style}>
        <div className="row">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped table-condensed"
              style={{ backgroundColor: "white" }}
            >
              <caption>
                <h3 className="title text-center">{imgs?.length} תמונות</h3>
              </caption>
              <thead>
                <tr>
                  <th className="text-right" style={{ width: "50px" }}>
                    #
                  </th>
                  <th className="text-right" style={{ width: "250px" }}>
                    תמונה
                  </th>
                  <th className="text-right">שם</th>
                </tr>
              </thead>
              <tbody>
                {imgs?.map((img, i) => (
                  <tr key={"m" + i}>
                    <th className="text-right">{i + 1}</th>
                    <td>
                      <div
                        className="thumbnail"
                        onClick={(e) => setMyImg(img?.gsx$logo)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <img
                          onClick={() => setImgModal({ show: true })}
                          style={{ width: `100%`, objectFit: `cover` }}
                          src={img?.gsx$logo ? img?.gsx$logo : "./x.png"}
                        />
                      </div>
                    </td>

                    <td>
                      <a
                        className="btn1 radius2 p-2 fs_12 ls2  dec-off"
                        href={"/business/" + img?.gsx$refID?._id}
                      >
                        {img?.gsx$refID?.gsx$name}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {imgModal.show && (
        <div className="modal1 p-2 w_100 gap-1 text-center bg-light d-flex flex-column align-items-center justify-content-center">
          <div className="row">
            <button
              onClick={() => setImgModal({ show: false })}
              className="btn2 col-sm"
            >
              X
            </button>
            <img className="col-sm " src={myImg} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
