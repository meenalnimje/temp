import "./Hero.scss";

import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [currState, setCurrState] = useState(0);
  const [images, setImages] = useState([]);
  async function fetchSliderImages() {
    const response = await axios.post(
      "https://ashvamedha.onrender.com/upload/",
      {
        folderName: "sliderImg",
      }
    );
    setImages(response.data.result);
  }
  useEffect(() => {
    fetchSliderImages();
  }, []);
  const currStateUrl = images[currState]?.image?.url;
  const bgImageStyle = {
    backgroundImage: `url(${currStateUrl})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    transition: "all ease-in-out 4s",
    objectFit: "cover",
    opacity: "1",
  };
  const goToNext = (currState) => {
    setCurrState(currState);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currState === 5) {
        setCurrState(0);
      } else {
        setCurrState(currState + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currState]);
  return (
    <div className="hero">
      <div className="container">
        <div className="content-hero">
          <div style={bgImageStyle}></div>
          <div className="wrapper three">
            <p>
              <span className="h1">ASHVA</span>
              <span className="h2">MEDHA</span>
            </p>
          </div>
          <div className="description">
            <p className="date">28-29 OCTOBER 2023</p>
            <p className="theme">EMPOWER . ENDURE . EXCEL</p>
            <p className="name">THE ANNUAL SPORTS FEST OF IIT BHUBHANESWAR</p>
            <div className="buttons">
              <div className="btn1">
                <button
                  className="btn-primary"
                  onClick={() => {
                    navigate("/events");
                  }}
                >
                  REGISTER NOW
                </button>
              </div>
              <div className="btn2">
                <button className="btn-secondary">FIXTURES</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-bullet">
          {images.map((image, currState) => (
            <span key={currState} onClick={() => goToNext(currState)}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
