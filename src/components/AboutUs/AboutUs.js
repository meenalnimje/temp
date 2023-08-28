import React from "react";
import { Parallax, Background } from "react-parallax";
import aboutus from "../../assets/demoPhotos/aboutus.jpg";
import "./AboutUs.scss";
function AboutUs() {
  return (
    <div className="AboutUs">
      <Parallax bgImage={aboutus} blur={{ max: 15, min: -10 }}>
        <h1 className="title">About Us</h1>
        <p className="about-fest"></p>
        <h2>Meet Our Team</h2>
        <p className="about-team"></p>
        <div style={{ height: "100vh" }} />
      </Parallax>
    </div>
  );
}

export default AboutUs;
