import React from "react";
import "./style.css";

const CircleCard = (props) => {
  return (
    <div className="circle-container">
      <img src={props.path} alt="icon" />
    </div>
  );
};

export default CircleCard;
