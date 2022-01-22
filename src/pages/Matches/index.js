import React, { useState } from "react";
import TournamentCard from "../../components/TournamentCard";
import "./style.css";

export default function Matches() {
  const [tourny, setTourny] = useState([
    {
      id: "1",
      name: "RFCC Women’s Cricket Match",
      sport: "Cricket",
      date: "27th Feb 2021",
    },
    {
      id: "2",
      name: "RFCC Women’s Cricket Match",
      sport: "Cricket",
      date: "27th Feb 2021",
    },
    {
      id: "3",
      name: "RFCC Women’s Cricket Match",
      sport: "Cricket",
      date: "27th Feb 2021",
    },
    {
      id: "4",
      name: "RFCC Women’s Cricket Match",
      sport: "Cricket",
      date: "27th Feb 2021",
    },
    {
      id: "5",
      name: "RFCC Women’s Cricket Match",
      sport: "Cricket",
      date: "27th Feb 2021",
    },
    {
      id: "6",
      name: "RFCC Women’s Cricket Match",
      sport: "Cricket",
      date: "27th Feb 2021",
    },
  ]);
  return (
    <div>
      <div className="header">
        <h1>MATCHES</h1>
        <h3>Upcoming events in your area</h3>
      </div>
      <div className="matches">
        {tourny.map((trny) => (
          <TournamentCard
            name={trny.name}
            sport={trny.sport}
            date={trny.date}
          />
        ))}
        ;
      </div>
    </div>
  );
}
