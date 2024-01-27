import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Comments from "../Panels/Comments";
import { useEffect } from "react";
import { apiRouteList } from "../utils/api-routes";
import { detailsContentFields } from "../utils/content/detailsContentFields";
const SingleBusinessPage = () => {
  const { _id } = useParams();
  const { data } = useFetch(`${apiRouteList.business}business/${_id}`);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const {
    gsx$desc,
  } = !data
    ? {
        gsx$name: "",
        gsx$logo: "",
        gsx$desc: "",
        gsx$worktime: [],
        gsx$website: "",
        gsx$facebook: "",
        gsx$instagram: "",
      }
    : data.data;

  return (
    <>
      <div className="bg1 d-flex  gap-2 flex-column p-2 align-items-center">
        {detailsContentFields?.map((fieldItem, fieldIndex) => {
          if (fieldItem.sign === `desc`)
            return <div className="bgc2 p-2">{gsx$desc}</div>;
          return <fieldItem.component data={data?.data} key={fieldIndex} />;
        })}

        <Comments
          className="bgc1 w_80 p-2 radius1"
          comments={data?.comments}
          business={data?.data}
        />
      </div>
    </>
  );
};

export default SingleBusinessPage;
