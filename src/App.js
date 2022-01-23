import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import Landing from "./pages/Landing";
import Match from "./pages/Match";
import Matches from "./pages/Matches";
import HostMatch from "./pages/HostMatch";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import { Profile } from "./pages/Profile";

function App() {
  // const Location = useLocation();

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/matches/:matchId" element={<Match />} />
          <Route path="/hostMatch" element={<HostMatch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
