import React from "react";
import "./style.css";

const TournamentCard = (props) => {
  return (
    <div className="tourney">
      <h1>{props.name}</h1>
      <h2>{props.sport}</h2>
      <h3>{props.date}</h3>
    </div>
  );
};

export default TournamentCard;
