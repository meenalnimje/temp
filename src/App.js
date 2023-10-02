import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import OurTeam from "./pages/OurTeam/OurTeam";
import PointDetails from "./pages/PointDetails/PointDetails";
import SingleSport from "./pages/SingleSports/SingleSport";
import SyncLoader from "react-spinners/SyncLoader";
import { useSelector } from "react-redux";

// import ClipLoader from "react-spinners/ClipLoader";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
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
      <div className="style" style={style}>
        <SyncLoader
          color="#030027"
          loading={loading}
          margin={5}
          size={15}
          speedMultiplier={1}
          cssOverride={properties}
        />
      </div>
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
