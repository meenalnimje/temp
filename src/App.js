import { Route, Routes } from "react-router-dom";

import Cursor from "./components/Cursor/Cursor";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import OurTeam from "./pages/OurTeam/OurTeam";
import PointDetails from "./pages/PointDetails/PointDetails";
import SingleSport from "./pages/SingleSports/SingleSport";
import Sponsors from "./pages/Sponsors/Sponsors";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:sportid" element={<SingleSport />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:collegename" element={<PointDetails />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </div>
  );
}

export default App;
