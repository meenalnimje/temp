import "./PointDetails.scss";

import React, { useEffect, useState } from "react";

import PointInfo from "../../components/PointInfo/PointInfo";
import axios from "axios";
import { setLoading } from "../../redux/appSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PointDetails() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const [pointinfo, setPointinfo] = useState([]);
  const params = useParams();
  async function fetchdata() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/college/", {
        collegeName: params.collegename,
      });
      setPointinfo(response.data.result.modifiedResult);
    } catch (e) {
      console.log("error from point deatils side", e);
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    !isLoading && (
      <div className="pointdetail">
        {pointinfo.map((item, index) => (
          <PointInfo gameInfo={item} serialNo={index} />
        ))}
      </div>
    )
  );
}

export default PointDetails;
