import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Sponsors from "./pages/Sponsors/Sponsors";
import SingleSport from "./pages/SingleSports/SingleSport";
import Registration from "./pages/Registration/Registration";
import PointDetails from "./pages/PointDetails/PointDetails";
import OurTeam from "./pages/OurTeam/OurTeam";
import { useSelector } from "react-redux";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isLoading);
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
      setColor("#4287f5");
    } else {
      setLoading(false);
    }
  }, [isLoading]);
  return (
    <div className="App">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:sportid" element={<SingleSport />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:collegename" element={<PointDetails />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </div>
  );
}

export default App;
