import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TournamentCard from "./components/TournamentCard";
import Navigation from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navigation />
      <TournamentCard />
    </div>
  );
}

export default App;
