import React, { useState } from "react";
import { fetchData, serverURL, soryByAtrr } from "../api";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import SearchPanel from "../Panels/SearchPanel";
import useCities from "../hooks/useCities";
import { apiRouteList } from "../utils/api-routes";

const BusinessPagePanel = ({className}) => {
  const [filter, setFilter] = useState({});
  const [businesses, setBusinesses] = useState([]);

  const data = useFetch(`/`);
  const types = soryByAtrr(data?.data?.types ?? [], "gsx$type");
  const nav = useNavigate();
  const { cities } = useCities();

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

  return (
    <div className={className}>
      <SearchPanel
        cities={cities}
        types={types}
        filter={filter}
        setFilter={setFilter}
        handleSubmit={handleSubmit}
      />
      {businesses?.map((busitem, busIndex) => {
        return (
          <div
            onClick={() => nav(`/edit-business/${busitem._id}`)}
            key={busIndex}
            className="bg1 cursor text-center hover1 fs_color1 p-2"
          >
            {busitem.gsx$name}
          </div>
        );
      })}
    </div>
  );
};

export default BusinessPagePanel;
