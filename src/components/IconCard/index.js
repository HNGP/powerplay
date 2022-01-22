import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamCard from "../TeamModal/TeamModal";
import "./style.css";

const IconCard = (props) => {
  const [matchButton, setMatchButton] = useState("");

  useEffect(() => {
    if (props.team) {
      const match = props.team.match(/\b(\w)/g);
      setMatchButton(match.join(""));
    } else {
      setMatchButton("");
    }
  }, [props.team]);

  const params = useParams();
  return (
    <div className="icon-container">
      {" "}
      <TeamCard text={matchButton} match={params.matchId} />
    </div>
  );
};

export default IconCard;
