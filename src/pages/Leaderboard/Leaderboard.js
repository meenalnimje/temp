import "./Leaderboard.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CollegeWrapper from "../../components/CollegeWrapper/CollegeWrapper";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { setLoading } from "../../redux/appSlice";

function Leaderboard() {
  const [collegeScore, setCollegeScore] = useState([]);
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();
  const collegeInfo = [
    {
      collegeName: "niser",
      displayName: "NISER",
      collegeLogo: "",
    },
    {
      collegeName: "iitbbs",
      displayName: "IIT BBS",
      collegeLogo: "",
    },
    {
      collegeName: "bjb",
      displayName: "B.J.B",
      collegeLogo: "",
    },
    {
      collegeName: "bgu",
      displayName: "B.G.U",
      collegeLogo: "",
    },
    {
      collegeName: "centurion",
      displayName: "CENTURION",
      collegeLogo: "",
    },
    {
      collegeName: "aiims",
      displayName: "AIIMS",
      collegeLogo: "",
    },

    {
      collegeName: "cvraman",
      displayName: "CVRAMAN",
      collegeLogo: "",
    },
    {
      collegeName: "outr",
      displayName: "OUTR",
      collegeLogo: "",
    },
    {
      collegeName: "silicon",
      displayName: "SILICON",
      collegeLogo: "",
    },
  ];
  async function fetchScore() {
    try {
      dispatch(setLoading(true));
      const ticketInfos = collegeInfo.map((item) =>
        axios.post("https://ashvamedha.onrender.com/college/score", {
          collegeName: item.collegeName,
        })
      );
      const infos = await Promise.all(ticketInfos);
      const array = infos.map((item) => (item = item.data.result));
      const sortedArray = array.sort(function (a, b) {
        return b[0] - a[0];
      });
      setCollegeScore(sortedArray);
    } catch (e) {
      console.log("error from leaderboard side", e);
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchScore();
  }, []);
  return (
    <div>
      <Navbar />
      {!isLoading && (
        <div className="leaderboard">
          <div className="heading">
            <h1 className="text">POINTS TABLE</h1>
          </div>
          <div className="content">
            {collegeScore.map((item, index) => (
              <CollegeWrapper collegeInfo={item} serialNo={index} />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Leaderboard;
