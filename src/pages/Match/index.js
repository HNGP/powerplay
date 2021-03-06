import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CircleCard from "../../components/CircleCard";
import IconCard from "../../components/IconCard";
import { fetchMatchById, fetchTeamById } from "../../api/api";
import CricketIcon from "../../Image/CricketIcon.png";
import "./style.css";

export default function Match() {
  const params = useParams();
  const [match, setMatch] = useState({});
  const [teams, setTeams] = useState({});

  useEffect(() => {
    const fetchMatch = async () => {
      const matchDetails = await fetchMatchById(params.matchId);
      if (matchDetails) {
        setMatch(matchDetails);
        const teamOneDetail = await fetchTeamById(matchDetails.ateam);
        const teamTwoDetail = await fetchTeamById(matchDetails.bteam);
        if (teamOneDetail && teamTwoDetail) {
          setTeams({
            ateam: teamOneDetail.title,
            bteam: teamTwoDetail.title,
            acapacity: 11 - teamOneDetail.players.length,
            bcapacity: 11 - teamTwoDetail.players.length,
          });
        }
      }
    };

    fetchMatch();
  }, []);

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
          <h1>{match.title}</h1>
          <h3>{match.date}</h3>
          <h3>Venue: {match.venue}</h3>
          <h3>Match format: {match.format}</h3>
          <h3>Organiser: {match.organiser}</h3>
        </div>
      </div>
      <div className="match-description">
        <h3>Description:</h3>
        <h3 className="secondary-header">{match.description}</h3>
      </div>
      <h3 className="competing-teams">Competing Teams</h3>
      <div className="competing-teams-container">
        <IconCard team={match.ateam} />
        <span className="vs">VS</span>
        <IconCard team={match.bteam} />
      </div>
      <div className="competing-teams-info">
        <div>
          <h3>{teams.ateam}</h3>
          <h3 className="secondary-header">
            ({teams.acapacity || 11} spots left)
          </h3>
        </div>
        <div>
          <h3>{teams.bteam}</h3>
          <h3 className="secondary-header">
            ({teams.bcapacity || 11} spots left)
          </h3>
        </div>
      </div>
      <br />
    </>
  );
}
