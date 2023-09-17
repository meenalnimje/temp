import React, { useEffect, useState } from "react";
import badminton1 from "../../assets/demoPhotos/sports/badminton/badminton1.JPG";
import bb1 from "../../assets/demoPhotos/sports/bb/bb1.JPG";
import chess5 from "../../assets/demoPhotos/sports/chess/chess5.JPG";
import f1 from "../../assets/demoPhotos/sports/fb/f1.JPG";
import tt2 from "../../assets/demoPhotos/sports/tt/tt2.JPG";
import vb2 from "../../assets/demoPhotos/sports/vb/vb2.JPG";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const [currState, setCurrState] = useState(0);
  const images = [badminton1, bb1, chess5, f1, tt2, vb2];
  const bgImageStyle = {
    backgroundImage: `url(${images[currState]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    transition: "all ease-in-out 2s",
    objectFit: "cover",
    opacity: "0.8",
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
          <div className="title">
            <span className="title1">ASHVA</span>
            <span className="title2">MEDHA-23</span>
          </div>
          <div className="description">
            <p className="theme">GET YOUR GAME ON</p>
            <p className="date">OCTOBER 28 - OCTOBER 29</p>
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
