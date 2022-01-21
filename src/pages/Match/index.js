import React from "react";
import { useParams } from "react-router-dom";

export default function Match() {
  const params = useParams();
  return <h1>Match {params.matchId}</h1>;
}
