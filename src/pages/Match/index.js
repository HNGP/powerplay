import React from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import TeamCard from "../../components/TeamModal/TeamModal";
import CircleCard from "../../components/CircleCard";
import "./style.css";

export default function Match() {
  const params = useParams();
  return (
    <>
      <Link to={`/matches`} style={{ textDecoration: "none" }}>
        <div className="match-header">
          <BiArrowBack size={24} />
          <h4>BACK TO ALL MATCHES</h4>
        </div>
      </Link>
      <CircleCard />

      <TeamCard match={params.matchId} />
    </>
  );
}
