import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function LiveScore() {
  const params = useParams();
  const { sportname } = params;
  async function fetchLiveScore() {
    const result = await axios.post(
      "https://ashvamedha.onrender.com/sport/getlivescore",
      {
        sportname: sportname.toLowerCase(),
      }
    );
    console.log("result of live score", result);
  }
  useEffect(() => {
    fetchLiveScore();
  }, [params]);
  return <div></div>;
}

export default LiveScore;
