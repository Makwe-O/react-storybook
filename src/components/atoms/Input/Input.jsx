import React from "react";
import Search from "../../assets/search.svg";

const Input = ({ type, placeholder, value }) => {
  return (
    <span className="input__container">
      <span className="input__icon">
        <img src={Search} alt="icon" width="10px" />
      </span>
      <input
        className="input__inner"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </span>
  );
};

export default Input;
