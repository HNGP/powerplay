import React from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CircleCard from "../../components/CircleCard";
import IconCard from "../../components/IconCard";
import CricketIcon from "../../Image/CricketIcon.png";
import "./style.css";

export default function Match() {
  const params = useParams();
  return (
    <>
      <Link to={`/matches`} style={{ textDecoration: "none" }}>
        <div className="match-page-header">
          <BiArrowBack size={24} />
          <h4>BACK TO ALL MATCHES</h4>
        </div>
      </Link>
      <div className="match-header">
        <CircleCard path={CricketIcon} />
        <div className="match-header-info">
          <h1>Galaxy Open Cricket Match</h1>
          <h3>28th February 2022</h3>
          <h3>Venue: SVD Maidan</h3>
          <h3>Match format: 10 overs, tennis ball</h3>
          <h3>Organiser: Gaurav Pandey</h3>
        </div>
      </div>
      <div className="match-description">
        <h3>Description:</h3>
        <h3 className="secondary-header">
          Hosted by the RWA of Galaxy Apartments, this is an open cricket match
          for the residents of Mumbai.{" "}
        </h3>
      </div>
      <h3 className="competing-teams">Competing Teams</h3>
      <div className="competing-teams-container">
        <IconCard team={"Malad Kings"} />
        <span className="vs">VS</span>
        <IconCard team={"Marine Warriors"} />
      </div>
      <div className="competing-teams-info">
        <div>
          <h3>Malad Kings</h3>
          <h3 className="secondary-header">(4 spots left)</h3>
        </div>
        <div>
          <h3>Marine Warriors</h3>
          <h3 className="secondary-header">(4 spots left)</h3>
        </div>
      </div>
      <br />
    </>
  );
}
