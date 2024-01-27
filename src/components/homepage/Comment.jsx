import React from "react";
import { Col } from "react-bootstrap";
import { AiTwotonePhone } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const Comment = ({ gsx$comment }) => {
  return (
    <div className="d-flex flex-column radius3 ps-3 pe-3 pt-2" title="הערות">
      <span className="mt-1 dec-off d-flex bgc1 fs_color1 p-2 text-center">
        <span>
          <FaRegCommentDots size={21} className="" />
        </span>
        <span className="fs_15 d-flex pe-2">{gsx$comment}</span>
      </span>
    </div>
  );
};

export default Comment;
