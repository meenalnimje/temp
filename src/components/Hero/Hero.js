import "./Hero.scss";

import React, { useEffect, useState } from "react";

import badminton1 from "../../assets/demoPhotos/start now/1.png";
import bb1 from "../../assets/demoPhotos/start now/2.png";
import chess5 from "../../assets/demoPhotos/start now/8.png";
import f1 from "../../assets/demoPhotos/start now/6.png";
import tt2 from "../../assets/demoPhotos/start now/5.png";
import { useNavigate } from "react-router-dom";
import vb2 from "../../assets/demoPhotos/start now/7.png";

function Hero() {
  const navigate = useNavigate();
  const [currState, setCurrState] = useState(0);
  const images = [bb1, badminton1, chess5, f1, tt2, vb2];
  const bgImageStyle = {
    backgroundImage: `url(${images[currState]})`,
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
