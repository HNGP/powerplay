import React, { useState, useEffect } from "react";
import "./style.css";
import MatchnameCard from "../../components/HostmatchCard/matchCard";
import SportsnameCard from "../../components/HostmatchCard/sportsCard";
import OrganisertypeCard from "../../components/HostmatchCard/organisertypeCard";

const HostMatch = () => {
  return (
    <div>
      <h1>HOST MATCH</h1>
      {/* <MatchnameCard />
      <br />
      <SportsnameCard /> */}
      <OrganisertypeCard />
    </div>
  );
};

export default HostMatch;
