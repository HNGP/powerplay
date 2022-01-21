import { useParams } from "react-router-dom";
import React from "react";

export default function Match() {
  const params = useParams();
  return <h1>Match {params.matchId}</h1>;
}
