import React, { useState, useEffect } from "react";
import axios from "axios";
function PointInfo(props) {
  const [collegePoints, setCollegePoints] = useState([]);
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
      collegeName: "ict",
      displayName: "I.C.T",
      collegeLogo: "",
    },
    {
      collegeName: "igit",
      displayName: "I.G.I.T",
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
      collegeName: "iiit",
      displayName: "IIIT",
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
  async function fetchdata() {
    // const response = await axios.post("/college/", {
    //   collegeName: "niser",
    // });
    const collegePointTable = await collegeInfo.map((element) =>
      axios.post("/college/", { collegeName: element.collegeName })
    );
    const infos = await Promise.all(collegePointTable);
    const collegeDetails = infos.map((element) => element.data);
    setCollegePoints(collegeDetails);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="pointinfo">
      <div className="content">
        <div className="matchname">
          <span>match1</span>
        </div>
        <div className="oppenent-name">
          <h2>IIT BBS</h2>
        </div>
        <div className="sportname">volleyball</div>
        <div className="points">
          <span>100</span>
        </div>
      </div>
    </div>
  );
}

export default PointInfo;
