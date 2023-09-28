import React, { useEffect, useState } from "react";
import badminton1 from "../../assets/finalPhotos/badminton1.JPG";
import bb1 from "../../assets/finalPhotos/bb1.JPG";
import chess5 from "../../assets/finalPhotos/chess5.JPG";
import f1 from "../../assets/finalPhotos/f2.JPG";
import tt2 from "../../assets/finalPhotos/tt1.jpg";
import vb2 from "../../assets/demoPhotos/demo1.jpg";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const [currState, setCurrState] = useState(0);
  const images = [bb1, badminton1, chess5, f1, tt2, vb2];
  const bgImageStyle = {
    backgroundImage: `url(${images[currState]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    transition: "all ease-in-out 2s",
    objectFit: "contain",
    opacity: "1",
    filter: " blur(2px)",
    webkitFilter: "blur(1px)",
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
            <h3>
              <span className="h1">ASHVA</span>
              <span className="h2">MEDHA-23</span>
            </h3>
          </div>
          <div className="description">
            <p className="theme">GET YOUR GAME ON</p>
            <p className="date">28-29 OCTOBER 2023</p>
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
