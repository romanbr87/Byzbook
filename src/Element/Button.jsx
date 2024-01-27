import React from "react";

const Button = ({ icon,onClickHandler, btnText, className, type = "button" }) => {
  return (
    <button
      className={`${className}`}
      onClick={onClickHandler}
      type={type}
    >
      {icon}
      {btnText}
    </button>
  );
};

export default Button;
