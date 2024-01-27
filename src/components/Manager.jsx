import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { managerPanelList } from "../utils/content/managerPanelList";
import ManagerItem from "../Panels/ManagerItem";
const Manager = () => {
  const nav = useNavigate();
  const user = useSelector((state) => state.user);


  useEffect(() => {
    if (user.status !== "ready") nav("/");
  }, [user]);



  return (
    <div className="d-flex flex-column gap-3 mb-3">
      {managerPanelList?.map((item, index) => {
   

        return(
       <ManagerItem item={item} key={index}/>
      )})}
    </div>
  );
};

export default Manager;
