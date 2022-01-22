import React from "react";
import { useParams } from "react-router-dom";
import TeamCard from "../TeamModal/TeamModal";
import "./style.css";

const IconCard = (props) => {
  const match = props.team.match(/\b(\w)/g);
  const teamInitial = match.join("");
  const params = useParams();
  return (
    <div className="icon-container">
      {" "}
      <TeamCard text={teamInitial} match={params.matchId} />
    </div>
  );
};

export default IconCard;
