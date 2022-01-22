import React, { useState, useEffect } from "react";
import "./style.css";
import HostMatchForm from "../../components/HostMatchForm/index.js";
import HostMatchFinal from "../../components/HostMatchFinal/index.js";
import HostMatchTeams from "../../components/HostMatchTeams/index.js";

const HostMatch = () => {
  return (
    <div>
      <h1 className="headingTitle">HOST A MATCH</h1>
      <p className="headingText">
        Are you an individual/club/organisation wanting to list your in person
        sports event on Powerplay just by filling up this form!
      </p>
      {/* <HostMatchForm /> */}
      {/* <HostMatchFinal /> */}
      <HostMatchTeams id={1} />
    </div>
  );
};

export default HostMatch;
