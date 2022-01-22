import React, { useState, useEffect } from "react";
import "./style.css";
import HostMatchForm from "../../components/HostMatchForm/index.js";
import HostMatchFinal from "../../components/HostMatchFinal/index.js";
import HostMatchTeams from "../../components/HostMatchTeams/index.js";
import MatchnameCard from "../../components/HostmatchCard/matchCard";
import SportsnameCard from "../../components/HostmatchCard/sportsCard";
import OrganisertypeCard from "../../components/HostmatchCard/organisertypeCard";


const HostMatch = () => {
  return (
    <div className="hero-host-match">
      <h1>HOST A MATCH</h1>
      <p>
        Are you an individual/club/organisation wanting to list your in person
        sports event on Powerplay just by filling up this form!
      </p>
    </div>
  );
};

export default HostMatch;
