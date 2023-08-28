import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Sponsors from "./pages/Sponsors/Sponsors";
import SingleSport from "./pages/SingleSports/SingleSport";
import Registration from "./pages/Registration/Registration";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:sportid" element={<SingleSport />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
