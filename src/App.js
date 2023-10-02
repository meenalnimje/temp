import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import OurTeam from "./pages/OurTeam/OurTeam";
import PointDetails from "./pages/PointDetails/PointDetails";
import SingleSport from "./pages/SingleSports/SingleSport";
import { useSelector } from "react-redux";

const properties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);
  return (
    <div className="App">
      <ClipLoader
        color="white"
        loading={loading}
        cssOverride={properties}
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
        <Route path="/team" element={<OurTeam />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
