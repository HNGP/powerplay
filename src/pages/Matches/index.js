import React, { useState, useEffect } from "react";
import TournamentCard from "../../components/TournamentCard";
import { fetchMatches } from "../../api/api";
import "./style.css";

export default function Matches() {
  const [tourny, setTourny] = useState([]);
  useEffect(() => {
    const getMatches = async () => {
      const matches = await fetchMatches();
      if (matches) setTourny(matches);
    };
    getMatches();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>MATCHES</h1>
        <h3>Upcoming events in your area</h3>
      </div>
      <div className="matches">
        {tourny.map((trny) => (
          <TournamentCard
            name={trny.title}
            sport={trny.sport}
            date={trny.date}
          />
        ))}
      </div>
    </div>
  );
}
