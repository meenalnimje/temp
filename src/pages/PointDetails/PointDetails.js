import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PointDetails.scss";
import PointInfo from "../../components/PointInfo/PointInfo";
function PointDetails() {
  const [pointinfo, setPointinfo] = useState([]);
  const params = useParams();
  async function fetchdata() {
    try {
      const response = await axios.post("/college/", {
        collegeName: params.collegename,
      });
      setPointinfo(response.data.result.modifiedResult);
    } catch (e) {
      console.log("error from point deatils side", e);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="pointdetail">
      {pointinfo.map((item, index) => (
        <PointInfo gameInfo={item} serialNo={index} />
      ))}
    </div>
  );
}

export default PointDetails;
