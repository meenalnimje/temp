import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Sponsors from "./pages/Sponsors/Sponsors";
import SingleSport from "./pages/SingleSports/SingleSport";
import Registration from "./pages/Registration/Registration";
import PointDetails from "./pages/PointDetails/PointDetails";
import Team from "./pages/Team/Team";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:sportid" element={<SingleSport />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:collegename" element={<PointDetails />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/register/:sportname" element={<Registration />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
