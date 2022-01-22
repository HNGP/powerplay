import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./style.css";
import HostMatchForm from "../../components/HostMatchForm/index.js";
import HostMatchFinal from "../../components/HostMatchFinal/index.js";
import HostMatchTeams from "../../components/HostMatchTeams/index.js";
import MatchnameCard from "../../components/HostmatchCard/matchCard";
import SportsnameCard from "../../components/HostmatchCard/sportsCard";
import OrganisertypeCard from "../../components/HostmatchCard/organisertypeCard";
import { createMatch } from "../../api/api";
import Match from "../Match";

const HostMatch = () => {
  const [stage, setStage] = useState(1);
  const [reqData, setReqData] = useState({});

  const HandleNextStep = (object) => {
    setStage((prevStep) => prevStep + 1);
    setReqData((prevState) => ({
      ...prevState,
      ...object,
    }));
  };

  const hostMatch = async () => {
    setReqData((prevState) => ({
      ...prevState,
      id: nanoid(),
    }));
    const match = await createMatch(reqData);
    if (match) {
      console.log("success");
    }
  };

  const ProcessStep = () => {
    switch (stage) {
      case 1:
        return <MatchnameCard onNextStep={HandleNextStep} />;
        break;
      case 2:
        return <SportsnameCard onNextStep={HandleNextStep} />;
        break;
      case 3:
        return <OrganisertypeCard onNextStep={HandleNextStep} />;
        break;
      case 4:
        return <HostMatchForm onNextStep={HandleNextStep} />;
        break;
      case 5:
        return <HostMatchTeams onNextStep={HandleNextStep} id={1} />;
        break;
      case 6:
        return <HostMatchTeams onNextStep={HandleNextStep} id={2} />;
        break;
      case 7:
        return <HostMatchFinal createMatch={hostMatch} />;
        break;
    }
  };

  return (
    <div>
      <h1 className="headingTitle">HOST A MATCH</h1>
      <p className="headingText">
        Are you an individual/club/organisation wanting to list your in person
        sports event on Powerplay just by filling up this form!
      </p>
      <ProcessStep />
    </div>
  );
};

export default HostMatch;
