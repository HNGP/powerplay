import "./App.css";
import "antd/dist/antd.css";
import TournamentCard from "./components/TournamentCard";
import { useState } from "react";
import "./components/TournamentCard/";
function App() {
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
    <div className="matches">
      {tourny.map((trny) => {
        return (
          <TournamentCard
            name={trny.name}
            sport={trny.sport}
            date={trny.date}
          />
        );
      })}
      ;
    </div>
  );
}

export default App;
