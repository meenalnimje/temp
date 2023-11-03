import "./PointDetails.scss";

import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
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
      const response = await axios.post(
        "https://ashvamedha.onrender.com/college/",
        {
          collegeName: params.collegename,
        }
      );
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
    <div className="pd">
      <Navbar />
      <div className="main">
        <h2 className="heading-point">
          <span className="h1">POINT</span>
          <span className="h2">INFO.</span>
        </h2>
        {!isLoading && (
          <div className="pointdetail">
            {pointinfo.map((item, index) => (
              <PointInfo gameInfo={item} serialNo={index} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PointDetails;
