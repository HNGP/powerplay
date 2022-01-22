import React from "react";
import TeamCard from "../TeamModal/TeamModal";
import "./style.css";

const IconCard = (props) => {
  return (
    <div className="icon-container">
      <TeamCard text={props.team} match={""} />
    </div>
  );
};

export default IconCard;
