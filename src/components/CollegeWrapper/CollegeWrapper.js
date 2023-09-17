import React, { useEffect, useState } from "react";
import axios from "axios";
function CollegeWrapper(props) {
  //   const [collegeSportDetails, setCollegeSportDetails] = useState([]);
  //   async function fetchdata() {
  //     const detail = await axios.post("/college/", {
  //       collegeName: props.collegeInfo.collegeName,
  //     });
  //     setCollegeSportDetails(detail.data.result.modifiedResult);
  //   }
  const [collegeScore, setCollegeScore] = useState(0);
  async function fetchScore() {
    const totalScore = await axios.post("/college/score", {
      collegeName: props.collegeInfo.collegeName,
    });
    setCollegeScore(totalScore.data.result.score);
  }
  useEffect(() => {
    // fetchdata();
    fetchScore();
  }, []);
  return (
    <div className="collegewrapper">
      <div>
        <div className="serial-no">1</div>
        <div className="collegename">{props.collegeInfo.displayName}</div>
        <div className="score">{collegeScore}</div>
      </div>
    </div>
  );
}

export default CollegeWrapper;
