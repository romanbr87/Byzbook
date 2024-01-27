import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ManagerItem = ({ item }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggleState = () => {
    setisOpen((s) => !s);
  };
  return (
    <div className="btn1">
      <Button className="fs_color1" onClick={() => toggleState()}>
        {item?.text}
      </Button>
      {isOpen && <div className="w_100 d-flex gap-2"> {item?.component} </div>}
    </div>
  );
};

export default ManagerItem;
