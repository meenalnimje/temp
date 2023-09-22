import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PointDetails.scss";
import PointInfo from "../../components/PointInfo/PointInfo";
import { setLoading } from "../../redux/slice/appConfigSlice";
import { useDispatch } from "react-redux";
function PointDetails() {
  const [pointinfo, setPointinfo] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();
  async function fetchdata() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/college/", {
        collegeName: params.collegename,
      });
      setPointinfo(response.data.result.modifiedResult);
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
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
